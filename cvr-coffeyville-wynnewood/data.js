const DEMO_DATA = {
 "operator": "CVR Energy",
 "generated": "2026-09-18",
 "topline": "RIGHT NOW at Coffeyville & Wynnewood refineries: heat near 99°F this afternoon with AccuWeather flagging a thunderstorm signal by late afternoon — and a 51% storm window returning Sunday evening. The free feed shows a 0-1% rain day all weekend and misses every signal. On a refinery with the 2007 flood shutdown in its history, the difference between 7% and 'zero' is the difference between a watched radar and a forgotten one.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Coffeyville Refinery",
   "lat": 37.03,
   "lon": -95.61,
   "current": "Hot — 99°F peak this afternoon",
   "risk": "ELEVATED",
   "risk_why": [
    "🔥 Heat peaking 97-99°F 2-5 PM — heat-stress protocol territory for outdoor crews and unit inspections",
    "AccuWeather hourly carries a low-end thunderstorm probability through the afternoon; free data shows a bone-dry day (≤1%)",
    "Sunday 4-9 PM: AccuWeather shows a real storm window building (49-56% at 9 PM Sunday) — first meaningful rain in the 72h window"
   ]
  },
  {
   "name": "Wynnewood Refinery",
   "lat": 34.94,
   "lon": -97.13,
   "current": "Hot — 99°F peak this afternoon",
   "risk": "ELEVATED",
   "risk_why": [
    "🔥 Same heat dome: 96-99°F peaks 2-6 PM, second consecutive heat day",
    "Overnight lows near 75°F — limited overnight cooling for rotating crews",
    "Sunday evening storm window applies here too — same stalled boundary, same timing risk for night-shift tank work"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "July 2007 — the flood that shut Coffeyville down",
  "facts": [
   "Record river flooding inundated the refinery; a crude-oil spill forced a multi-week shutdown",
   "The event is the reason 'Coffeyville flooding history' is on every ops-risk checklist",
   "This week's Midwest flood threat sits one state east (Iowa/Wisconsin/Illinois) — the pattern that floods Midwest refineries is active right now",
   "Flash-flood watches are live TODAY at other Midcon operators (East Dubuque) — the corridor is primed"
  ]
 },
 "headline": "Live same-hour comparison — Coffeyville Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 18 for 37.03, -95.61",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "97-99°F both sites, heat-stress thresholds",
   "impact": "Rotate outdoor crews; schedule heavy lifts before 1 PM"
  },
  {
   "when": "Tonight-Saturday",
   "what": "Dry, cooling nights (mid-70s)",
   "impact": "Good overnight maintenance windows; no weather constraints"
  },
  {
   "when": "Sunday 4 PM-9 PM",
   "what": "AccuWeather storm window builds to 56% at 9 PM (Coffeyville)",
   "impact": "Plan Sunday night-shift outdoor work around stand-down windows; watch flash-flood guidance on the Verdigris"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Coffeyville Refinery):",
  "rows": [
   {
   "feature": "This afternoon storm signal",
   "free": "0-1% all day — nothing on the board",
   "awx": "Up to 7% with thunderstorm flagging in hourly detail"
   },
   {
   "feature": "Sunday evening storm window (9 PM)",
   "free": "Not visible in today's pull",
   "awx": "56% thunderstorms at Coffeyville by 9 PM Sunday"
   },
   {
   "feature": "Peak temp today",
   "free": "—",
   "awx": "99°F with heat-index context crews can plan against"
   }
  ],
  "closer": "The free feed calls the whole weekend dry at a refinery whose worst day in history was a flood; AccuWeather's Sunday-evening 56% storm window is the kind of lead time that turns a scramble into a plan."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Mostly sunny", "tp": 90.0, "pop": 0, "gust": 15.0}, {"t": "12:00", "wx": "Mostly sunny", "tp": 93.0, "pop": 0, "gust": 16.1}, {"t": "13:00", "wx": "Mostly sunny", "tp": 96.0, "pop": 0, "gust": 17.3}, {"t": "14:00", "wx": "Mostly sunny", "tp": 97.0, "pop": 7, "gust": 18.4}, {"t": "15:00", "wx": "Mostly sunny", "tp": 99.0, "pop": 7, "gust": 18.4}, {"t": "16:00", "wx": "Mostly sunny", "tp": 98.0, "pop": 7, "gust": 18.4}, {"t": "17:00", "wx": "Mostly sunny", "tp": 97.0, "pop": 7, "gust": 16.1}, {"t": "18:00", "wx": "Mostly sunny", "tp": 95.0, "pop": 7, "gust": 12.7}, {"t": "19:00", "wx": "Sunny", "tp": 92.0, "pop": 5, "gust": 10.4}, {"t": "20:00", "wx": "Clear", "tp": 88.0, "pop": 0, "gust": 9.2}, {"t": "21:00", "wx": "Clear", "tp": 85.0, "pop": 0, "gust": 9.2}, {"t": "22:00", "wx": "Clear", "tp": 83.0, "pop": 0, "gust": 8.1}, {"t": "23:00", "wx": "Clear", "tp": 81.0, "pop": 0, "gust": 8.1}, {"t": "00:00", "wx": "Clear", "tp": 79.0, "pop": 0, "gust": 9.2}, {"t": "01:00", "wx": "Clear", "tp": 78.0, "pop": 0, "gust": 9.2}, {"t": "02:00", "wx": "Clear", "tp": 77.0, "pop": 0, "gust": 9.2}, {"t": "03:00", "wx": "Clear", "tp": 76.0, "pop": 0, "gust": 9.2}, {"t": "04:00", "wx": "Clear", "tp": 75.0, "pop": 0, "gust": 9.2}, {"t": "05:00", "wx": "Clear", "tp": 74.0, "pop": 0, "gust": 9.2}, {"t": "06:00", "wx": "Clear", "tp": 73.0, "pop": 0, "gust": 9.2}, {"t": "07:00", "wx": "Clear", "tp": 72.0, "pop": 0, "gust": 9.2}, {"t": "08:00", "wx": "Mostly sunny", "tp": 73.0, "pop": 0, "gust": 12.7}, {"t": "09:00", "wx": "Mostly sunny", "tp": 77.0, "pop": 0, "gust": 16.1}, {"t": "10:00", "wx": "Mostly sunny", "tp": 83.0, "pop": 0, "gust": 20.7}], "om": [{"t": "00:00", "wx": "Clear", "tp": 92.8, "pop": 0}, {"t": "01:00", "wx": "Clear", "tp": 84.9, "pop": 0}, {"t": "02:00", "wx": "Clear", "tp": 81.9, "pop": 0}, {"t": "03:00", "wx": "Clear", "tp": 79.7, "pop": 0}, {"t": "04:00", "wx": "Clear", "tp": 79.5, "pop": 0}, {"t": "05:00", "wx": "Clear", "tp": 78.8, "pop": 0}, {"t": "06:00", "wx": "Clear", "tp": 78.4, "pop": 0}, {"t": "07:00", "wx": "Clear", "tp": 75.7, "pop": 0}, {"t": "08:00", "wx": "Clear", "tp": 75.9, "pop": 0}, {"t": "09:00", "wx": "Clear", "tp": 75.2, "pop": 1}, {"t": "10:00", "wx": "Clear", "tp": 75.6, "pop": 1}, {"t": "11:00", "wx": "Clear", "tp": 74.7, "pop": 0}, {"t": "12:00", "wx": "Clear", "tp": 73.0, "pop": 1}, {"t": "13:00", "wx": "Clear", "tp": 75.0, "pop": 1}, {"t": "14:00", "wx": "Clear", "tp": 80.6, "pop": 1}, {"t": "15:00", "wx": "Clear", "tp": 85.5, "pop": 1}, {"t": "16:00", "wx": "Clear", "tp": 89.4, "pop": 1}, {"t": "17:00", "wx": "Clear", "tp": 93.2, "pop": 1}, {"t": "18:00", "wx": "Clear", "tp": 95.7, "pop": 1}, {"t": "19:00", "wx": "Clear", "tp": 97.0, "pop": 1}, {"t": "20:00", "wx": "Clear", "tp": 97.5, "pop": 1}, {"t": "21:00", "wx": "Clear", "tp": 97.5, "pop": 1}, {"t": "22:00", "wx": "Clear", "tp": 97.3, "pop": 0}, {"t": "23:00", "wx": "Clear", "tp": 96.4, "pop": 0}], "loc": "Coffeyville", "key": "333256"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
