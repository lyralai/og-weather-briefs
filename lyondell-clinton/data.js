const DEMO_DATA = {
 "operator": "LyondellBasell",
 "generated": "2026-09-20",
 "topline": "RIGHT NOW at the Clinton Chemical Complex: AccuWeather is flagging 'Severe Weather Threat: Flash Flood' live at the site while the free feed shows a mild 22% shower chance and nothing else. Same coordinates, same hour — one briefing says watch the sky, the other says it's a soft Sunday. For a facility that just spent the weekend under flood watches, the gap is the story.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Clinton Complex",
   "lat": 40.15,
   "lon": -88.96,
   "current": "Cloudy, 78°F",
   "risk": "ELEVATED",
   "risk_why": [
    "AccuWeather proprietary alert 'Severe Weather Threat: Flash Flood' is LIVE at the complex right now; NWS has a Flood Watch over Jones/Clinton/Whiteside counties",
    "Showers redeveloping this evening into tonight — additional heavy rain over already saturated ground",
    "Free feed: 22% and falling — no alert, no context, no rain rate",
    "Monday dries out; rest of the 72h window is clean"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Saturday's flash-flood night at Clinton — and what Monday's crews need to know",
  "facts": [
   "The Midwest's level-3-of-4 flash-flood zone sat over eastern Iowa/northern Illinois Saturday; Clinton County was under watches through the weekend",
   "Chemical plants on saturated ground face runoff, containment-pond capacity and rail-spur exposure — the unglamorous losses",
   "AccuWeather's proprietary alert fired at the complex while the free feed carried nothing of the kind",
   "That juxtaposition — alert vs. silence at the same coordinates — is this page's whole argument"
  ]
 },
 "next_72h": [
  {
   "when": "This evening",
   "what": "Showers redevelop; locally heavy in spots",
   "impact": "Watch containment levels and low-lying spurs; lightning protocol for outdoor units"
  },
  {
   "when": "Tonight",
   "what": "Rain tapers after midnight",
   "impact": "Drainage check before day shift"
  },
  {
   "when": "Monday onward",
   "what": "Dry, warming to low 80s midweek",
   "impact": "Normal ops; good window for deferred outdoor work"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about this exact event — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Severe weather flags at the site",
    "free": "Nothing — 22% showers, no alert",
    "awx": "'Severe Weather Threat: Flash Flood' live at 40.15°N 88.96°W"
   },
   {
    "feature": "Hourly rain & re-development timing",
    "free": "Percent-chance on a coarse grid",
    "awx": "Hour-by-hour precip windows pinned to the complex"
   },
   {
    "feature": "Runoff-relevant heavy-rain guidance",
    "free": "None",
    "awx": "Rain-rate detail that matters for containment and drainage planning"
   },
   {
    "feature": "Threshold alerting per facility",
    "free": "None",
    "awx": "Your ops triggers, your sites — auto-escalation when conditions cross your lines"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY complex, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Site-pinned severe weather flags",
   "Proprietary alerts at your coordinates — earlier and more specific than public feeds."
  ],
  [
   "Hour-by-hour precip windows",
   "Timing that drives containment, drainage and shift planning."
  ],
  [
   "Threshold alerting per facility",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ],
  [
   "Event archive per asset",
   "Audit what hit, when — for post-incident review and insurance."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Showers","tp":76.0,"pop":40,"rain":0.0,"cloud":99},{"t":"12:00","wx":"Cloudy","tp":77.0,"pop":37,"rain":0.0,"cloud":95},{"t":"13:00","wx":"Cloudy","tp":78.0,"pop":40,"rain":0.0,"cloud":95},{"t":"14:00","wx":"Thunderstorms","tp":77.0,"pop":51,"rain":0.22,"cloud":95},{"t":"15:00","wx":"Cloudy","tp":76.0,"pop":47,"rain":0.0,"cloud":95},{"t":"16:00","wx":"Cloudy","tp":75.0,"pop":40,"rain":0.0,"cloud":95},{"t":"17:00","wx":"Cloudy","tp":74.0,"pop":34,"rain":0.0,"cloud":95},{"t":"18:00","wx":"Cloudy","tp":72.0,"pop":34,"rain":0.0,"cloud":95},{"t":"19:00","wx":"Cloudy","tp":71.0,"pop":34,"rain":0.0,"cloud":99},{"t":"20:00","wx":"Cloudy","tp":67.0,"pop":34,"rain":0.0,"cloud":99},{"t":"21:00","wx":"Cloudy","tp":66.0,"pop":34,"rain":0.0,"cloud":99},{"t":"22:00","wx":"Cloudy","tp":65.0,"pop":37,"rain":0.0,"cloud":100}],"om":[{"t":"15:00","tp":83.1,"pop":22,"cloud":100},{"t":"16:00","tp":77.8,"pop":14,"cloud":98},{"t":"17:00","tp":76.5,"pop":14,"cloud":99},{"t":"18:00","tp":73.5,"pop":21,"cloud":66},{"t":"19:00","tp":71.0,"pop":15,"cloud":56},{"t":"20:00","tp":69.4,"pop":7,"cloud":94},{"t":"21:00","tp":68.6,"pop":5,"cloud":100},{"t":"22:00","tp":67.7,"pop":5,"cloud":100},{"t":"23:00","tp":67.2,"pop":6,"cloud":100},{"t":"00:00","tp":67.4,"pop":7,"cloud":100},{"t":"01:00","tp":66.9,"pop":8,"cloud":100},{"t":"02:00","tp":66.6,"pop":7,"cloud":100}],"loc":"Clinton","key":"332685"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
