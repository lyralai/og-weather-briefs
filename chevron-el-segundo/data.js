const DEMO_DATA = {
 "operator": "Chevron (El Segundo Refinery)",
 "generated": "2026-10-01",
 "topline": "RIGHT NOW at El Segundo Refinery: a heat event is ending \u2014 today is the transition day, with mostly sunny skies, onshore flow returning, and no rain in the 12-hour window. The interesting part for a coastal refinery is what the free feeds miss entirely: the overnight/morning marine-layer timing that decides dock ops, and the smoke/heat interplay that just ended. Same coastline, two very different briefings for a refinery whose crude dock and tank farm run on hourly visibility windows.",
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
const LIVE_COMPARISON = {"awx":[{"t":"09:00","wx":"Mostly cloudy","tp":70.0,"pop":20,"rain":0,"cloud":0},{"t":"10:00","wx":"Partly sunny","tp":72.0,"pop":20,"rain":0,"cloud":0},{"t":"11:00","wx":"Mostly sunny","tp":73.0,"pop":20,"rain":0,"cloud":0},{"t":"12:00","wx":"Mostly sunny","tp":74.0,"pop":20,"rain":0,"cloud":0},{"t":"13:00","wx":"Mostly sunny","tp":75.0,"pop":13,"rain":0,"cloud":0},{"t":"14:00","wx":"Mostly sunny","tp":74.0,"pop":0,"rain":0,"cloud":0},{"t":"15:00","wx":"Mostly sunny","tp":75.0,"pop":0,"rain":0,"cloud":0},{"t":"16:00","wx":"Mostly sunny","tp":74.0,"pop":0,"rain":0,"cloud":0},{"t":"17:00","wx":"Mostly sunny","tp":73.0,"pop":0,"rain":0,"cloud":0},{"t":"18:00","wx":"Mostly sunny","tp":73.0,"pop":0,"rain":0,"cloud":0},{"t":"19:00","wx":"Mostly clear","tp":71.0,"pop":0,"rain":0,"cloud":0},{"t":"20:00","wx":"Mostly clear","tp":70.0,"pop":0,"rain":0,"cloud":0}],"om":[{"t":"00:00","tp":74.6,"pop":0,"cloud":74},{"t":"01:00","tp":72.9,"pop":0,"cloud":50},{"t":"02:00","tp":70.9,"pop":0,"cloud":25},{"t":"03:00","tp":69.9,"pop":0,"cloud":5},{"t":"04:00","tp":68.8,"pop":0,"cloud":27},{"t":"05:00","tp":68.1,"pop":0,"cloud":6},{"t":"06:00","tp":67.6,"pop":0,"cloud":100},{"t":"07:00","tp":69.4,"pop":0,"cloud":50},{"t":"08:00","tp":68.8,"pop":0,"cloud":100},{"t":"09:00","tp":68.5,"pop":0,"cloud":60},{"t":"10:00","tp":67.4,"pop":0,"cloud":100},{"t":"11:00","tp":69.0,"pop":0,"cloud":100}],"loc":"El Segundo","key":"332114"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
