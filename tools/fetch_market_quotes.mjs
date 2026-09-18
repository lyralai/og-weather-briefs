#!/usr/bin/env node
// fetch_market_quotes.mjs — delayed quotes for WTI / Brent / Henry Hub
// for the Weather × Markets page (OVERNIGHT BOARD block).
//
// Primary: Yahoo Finance chart API (delayed) — needs a normal browser User-Agent.
//   GET https://query1.finance.yahoo.com/v8/finance/chart/CL=F?interval=1d&range=5d
//   Parse meta.regularMarketPrice + meta.chartPreviousClose. Retries alternate
//   query1/query2 hosts (Yahoo throttles bursts with 429s).
// Fallback: Stooq CSV snapshot — GET https://stooq.com/q/l/?s=cl.f&f=sd2t2ohlcv&h&e=csv
//   (symbols cl.f / cb.f / ng.f). Snapshot carries no previous close, so chgPct
//   is null in fallback mode. NOTE: as of 2026-09-18 stooq /q/l/ returns
//   "page does not exist" for all symbols from this host — kept as best-effort.
//
// Output: <script>/../pub/market/quotes.json (override: --out PATH)
//   { asOf, source, quotes: [{sym, label, price, chgPct}] }
// asOf = ISO timestamp of the newest regularMarketTime across quotes (the quote
// vintage, not the wall clock). Fails hard (exit 1, no write) unless all three
// instruments return finite prices — a partial board is worse than no board.
//
// Usage: node fetch_market_quotes.mjs [--out <path>]

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));

// Normal browser UA — Yahoo 429s the default node/fetch UA.
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";

const INSTRUMENTS = [
  { sym: "WTI",    label: "WTI crude (NYMEX front month)",        yahoo: "CL=F", stooq: "cl.f" },
  { sym: "Brent",  label: "Brent crude (ICE front month)",        yahoo: "BZ=F", stooq: "cb.f" }, // stooq Brent = cb.f (verified dead from this host either way)
  { sym: "HH",     label: "Henry Hub nat gas (NYMEX front month)", yahoo: "NG=F", stooq: "ng.f" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchYahoo(inst) {
  const sym = encodeURIComponent(inst.yahoo);
  // query1 first; retry flips hosts (Yahoo rate-limits per host in bursts).
  const hosts = ["query1.finance.yahoo.com", "query2.finance.yahoo.com"];
  let lastErr;
  for (let attempt = 0; attempt < 4; attempt++) {
    const host = hosts[attempt % hosts.length];
    const url = `https://${host}/v8/finance/chart/${sym}?interval=1d&range=5d`;
    try {
      const res = await fetch(url, {
        headers: { "user-agent": UA, accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (res.status === 429 || res.status === 503) throw new Error(`HTTP ${res.status} (throttled)`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      const m = j?.chart?.result?.[0]?.meta;
      const price = m?.regularMarketPrice;
      const prev = m?.chartPreviousClose ?? m?.previousClose;
      const t = m?.regularMarketTime; // seconds
      if (!Number.isFinite(price)) throw new Error("no regularMarketPrice in response");
      const chgPct = Number.isFinite(prev) && prev !== 0 ? ((price - prev) / prev) * 100 : null;
      return {
        price,
        chgPct: chgPct === null ? null : Math.round(chgPct * 100) / 100,
        marketTime: Number.isFinite(t) ? t * 1000 : null,
      };
    } catch (e) {
      lastErr = e;
      await sleep(1200 * (attempt + 1));
    }
  }
  throw new Error(`yahoo ${inst.yahoo}: ${lastErr.message} after 4 attempts`);
}

// Stooq snapshot CSV: Symbol,Date,Time,Open,High,Low,Close,Volume
async function fetchStooq(inst) {
  const url = `https://stooq.com/q/l/?s=${inst.stooq}&f=sd2t2ohlcv&h&e=csv`;
  const res = await fetch(url, {
    headers: { "user-agent": UA },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  if (!/^Symbol,/i.test(text.trim())) throw new Error(`not a CSV quote (endpoint blocked or moved)`);
  const row = text.trim().split(/\r?\n/)[1]?.split(",");
  const price = Number(row?.[6]);
  if (!Number.isFinite(price) || price <= 0) throw new Error(`no close parsed for ${inst.stooq}`);
  return { price, chgPct: null, marketTime: null }; // snapshot has no prev close
}

function parseArgs(argv) {
  const out = { out: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) out.out = argv[++i];
  }
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outPath = resolve(args.out || join(SCRIPT_DIR, "..", "pub", "market", "quotes.json"));

  // Whole-run source label: yahoo if every quote came from yahoo, stooq if every
  // quote came from stooq, else "mixed".
  const results = [];
  const srcs = new Set();
  for (const inst of INSTRUMENTS) {
    let r, src;
    try {
      r = await fetchYahoo(inst);
      src = "yahoo";
    } catch (yahooErr) {
      console.error(`${inst.sym}: yahoo failed (${yahooErr.message}) — trying stooq ${inst.stooq}`);
      try {
        r = await fetchStooq(inst);
        src = "stooq";
      } catch (stooqErr) {
        console.error(`${inst.sym}: stooq also failed (${stooqErr.message})`);
        throw new Error(`${inst.sym}: no source produced a quote — refusing to write a partial board`);
      }
    }
    srcs.add(src);
    results.push({ inst, ...r, src });
    await sleep(700); // stay under Yahoo's burst limiter
  }

  const asOfMs = Math.max(...results.map((r) => r.marketTime ?? 0).filter(Boolean), 0);
  const source = srcs.size === 1 ? [...srcs][0] : "mixed";
  const payload = {
    asOf: asOfMs ? new Date(asOfMs).toISOString() : new Date().toISOString(),
    source,
    quotes: results.map(({ inst, price, chgPct }) => ({
      sym: inst.sym,
      label: inst.label,
      price: Math.round(price * 1000) / 1000,
      chgPct,
    })),
  };

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8");

  const line = (q) =>
    `${q.sym.padEnd(6)} $${q.price.toFixed(q.price >= 10 ? 2 : 3).padStart(8)}  chg ${
      q.chgPct === null ? "  n/a" : (q.chgPct > 0 ? "+" : "") + q.chgPct.toFixed(2) + "%"
    }`;
  console.log(`source: ${source} · asOf ${payload.asOf}`);
  for (const q of payload.quotes) console.log(line(q));
  console.log(`wrote ${outPath}`);
}

main().catch((e) => {
  console.error(`fetch_market_quotes: ${e.message}`);
  process.exit(1);
});
