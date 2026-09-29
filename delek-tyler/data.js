const DEMO_DATA = {
 "operator": "Delek US — Tyler Refinery",
 "generated": "2026-09-29",
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
LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Partly sunny w/ a t-shower","tp":84.0,"pop":38,"gust":22.0},{"t":"17:00Z","wx":"Partly sunny w/ a t-shower","tp":83.0,"pop":35,"gust":24.0},{"t":"18:00Z","wx":"Intermittent clouds","tp":81.0,"pop":22,"gust":26.0},{"t":"19:00Z","wx":"Mostly cloudy","tp":79.0,"pop":28,"gust":29.0},{"t":"20:00Z","wx":"Mostly cloudy","tp":77.0,"pop":31,"gust":32.0},{"t":"21:00Z","wx":"Cloudy w/ showers","tp":75.0,"pop":44,"gust":35.0},{"t":"22:00Z","wx":"T-storms","tp":73.0,"pop":51,"gust":38.0},{"t":"23:00Z","wx":"Showers w/ t-storms","tp":72.0,"pop":48,"gust":34.0},{"t":"00:00Z","wx":"Showers tapering","tp":71.0,"pop":29,"gust":33.0},{"t":"01:00Z","wx":"Cloudy","tp":71.0,"pop":28,"gust":28.0},{"t":"02:00Z","wx":"Cloudy","tp":72.0,"pop":17,"gust":34.0},{"t":"03:00Z","wx":"Mostly cloudy","tp":72.0,"pop":12,"gust":34.0}],"om":[{"t":"16:00Z","code":"Cloudy","tp":89.0,"pop":2},{"t":"17:00Z","code":"Overcast","tp":89.0,"pop":2},{"t":"18:00Z","code":"Overcast","tp":89.0,"pop":2},{"t":"19:00Z","code":"Overcast","tp":86.0,"pop":2},{"t":"20:00Z","code":"Overcast","tp":83.0,"pop":2},{"t":"21:00Z","code":"Overcast","tp":82.0,"pop":3},{"t":"22:00Z","code":"Overcast","tp":81.0,"pop":3},{"t":"23:00Z","code":"Overcast","tp":80.0,"pop":7},{"t":"00:00Z","code":"Overcast","tp":79.0,"pop":15},{"t":"01:00Z","code":"Overcast","tp":79.0,"pop":21},{"t":"02:00Z","code":"Rain","tp":73.0,"pop":29},{"t":"03:00Z","code":"Snow/RA?","tp":71.0,"pop":29}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
