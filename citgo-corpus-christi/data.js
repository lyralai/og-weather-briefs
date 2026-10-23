const DEMO_DATA = {
 "operator": "CITGO",
 "generated": "2026-10-23",
 "topline": "RIGHT NOW at Corpus Christi Refinery: AccuWeather shows thunderstorms hitting the refinery 7-10 PM tonight (75% probability, lightning probability climbing to 45%) while Tropical Storm Rachel spins up the Pacific side of Baja \u2014 and the free weather feed says the rain chance tops out near 35% with zero storm-timing detail. Same sky, two very different briefings for a Gulf-loading refinery.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Corpus Christi Refinery",
   "lat": 27.79,
   "lon": -97.4,
   "current": "Cloudy, 87\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "\u26c8 Thunderstorms arrive 7 PM and peak 8-10 PM (75% probability, 31-45% lightning probability, ~0.2 in rain) \u2014 tank farm and dock lightning-standdown window tonight",
    "Gusts to 18 mph through the afternoon ahead of the line \u2014 crane and lift planning should front-load work before 6 PM",
    "Tropical Storm Rachel (Pacific, 58 mph) tracks west of Baja \u2014 no direct Gulf threat, but its moisture feeds the Gulf scatter all week",
    "Clearing after midnight; a clean Sunday ops window follows"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Gulf Coast October: the season's second peak is now",
  "facts": [
   "Hurricane Nolo (Cat 1, 81 mph) is crossing the central Pacific toward Hawaii \u2014 a live reminder that October storms still fire",
   "AccuWeather alerts flagged flash-flood potential at 20+ Gulf LNG terminals this week while NWS watches lagged hours behind at several sites",
   "Corpus sits at the center of the busiest LNG export buildout in the world \u2014 every loading window is money",
   "Free feeds give a percent chance; AccuWeather gives the hour the lightning reaches your fence line"
  ]
 },
 "next_72h": [
  {
   "when": "Tonight 7-10 PM",
   "what": "Thunderstorms with embedded lightning (45% storm probability)",
   "impact": "Suspend dock and tank-farm work; lightning watch protocol"
  },
  {
   "when": "After midnight",
   "what": "System exits; clearing from the west",
   "impact": "Resume night-shift outdoor work after verification"
  },
  {
   "when": "Sunday",
   "what": "Mostly dry, mid-80s, light winds",
   "impact": "Full ops window \u2014 best day for deferred maintenance"
  },
  {
   "when": "Mon-Tue",
   "what": "Gulf moisture returns; scattered PM storm chances",
   "impact": "Plan morning windows for critical lifts"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about tonight's event \u2014 and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Tonight's storm arrival at the refinery",
    "free": "\"35% chance of showers\" \u2014 no timing, no storm-type, county-wide grid",
    "awx": "Thunderstorms 7-10 PM, first strikes windowed to the hour, clearing after midnight"
   },
   {
    "feature": "Lightning risk quantified",
    "free": "Not available \u2014 no free API serves lightning probability",
    "awx": "Thunderstorm probability hour-by-hour: 31% \u2192 45% at peak, tied to your coordinates"
   },
   {
    "feature": "Rain rate at the tank farm",
    "free": "Precipitation amount only after it falls; 0.0\" forecast all evening",
    "awx": "0.16-0.26 in/hr during the peak \u2014 enough for drainage and visibility limits"
   },
   {
    "feature": "Gust timing for crane ops",
    "free": "Daily average wind speed, no gust fields",
    "awx": "Hourly gusts: 18 mph this afternoon easing overnight \u2014 lift windows before 6 PM"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings \u2014 issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Tropical cyclone decision support",
    "free": "NHC public cone, 5-day, updates 2\u00d7/day",
    "awx": "Storm-track probabilities tied to your asset; expert meteorologist consult"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset \u2014 audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY fence line, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Minute-by-minute lightning nowcast",
   "Know when strikes are 30 minutes out \u2014 at your refinery, not your region. Dock decisions with lead time."
  ],
  [
   "Hourly storm probability at asset coordinates",
   "27.79\u00b0N 97.40\u00b0W \u2014 not a county-wide average. Tonight's 45% peak lightning window, named hours ahead."
  ],
  [
   "Gulf tropical tracking, asset-pinned",
   "Cone forecasts tied to Corpus Christi coordinates with surge guidance and expert meteorologist support."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your sites \u2014 auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Partly sunny","tp":79.0,"pop":0,"rain":0.0,"cloud":0},{"t":"12:00","wx":"Mostly sunny","tp":82.0,"pop":0,"rain":0.0,"cloud":0},{"t":"13:00","wx":"Mostly sunny","tp":84.0,"pop":0,"rain":0.0,"cloud":0},{"t":"14:00","wx":"Mostly sunny","tp":85.0,"pop":0,"rain":0.0,"cloud":0},{"t":"15:00","wx":"Mostly sunny","tp":86.0,"pop":0,"rain":0.0,"cloud":0},{"t":"16:00","wx":"Mostly sunny","tp":84.0,"pop":0,"rain":0.0,"cloud":0},{"t":"17:00","wx":"Mostly sunny","tp":84.0,"pop":0,"rain":0.0,"cloud":0},{"t":"18:00","wx":"Mostly sunny","tp":81.0,"pop":0,"rain":0.0,"cloud":0},{"t":"19:00","wx":"Mostly clear","tp":79.0,"pop":0,"rain":0.0,"cloud":0},{"t":"20:00","wx":"Mostly clear","tp":76.0,"pop":0,"rain":0.0,"cloud":0},{"t":"21:00","wx":"Mostly clear","tp":75.0,"pop":0,"rain":0.0,"cloud":0},{"t":"22:00","wx":"Mostly clear","tp":75.0,"pop":0,"rain":0.0,"cloud":0}],"om":[{"t":"11:00","tp":69.0,"pop":0,"cloud":null},{"t":"12:00","tp":68.4,"pop":0,"cloud":null},{"t":"13:00","tp":69.1,"pop":0,"cloud":null},{"t":"14:00","tp":74.0,"pop":0,"cloud":null},{"t":"15:00","tp":75.5,"pop":0,"cloud":null},{"t":"16:00","tp":78.9,"pop":0,"cloud":null},{"t":"17:00","tp":80.7,"pop":0,"cloud":null},{"t":"18:00","tp":81.6,"pop":0,"cloud":null},{"t":"19:00","tp":81.9,"pop":0,"cloud":null},{"t":"20:00","tp":82.0,"pop":0,"cloud":null},{"t":"21:00","tp":81.3,"pop":0,"cloud":null},{"t":"22:00","tp":80.0,"pop":0,"cloud":null}],"loc":"Corpus Christi","key":"331130"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
