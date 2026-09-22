const DEMO_DATA = {
 "operator": "Deer Park Refining LP",
 "generated": "2026-09-22",
 "topline": "RIGHT NOW at Deer Park (340 kbd, Houston Ship Channel): a hot, mostly sunny day with a 30-40% shower signal this morning fading to 8% by afternoon — typical September Gulf humidity, no active alerts at the site today. But the Atlas board shows flash-flood-potential alerts and 8,000 lightning strikes across the broader Gulf/South region this hour, and Deer Park sits in the corridor that has taken repeated lightning-driven unit trips and dock holds this season. Same coordinates, two feeds: AccuWeather's hourly carries the pop-timing the free feed flattens.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Deer Park Refinery & Ship Channel docks",
   "lat": 29.7,
   "lon": -95.13,
   "current": "Mostly sunny, 90-97°F, humid",
   "risk": "ELEVATED",
   "risk_why": [
    "Hot afternoon (96-97°F) — cooling-load and worker-heat protocol day for outdoor units",
    "Morning shower signal (38%) — pop-up Gulf convection can build fast near the Channel even on a sunny base",
    "Regional Atlas board: flash-flood-potential alerts and heavy lightning activity across TX/NM/Ohio Valley operators today",
    "Ship Channel marine ops sensitive to pop-up thunderstorms and lightning holds"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "A sunny day on the Channel — with lightning in the neighborhood",
  "facts": [
   "8,000 strikes in the live feed right now; today's alerts cluster over Texas fields and Ohio Valley — Deer Park is clear but the neighborhood is not quiet",
   "Channel refineries lose dock windows and load-out slots to unforecast pop-up convection — 30-minute heads-up is real money at 340 kbd",
   "Heat + humidity afternoon: 97°F with marine humidity stresses cooling systems and crews",
   "AccuWeather's hourly pop curve + lightning-aware alerts are built for exactly this pattern"
  ]
 },
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "Mostly sunny, 96-97°F, precip fading to 8%",
   "impact": "Heat protocol for crews; watch cooling margins"
  },
  {
   "when": "Evening",
   "what": "Warm and mostly clear",
   "impact": "Normal dock windows"
  },
  {
   "when": "Wed-Thu",
   "what": "Gulf moisture returns; scattered shower/storm chances rebuild",
   "impact": "Possible lightning holds on docks; monitor hourly pop timing"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each says about this site today — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Shower timing today",
    "free": "A flat low chance",
    "awx": "38% morning dropping to 8% afternoon — hour-pinned"
   },
   {
    "feature": "Pop-up convection alerts",
    "free": "County-wide NWS warnings, late",
    "awx": "Site-pinned lightning-aware alerts with 30-60 min heads-up"
   },
   {
    "feature": "Dock-window planning",
    "free": "No marine-specific guidance",
    "awx": "Wind/gust + lightning timing for Ship Channel ops"
   },
   {
    "feature": "Heat management",
    "free": "Temperature only",
    "awx": "RealFeel + heat-hour counts for crew rotation planning"
   }
  ]
 },
 "cta": [
  [
   "Site-pinned lightning alerts",
   "Pop-up Gulf convection warnings at your coordinates — before the county warning."
  ],
  [
   "Dock-window timing",
   "Hour-by-hour wind/gust + lightning risk for Ship Channel marine ops."
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
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Mostly sunny","tp":90.0,"pop":38,"rain":0.0,"cloud":0},{"t":"12:00","wx":"Mostly sunny","tp":92.0,"pop":34,"rain":0.0,"cloud":0},{"t":"13:00","wx":"Mostly sunny","tp":94.0,"pop":25,"rain":0.0,"cloud":0},{"t":"14:00","wx":"Mostly sunny","tp":96.0,"pop":8,"rain":0.0,"cloud":0},{"t":"15:00","wx":"Mostly sunny","tp":96.0,"pop":8,"rain":0.0,"cloud":0},{"t":"16:00","wx":"Mostly sunny","tp":97.0,"pop":8,"rain":0.0,"cloud":0},{"t":"17:00","wx":"Mostly sunny","tp":96.0,"pop":8,"rain":0.0,"cloud":0},{"t":"18:00","wx":"Mostly sunny","tp":94.0,"pop":8,"rain":0.0,"cloud":0},{"t":"19:00","wx":"Mostly sunny","tp":92.0,"pop":6,"rain":0.0,"cloud":0},{"t":"20:00","wx":"Mostly clear","tp":92.0,"pop":1,"rain":0.0,"cloud":0},{"t":"21:00","wx":"Mostly clear","tp":89.0,"pop":1,"rain":0.0,"cloud":0},{"t":"22:00","wx":"Mostly clear","tp":87.0,"pop":1,"rain":0.0,"cloud":0}],"om":[{"t":"11:00","tp":89.8,"pop":2,"cloud":100},{"t":"12:00","tp":91.8,"pop":3,"cloud":70},{"t":"13:00","tp":93.0,"pop":2,"cloud":87},{"t":"14:00","tp":93.8,"pop":3,"cloud":100},{"t":"15:00","tp":94.0,"pop":3,"cloud":42},{"t":"16:00","tp":95.1,"pop":6,"cloud":75},{"t":"17:00","tp":94.1,"pop":7,"cloud":100},{"t":"18:00","tp":91.3,"pop":3,"cloud":100},{"t":"19:00","tp":92.5,"pop":2,"cloud":0},{"t":"20:00","tp":89.1,"pop":1,"cloud":0},{"t":"21:00","tp":86.7,"pop":1,"cloud":0},{"t":"22:00","tp":85.1,"pop":3,"cloud":0}],"loc":"Deer Park","key":"336046"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
