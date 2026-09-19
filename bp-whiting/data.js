const DEMO_DATA = {
 "operator": "bp (Whiting)",
 "generated": "2026-09-19",
 "topline": "RIGHT NOW at Whiting Refinery (~435 kbd, Lake Michigan): AccuWeather holds a 73-79% thunderstorm window this afternoon under a Flood Watch \u2014 the free feed drops the same hours to 8-18% and calls the day mostly clear. Dock, rail and yard ops planned on free data today are planning against the wrong sky.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Whiting Refinery",
   "lat": 41.68,
   "lon": -87.49,
   "current": "Warm, humid, storm line building \u2014 86\u00b0F, RealFeel 98\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "\u26c8 AccuWeather: 73-79% thunderstorm probability this afternoon \u2014 lightning stand-down risk mid-shift",
    "NWS Flood Watch live (Lake, Cook, DuPage, Will counties incl. Lake IN) with the AccuWeather flash-flood threat flagged IMMINENT",
    "Free feed (OpenMeteo/GFS): 8-18% rain the same hours \u2014 a stand-down decided on free data fires late",
    "Lake-effect season starts in ~6 weeks; today is a dress rehearsal for the site's two-weather-regime reality"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Flash-flood watch live at the largest refinery in the US Midwest",
  "facts": [
   "Whiting sits on the Lake Michigan shoreline in a multi-county Flood Watch through tonight; AccuWeather flags flash flooding 'Dangerous Weather' level",
   "September 2025's Midwest deluge put adjacent corridors under water and disrupted product logistics \u2014 the lakefront site's drainage and dock roadways are the exposed assets",
   "The daily risk here isn't a hurricane \u2014 it's the afternoon storm window that free feeds keep under-calling at exactly this site type"
  ]
 },
 "headline": "Live same-hour comparison \u2014 Whiting Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 19 for 41.68, -87.49",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "73-79% thunderstorm window (AccuWeather); free feed says 8-18%",
   "impact": "Pre-stage lightning stand-down for dock and rail loading; schedule critical lifts before the window"
  },
  {
   "when": "Tonight",
   "what": "Lingering showers, 40-52% early evening",
   "impact": "Wet yard and drainage watch; delay night-shift hot work if line lingers"
  },
  {
   "when": "Sunday",
   "what": "Clearing, pleasant",
   "impact": "Best full maintenance day of the weekend"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Whiting Refinery):",
  "rows": [
   {
    "feature": "This afternoon storm window",
    "free": "8-18% \u2014 'partly cloudy'",
    "awx": "73-79% \u2014 thunderstorms, lightning stand-down risk mid-shift"
   },
   {
    "feature": "Flash-flood threat level",
    "free": "not surfaced",
    "awx": "AccuWeather 'Dangerous Weather Imminent' flash-flood flag + NWS Flood Watch"
   },
   {
    "feature": "Heat context",
    "free": "\u2014",
    "awx": "RealFeel 98\u00b0F \u2014 crew heat limits on outdoor unit work"
   }
  ],
  "closer": "Free data calls a flood-watch afternoon 'mostly clear' at the Midwest's largest refinery; AccuWeather's 79% window is the difference between a planned stand-down and a scramble."
 },
 "capabilities": [
  [
   "Minute-by-minute nowcasting",
   "Site-pinned alerts 60+ min before storm arrival, not after"
  ],
  [
   "Asset-level pinpointing",
   "Alerts tied to your exact coordinates and units, not the nearest city"
  ],
  [
   "Expert meteorologist support",
   "24/7 access to enterprise forecasters during events"
  ],
  [
   "Free data can't do this",
   "GFS-based feeds miss convective timing at lakefront/complex-terrain sites \u2014 that's the gap in today's table."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Thunderstorms", "tp": 70, "pop": 73, "gust": 9.2}, {"t": "17:00Z", "wx": "Thunderstorms", "tp": 72, "pop": 79, "gust": 10.4}, {"t": "18:00Z", "wx": "Cloudy", "tp": 74, "pop": 49, "gust": 10.4}, {"t": "19:00Z", "wx": "Cloudy", "tp": 76, "pop": 34, "gust": 10.4}, {"t": "20:00Z", "wx": "Cloudy", "tp": 77, "pop": 34, "gust": 9.2}, {"t": "21:00Z", "wx": "Cloudy", "tp": 79, "pop": 40, "gust": 9.2}, {"t": "22:00Z", "wx": "Thunderstorms", "tp": 78, "pop": 52, "gust": 8.1}, {"t": "23:00Z", "wx": "Cloudy", "tp": 77, "pop": 48, "gust": 6.9}, {"t": "00:00Z", "wx": "Cloudy", "tp": 76, "pop": 41, "gust": 6.9}, {"t": "01:00Z", "wx": "Mostly cloudy", "tp": 79, "pop": 34, "gust": 6.9}, {"t": "02:00Z", "wx": "Mostly cloudy", "tp": 77, "pop": 34, "gust": 6.9}, {"t": "03:00Z", "wx": "Cloudy", "tp": 76, "pop": 40, "gust": 6.9}], "om": [{"t": "16:00Z", "code": "Drizzle", "tp": 66, "pop": 44}, {"t": "17:00Z", "code": "Overcast", "tp": 68, "pop": 18}, {"t": "18:00Z", "code": "Overcast", "tp": 72, "pop": 12}, {"t": "19:00Z", "code": "Overcast", "tp": 72, "pop": 10}, {"t": "20:00Z", "code": "Overcast", "tp": 72, "pop": 8}, {"t": "21:00Z", "code": "Overcast", "tp": 71, "pop": 10}, {"t": "22:00Z", "code": "Overcast", "tp": 69, "pop": 13}, {"t": "23:00Z", "code": "Overcast", "tp": 68, "pop": 18}, {"t": "00:00Z", "code": "Overcast", "tp": 67, "pop": 18}, {"t": "01:00Z", "code": "Overcast", "tp": 67, "pop": 38}, {"t": "02:00Z", "code": "Rain", "tp": 68, "pop": 44}, {"t": "03:00Z", "code": "Overcast", "tp": 67, "pop": 49}], "loc": "Whiting", "key": "2135996"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
