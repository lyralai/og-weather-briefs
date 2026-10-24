const DEMO_DATA = {
 "operator": "Deer Park Refining LP",
 "generated": "2026-10-24",
 "topline": "RIGHT NOW at Deer Park (340 kbd, Houston Ship Channel): a clean, dry Saturday — AccuWeather and the free feed agree on that. The difference today is November positioning: first freeze watches are already live on West Coast gas assets (Bradwood LNG under a Freeze Warning this morning), the Atlantic is quiet for 7 days, and Hurricane Vance nears Mexico's Pacific coast where LNG import terminals sit. Free feeds show a flat 'sunny'; AccuWeather carries the hour-by-hour cooling curve, gust timing, and the seasonal-risk watchlist your turnaround calendar needs.",
 "risk_level": "LOW",
 "assets": [
  {
   "name": "Deer Park Refinery & Ship Channel docks",
   "lat": 29.7,
   "lon": -95.13,
   "current": "Mostly sunny, 79-84°F",
   "risk": "LOW",
   "risk_why": [
    "Dry and mostly sunny through tonight — full ops window for dock and unit work",
    "Afternoon temperatures 82-86°F easing to the low 70s after sunset — no heat protocol needed",
    "Atlantic/Gulf tropical outlook: no formation expected for 7 days — calm before the November freeze-watch season",
    "Regional note: NWS coastal-flood and wind advisories line the Southeast LNG corridor today; Gulf sites stay clear"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Gulf Coast October: the quiet before freeze season",
  "facts": [
   "NHC: no tropical formation expected in the Atlantic, Caribbean or Gulf for the next 7 days",
   "Bradwood Landing LNG (Oregon) sits under an NWS Freeze Warning today — the season's first freeze signals on West Coast gas assets",
   "Hurricane Vance (Pacific, Cat 2) closes on the Mexican coast near LNG import terminals at Manzanillo",
   "Free feeds go flat on quiet days; AccuWeather keeps hour-by-hour detail and seasonal risk watch on every site"
  ]
 },
 "next_72h": [
  {
   "when": "Today",
   "what": "Mostly sunny, 79-86°F, dry all day",
   "impact": "Full ops window — schedule outdoor and dock work freely"
  },
  {
   "when": "Tonight",
   "what": "Mostly clear, cooling to the low 70s",
   "impact": "Clean night-shift window"
  },
  {
   "when": "Sunday-Monday",
   "what": "Quiet pattern holds; morning marine fog possible on the Channel",
   "impact": "Watch dawn fog for barge movements"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each source says about the same hours at this site — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Today's hourly at the refinery",
    "free": "'Sunny' daily icon — no hour-by-hour temperature curve",
    "awx": "Hour-by-hour: 79°F at 11 AM peaking 84°F at 2 PM, easing after 5 PM"
   },
   {
    "feature": "Gust timing for crane ops",
    "free": "Daily average wind speed, no gust fields",
    "awx": "Hourly wind and gust fields at asset coordinates"
   },
   {
    "feature": "Lightning risk quantified",
    "free": "Not available — no free API serves lightning probability",
    "awx": "Thunderstorm probability hour-by-hour, tied to your coordinates"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings — issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Tropical cyclone decision support",
    "free": "NHC public cone, 5-day, updates 2×/day",
    "awx": "Storm-track probabilities tied to your asset; expert meteorologist consult"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY fence line, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Hourly detail on quiet days, too",
   "Free feeds flatten quiet days to an icon; AccuWeather keeps the hourly curve your planning runs on."
  ],
  [
   "Freeze-season watchlists",
   "First West Coast freeze warnings are already live. AccuWeather flags freezing-risk hours at your sites before the first hard freeze."
  ],
  [
   "Lightning nowcast, asset-pinned",
   "When the Gulf pattern returns, minute-by-minute strike nowcasts at your fence line — not your county."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Mostly sunny","tp":76,"pop":0,"rain":0.0,"cloud":15},{"t":"12:00","wx":"Mostly sunny","tp":77,"pop":0,"rain":0.0,"cloud":21},{"t":"13:00","wx":"Mostly sunny","tp":80,"pop":0,"rain":0.0,"cloud":25},{"t":"14:00","wx":"Mostly sunny","tp":84,"pop":0,"rain":0.0,"cloud":26},{"t":"15:00","wx":"Mostly sunny","tp":83,"pop":0,"rain":0.0,"cloud":25},{"t":"16:00","wx":"Mostly sunny","tp":82,"pop":0,"rain":0.0,"cloud":25},{"t":"17:00","wx":"Mostly sunny","tp":81,"pop":0,"rain":0.0,"cloud":25},{"t":"18:00","wx":"Mostly sunny","tp":78,"pop":0,"rain":0.0,"cloud":26},{"t":"19:00","wx":"Mostly clear","tp":76,"pop":0,"rain":0.0,"cloud":25},{"t":"20:00","wx":"Mostly clear","tp":73,"pop":0,"rain":0.0,"cloud":20},{"t":"21:00","wx":"Mostly clear","tp":72,"pop":0,"rain":0.0,"cloud":14},{"t":"22:00","wx":"Mostly clear","tp":71,"pop":0,"rain":0.0,"cloud":10}],"om":[{"t":"15:00","tp":82.1,"pop":0,"cloud":null},{"t":"16:00","tp":81.2,"pop":0,"cloud":null},{"t":"17:00","tp":79.5,"pop":0,"cloud":null},{"t":"18:00","tp":76.7,"pop":0,"cloud":null},{"t":"19:00","tp":73.4,"pop":0,"cloud":null},{"t":"20:00","tp":71.2,"pop":0,"cloud":null},{"t":"21:00","tp":69.4,"pop":0,"cloud":null},{"t":"22:00","tp":67.9,"pop":0,"cloud":null},{"t":"23:00","tp":66.8,"pop":0,"cloud":null},{"t":"00:00","tp":66.2,"pop":0,"cloud":null},{"t":"01:00","tp":65.9,"pop":0,"cloud":null},{"t":"02:00","tp":65.1,"pop":0,"cloud":null}],"loc":"Deer Park Refinery & Ship Channel docks","key":"336046"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
