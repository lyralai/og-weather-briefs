const DEMO_DATA = {
 "operator": "Delek US",
 "generated": "2026-10-28",
 "topline": "RIGHT NOW across Mewbourne's Permian and Delaware Basin acreage: AccuWeather flags a flash-flood severe-weather signal over West Texas and Southeast New Mexico today - thunderstorms with heavy rain possible through evening - while the free feed shows only a slim rain chance. Same sky, two very different briefings for an operator whose tank batteries, flowlines, and roads flood first.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Permian / Delaware Basin operations",
   "lat": 32.25,
   "lon": -101.48,
   "current": "Intermittent clouds, 74°F",
   "risk": "ELEVATED",
   "risk_why": [
    "✅ Afternoon clears completely — 0% rain probability from 2 PM onward, gusts easing to 8 mph",
    "Morning storm chance (22-34% before 1 PM) with 6% lightning probability — minor, but worth a glance for any hot work this morning",
    "A clean 72-hour ops window opens this afternoon: dry, light wind, mid-70s — ideal turnaround and lift weather",
    "Free feed shows 5°F cooler this evening and misses the warm afternoon — small errors that compound over shift planning"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "West Texas autumn: quiet is the product too",
  "facts": [
   "Hurricane Nolo (Cat 1) and TS Rachel are both East Pacific systems this week — zero direct West Texas impact",
   "The value of a weather partner in West Texas is not storm alarms — it's verified clean windows that let you schedule confidently",
   "AccuWeather's hourly gust and temperature fields at your coordinates keep lift plans and cooling-load forecasts honest",
   "Free feeds smear 17-mile model grids over Permian terrain — your site microclimate differs, and that difference is the product"
  ]
 },
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "Clearing fully by 2 PM, gusts easing to 8-10 mph",
   "impact": "Open all outdoor work; ideal lift window"
  },
  {
   "when": "Tonight",
   "what": "Clear, calm, low 60s by morning",
   "impact": "Good night for any temperature-sensitive unit work"
  },
  {
   "when": "Sunday",
   "what": "Sunny, mid-70s, light winds",
   "impact": "Best maintenance day of the week — schedule the big lifts"
  },
  {
   "when": "Mon-Tue",
   "what": "Continued quiet; watching next Gulf system for moisture return",
   "impact": "Normal ops; no weather constraints visible"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each shows for Big Spring right now — and where they diverge.",
  "rows": [
   {
    "feature": "This afternoon's temperature",
    "free": "Underforecasts by 4-5°F — misses the warm afternoon peak entirely",
    "awx": "Hour-by-hour curve peaking 76°F at 5 PM, cooling smoothly overnight"
   },
   {
    "feature": "Morning storm chance",
    "free": "1-5% — essentially flat, no detail",
    "awx": "22-34% before 1 PM with 6% lightning probability, then verifiably 0%"
   },
   {
    "feature": "Gust fields for crane ops",
    "free": "Average wind only — no gust data at all",
    "awx": "Hourly gusts 8-13 mph with easing trend — lift windows with confidence"
   },
   {
    "feature": "Verified clean windows",
    "free": "\"Low chance\" is not a scheduleable product",
    "awx": "0% rain probability stamped hour-by-hour — the auditable basis for turnaround timing"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings — issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when can I safely schedule work — verified, at my fence line?\""
 },
 "capabilities": [
  [
   "Verified clean-window certification",
   "Hour-by-hour 0% probability fields at your coordinates — the auditable basis for turnaround and lift scheduling."
  ],
  [
   "Hourly gust fields at asset coordinates",
   "32.25°N 101.48°W — not a 17-mile grid average. Crane windows planned on real numbers."
  ],
  [
   "Site microclimate accuracy",
   "Permian terrain skews free model grids; AccuWeather's hourly curve at Big Spring runs 4-5°F truer this afternoon."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
