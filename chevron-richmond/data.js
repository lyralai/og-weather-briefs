const DEMO_DATA = {
 "operator": "Chevron (Richmond Refinery)",
 "generated": "2026-10-02",
 "topline": "RIGHT NOW at Richmond: the heat event is ending on a cool note — 59°F and mostly cloudy this morning, clearing to 64°F+ by evening with zero rain in the window. The Bay refinery story is marine-layer burn-off timing: Long Wharf crude offloading runs on visibility windows, and this morning's cloud deck is exactly the kind of hour the free feeds render as a generic 'cloudy' icon while dock schedules wait on real burn-off timing.",
 "risk_level": "LOW",
 "assets": [
  {
   "name": "Richmond Refinery",
   "lat": 37.94,
   "lon": -122.36,
   "current": "Mostly cloudy, 59°F",
   "risk": "LOW",
   "risk_why": [
    "☁️ Marine layer holds through mid-morning; Long Wharf visibility windows tighten until burn-off",
    "Zero precipitation probability across the 12-hour window — dry ops",
    "Extreme Heat Warning expired for inland East Bay; coastal site stays cool all day",
    "Gale Warning active in nearby coastal waters per Atlas board — small-craft advisories on the approach"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Marine-layer burn-off timing the free apps don't carry",
  "facts": [
   "Richmond's Long Wharf crude berth sits in the Bay marine-layer corridor — burn-off timing shifts offload windows by hours",
   "AccuWeather hourly cloud-cover + visibility guidance is site-pinned; free feeds give a city-level icon",
   "Yesterday's regional Extreme Heat Warning is the natural 'did we get the warning right?' conversation starter"
  ],
  "why_now": "Heat just ended; marine layer is back tonight — the two-hour burn-off miss is a real cost at a crude berth."
 }
};
const LIVE_COMPARISON = {"awx":[{"t":"09:00","wx":"Mostly cloudy","tp":59.0,"pop":0,"rain":0,"cloud":77},{"t":"10:00","wx":"Mostly cloudy","tp":62.0,"pop":0,"rain":0,"cloud":76},{"t":"11:00","wx":"Mostly cloudy","tp":65.0,"pop":0,"rain":0,"cloud":76},{"t":"12:00","wx":"Mostly cloudy","tp":69.0,"pop":0,"rain":0,"cloud":76},{"t":"13:00","wx":"Mostly cloudy","tp":72.0,"pop":0,"rain":0,"cloud":76},{"t":"14:00","wx":"Partly sunny","tp":74.0,"pop":0,"rain":0,"cloud":40},{"t":"15:00","wx":"Partly sunny","tp":75.0,"pop":0,"rain":0,"cloud":41},{"t":"16:00","wx":"Partly sunny","tp":74.0,"pop":0,"rain":0,"cloud":42},{"t":"17:00","wx":"Partly sunny","tp":72.0,"pop":0,"rain":0,"cloud":40},{"t":"18:00","wx":"Partly sunny","tp":70.0,"pop":0,"rain":0,"cloud":33},{"t":"19:00","wx":"Mostly clear","tp":67.0,"pop":0,"rain":0,"cloud":26},{"t":"20:00","wx":"Mostly clear","tp":64.0,"pop":0,"rain":0,"cloud":26}],"om":[{"t":"09:00","tp":58.9,"pop":0,"cloud":0},{"t":"10:00","tp":61.3,"pop":0,"cloud":0},{"t":"11:00","tp":64.3,"pop":0,"cloud":0},{"t":"12:00","tp":69.6,"pop":0,"cloud":0},{"t":"13:00","tp":71.1,"pop":0,"cloud":0},{"t":"14:00","tp":73.4,"pop":0,"cloud":0},{"t":"15:00","tp":75.8,"pop":0,"cloud":0},{"t":"16:00","tp":73.0,"pop":0,"cloud":0},{"t":"17:00","tp":70.4,"pop":0,"cloud":0},{"t":"18:00","tp":66.7,"pop":0,"cloud":0},{"t":"19:00","tp":63.9,"pop":0,"cloud":0},{"t":"20:00","tp":61.5,"pop":0,"cloud":0}],"loc":"Richmond CA","key":"337216"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
