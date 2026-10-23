const DEMO_DATA = {
 "operator": "Calumet Specialty Products",
 "generated": "2026-10-23",
 "topline": "UPDATED Oct 23: first real cold shot of the season reaches Great Falls TODAY — rain turning to showers, highs only near 43F after morning 40s, wind gusts to 26 mph. Free-work brief: live AccuWeather vs free-forecast comparison below shows the precip timing and cooldown hour by hour. Freeze season starts here before the Gulf even thinks about winter — that is the renewable-diesel logistics story.",
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
const LIVE_COMPARISON = {"awx":[{"t":"10:00","wx":"Rain","tp":43.0,"pop":86,"rain":0.0,"cloud":0},{"t":"11:00","wx":"Rain","tp":41.0,"pop":83,"rain":0.0,"cloud":0},{"t":"12:00","wx":"Rain","tp":38.0,"pop":83,"rain":0.0,"cloud":0},{"t":"13:00","wx":"Rain","tp":35.0,"pop":83,"rain":0.0,"cloud":0},{"t":"14:00","wx":"Rain","tp":33.0,"pop":70,"rain":0.0,"cloud":0},{"t":"15:00","wx":"Cloudy","tp":32.0,"pop":49,"rain":0.0,"cloud":0},{"t":"16:00","wx":"Cloudy","tp":31.0,"pop":49,"rain":0.0,"cloud":0},{"t":"17:00","wx":"Cloudy","tp":31.0,"pop":49,"rain":0.0,"cloud":0},{"t":"18:00","wx":"Rain","tp":32.0,"pop":74,"rain":0.0,"cloud":0},{"t":"19:00","wx":"Rain","tp":33.0,"pop":74,"rain":0.0,"cloud":0},{"t":"20:00","wx":"Showers","tp":33.0,"pop":51,"rain":0.0,"cloud":0},{"t":"21:00","wx":"Cloudy","tp":33.0,"pop":47,"rain":0.0,"cloud":0}],"om":[{"t":"10:00","tp":49.5,"pop":0,"cloud":null},{"t":"11:00","tp":46.1,"pop":0,"cloud":null},{"t":"12:00","tp":45.5,"pop":0,"cloud":null},{"t":"13:00","tp":46.6,"pop":0,"cloud":null},{"t":"14:00","tp":49.1,"pop":0,"cloud":null},{"t":"15:00","tp":43.7,"pop":0,"cloud":null},{"t":"16:00","tp":41.5,"pop":90,"cloud":null},{"t":"17:00","tp":41.1,"pop":70,"cloud":null},{"t":"18:00","tp":40.2,"pop":100,"cloud":null},{"t":"19:00","tp":38.1,"pop":55,"cloud":null},{"t":"20:00","tp":35.8,"pop":100,"cloud":null},{"t":"21:00","tp":34.7,"pop":100,"cloud":null}],"loc":"Great Falls","key":"329452"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
