const DEMO_DATA = {
 "operator": "Citgo",
 "generated": "2026-09-20",
 "topline": "RIGHT NOW at Lemont Refinery: AccuWeather shows thunderstorms hammering the corridor through 5 PM (85% probability, 0.1\"/hr) with an active flash-flood threat across the Chicago area — Lemont sits inside the weekend's moderate-risk flood zone. The free feed drops the storm signal to ~40% and carries no rain accumulation at all. Same sky, two very different briefings for a dock-adjacent refinery on the Chicago Ship & Sanitary Canal.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Lemont Refinery",
   "lat": 41.67,
   "lon": -88.08,
   "current": "Thunderstorms, 68°F",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈ Active thunderstorms through ~5 PM local (77-85% probability, ~0.1 in/hr) — lightning standdown territory for tank and dock work",
    "Weekend 'moderate risk' (level 3/4) flash-flood zone covers the Chicago corridor; heavy rain training over the same bands",
    "NWS Flood Watch + AccuWeather flash-flood flags live across northern Illinois — truck/rail logistics in and out of the plant are the exposure",
    "Clearing tonight; a clean Monday ops window follows"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "The Midwest's flood week is still aimed at Lemont's logistics",
  "facts": [
   "A stalled storm firehose has dumped on Iowa/Wisconsin/northern Illinois since Friday; another 1-3\" falls today in the same corridor",
   "Lemont ships by pipeline, barge and rail — flood-delayed rail and high-water barge restrictions are the repeat pattern this week",
   "Free weather feeds show '57% chance' with zero rain-rate data; AccuWeather gives hour-by-hour rain rate, wind gust and lightning density at the plant fence",
   "The difference shows up in dock scheduling: which hours are actually workable today"
  ]
 },
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "Thunderstorms, heavy at times, through ~5 PM",
   "impact": "Suspend crane/tank/dock work; lightning watch; expect local ponding on low rail spurs"
  },
  {
   "when": "This evening",
   "what": "System exits east; clearing begins",
   "impact": "Verify drainage and track inspection before night-shift moves"
  },
  {
   "when": "Monday-Tuesday",
   "what": "Dry, seasonable (low 70s)",
   "impact": "Full ops window — catch-up on delayed transfers"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about this exact event — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Rain rate & accumulation at plant coordinates",
    "free": "Probability only — no accumulation, no rate",
    "awx": "Hour-by-hour rain rate and totals at 41.67°N 88.08°W"
   },
   {
    "feature": "Thunderstorm arrival & intensity at the site",
    "free": "Percent-chance for a ~40×40 mi grid",
    "awx": "Hourly storm windows with precip rate, gusts and lightning density at the refinery"
   },
   {
    "feature": "Official alerts",
    "free": "NWS watch already issued — no escalation detail",
    "awx": "Proprietary severity tiers + pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Flood-threat context for logistics",
    "free": "None",
    "awx": "Basin-level heavy-rain guidance tied to your rail/barge corridors"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY refinery, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Hour-by-hour storm windows, site-pinned",
   "Rain rate, gusts and lightning density at the plant fence — not the county."
  ],
  [
   "Flood & heavy-rain logistics guidance",
   "Rail and barge corridor impacts flagged before the water arrives."
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
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Thunderstorms","tp":67.0,"pop":77,"rain":0.03,"cloud":100},{"t":"12:00","wx":"Thunderstorms","tp":68.0,"pop":85,"rain":0.1,"cloud":100},{"t":"13:00","wx":"Thunderstorms","tp":68.0,"pop":85,"rain":0.1,"cloud":100},{"t":"14:00","wx":"Rain","tp":68.0,"pop":66,"rain":0.04,"cloud":99},{"t":"15:00","wx":"Cloudy","tp":67.0,"pop":49,"rain":0.0,"cloud":99},{"t":"16:00","wx":"Rain","tp":67.0,"pop":66,"rain":0.04,"cloud":99},{"t":"17:00","wx":"Cloudy","tp":67.0,"pop":49,"rain":0.0,"cloud":99},{"t":"18:00","wx":"Cloudy","tp":66.0,"pop":49,"rain":0.0,"cloud":99},{"t":"19:00","wx":"Rain","tp":66.0,"pop":53,"rain":0.04,"cloud":100},{"t":"20:00","wx":"Showers","tp":64.0,"pop":40,"rain":0.0,"cloud":99},{"t":"21:00","wx":"Cloudy","tp":64.0,"pop":37,"rain":0.0,"cloud":99},{"t":"22:00","wx":"Cloudy","tp":64.0,"pop":33,"rain":0.0,"cloud":98}],"om":[{"t":"15:00","tp":65.4,"pop":57,"cloud":100},{"t":"16:00","tp":65.4,"pop":43,"cloud":100},{"t":"17:00","tp":64.9,"pop":27,"cloud":100},{"t":"18:00","tp":63.6,"pop":22,"cloud":100},{"t":"19:00","tp":63.2,"pop":18,"cloud":100},{"t":"20:00","tp":62.8,"pop":17,"cloud":100},{"t":"21:00","tp":62.8,"pop":16,"cloud":100},{"t":"22:00","tp":62.6,"pop":10,"cloud":100},{"t":"23:00","tp":62.9,"pop":7,"cloud":100},{"t":"00:00","tp":62.6,"pop":8,"cloud":100},{"t":"01:00","tp":62.1,"pop":8,"cloud":100},{"t":"02:00","tp":61.2,"pop":7,"cloud":100}],"loc":"Lemont","key":"2241344"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
