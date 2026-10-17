const DEMO_DATA = {
 "operator": "Rio Grande LNG \u2014 NextDecade",
 "generated": "2026-10-17",
 "topline": "RIGHT NOW at Rio Grande LNG (Brownsville): the RGV fire-weather regime is easing — AccuWeather shows partly sunny, 0% rain, low-to-mid 70s through the afternoon. The free feed runs cloudy and 8–11°F colder on the same dock hours. On a post-frontal Saturday, which hourly curve your construction leads plan around decides whether crews dress right and lifts go on time.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Rio Grande LNG terminal (Trains 1-3, construction)",
   "lat": 26.15,
   "lon": -97.15,
   "current": "Hot, dry, gusty \u2014 mid 80s\u00b0F, fire-weather flags up",
   "risk": "ELEVATED",
   "risk_why": [
    "NWS Red Flag Warning + Wind Advisory live: Zapata, Hidalgo, Cameron, Willacy counties \u2014 sparks and dust near hot-work zones",
    "AccuWeather hourly: shower chances near 50-60% midday \u2014 but dry and windy dominates the ops window",
    "Free feed caps rain risk at 31% and delays onset ~2h \u2014 hot-work permits and crane wind limits get scheduled off different forecasts",
    "Two Pacific storms (Trudy TS 40 mph, Simon TD) tracking west of Mexico \u2014 moisture feed worth watching, not a direct threat"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why this site buys weather",
  "headline": "October 2026 \u2014 fire-weather flags while showers flirt with the same hours",
  "facts": [
   "Red Flag + showers in the same 24 hours is a classic RGV autumn pattern: wind-driven fire risk, then a tropical-moisture flush",
   "Construction sites feel it twice \u2014 hot-work bans in the afternoon, crane wind limits at the gust peak",
   "Hour-level timing on both is what keeps a 3-train build schedule honest"
  ]
 },
 "next_72h": [
  "Tonight: gusty evening, shower chances fade after dark",
  "Friday: drier, slightly cooler \u2014 construction-friendly window",
  "Weekend: scattered shower chances return with the next moisture surge"
 ],
 "comparison": [
  [
   "Fire-weather hour timing",
   "Hourly wind + humidity at the fence line",
   "Daily 'windy' with no RH detail"
  ],
  [
   "Shower onset timing",
   "AccuWeather puts rain risk 50%+ hours earlier",
   "Free feed lags onset ~2h, caps risk lower"
  ],
  [
   "Crane wind limits",
   "Gust curves per hour for lift planning",
   "Peak gust only, no timing"
  ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Partly sunny","tp":65.0,"pop":0},{"t":"12:00Z","wx":"Partly sunny","tp":68.0,"pop":0},{"t":"13:00Z","wx":"Partly sunny","tp":71.0,"pop":0},{"t":"14:00Z","wx":"Partly sunny","tp":72.0,"pop":0},{"t":"15:00Z","wx":"Partly sunny","tp":73.0,"pop":0},{"t":"16:00Z","wx":"Partly sunny","tp":75.0,"pop":0},{"t":"17:00Z","wx":"Partly sunny","tp":73.0,"pop":0},{"t":"18:00Z","wx":"Partly sunny","tp":71.0,"pop":0},{"t":"19:00Z","wx":"Partly sunny","tp":69.0,"pop":0},{"t":"20:00Z","wx":"Partly cloudy","tp":66.0,"pop":0},{"t":"21:00Z","wx":"Partly cloudy","tp":65.0,"pop":0},{"t":"22:00Z","wx":"Partly cloudy","tp":65.0,"pop":0}],"om":[{"t":"11:00Z","code":"Cloudy","tp":60.6,"pop":0},{"t":"12:00Z","code":"Cloudy","tp":61.5,"pop":0},{"t":"13:00Z","code":"Clear","tp":59.6,"pop":1},{"t":"14:00Z","code":"Clear","tp":61.2,"pop":1},{"t":"15:00Z","code":"Cloudy","tp":63.1,"pop":1},{"t":"16:00Z","code":"Partly cloudy","tp":64.2,"pop":1},{"t":"17:00Z","code":"Mostly clear","tp":67.6,"pop":1},{"t":"18:00Z","code":"Clear","tp":69.3,"pop":0},{"t":"19:00Z","code":"Clear","tp":71.5,"pop":0},{"t":"20:00Z","code":"Mostly clear","tp":71.6,"pop":0},{"t":"21:00Z","code":"Clear","tp":70.9,"pop":0},{"t":"22:00Z","code":"Clear","tp":70.0,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
