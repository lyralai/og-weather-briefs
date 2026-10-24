const DEMO_DATA = {
 "operator": "CITGO — Lemont IL",
 "generated": "2026-10-24",
 "topline": "RIGHT NOW at Lemont (~167 kbd on the Des Plaines River): a dry, mild Saturday — AccuWeather holds 0% storm probability through tonight while the free feed hedges with 1-3% and cloud-cover wobble. The real seasonal story: Chicago's first freeze window opens within days, and this site's winter is barge-ice on the river. Gulf Coast sites are quiet; the freeze season your ops calendar cares about starts now.",
 "risk_level": "LOW",
 "assets": [
  {
   "name": "CITGO Lemont Refinery (~167 kbd, Des Plaines River)",
   "lat": 41.672,
   "lon": -88.093,
   "current": "Intermittent clouds, 62-70°F",
   "risk": "LOW",
   "risk_why": [
    "Dry through tonight — no precipitation signal from either feed; full outdoor-work window",
    "Mid-60s to 70°F afternoon, cooling to the low 50s overnight — first real autumn cooldown of the season",
    "Quiet tropics: NHC expects no Atlantic/Gulf formation for 7 days",
    "Winter positioning: barge-ice season on the Des Plaines is the site's annual weather chokepoint — freeze-watch hours start mattering now"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Midwest quiet day, freeze season opening",
  "facts": [
   "Both feeds agree: dry, cooling, no storm risk through Sunday",
   "NHC Atlantic outlook: no tropical formation expected for 7 days",
   "West Coast gas assets took the season's first Freeze Warnings today — the freeze line starts marching toward Chicago",
   "Quiet days are when free feeds go vague; AccuWeather keeps hourly precision and seasonal-risk watch"
  ]
 },
 "next_72h": [
  {
   "when": "Today",
   "what": "Intermittent clouds, 62-70°F, dry",
   "impact": "Full ops window for outdoor and dock work"
  },
  {
   "when": "Tonight",
   "what": "Cooling to low 50s under mostly cloudy skies",
   "impact": "No weather constraints on night work"
  },
  {
   "when": "Next 7 days",
   "what": "Mild, then the first freeze-watch windows open as November patterns arrive",
   "impact": "Pre-winter checks: barge-ice protocols, tank-heat readiness"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each source says about the same hours at this site — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Today's hourly at the refinery",
    "free": "1-3% rain hedge all day — 'cloudy' with no commitment",
    "awx": "0% storm and rain probability hour-by-hour — a confident 'dry' your planning can use"
   },
   {
    "feature": "Temperature curve for unit ops",
    "free": "Coarser grid, lags the afternoon peak",
    "awx": "Hourly: 62°F rising to 70°F by 3 PM, easing to the 50s overnight"
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
   "Confident quiet-day forecasts",
   "When free feeds hedge 1-3%, AccuWeather commits hour-by-hour — planning-grade certainty."
  ],
  [
   "Freeze-watch hours per asset",
   "First West Coast freeze warnings are live; Chicago's window opens within weeks. Barge-ice prep starts with freeze-hour warning."
  ],
  [
   "Winter storm decision support",
   "Lake-effect snow bands and cold snaps, tracked to Lemont coordinates with expert meteorologist consult."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Intermittent clouds","tp":63,"pop":0,"rain":0.0,"cloud":51},{"t":"12:00","wx":"Intermittent clouds","tp":66,"pop":0,"rain":0.0,"cloud":51},{"t":"13:00","wx":"Intermittent clouds","tp":68,"pop":0,"rain":0.0,"cloud":51},{"t":"14:00","wx":"Intermittent clouds","tp":69,"pop":0,"rain":0.0,"cloud":51},{"t":"15:00","wx":"Intermittent clouds","tp":70,"pop":0,"rain":0.0,"cloud":51},{"t":"16:00","wx":"Intermittent clouds","tp":69,"pop":0,"rain":0.0,"cloud":65},{"t":"17:00","wx":"Mostly cloudy","tp":68,"pop":0,"rain":0.0,"cloud":75},{"t":"18:00","wx":"Mostly cloudy","tp":65,"pop":0,"rain":0.0,"cloud":75},{"t":"19:00","wx":"Mostly cloudy","tp":63,"pop":0,"rain":0.0,"cloud":75},{"t":"20:00","wx":"Mostly cloudy","tp":61,"pop":0,"rain":0.0,"cloud":84},{"t":"21:00","wx":"Mostly cloudy","tp":58,"pop":0,"rain":0.0,"cloud":75},{"t":"22:00","wx":"Intermittent clouds","tp":57,"pop":0,"rain":0.0,"cloud":65}],"om":[{"t":"15:00","tp":70.5,"pop":1,"cloud":null},{"t":"16:00","tp":70.3,"pop":1,"cloud":null},{"t":"17:00","tp":68.0,"pop":1,"cloud":null},{"t":"18:00","tp":64.0,"pop":1,"cloud":null},{"t":"19:00","tp":61.7,"pop":2,"cloud":null},{"t":"20:00","tp":60.3,"pop":2,"cloud":null},{"t":"21:00","tp":58.2,"pop":2,"cloud":null},{"t":"22:00","tp":56.3,"pop":2,"cloud":null},{"t":"23:00","tp":55.1,"pop":2,"cloud":null},{"t":"00:00","tp":54.4,"pop":2,"cloud":null},{"t":"01:00","tp":52.8,"pop":2,"cloud":null},{"t":"02:00","tp":51.7,"pop":3,"cloud":null}],"loc":"CITGO Lemont Refinery (~167 kbd, Des Plaines River)","key":"332786"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
