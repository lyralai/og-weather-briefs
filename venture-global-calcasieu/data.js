const DEMO_DATA = {
 "operator": "Calcasieu Pass LNG \u2014 Venture Global",
 "generated": "2026-10-17",
 "topline": "RIGHT NOW at Calcasieu Pass: gales are done \u2014 post-frontal high pressure owns the corridor. AccuWeather hourly: sunny, 0% rain, steady warm-up through the afternoon. The free feed runs a 9-degree colder same-hour line at the dock this morning \u2014 on a switching post-frontal day, that spread is the difference between crew call times made right and made twice.",
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
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Mostly sunny","tp":64.0,"pop":0},{"t":"12:00Z","wx":"Mostly sunny","tp":66.0,"pop":0},{"t":"13:00Z","wx":"Mostly sunny","tp":68.0,"pop":0},{"t":"14:00Z","wx":"Mostly sunny","tp":70.0,"pop":0},{"t":"15:00Z","wx":"Mostly sunny","tp":71.0,"pop":0},{"t":"16:00Z","wx":"Mostly sunny","tp":72.0,"pop":0},{"t":"17:00Z","wx":"Mostly sunny","tp":71.0,"pop":0},{"t":"18:00Z","wx":"Mostly sunny","tp":70.0,"pop":0},{"t":"19:00Z","wx":"Mostly clear","tp":68.0,"pop":0},{"t":"20:00Z","wx":"Mostly clear","tp":65.0,"pop":0},{"t":"21:00Z","wx":"Mostly clear","tp":64.0,"pop":0},{"t":"22:00Z","wx":"Mostly clear","tp":63.0,"pop":0}],"om":[{"t":"11:00Z","code":"Clear","tp":55.6,"pop":0},{"t":"12:00Z","code":"Clear","tp":55.3,"pop":0},{"t":"13:00Z","code":"Clear","tp":54.8,"pop":0},{"t":"14:00Z","code":"Clear","tp":57.1,"pop":0},{"t":"15:00Z","code":"Clear","tp":59.0,"pop":0},{"t":"16:00Z","code":"Clear","tp":61.2,"pop":0},{"t":"17:00Z","code":"Clear","tp":63.5,"pop":0},{"t":"18:00Z","code":"Clear","tp":65.5,"pop":0},{"t":"19:00Z","code":"Clear","tp":67.4,"pop":0},{"t":"20:00Z","code":"Clear","tp":68.7,"pop":0},{"t":"21:00Z","code":"Clear","tp":69.5,"pop":0},{"t":"22:00Z","code":"Clear","tp":69.2,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
