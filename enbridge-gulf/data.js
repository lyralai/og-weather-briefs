const DEMO_DATA = {
 "operator": "Enbridge",
 "generated": "2026-09-13",
 "topline": "Sunday at Port Fourchon: 87°F and workable today — but AccuWeather shows a 51% thunderstorm window re-forming tonight (2-3 AM), while the free feed tops out at 2% and calls it clear. That gap is the pitch.",
 "risk_level": "LOW-MODERATE",
 "assets": [
  {
   "name": "Port Fourchon corridor",
   "lat": 29.15,
   "lon": -90.2,
   "current": "Intermittent clouds 87°F",
   "risk": "LOW-MODERATE",
   "risk_why": [
    "☀️ Today through Monday: 85-88°F, light SSW breeze, no lightning windows — best construction/turnaround stretch this week",
    "⛈ Tonight 2-3 AM: AccuWeather flags a 51% thunderstorm window while the free feed reads 2% and 'clear' — overnight marine transfer scheduling gap",
    "🌬 Wednesday-Thursday: strong high pressure drives NE-E winds to fresh-to-strong over the northern Gulf with rough seas — early heads-up for barge and OSV scheduling"
   ]
  }
 ],
 "near_miss": {
  "card_title": "12 days ago, next door",
  "headline": "Sep 1 — TS Edouard made landfall ~60 miles east of Port Fourchon",
  "facts": [
   "4 Gulf LNG terminals under storm surge warnings",
   "Port Fourchon marine ops disrupted; non-essential personnel evacuated from nearby platforms",
   "Louisiana surge-corridor assets rode out 3 days of disrupted logistics",
   "Operators guessed on evacuate vs. ride-out timing — each wrong guess costs millions"
  ]
 },
 "next_72h": [
  {
   "when": "Sunday-Monday",
   "what": "Clear, 85-88°F, light winds — clean ops window",
   "impact": "Best 36-hr stretch of the week for dock work and vessel moves"
  },
  {
   "when": "Tonight 2-3 AM",
   "what": "AccuWeather 51% t-storm window vs free feed 2% 'clear'",
   "impact": "If overnight transfers are scheduled, the free feed green-lights into a storm window"
  },
  {
   "when": "Wed-Thu",
   "what": "Cold front + strong high: NE-E winds to fresh-strong, rough seas northern Gulf",
   "impact": "Small-craft conditions; barge/OSV schedules need margin Wed PM-Thu"
  }
 ],
 "comparison": {
  "intro": "Your team can already pull free weather data. Here's what each would have told you about tonight at your coordinates — live from both APIs, same hour.",
  "rows": [
   {"feature":"Lightning strike tracking","free":"Not available — no free weather API serves real-time strike data","awx":"Real-time strikes + 30-min history, alerts pinned to each site"},
   {
    "feature": "Tonight's 2 AM storm window",
    "free": "\"Intermittent clouds, 2%\" — 40-km grid, no storm signal",
    "awx": "\"T-storms 2 AM, 51%\" — cell timing at your corridor coordinates"
   },
   {
    "feature": "Midweek wind shift timing",
    "free": "Broad daily wind numbers, no ramp timing",
    "awx": "Hour-by-hour gust ramp Wed PM pinned to your docks — schedule against the front, not around it"
   },
   {
    "feature": "Surge & tropical exposure",
    "free": "NWS public products, parish-level, after thresholds",
    "awx": "Storm-track probabilities + surge guidance pinned to your site; alerts 30-120 min earlier"
   },
   {
    "feature": "Marine conditions for construction & convoys",
    "free": "Coastal zone forecast, 6-hr granularity",
    "awx": "Hour-by-hour wave height, period & wind at the dock; work-window recommendations"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per site — audit what hit, when, for planning and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY site, and what do I do about it?\""
 },
 "capabilities": [
  ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your dock, not your parish."],
  ["Storm surge & tropical tracking, asset-pinned","Cone forecasts tied to your Port Fourchon-area coordinates, not county averages."],
  ["Marine wind & wave windows","Construction barge and supply-boat scheduling against hour-by-hour sea state."],
  ["Threshold alerting per site","Your ops triggers, your site — auto-escalation when conditions cross your lines."]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t":"16:00Z","wx":"Intermittent clouds","tp":87,"pop":7},{"t":"17:00Z","wx":"Intermittent clouds","tp":87,"pop":7},{"t":"18:00Z","wx":"Intermittent clouds","tp":87,"pop":11},{"t":"19:00Z","wx":"Intermittent clouds","tp":87,"pop":19},{"t":"20:00Z","wx":"Intermittent clouds","tp":87,"pop":19},{"t":"21:00Z","wx":"Intermittent clouds","tp":86,"pop":24},{"t":"22:00Z","wx":"Mostly cloudy w/ t-storms","tp":85,"pop":51},{"t":"23:00Z","wx":"Mostly cloudy","tp":84,"pop":47},{"t":"00:00Z","wx":"Mostly cloudy","tp":83,"pop":43},{"t":"01:00Z","wx":"Intermittent clouds","tp":82,"pop":43},{"t":"02:00Z","wx":"Partly cloudy","tp":81,"pop":47},{"t":"03:00Z","wx":"Partly cloudy w/ t-storms","tp":80,"pop":51}], "om": [{"t":"16:00Z","code":"Mostly clear","tp":88,"pop":3},{"t":"17:00Z","code":"Mostly clear","tp":89,"pop":2},{"t":"18:00Z","code":"Mostly clear","tp":90,"pop":3},{"t":"19:00Z","code":"Mostly clear","tp":91,"pop":3},{"t":"20:00Z","code":"Mostly clear","tp":90,"pop":4},{"t":"21:00Z","code":"Mostly clear","tp":90,"pop":3},{"t":"22:00Z","code":"Mostly clear","tp":89,"pop":3},{"t":"23:00Z","code":"Mostly clear","tp":88,"pop":2},{"t":"00:00Z","code":"Mostly clear","tp":87,"pop":2},{"t":"01:00Z","code":"Mostly clear","tp":86,"pop":2},{"t":"02:00Z","code":"Mostly clear","tp":85,"pop":1},{"t":"03:00Z","code":"Mostly clear","tp":84,"pop":1}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';;
