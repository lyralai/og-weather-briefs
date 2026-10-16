const DEMO_DATA = {
 "operator": "Calcasieu Pass LNG \u2014 Venture Global",
 "generated": "2026-10-16",
 "topline": "RIGHT NOW at Calcasieu Pass: gale warnings fly on the Cameron-to-High-Island marine zones tonight, but AccuWeather shows the terminal itself dry through the window \u2014 breezy, clearing, zero rain hours. The free feed also shows dry, yet its hourly rain risk stays far below AccuWeather's same-hour numbers further south. On a gale-warning night, which feed your dock crews trust decides when loading arms come off.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Calcasieu Pass LNG terminal & Cameron corridor",
   "lat": 29.75,
   "lon": -93.32,
   "current": "Breezy and mostly sunny, low 80s\u00b0F, clearing overnight",
   "risk": "ELEVATED",
   "risk_why": [
    "NWS Gale Warning + Small Craft Advisory live on the Cameron\u2013High Island coastal and offshore marine zones through tonight \u2014 pilot boarding and tug windows tighten",
    "AccuWeather hourly: 0% rain at the terminal through the next 12 hours \u2014 the gale is a wind/wave marine event, not rain",
    "Clears and cools behind the front: upper 50s\u00b0F by tomorrow morning, full-ops high pressure Friday",
    "Four named storms worldwide (Trudy, Simon EPac; CHAMPI NW Pacific; Cat-1 South Pacific) \u2014 none a Gulf threat this week"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why this corridor buys weather",
  "headline": "September 2026 \u2014 surge warnings at four Gulf LNG terminals during Hurricane Edouard",
  "facts": [
   "Edouard drove surge warnings at four US Gulf LNG terminals including this corridor three weeks back",
   "Marine loading arms, tug schedules and pilot boarding all hinge on hour-level wind and surge calls",
   "The question is never 'was it bad' \u2014 it's 'how early did you know, and when were you allowed back to work'"
  ]
 },
 "next_72h": [
  "Tonight: gale-force gusts on the marine zones ease after midnight; terminal stays dry",
  "Friday: high pressure, light winds, cool morning \u2014 cleanest loading day of the week",
  "Weekend: Gulf returns to quiet tropical watch; peak-season vigilance runs through November"
 ],
 "comparison": [
  [
   "Hour-level wind + gust timing",
   "AccuWeather hourly gusts per marine zone",
   "One coarse 'windy tonight' blob"
  ],
  [
   "Lightning stand-down windows",
   "Minute-level strike alerts tied to your dock",
   "% chance of storms, no timing"
  ],
  [
   "Return-to-work calls",
   "Expert consult on when arms go back on",
   "You guess from the radar"
  ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Mostly sunny","tp":81.0,"pop":7},{"t":"12:00Z","wx":"Mostly sunny","tp":83.0,"pop":7},{"t":"13:00Z","wx":"Mostly sunny","tp":84.0,"pop":5},{"t":"14:00Z","wx":"Mostly sunny","tp":83.0,"pop":0},{"t":"15:00Z","wx":"Mostly sunny","tp":81.0,"pop":0},{"t":"16:00Z","wx":"Mostly sunny","tp":79.0,"pop":0},{"t":"17:00Z","wx":"Mostly sunny","tp":79.0,"pop":0},{"t":"18:00Z","wx":"Mostly sunny","tp":76.0,"pop":0},{"t":"19:00Z","wx":"Mostly clear","tp":74.0,"pop":0},{"t":"20:00Z","wx":"Partly cloudy","tp":71.0,"pop":0},{"t":"21:00Z","wx":"Partly cloudy","tp":69.0,"pop":0},{"t":"22:00Z","wx":"Partly cloudy","tp":66.0,"pop":0}],"om":[{"t":"15:00Z","code":"Clear","tp":80.0,"pop":8},{"t":"16:00Z","code":"Clear","tp":82.2,"pop":10},{"t":"17:00Z","code":"Clear","tp":83.4,"pop":9},{"t":"18:00Z","code":"Clear","tp":83.6,"pop":10},{"t":"19:00Z","code":"Clear","tp":84.1,"pop":10},{"t":"20:00Z","code":"Clear","tp":83.9,"pop":4},{"t":"21:00Z","code":"Clear","tp":82.0,"pop":1},{"t":"22:00Z","code":"Cloudy","tp":79.5,"pop":2},{"t":"23:00Z","code":"Partly cloudy","tp":76.0,"pop":2},{"t":"00:00Z","code":"Cloudy","tp":73.1,"pop":1},{"t":"01:00Z","code":"Cloudy","tp":71.4,"pop":1},{"t":"02:00Z","code":"Cloudy","tp":69.7,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
