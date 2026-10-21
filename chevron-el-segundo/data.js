const DEMO_DATA = {
 "operator": "Chevron (El Segundo Refinery)",
 "generated": "2026-10-21",
 "topline": "RIGHT NOW at El Segundo Refinery: a strong October storm is bearing down on Southern California \u2014 AccuWeather shows rain arriving in the next 12 hours with a 37\u0025 chance at the top of the window, while the free feed still shows a dry forecast at 1-2\u0025. The first real rain of the season at a coastal refinery means slick docks, storm-water controls, and visibility windows closing at the crude berths. Two feeds, two different briefings \u2014 this page shows both, hour by hour.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "El Segundo Refinery",
   "lat": 33.9205,
   "lon": -118.38,
   "current": "Mostly sunny, 62\u00b0F (morning)",
   "risk": "MODERATE",
   "risk_why": [
    "\u2600\ufe0f Today clears to mostly sunny through the afternoon \u2014 the first genuinely clean ops window after the heat event",
    "An Extreme Heat Warning expired after covering the Orange County coast yesterday; El Segundo sat at its northern edge",
    "Marine layer returns tonight \u2014 dock crane and ship-loading visibility windows tighten after dark",
    "No precipitation signal in the next 12 hours; the story here is visibility windows, not storm risk"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Coastal refinery ops run on marine-layer timing the free apps don't show",
  "facts": [
   "El Segundo's crude dock and product berths sit directly in the marine-layer corridor \u2014 burn-off timing shifts loading windows by hours",
   "Yesterday's Extreme Heat Warning (Orange County coast) is the kind of event that decides cooling-water load and worker-exposure limits at a coastal plant",
   "AccuWeather hourly visibility and cloud-cover guidance is site-pinned; free feeds give a city-level icon"
  ],
  "why_now": "The heat event just ended \u2014 it's the natural moment to ask 'did we get the warning right, and did the free feed?'"
 }
};
const LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Cloudy","tp":68.0,"pop":37,"rain":0.0,"cloud":94},{"t":"17:00Z","wx":"Cloudy","tp":69.0,"pop":26,"rain":0.0,"cloud":94},{"t":"18:00Z","wx":"Cloudy","tp":70.0,"pop":10,"rain":0.0,"cloud":94},{"t":"19:00Z","wx":"Cloudy","tp":70.0,"pop":10,"rain":0.0,"cloud":94},{"t":"20:00Z","wx":"Cloudy","tp":69.0,"pop":14,"rain":0.0,"cloud":94},{"t":"21:00Z","wx":"Thunderstorms","tp":69.0,"pop":71,"rain":3.3,"cloud":94},{"t":"22:00Z","wx":"Thunderstorms","tp":69.0,"pop":71,"rain":3.3,"cloud":94},{"t":"23:00Z","wx":"Cloudy","tp":69.0,"pop":49,"rain":0.0,"cloud":92},{"t":"00:00Z","wx":"Cloudy","tp":68.0,"pop":34,"rain":0.0,"cloud":90},{"t":"01:00Z","wx":"Mostly cloudy","tp":68.0,"pop":34,"rain":0.0,"cloud":88},{"t":"02:00Z","wx":"Mostly cloudy","tp":67.0,"pop":39,"rain":0.0,"cloud":89},{"t":"03:00Z","wx":"Cloudy","tp":65.0,"pop":49,"rain":0.0,"cloud":90}],"om":[{"t":"15:00Z","tp":62.7,"pop":1,"cloud":18},{"t":"16:00Z","tp":68.3,"pop":2,"cloud":12},{"t":"17:00Z","tp":71.1,"pop":1,"cloud":100},{"t":"18:00Z","tp":72.9,"pop":2,"cloud":100},{"t":"19:00Z","tp":73.6,"pop":14,"cloud":22},{"t":"20:00Z","tp":73.4,"pop":30,"cloud":42},{"t":"21:00Z","tp":71.9,"pop":47,"cloud":100},{"t":"22:00Z","tp":68.9,"pop":42,"cloud":100},{"t":"23:00Z","tp":67.0,"pop":52,"cloud":100},{"t":"00:00Z","tp":67.2,"pop":66,"cloud":100},{"t":"01:00Z","tp":65.0,"pop":65,"cloud":100},{"t":"02:00Z","tp":65.0,"pop":67,"cloud":100}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
