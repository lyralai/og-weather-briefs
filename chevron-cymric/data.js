const DEMO_DATA = {
 "operator": "Chevron (Cymric Field, San Joaquin Valley)",
 "generated": "2026-10-21",
 "topline": "RIGHT NOW at Cymric Field: the season's first real storm is arriving. AccuWeather shows rain through the next 12 hours with chances near 67%, while the free feed tops out near 13%. First-rain flash-flood risk on San Joaquin Valley oil pads means rain-runoff controls, slick lease roads, and halted workovers. Two feeds, two different briefings \u2014 this page shows both, hour by hour.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Cymric Oil Field",
   "lat": 35.35,
   "lon": -119.55,
   "current": "Rain moving in, 61\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "NWS Flood Watch blankets Kern County fields \u2014 first rain of the season runs off parched, oily ground fast",
    "AccuWeather flags flash-flood potential live at the field; hourly rain intensity is the ops number that decides pad closures",
    "Slick lease roads slow tanker trucks and workover rigs for hours after rain ends",
    "Free feeds show a 13% rain chance at the same hour \u2014 the gap is the story"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "California October storm \u2014 first significant rain of the season",
 "near_miss": {
  "headline": "First-rain flash flooding on San Joaquin Valley oil fields",
  "facts": [
    "A Flood Watch covers the Kern County oil belt \u2014 Belridge, Cymric, Lost Hills, Midway-Sunset \u2014 through the storm window",
    "First rain of the season runs off bone-dry ground with poor infiltration \u2014 ponding around tank batteries and sumps",
    "AccuWeather hourly rain intensity is site-pinned; free feeds give a city-level icon"
  ],
  "why_now": "The storm is arriving tonight \u2014 the natural moment to ask 'did we get the warning right, and did the free feed?'"
 }
};
const LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Rain","tp":61.0,"pop":67,"rain":1.3,"cloud":100},{"t":"17:00Z","wx":"Cloudy","tp":64.0,"pop":49,"rain":0.0,"cloud":92},{"t":"18:00Z","wx":"Rain","tp":64.0,"pop":64,"rain":2.5,"cloud":100},{"t":"19:00Z","wx":"Rain","tp":66.0,"pop":64,"rain":2.5,"cloud":100},{"t":"20:00Z","wx":"Cloudy","tp":65.0,"pop":49,"rain":0.0,"cloud":100},{"t":"21:00Z","wx":"Rain","tp":65.0,"pop":56,"rain":1.0,"cloud":97},{"t":"22:00Z","wx":"Cloudy","tp":69.0,"pop":49,"rain":0.0,"cloud":93},{"t":"23:00Z","wx":"Cloudy","tp":66.0,"pop":49,"rain":0.0,"cloud":91},{"t":"00:00Z","wx":"Rain","tp":64.0,"pop":70,"rain":1.0,"cloud":90},{"t":"01:00Z","wx":"Rain","tp":62.0,"pop":70,"rain":1.0,"cloud":89},{"t":"02:00Z","wx":"Rain","tp":62.0,"pop":70,"rain":1.0,"cloud":89},{"t":"03:00Z","wx":"Rain","tp":60.0,"pop":68,"rain":0.8,"cloud":90}],"om":[{"t":"15:00Z","tp":57.9,"pop":2,"cloud":100},{"t":"16:00Z","tp":61.9,"pop":9,"cloud":100},{"t":"17:00Z","tp":63.2,"pop":11,"cloud":100},{"t":"18:00Z","tp":66.3,"pop":13,"cloud":100},{"t":"19:00Z","tp":68.9,"pop":27,"cloud":100},{"t":"20:00Z","tp":70.0,"pop":24,"cloud":100},{"t":"21:00Z","tp":67.3,"pop":42,"cloud":100},{"t":"22:00Z","tp":64.9,"pop":49,"cloud":100},{"t":"23:00Z","tp":64.6,"pop":65,"cloud":100},{"t":"00:00Z","tp":62.7,"pop":66,"cloud":100},{"t":"01:00Z","tp":61.9,"pop":53,"cloud":100},{"t":"02:00Z","tp":61.1,"pop":39,"cloud":98}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
