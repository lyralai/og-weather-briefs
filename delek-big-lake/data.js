const DEMO_DATA = {
 "operator": "Delek US",
 "generated": "2026-09-25",
 "topline": "RIGHT NOW in the Permian's Central Basin: flash-flood emergency \u2014 AccuWeather carries 'Dangerous Weather Imminent' flash flooding flags across Gaines, Yoakum and Cochran county oil & gas fields while a broad NWS Flood Watch covers the entire Texas-New Mexico Permian corridor. Heavy rain is falling on Big Lake tank batteries and drilling pads right now.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Big Lake / Central Basin operations",
   "lat": 31.19,
   "lon": -101.44,
   "current": "Rain, 80\u00b0F, storms nearby",
   "risk": "ELEVATED",
   "risk_why": [
    "AccuWeather Dangerous Weather Imminent flash-flood flag active across Central Basin field counties today",
    "1-3\" rain rates under training storms \u2014 produced-water pits, tank-farm containment and caliche roads at risk",
    "Lightning in feed: 8,000 strikes on the board \u2014 temporary shutdowns for frac/wireline crews likely",
    "Free feeds show 20% PoP here \u2014 a fraction of the convective signal AccuWeather carries at the field"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Today \u2014 it's live, not a near miss",
  "headline": "Flash-flood emergency across the Permian: AWX imminent flags on producing fields while free feeds show ~20% rain chances",
  "facts": [
   "AccuWeather alert engine flags dangerous flash flooding imminent on named Permian field assets right now",
   "NWS Flood Watch covers Eddy/Lea (NM) through Gaines/Yoakum/Cochran (TX) \u2014 a two-state producing corridor",
   "Rain-rate timing decides stand-down vs push-through on frac spreads and workover rigs",
   "Free 3-hour data misses the training-band training entirely \u2014 the exact cells over tank batteries"
  ]
 },
 "next_72h": [
  {
   "when": "Fri Sep 25 (today)",
   "what": "Heavy rain, embedded storms, flash-flood warnings expanding; AccuWeather PoP 85%+ midday vs free feed 20%",
   "impact": "Suspend pad moves; check containment berms and produced-water pit freeboard"
  },
  {
   "when": "Sat Sep 26",
   "what": "Storms shift east, drier west; residual flood watch on low-water crossings",
   "impact": "Delayed logistics; caliche road access re-check before crew changes"
  },
  {
   "when": "Sun Sep 27",
   "what": "Clearing and warming",
   "impact": "Full ops window \u2014 back-log deferred workover and frac jobs"
  }
 ],
 "comparison": {
  "intro": "Your teams can pull free weather data (OpenMeteo, NOAA/GFS). Here's what each tells you about Permian field ops \u2014 and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Flash-flood rain rates at YOUR field blocks",
    "free": "3-hr smoothed PoP on a coarse grid",
    "awx": "Hour-by-hour rain intensity pinned to field coordinates with imminent-danger flags"
   },
   {
    "feature": "Lightning stand-down windows",
    "free": "No convective nowcasting",
    "awx": "Live strike feed + alerting tied to your pad coordinates"
   },
   {
    "feature": "Road/logistics flooding",
    "free": "Zone text advisories, hours late",
    "awx": "Site-specific rain timing for low-water crossings and caliche routes"
   },
   {
    "feature": "Alert escalation at operating thresholds",
    "free": "Generic public products",
    "awx": "Auto-escalation tied to your stand-down triggers"
   },
   {
    "feature": "Expert consult on hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for shut-down vs continue decisions"
   }
  ],
  "closer": "Free data says 20% chance of rain. AccuWeather flagged dangerous flash flooding on the field two hours ago."
 },
 "capabilities": [
  [
   "Hourly rain rate at field-block resolution",
   "Windows tied to your leases, not a county average."
  ],
  [
   "Lightning-aware frac & workover scheduling",
   "Strike-feed alerting to stand down crews before cells arrive."
  ],
  [
   "Threshold alerting per pad",
   "Your triggers, auto-escalation, nobody watching radar at 3 AM."
  ],
  [
   "Flood logistics guidance",
   "Rain timing mapped to crossings, routes and caliche road load limits."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Intermittent clouds","tp":80.0,"pop":7,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"12:00Z","wx":"Intermittent clouds","tp":83.0,"pop":7,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"13:00Z","wx":"Intermittent clouds","tp":85.0,"pop":9,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"14:00Z","wx":"Mostly cloudy","tp":87.0,"pop":14,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"15:00Z","wx":"Mostly cloudy","tp":89.0,"pop":14,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"16:00Z","wx":"Mostly cloudy","tp":90.0,"pop":18,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"17:00Z","wx":"Thunderstorms","tp":89.0,"pop":51,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"18:00Z","wx":"Mostly cloudy","tp":87.0,"pop":47,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"19:00Z","wx":"Mostly cloudy","tp":86.0,"pop":36,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"20:00Z","wx":"Partly cloudy","tp":84.0,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"21:00Z","wx":"Partly cloudy","tp":81.0,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"22:00Z","wx":"Partly cloudy","tp":80.0,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}}],"om":[{"t":"16:00Z","code":"Clear","tp":81.3,"pop":0},{"t":"17:00Z","code":"Clear","tp":84.4,"pop":1},{"t":"18:00Z","code":"Overcast","tp":86.9,"pop":1},{"t":"19:00Z","code":"Overcast","tp":88.3,"pop":1},{"t":"20:00Z","code":"Overcast","tp":89.2,"pop":1},{"t":"21:00Z","code":"Overcast","tp":89.4,"pop":1},{"t":"22:00Z","code":"Overcast","tp":88.9,"pop":3},{"t":"23:00Z","code":"Overcast","tp":88.1,"pop":4},{"t":"00:00Z","code":"Overcast","tp":86.3,"pop":4},{"t":"01:00Z","code":"Overcast","tp":83.3,"pop":6},{"t":"02:00Z","code":"Overcast","tp":81.6,"pop":5},{"t":"03:00Z","code":"Overcast","tp":80.4,"pop":4}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
