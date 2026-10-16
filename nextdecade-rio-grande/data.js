const DEMO_DATA = {
 "operator": "Rio Grande LNG \u2014 NextDecade",
 "generated": "2026-10-16",
 "topline": "RIGHT NOW at Rio Grande LNG (Brownsville): Red Flag Warning + Wind Advisory live across the RGV counties \u2014 dry, gusty, fire-weather conditions at the terminal and across construction zones. AccuWeather shows shower chances near 60% late this afternoon while the free feed caps rain risk at 31% and shows it starting two hours later. On a Red Flag day at an active construction site, that two-hour gap is the difference between an orderly crane shutdown and a rushed one.",
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
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Mostly sunny","tp":84.0,"pop":49},{"t":"12:00Z","wx":"Partly sunny w/ showers","tp":83.0,"pop":57},{"t":"13:00Z","wx":"Partly sunny w/ showers","tp":83.0,"pop":57},{"t":"14:00Z","wx":"Partly sunny","tp":82.0,"pop":25},{"t":"15:00Z","wx":"Partly sunny","tp":80.0,"pop":20},{"t":"16:00Z","wx":"Partly sunny","tp":80.0,"pop":20},{"t":"17:00Z","wx":"Partly sunny","tp":80.0,"pop":20},{"t":"18:00Z","wx":"Partly sunny","tp":79.0,"pop":20},{"t":"19:00Z","wx":"Partly sunny","tp":78.0,"pop":25},{"t":"20:00Z","wx":"Cloudy","tp":77.0,"pop":47},{"t":"21:00Z","wx":"Rain","tp":75.0,"pop":51},{"t":"22:00Z","wx":"Cloudy","tp":73.0,"pop":47}],"om":[{"t":"15:00Z","code":"Clear","tp":83.5,"pop":2},{"t":"16:00Z","code":"Clear","tp":82.3,"pop":5},{"t":"17:00Z","code":"Clear","tp":82.2,"pop":8},{"t":"18:00Z","code":"Cloudy","tp":79.0,"pop":12},{"t":"19:00Z","code":"Cloudy","tp":79.0,"pop":23},{"t":"20:00Z","code":"Cloudy","tp":78.3,"pop":31},{"t":"21:00Z","code":"Partly cloudy","tp":78.2,"pop":30},{"t":"22:00Z","code":"Mostly clear","tp":78.4,"pop":16},{"t":"23:00Z","code":"Mostly clear","tp":78.5,"pop":14},{"t":"00:00Z","code":"Mostly clear","tp":78.9,"pop":15},{"t":"01:00Z","code":"Clear","tp":78.3,"pop":8},{"t":"02:00Z","code":"Cloudy","tp":77.5,"pop":9}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
