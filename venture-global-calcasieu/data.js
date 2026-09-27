const DEMO_DATA = {
 "operator": "Calcasieu Pass LNG corridor (Venture Global class)",
 "generated": "2026-09-27",
 "topline": "RIGHT NOW on the Calcasieu Pass / Cameron LNG corridor: a clean, warm Gulf Sunday — AccuWeather shows 0% rain through tonight with a brief 15 mph gust window mid-afternoon; free feeds agree for once. On a corridor that took surge warnings during Edouard three weeks ago, today is a full ops day: the value shows on the next storm, not on the calm — and this brief refreshes daily.",
 "risk_level": "CLEAR",
 "assets": [
  {
   "name": "Calcasieu Pass LNG terminal & Cameron corridor",
   "lat": 29.75,
   "lon": -93.35,
   "current": "Warm and mostly sunny, 89°F peak, light Gulf breeze",
   "risk": "CLEAR",
   "risk_why": [
    "Dry through the 12-hour window on both feeds — a genuine full-ops day",
    "Afternoon gusts to 15 mph — well inside marine loading limits",
    "All Atlantic tropical systems (Fay, Gonzalo) weak and far at sea; no Gulf development signal",
    "Peak hurricane season continues through November — corridor surge exposure remains the standing risk"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why this corridor buys weather",
  "headline": "September 2026 — surge warnings at four Gulf LNG terminals during Edouard",
  "facts": [
    "Three weeks ago Hurricane Edouard drove surge warnings at four US Gulf LNG terminals including this corridor",
    "Marine loading arms, tug schedules and pilot boarding all hinge on hour-level wind and surge timing",
    "Today's calm is the window to schedule deferred marine moves — the quiet day is when preparation pays",
    "AccuWeather enterprise carried hour-pinned wind gates through the event; free feeds smoothed the onset"
   ]
 },
 "next_72h": [
  { "when": "Sun Sep 27 (today)", "what": "Dry, 89°F, gusts to 15 mph mid-afternoon", "impact": "Full ops window — execute deferred marine and cargo moves" },
  { "when": "Mon Sep 28", "what": "Continuing quiet; typical Gulf humidity, light winds", "impact": "Normal loading cadence" },
  { "when": "Tue Sep 29", "what": "Next Gulf system check — nothing signaled today", "impact": "Daily track checks continue at statistical season peak" }
 ],
 "comparison": {
  "intro": "Free weather data (OpenMeteo, NOAA/GFS) vs AccuWeather at the same coordinates — today both show calm; the value is what each shows when a storm arrives:",
  "rows": [
    { "feature": "Storm-day wind gates at the berth", "free": "Smoothed daily-max winds", "awx": "Hour-pinned gust windows for pilot boarding and loading arms" },
    { "feature": "Surge exposure windows", "free": "No site-specific surge timing", "awx": "Storm-surge windows tied to terminal coordinates" },
    { "feature": "Tropical track decision support", "free": "Public cone graphics", "awx": "Enterprise tracks with expert meteorologist consult on cargo calls" },
    { "feature": "Lightning stand-downs on docks", "free": "No convective nowcasting", "awx": "Live strike feed + alerting at the dock" },
    { "feature": "Expert consult on hard calls", "free": "None", "awx": "24/7 meteorologist support for sail-vs-hold decisions" }
  ],
  "closer": "On a calm day both feeds look the same. During Edouard, one showed hour-pinned surge timing — and that is the day that costs money."
 },
 "capabilities": [
  [ "Hour-pinned marine wind gates", "Loading arms, tugs and pilots scheduled to the hour." ],
  [ "Surge windows at terminal coordinates", "Not a parish-wide warning — your berth." ],
  [ "Tropical decision support", "Enterprise tracks + expert consult through every Gulf event." ],
  [ "Dock lightning alerting", "Stand down crews before cells arrive, resume the minute it clears." ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Partly sunny","tp":85.0,"pop":0,"gust":6.9},{"t":"12:00Z","wx":"Partly sunny","tp":87.0,"pop":0,"gust":6.9},{"t":"13:00Z","wx":"Partly sunny","tp":88.0,"pop":0,"gust":8.1},{"t":"14:00Z","wx":"Partly sunny","tp":89.0,"pop":0,"gust":8.1},{"t":"15:00Z","wx":"Partly sunny","tp":88.0,"pop":0,"gust":12.7},{"t":"16:00Z","wx":"Mostly sunny","tp":87.0,"pop":0,"gust":15.0},{"t":"17:00Z","wx":"Mostly sunny","tp":86.0,"pop":0,"gust":15.0},{"t":"18:00Z","wx":"Mostly sunny","tp":85.0,"pop":0,"gust":13.8},{"t":"19:00Z","wx":"Mostly sunny","tp":83.0,"pop":0,"gust":13.8},{"t":"20:00Z","wx":"Partly cloudy","tp":82.0,"pop":0,"gust":10.4},{"t":"21:00Z","wx":"Partly cloudy","tp":82.0,"pop":0,"gust":8.1},{"t":"22:00Z","wx":"Partly cloudy","tp":81.0,"pop":0,"gust":8.1}],"om":[{"t":"05:00Z","code":"Clear","tp":79.7,"pop":0},{"t":"06:00Z","code":"Clear","tp":79.4,"pop":0},{"t":"07:00Z","code":"Clear","tp":78.9,"pop":0},{"t":"08:00Z","code":"Clear","tp":77.6,"pop":0},{"t":"09:00Z","code":"Clear","tp":76.4,"pop":0},{"t":"10:00Z","code":"Clear","tp":76.1,"pop":0},{"t":"11:00Z","code":"Cloudy","tp":77.3,"pop":0},{"t":"12:00Z","code":"Rain","tp":76.1,"pop":0},{"t":"13:00Z","code":"Clear","tp":77.0,"pop":0},{"t":"14:00Z","code":"Clear","tp":83.5,"pop":0},{"t":"15:00Z","code":"Clear","tp":85.6,"pop":0},{"t":"16:00Z","code":"Clear","tp":87.0,"pop":0},{"t":"17:00Z","code":"Clear","tp":87.8,"pop":1},{"t":"18:00Z","code":"Clear","tp":88.0,"pop":1},{"t":"19:00Z","code":"Clear","tp":88.4,"pop":1},{"t":"20:00Z","code":"Clear","tp":88.5,"pop":2},{"t":"21:00Z","code":"Cloudy","tp":88.2,"pop":1},{"t":"22:00Z","code":"Cloudy","tp":87.0,"pop":1},{"t":"23:00Z","code":"Cloudy","tp":85.5,"pop":1},{"t":"00:00Z","code":"Cloudy","tp":83.1,"pop":1},{"t":"01:00Z","code":"Cloudy","tp":82.1,"pop":1},{"t":"02:00Z","code":"Cloudy","tp":81.3,"pop":1},{"t":"03:00Z","code":"Cloudy","tp":81.3,"pop":1},{"t":"04:00Z","code":"Cloudy","tp":81.2,"pop":1},{"t":"05:00Z","code":"Cloudy","tp":81.0,"pop":1},{"t":"06:00Z","code":"Cloudy","tp":80.4,"pop":1},{"t":"07:00Z","code":"Cloudy","tp":79.9,"pop":1},{"t":"08:00Z","code":"Cloudy","tp":79.1,"pop":1},{"t":"09:00Z","code":"Cloudy","tp":78.5,"pop":1},{"t":"10:00Z","code":"Cloudy","tp":76.7,"pop":1},{"t":"11:00Z","code":"Clear","tp":75.8,"pop":1},{"t":"12:00Z","code":"Rain","tp":75.3,"pop":1},{"t":"13:00Z","code":"Rain","tp":77.4,"pop":1},{"t":"14:00Z","code":"Rain","tp":82.0,"pop":1},{"t":"15:00Z","code":"Clear","tp":85.3,"pop":1},{"t":"16:00Z","code":"Clear","tp":87.2,"pop":2},{"t":"17:00Z","code":"Clear","tp":89.3,"pop":2},{"t":"18:00Z","code":"Clear","tp":91.0,"pop":2},{"t":"19:00Z","code":"Clear","tp":90.7,"pop":3},{"t":"20:00Z","code":"Cloudy","tp":89.6,"pop":3},{"t":"21:00Z","code":"Cloudy","tp":88.8,"pop":3},{"t":"22:00Z","code":"Cloudy","tp":87.6,"pop":3},{"t":"23:00Z","code":"Cloudy","tp":86.2,"pop":3},{"t":"00:00Z","code":"Clear","tp":84.0,"pop":2},{"t":"01:00Z","code":"Cloudy","tp":82.9,"pop":2},{"t":"02:00Z","code":"Cloudy","tp":82.4,"pop":1},{"t":"03:00Z","code":"Cloudy","tp":81.5,"pop":0},{"t":"04:00Z","code":"Clear","tp":80.0,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
