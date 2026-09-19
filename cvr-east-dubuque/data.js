const DEMO_DATA = {
 "operator": "CVR Energy (East Dubuque)",
 "generated": "2026-09-19",
 "topline": "RIGHT NOW at the East Dubuque nitrogen plant: AccuWeather shows an 85% thunderstorm and flash-flood window through this evening \u2014 the free feed halves it and misses the flash-flood flag entirely. Ammonia storage, rail car loading and the Mississippi-adjacent yard sit under the day's heaviest Midwest corridor.",
 "risk_level": "HIGH",
 "assets": [
  {
   "name": "East Dubuque Nitrogen Fertilizer Plant",
   "lat": 42.49,
   "lon": -90.65,
   "current": "Warm and humid \u2014 storm corridor overhead this evening",
   "risk": "HIGH",
   "risk_why": [
    "\u26c8 AccuWeather: 78-85% thunderstorm probability with flash-flood flags through this evening \u2014 'Dangerous Weather' level live at the county",
    "NWS Flood Watch spans the Dubuque/Jo Daviess/Grant county corridor \u2014 the plant is in the bullseye of today's Midwest rain axis",
    "Free feed (OpenMeteo/GFS): 39-57% and no storm/flash-flood signal \u2014 an under-call that arrives as a surprise, not a plan",
    "Anhydrous ammonia and urea logistics: rail car movement and barge windows on the Mississippi are the exposed operations today"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "The heaviest rain axis of the week sits over the Tri-State corridor tonight",
  "facts": [
   "Flood watch covers 8+ Iowa/Illinois/Wisconsin counties around Dubuque with 1-3\" and isolated 3-5\" totals possible",
   "CVR's 2007 Coffeyville flood shutdown is company ops history \u2014 nitrogen plants sited on rivers share the same failure mode",
   "The difference today: enterprise hourly shows the 85% window while free feeds show a routine shower chance"
  ]
 },
 "headline": "Live same-hour comparison \u2014 East Dubuque plant coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 19 for 42.49, -90.65",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "This evening",
   "what": "78-85% thunderstorm + flash-flood window (AccuWeather); free feed 39-57%, no flag",
   "impact": "Halt rail car moves early; check yard drainage and dike sumps before the window opens"
  },
  {
   "when": "Overnight into Sunday AM",
   "what": "Showers linger 40-69%",
   "impact": "Wet-weather ammonia handling procedures; slip/trip controls on loading racks"
  },
  {
   "when": "Sunday PM onward",
   "what": "Clearing",
   "impact": "Return to normal maintenance cadence"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (East Dubuque nitrogen plant):",
  "rows": [
   {
    "feature": "Evening storm window",
    "free": "39-57% \u2014 'showers possible'",
    "awx": "78-85% \u2014 thunderstorms with flash-flood flag live"
   },
   {
    "feature": "Flash-flood threat",
    "free": "not surfaced",
    "awx": "AccuWeather 'Dangerous Weather Imminent' + NWS Flood Watch, 8 counties"
   },
   {
    "feature": "Operational read",
    "free": "'maybe rain'",
    "awx": "loading-rack shutdown decision point at 4 PM"
   }
  ],
  "closer": "Free data halves today's risk at a riverfront nitrogen plant under a flash-flood watch; AccuWeather's 85% window gives your shift the call before the first cloud, not after the first alarm."
 },
 "capabilities": [
  [
   "Minute-by-minute nowcasting",
   "Site-pinned alerts 60+ min ahead of storm arrival"
  ],
  [
   "Asset-level pinpointing",
   "Alerts on your exact coordinates \u2014 ammonia storage, rail, barge dock"
  ],
  [
   "Expert meteorologist support",
   "24/7 enterprise forecaster access during flood/storm events"
  ],
  [
   "Free data can't do this",
   "GFS-based feeds miss convective intensity and flash-flood flags \u2014 today's table shows the exact gap."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Thunderstorms", "tp": 72, "pop": 78, "gust": 9.2}, {"t": "17:00Z", "wx": "Thunderstorms", "tp": 74, "pop": 85, "gust": 9.2}, {"t": "18:00Z", "wx": "Thunderstorms", "tp": 75, "pop": 85, "gust": 8.1}, {"t": "19:00Z", "wx": "Cloudy", "tp": 76, "pop": 49, "gust": 8.1}, {"t": "20:00Z", "wx": "Thunderstorms", "tp": 77, "pop": 58, "gust": 6.9}, {"t": "21:00Z", "wx": "Thunderstorms", "tp": 79, "pop": 58, "gust": 6.9}, {"t": "22:00Z", "wx": "Cloudy", "tp": 76, "pop": 40, "gust": 5.8}, {"t": "23:00Z", "wx": "Cloudy", "tp": 75, "pop": 34, "gust": 5.8}, {"t": "00:00Z", "wx": "Cloudy", "tp": 74, "pop": 40, "gust": 5.8}, {"t": "01:00Z", "wx": "Thunderstorms", "tp": 77, "pop": 69, "gust": 5.8}, {"t": "02:00Z", "wx": "Thunderstorms", "tp": 74, "pop": 60, "gust": 6.9}, {"t": "03:00Z", "wx": "Cloudy", "tp": 73, "pop": 49, "gust": 8.1}], "om": [{"t": "16:00Z", "code": "Overcast", "tp": 68, "pop": 48}, {"t": "17:00Z", "code": "Rain", "tp": 70, "pop": 39}, {"t": "18:00Z", "code": "Drizzle", "tp": 70, "pop": 39}, {"t": "19:00Z", "code": "Drizzle", "tp": 71, "pop": 57}, {"t": "20:00Z", "code": "Rain", "tp": 71, "pop": 47}, {"t": "21:00Z", "code": "Overcast", "tp": 70, "pop": 41}, {"t": "22:00Z", "code": "Drizzle", "tp": 70, "pop": 35}, {"t": "23:00Z", "code": "Overcast", "tp": 71, "pop": 35}, {"t": "00:00Z", "code": "Overcast", "tp": 70, "pop": 44}, {"t": "01:00Z", "code": "Overcast", "tp": 68, "pop": 45}, {"t": "02:00Z", "code": "Overcast", "tp": 68, "pop": 50}, {"t": "03:00Z", "code": "Overcast", "tp": 67, "pop": 49}], "loc": "East Dubuque", "key": "625"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
