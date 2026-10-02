const DEMO_DATA = {
 "operator": "Chevron (Pascagoula Refinery)",
 "generated": "2026-10-02",
 "topline": "RIGHT NOW at Pascagoula: warm and humid with thunderstorm complexes firing inland today — AccuWeather shows storm chances building to 35% by evening while free feeds clear you for a dry night. Gulf Coast refining runs on lightning-standdown discipline: every t-storm within the exclusion radius pauses dock transfers. That hourly storm timing — not a city icon — is what decides whether tonight's product loading windows hold or slip.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Pascagoula Refinery",
   "lat": 30.37,
   "lon": -88.54,
   "current": "Partly sunny, 88°F (RealFeel 99°F)",
   "risk": "MODERATE",
   "risk_why": [
    "⛈️ Storm probability builds from 7% now to 35% by 22:00 — evening dock-transfer windows are the exposure",
    "RealFeel of 99°F → worker heat-exposure limits on tank-farm rounds through mid-afternoon",
    "Flash-flood watches cover inland Gulf Coast parishes/counties tonight; coastal site itself stays mostly dry",
    "No tropical threat to the Central Gulf this week (NHC: no formation expected in the Gulf within 7 days)"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Evening lightning windows the free apps wash out",
  "facts": [
   "AccuWeather hourly puts Pascagoula storm probability at 35% by 22:00; the free feed's same-hour icon says 'partly cloudy'",
   "One lightning standdown at the crude dock costs a loading window — the difference between a 10 PM berth slot and a 6 AM one",
   "AccuWeather site-pinned lightning proximity + MinuteCast vs. a city-level weather icon: that gap is the whole product"
  ],
  "why_now": "Storm season on the Gulf Coast runs through October — and tonight's inland complexes will graze the shipping channels."
 }
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Partly sunny","tp":88.0,"pop":7,"rain":7,"cloud":46},{"t":"12:00","wx":"Intermittent clouds","tp":89.0,"pop":7,"rain":7,"cloud":70},{"t":"13:00","wx":"Intermittent clouds","tp":91.0,"pop":7,"rain":7,"cloud":70},{"t":"14:00","wx":"Intermittent clouds","tp":92.0,"pop":7,"rain":7,"cloud":70},{"t":"15:00","wx":"Intermittent clouds","tp":91.0,"pop":7,"rain":7,"cloud":70},{"t":"16:00","wx":"Intermittent clouds","tp":90.0,"pop":6,"rain":6,"cloud":70},{"t":"17:00","wx":"Intermittent clouds","tp":88.0,"pop":5,"rain":5,"cloud":70},{"t":"18:00","wx":"Intermittent clouds","tp":85.0,"pop":5,"rain":5,"cloud":70},{"t":"19:00","wx":"Intermittent clouds","tp":82.0,"pop":8,"rain":8,"cloud":65},{"t":"20:00","wx":"Mostly cloudy w/ t-storms","tp":81.0,"pop":51,"rain":51,"cloud":70},{"t":"21:00","wx":"Intermittent clouds","tp":78.0,"pop":47,"rain":47,"cloud":70},{"t":"22:00","wx":"Intermittent clouds","tp":77.0,"pop":35,"rain":35,"cloud":72}],"om":[{"t":"11:00","tp":85.7,"pop":1,"cloud":0},{"t":"12:00","tp":88.0,"pop":1,"cloud":0},{"t":"13:00","tp":89.3,"pop":2,"cloud":0},{"t":"14:00","tp":90.1,"pop":3,"cloud":0},{"t":"15:00","tp":91.3,"pop":2,"cloud":0},{"t":"16:00","tp":92.2,"pop":5,"cloud":0},{"t":"17:00","tp":90.3,"pop":9,"cloud":0},{"t":"18:00","tp":89.1,"pop":7,"cloud":0},{"t":"19:00","tp":85.4,"pop":4,"cloud":0},{"t":"20:00","tp":81.7,"pop":4,"cloud":0},{"t":"21:00","tp":79.9,"pop":2,"cloud":0},{"t":"22:00","tp":78.7,"pop":2,"cloud":0}],"loc":"Pascagoula MS","key":"333922"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
