const DEMO_DATA = {
 "operator": "Delek US — Tyler Refinery",
 "generated": "2026-09-27",
 "topline": "RIGHT NOW at the Tyler refinery (60 kbd, East TX): a quiet hot Sunday on the free feeds — but AccuWeather hourly carries a 51% thunderstorm window at 8 PM tonight that OpenMeteo renders as 1-2% all evening. On a refinery in tornado alley with tank work and night-shift inspections to schedule, the feed that shows the storm window is the feed that keeps crews off tank tops at the wrong hour.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Tyler Refinery",
   "lat": 32.35,
   "lon": -95.3,
   "current": "Hot and mostly sunny, 92-93°F peak",
   "risk": "MODERATE",
   "risk_why": [
    "Heat peaking 92-93°F mid-afternoon — second consecutive heat day for outdoor crews and unit inspections",
    "AccuWeather hourly carries a thunderstorm signal at 8-9 PM tonight (PoP 51%/47%) — first real storm window of the weekend",
    "Free GFS-based feeds show 1-2% rain all evening — the storm window is invisible on the free data",
    "East TX storm climatology: September convection fires late-day; lightning stand-downs on tank work are the operational question tonight"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why Tyler ops watch weather closely",
  "headline": "East Texas refinery weather: heat, lightning and the autumn storm corridor",
  "facts": [
    "Tyler sits in the East TX corridor where late-September boundaries trigger evening thunderstorms as the first cool fronts arrive",
    "Lightning stand-downs on tank farms and loading racks are routine ops decisions — timing is everything",
    "AccuWeather carries tonight's 8-9 PM storm window hour-by-hour; the free feed shows a bone-dry evening",
    "Same stalled boundary that flooded Midwest operators this month sits north of Tyler — the corridor is primed"
  ]
 },
 "next_72h": [
  { "when": "Sun Sep 27 (today)", "what": "Hot 92-93°F, then AccuWeather storm window 8-9 PM (51% PoP) — free feed 1-2%", "impact": "Schedule tank/roof work before 6 PM; hold night-shift lifts for the storm window" },
  { "when": "Mon Sep 28", "what": "Slightly cooler, morning storm remnants clearing; gusty outflow possible", "impact": "Re-secure loose scaffolding; verify drainage after overnight rain" },
  { "when": "Tue Sep 29", "what": "Returning to typical late-September heat, mostly dry", "impact": "Full ops window; backlog deferred maintenance" }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here is what each says about tonight at Tyler — same coordinates, same minute:",
  "rows": [
    { "feature": "Tonight's storm window (8-9 PM)", "free": "1-2% rain all evening — no signal", "awx": "Thunderstorms, 51% PoP at 8 PM, hour-pinned" },
    { "feature": "Lightning stand-down timing", "free": "No convective nowcasting", "awx": "Hour-by-hour onset with live strike feed tied to your coordinates" },
    { "feature": "Heat-stress planning", "free": "Daily max only", "awx": "Hourly heat curve for crew rotation and inspection windows" },
    { "feature": "Alert escalation", "free": "Generic county products", "awx": "Thresholds pinned to the refinery fence line" },
    { "feature": "Expert consult on hard calls", "free": "None", "awx": "24/7 meteorologist support for stand-down vs continue decisions" }
  ],
  "closer": "Free data says 1% tonight. AccuWeather shows a 51% storm window at 8 PM — the difference between a planned stand-down and a surprised night shift."
 },
 "capabilities": [
  [ "Hourly storm-window timing at the fence line", "Windows tied to the refinery, not a county average." ],
  [ "Lightning-aware tank & rack scheduling", "Strike-feed alerting before cells arrive." ],
  [ "Threshold alerting per unit", "Your triggers, auto-escalation, nobody watching radar at 8 PM." ],
  [ "Heat-stress crew rotation planning", "Hourly heat curves for inspection and turnaround windows." ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Partly sunny","tp":81.0,"pop":13,"gust":6.9},{"t":"12:00Z","wx":"Mostly sunny","tp":85.0,"pop":9,"gust":6.9},{"t":"13:00Z","wx":"Mostly sunny","tp":89.0,"pop":6,"gust":6.9},{"t":"14:00Z","wx":"Mostly sunny","tp":91.0,"pop":0,"gust":6.9},{"t":"15:00Z","wx":"Mostly sunny","tp":92.0,"pop":0,"gust":6.9},{"t":"16:00Z","wx":"Mostly sunny","tp":92.0,"pop":0,"gust":6.9},{"t":"17:00Z","wx":"Mostly sunny","tp":93.0,"pop":0,"gust":8.1},{"t":"18:00Z","wx":"Mostly sunny","tp":91.0,"pop":0,"gust":8.1},{"t":"19:00Z","wx":"Mostly sunny","tp":88.0,"pop":3,"gust":9.2},{"t":"20:00Z","wx":"Thunderstorms","tp":85.0,"pop":51,"gust":8.1},{"t":"21:00Z","wx":"Mostly cloudy","tp":82.0,"pop":47,"gust":8.1},{"t":"22:00Z","wx":"Mostly cloudy","tp":81.0,"pop":35,"gust":8.1}],"om":[{"t":"05:00Z","code":"Cloudy","tp":71.7,"pop":0},{"t":"06:00Z","code":"Cloudy","tp":70.4,"pop":0},{"t":"07:00Z","code":"Cloudy","tp":70.8,"pop":0},{"t":"08:00Z","code":"Cloudy","tp":70.1,"pop":1},{"t":"09:00Z","code":"Clear","tp":69.1,"pop":0},{"t":"10:00Z","code":"Clear","tp":68.1,"pop":0},{"t":"11:00Z","code":"Clear","tp":68.9,"pop":0},{"t":"12:00Z","code":"Clear","tp":68.0,"pop":0},{"t":"13:00Z","code":"Clear","tp":68.2,"pop":0},{"t":"14:00Z","code":"Clear","tp":75.6,"pop":0},{"t":"15:00Z","code":"Clear","tp":80.7,"pop":0},{"t":"16:00Z","code":"Clear","tp":85.0,"pop":0},{"t":"17:00Z","code":"Clear","tp":87.6,"pop":0},{"t":"18:00Z","code":"Clear","tp":90.0,"pop":1},{"t":"19:00Z","code":"Cloudy","tp":91.4,"pop":1},{"t":"20:00Z","code":"Cloudy","tp":92.4,"pop":1},{"t":"21:00Z","code":"Cloudy","tp":93.0,"pop":1},{"t":"22:00Z","code":"Cloudy","tp":92.9,"pop":2},{"t":"23:00Z","code":"Cloudy","tp":91.3,"pop":2},{"t":"00:00Z","code":"Cloudy","tp":88.4,"pop":1},{"t":"01:00Z","code":"Cloudy","tp":84.9,"pop":1},{"t":"02:00Z","code":"Cloudy","tp":83.0,"pop":1},{"t":"03:00Z","code":"Cloudy","tp":81.4,"pop":1},{"t":"04:00Z","code":"Cloudy","tp":79.8,"pop":1},{"t":"05:00Z","code":"Cloudy","tp":79.1,"pop":1},{"t":"06:00Z","code":"Cloudy","tp":77.6,"pop":3},{"t":"07:00Z","code":"Clear","tp":75.9,"pop":2},{"t":"08:00Z","code":"Cloudy","tp":75.6,"pop":3},{"t":"09:00Z","code":"Cloudy","tp":74.0,"pop":8},{"t":"10:00Z","code":"Cloudy","tp":73.6,"pop":10},{"t":"11:00Z","code":"Clear","tp":72.3,"pop":8},{"t":"12:00Z","code":"Clear","tp":71.7,"pop":6},{"t":"13:00Z","code":"Cloudy","tp":73.5,"pop":9},{"t":"14:00Z","code":"Rain","tp":78.8,"pop":8},{"t":"15:00Z","code":"Clear","tp":83.3,"pop":8},{"t":"16:00Z","code":"Rain","tp":87.3,"pop":3},{"t":"17:00Z","code":"Rain","tp":90.0,"pop":2},{"t":"18:00Z","code":"Rain","tp":91.6,"pop":4},{"t":"19:00Z","code":"Rain","tp":92.4,"pop":8},{"t":"20:00Z","code":"Cloudy","tp":92.7,"pop":10},{"t":"21:00Z","code":"Cloudy","tp":90.6,"pop":9},{"t":"22:00Z","code":"Cloudy","tp":92.1,"pop":14},{"t":"23:00Z","code":"Rain","tp":79.7,"pop":16},{"t":"00:00Z","code":"Cloudy","tp":78.1,"pop":14},{"t":"01:00Z","code":"Cloudy","tp":77.9,"pop":7},{"t":"02:00Z","code":"Cloudy","tp":78.0,"pop":5},{"t":"03:00Z","code":"Cloudy","tp":79.1,"pop":1},{"t":"04:00Z","code":"Cloudy","tp":79.6,"pop":1}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
