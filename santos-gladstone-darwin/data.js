const DEMO_DATA = {
  operator: "Santos",
  generated: "2026-09-16",
  topline: "RIGHT NOW at Gladstone: AccuWeather shows a clean overnight berthing window (0-1% rain) with showers arriving 10 AM. The free weather API reads 38% rain at 2 AM — a phantom shower risk your marine desk would plan around for nothing. With cyclone season 10 weeks out, that's the difference between data and decisions.",
  risk_level: "CLEAR",
  assets: [
    {"name":"Gladstone LNG (GLNG)","lat":-23.85,"lon":151.26,"current":"Partly cloudy 51°F, dry overnight","risk":"CLEAR",
     "risk_why":[
       "Dry overnight and early morning (POP 0-1% through 6 AM) — the clean berthing/loading window",
       "Showers arrive ~10 AM (52%) then ease — afternoon tanker ops largely unaffected",
       "Free data reads 38% rain overnight — phantom marine delay for nothing"]},
    {"name":"Darwin LNG","lat":-12.41,"lon":130.91,"current":"Build-up season approaching","risk":"CLEAR",
     "risk_why":[
       "Cyclone season opens Nov 1 — the Oct pre-season window is when forecast infrastructure gets tested",
       "Darwin's build-up storms (Oct-Dec) are exactly the short-fuse convective events free feeds time worst",
       "AccuWeather asset-pinned alerts give evacuate-vs-ride-out lead time the public cone doesn't"]}
  ],
  near_miss: {
    headline: "Cyclone season opens in 10 weeks — and every Nov-Apr, the Australian cyclone belt crosses both Santos LNG hubs",
    facts: ["Gladstone and Darwin both sit inside Australia's cyclone-exposed operating belt","GLNG outages and Darwin LNG feed-gas interruptions have cyclone history","Marine loading stand-downs during cyclone approach run 3-5 days each event","The pre-season gap between free cyclone cones and asset-pinned enterprise guidance is exactly when you want your data stack proven"]
  },
  next_72h: [
    {"when":"Tonight-6 AM","what":"Dry and cool at Gladstone (POP 0-1%)","impact":"Best berthing window; tanker ops unhindered"},
    {"when":"10 AM Thu","what":"Showers move through (52%), easing afternoon","impact":"Minor crane/yard pause; marine ops continue"},
    {"when":"Fri-Sat","what":"Returning fair, mild onshore winds","impact":"Normal ops across GLNG corridor"},
    {"when":"Nov 1","what":"Australian cyclone season opens","impact":"10-week runway to prove the forecast stack before the first named system"}
  ],
  comparison: {
    intro: "Your ops team can already pull free weather data (OpenMeteo, BOM public feeds). Here's what each says about tonight at Gladstone — same coordinates, same hour.",
    rows: [
      {"feature":"Tonight's berthing window","free":"38% rain at 2 AM — plan for a phantom shower delay","awx":"0-1% through 6 AM — a clean, confident marine window"},
      {"feature":"Morning shower timing","free":"Flat 40%+ all day — no arrival time","awx":"Showers pinpointed at 10 AM (52%), easing by noon"},
      {"feature":"Cyclone track for your assets","free":"BOM public cone, broad-brush, landfall-focused","awx":"Storm-track probabilities + wind/surge guidance pinned to GLNG and Darwin coordinates"},
      {"feature":"Evacuate-vs-ride-out timing","free":"Public warnings — issued late by design","awx":"Proprietary pre-threshold escalation on your ops triggers, hours earlier"},
      {"feature":"Marine conditions for loading/berthing","free":"Coastal waters forecast, 6-hr granularity","awx":"Hour-by-hour wind and sea state at the berth; loading-window recommendations"},
      {"feature":"Historical event verification","free":"None","awx":"Event archive per asset — audit what hit, when, for post-incident review and insurance"}
    ],
    closer: "Free data tells your marine desk 'maybe rain tonight.' AccuWeather tells them the berthing window is clean at 2 AM."
  },
  capabilities: [
    ["Cyclone decision support, asset-pinned","Track probabilities and surge guidance tied to GLNG and Darwin — not the broad public cone."],
    ["Marine wind & wave windows","Berthing and tanker scheduling against hour-by-hour sea state at your berths."],
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — build-up-season convective events timed to your jetty."],
    ["Threshold alerting per facility","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
  ]
};
const LIVE_COMPARISON = {"awx": [{"t": "02:00", "wx": "Partly cloudy", "tp": 51.0, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 40}, {"t": "03:00", "wx": "Partly cloudy", "tp": 51.0, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 46}, {"t": "04:00", "wx": "Intermittent clouds", "tp": 52.0, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 52}, {"t": "05:00", "wx": "Intermittent clouds", "tp": 53.0, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 56}, {"t": "06:00", "wx": "Intermittent clouds", "tp": 54.0, "pop": 1, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 60}, {"t": "07:00", "wx": "Intermittent clouds", "tp": 54.0, "pop": 19, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 64}, {"t": "08:00", "wx": "Intermittent clouds", "tp": 57.0, "pop": 19, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 62}, {"t": "09:00", "wx": "Intermittent clouds", "tp": 60.0, "pop": 24, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 61}, {"t": "10:00", "wx": "Mostly cloudy w/ showers", "tp": 63.0, "pop": 52, "rain": {"Value": 0.01, "Unit": "in", "UnitType": 1}, "cloud": 70}, {"t": "11:00", "wx": "Mostly cloudy w/ showers", "tp": 63.0, "pop": 46, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 55}, {"t": "12:00", "wx": "Intermittent clouds", "tp": 64.0, "pop": 45, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 50}, {"t": "13:00", "wx": "Partly sunny", "tp": 64.0, "pop": 43, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 46}], "om": [{"t": "02:00", "code": "Mostly clear", "tp": 65, "pop": 38}, {"t": "03:00", "code": "Clear", "tp": 64, "pop": 28}, {"t": "04:00", "code": "Clear", "tp": 64, "pop": 18}, {"t": "05:00", "code": "Clear", "tp": 63, "pop": 11}, {"t": "06:00", "code": "Clear", "tp": 63, "pop": 4}, {"t": "07:00", "code": "Clear", "tp": 64, "pop": 0}, {"t": "08:00", "code": "Clear", "tp": 66, "pop": 0}, {"t": "09:00", "code": "Clear", "tp": 69, "pop": 0}, {"t": "10:00", "code": "Mostly clear", "tp": 73, "pop": 0}, {"t": "11:00", "code": "Mostly clear", "tp": 75, "pop": 0}, {"t": "12:00", "code": "Partly cloudy", "tp": 74, "pop": 0}, {"t": "13:00", "code": "Partly cloudy", "tp": 72, "pop": 0}]};
const DATA_MAPBOX_TOKEN=p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
