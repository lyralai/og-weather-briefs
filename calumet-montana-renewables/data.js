const DEMO_DATA = {
 "operator": "Calumet Specialty Products",
 "generated": "2026-09-22",
 "topline": "RIGHT NOW at Montana Renewables (Great Falls): a clean, sunny high plains day — light winds, 0% precip, highs near 80. The weather story here isn't today; it's the freeze season ahead. Great Falls sits in one of the fastest-cooling air corridors in the lower 48, and renewables units (SAF/HydroFining) run steam and water systems that feel the first hard freeze weeks before the Gulf does. Same coordinates, two feeds: AccuWeather shows the early-freeze signal in its hourly detail; the free feed shows a mild average that hides the swing.",
 "risk_level": "LOW",
 "assets": [
  {
   "name": "Montana Renewables (Great Falls)",
   "lat": 47.5,
   "lon": -111.3,
   "current": "Mostly sunny, upper 70s, dry",
   "risk": "LOW",
   "risk_why": [
    "Clear, dry 72h window — ideal for outdoor maintenance and deferred turnaround work",
    "First-freeze planning window: Great Falls' normal first 28°F night arrives in early-to-mid October — 2-4 weeks before Gulf sites",
    "AccuWeather hourly detail flags the diurnal swing; the free feed's smooth average hides it",
    "Renewables steam/water systems and rail loading are the freeze-sensitive points"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "A quiet day — and why freeze season starts at Great Falls before anywhere else",
  "facts": [
   "Great Falls downslope air drains cold high-plains air fast; normal first hard freeze is among the earliest of any US fuel-processing site",
   "Montana Renewables is the largest SAF producer in North America — a freeze-related outage moves renewable volume, not just diesel",
   "Early-freeze prep (heat tracing, glycol, steam tracing audits) is a late-September job, not a November one, at this latitude",
   "AccuWeather site-pinned hourly + freeze alerts give the heads-up the coarse free grid can't"
  ]
 },
 "next_72h": [
  {
   "when": "Today-Tomorrow",
   "what": "Sunny, dry, highs upper 70s-low 80s",
   "impact": "Best window of the week for outdoor work"
  },
  {
   "when": "Wednesday night",
   "what": "Clear and cool, low 40s",
   "impact": "Mild — no freeze concern yet"
  },
  {
   "when": "Late week",
   "what": "Slight cool-down, chance of showers Thursday",
   "impact": "Minor; watch wind for any crane lifts"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about this site today — and where AccuWeather earns its keep.",
  "rows": [
   {
    "feature": "Today's forecast",
    "free": "Generic sunny/warm",
    "awx": "Hour-by-hour, site-pinned — today matches, it's a clean day"
   },
   {
    "feature": "First-freeze timing",
    "free": "No seasonal risk framing",
    "awx": "Freeze alerts + 90-day planning tied to your exact coordinates"
   },
   {
    "feature": "Wind for lifts/loading",
    "free": "Basic hourly",
    "awx": "Gust detail + threshold alerts for rail loading and crane ops"
   },
   {
    "feature": "Renewables-specific risk",
    "free": "None",
    "awx": "Custom thresholds per unit — steam systems, tank heating, rail"
   }
  ]
 },
 "cta": [
  [
   "Site-pinned freeze alerts",
   "First 28°F warning at your coordinates — weeks of runway to heat-trace and glycol."
  ],
  [
   "Hour-by-hour detail",
   "Diurnal swing the free grid smooths away — drives steam and heating planning."
  ],
  [
   "Threshold alerting per facility",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ],
  [
   "Event archive per asset",
   "Audit what hit, when — for post-incident review and insurance."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"10:00","wx":"Mostly sunny","tp":63.0,"pop":0,"rain":0.0,"cloud":0},{"t":"11:00","wx":"Mostly sunny","tp":68.0,"pop":0,"rain":0.0,"cloud":0},{"t":"12:00","wx":"Mostly sunny","tp":73.0,"pop":0,"rain":0.0,"cloud":0},{"t":"13:00","wx":"Sunny","tp":76.0,"pop":0,"rain":0.0,"cloud":0},{"t":"14:00","wx":"Mostly sunny","tp":78.0,"pop":0,"rain":0.0,"cloud":0},{"t":"15:00","wx":"Mostly sunny","tp":81.0,"pop":0,"rain":0.0,"cloud":0},{"t":"16:00","wx":"Mostly sunny","tp":79.0,"pop":0,"rain":0.0,"cloud":0},{"t":"17:00","wx":"Mostly sunny","tp":78.0,"pop":0,"rain":0.0,"cloud":0},{"t":"18:00","wx":"Mostly sunny","tp":77.0,"pop":0,"rain":0.0,"cloud":0},{"t":"19:00","wx":"Mostly sunny","tp":74.0,"pop":0,"rain":0.0,"cloud":0},{"t":"20:00","wx":"Mostly clear","tp":70.0,"pop":0,"rain":0.0,"cloud":0},{"t":"21:00","wx":"Mostly clear","tp":67.0,"pop":0,"rain":0.0,"cloud":0}],"om":[{"t":"10:00","tp":64.5,"pop":1,"cloud":40},{"t":"11:00","tp":70.9,"pop":1,"cloud":0},{"t":"12:00","tp":73.5,"pop":1,"cloud":9},{"t":"13:00","tp":75.7,"pop":1,"cloud":9},{"t":"14:00","tp":77.7,"pop":1,"cloud":1},{"t":"15:00","tp":78.9,"pop":0,"cloud":24},{"t":"16:00","tp":79.0,"pop":0,"cloud":19},{"t":"17:00","tp":79.5,"pop":1,"cloud":10},{"t":"18:00","tp":79.9,"pop":2,"cloud":97},{"t":"19:00","tp":74.6,"pop":3,"cloud":100},{"t":"20:00","tp":70.0,"pop":3,"cloud":100},{"t":"21:00","tp":65.8,"pop":4,"cloud":43}],"loc":"Great Falls","key":"329452"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
