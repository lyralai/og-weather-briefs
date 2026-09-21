const DEMO_DATA = {
 "operator": "AdvanSix",
 "generated": "2026-09-21",
 "topline": "RIGHT NOW at Hopewell: a 51% t-storm window hits 4-5 PM local (0.08 in/hr) and a second round returns 4-6 PM with 64% probabilities — while the free feed this morning read 1-8% all afternoon. Chesapeake marine advisories (Gale Watch, Small Craft) sit just downriver at the Bay mouth. Same sky, two very different briefings for a river-dock chemical plant on the Appomattox.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Hopewell Manufacturing Complex",
   "lat": 37.29,
   "lon": -77.30,
   "current": "Mostly cloudy, 79\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "\u26a1 51% t-storm probability 4-5 PM with measurable rain rate (0.08 in/hr) at the plant fence — lightning standdown window for loading racks and rail",
    "Second storm round 8-10 PM local (64%) — night-shift tanker/rail moves should pre-plan around two windows, not one",
    "AccuWeather 'Severe Weather Potential: Flash Flood' flag live on the complex; NWS watch coverage sits a county west — the gap is the lead time",
    "Gale Watch + Small Craft Advisory on Chesapeake Bay mouth — coastal deliveries staging through Hampton Roads should verify marine windows"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Two thunderstorm windows, one blind free feed",
  "facts": [
    "AccuWeather carries two distinct t-storm windows today (afternoon + evening) with hour-by-hour rain rate; the free feed this morning showed 1-8% rain chances all afternoon",
    "That gap is the difference between a planned rack standdown and a lightning-triggered scramble",
    "Ohio Valley/Appalachian flood corridor is exiting east — Hopewell is on the tail edge, but the same frontal band drives today's cells",
    "The free-vs-AccuWeather table below is live data pulled today for these exact coordinates"
  ]
 },
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "T-storm window 4-5 PM (51%), then a second round 8-10 PM (64%)",
   "impact": "Two lightning standdowns for loading/rack work; hold volatile transfers to the 5-8 PM gap"
  },
  {
   "when": "Overnight",
   "what": "Showers exit; drying trend begins",
   "impact": "Verify drainage on rail spurs before night-shift moves"
  },
  {
   "when": "Tue-Wed",
   "what": "Drier, seasonable",
   "impact": "Full ops window — catch-up on delayed shipments"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about this exact event — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Storm windows at plant coordinates",
    "free": "1-8% rain chances this afternoon (missed both windows)",
    "awx": "Two distinct hour-pinned t-storm windows (51% / 64%) with rain rate"
   },
   {
    "feature": "Rain rate & accumulation at plant fence",
    "free": "Percent-chance only — no accumulation, no rate",
    "awx": "Hour-by-hour rain rate and totals at 37.29\u00b0N 77.30\u00b0W"
   },
   {
    "feature": "Severity escalation",
    "free": "County-wide watch text, when issued",
    "awx": "Proprietary severity tiers + pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Marine corridor context",
    "free": "None tied to your supply chain",
    "awx": "Gale/Small Craft windows for Hampton Roads staging tied to your delivery schedule"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY plant, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Hour-by-hour storm windows, site-pinned",
   "Rain rate, gusts and lightning density at the plant fence — not the county."
  ],
  [
   "Two-window day planning",
   "Loading racks, rail and marine moves scheduled around both standdowns, not surprised by the second."
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
const LIVE_COMPARISON = {"awx":[{"t":"12:00","wx":"Intermittent clouds","tp":81.0,"pop":5,"rain":0.0,"cloud":70},{"t":"13:00","wx":"Intermittent clouds","tp":82.0,"pop":8,"rain":0.0,"cloud":70},{"t":"14:00","wx":"Cloudy","tp":83.0,"pop":47,"rain":0.0,"cloud":99},{"t":"15:00","wx":"Thunderstorms","tp":82.0,"pop":51,"rain":0.08,"cloud":95},{"t":"16:00","wx":"Cloudy","tp":81.0,"pop":47,"rain":0.0,"cloud":95},{"t":"17:00","wx":"Cloudy","tp":80.0,"pop":15,"rain":0.0,"cloud":95},{"t":"18:00","wx":"Cloudy","tp":77.0,"pop":15,"rain":0.0,"cloud":95},{"t":"19:00","wx":"Cloudy","tp":75.0,"pop":19,"rain":0.0,"cloud":96},{"t":"20:00","wx":"Thunderstorms","tp":74.0,"pop":64,"rain":0.06,"cloud":100},{"t":"21:00","wx":"Thunderstorms","tp":72.0,"pop":64,"rain":0.06,"cloud":100},{"t":"22:00","wx":"Cloudy","tp":72.0,"pop":49,"rain":0.0,"cloud":100},{"t":"23:00","wx":"Cloudy","tp":71.0,"pop":34,"rain":0.0,"cloud":100}],"om":[{"t":"15:00","tp":75.4,"pop":1,"cloud":100},{"t":"16:00","tp":76.5,"pop":1,"cloud":79},{"t":"17:00","tp":78.6,"pop":2,"cloud":67},{"t":"18:00","tp":81.5,"pop":3,"cloud":17},{"t":"19:00","tp":83.4,"pop":4,"cloud":6},{"t":"20:00","tp":84.0,"pop":7,"cloud":6},{"t":"21:00","tp":83.9,"pop":8,"cloud":23},{"t":"22:00","tp":81.8,"pop":6,"cloud":100},{"t":"23:00","tp":77.8,"pop":8,"cloud":50},{"t":"00:00","tp":75.3,"pop":9,"cloud":9},{"t":"01:00","tp":74.0,"pop":6,"cloud":100},{"t":"02:00","tp":73.7,"pop":3,"cloud":100}],"loc":"Hopewell","key":"336230"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
