const DEMO_DATA = {
 "operator": "Excelerate Energy",
 "generated": "2026-09-13",
 "topline": "Corpus Christi tonight: a 37-40% thunderstorm window sits in AccuWeather's hourly for your berth — the free feed reads 1-3% and 'partly cloudy' all night. For FSRU berthing windows, that's the difference between a go and a surprise.",
 "risk_level": "LOW-MODERATE",
 "assets": [
  {
   "name": "Corpus Christi Bay corridor",
   "lat": 27.8,
   "lon": -97.2,
   "current": "Partly sunny 94°F",
   "risk": "LOW-MODERATE",
   "risk_why": [
    "🔥 Today: 94-98°F peak heat, gusty SE wind to 29 mph — heat-stress protocol hours for deck crews",
    "⛈ Late tonight-overnight: AccuWeather holds a 37-40% t-storm window; free feed reads 1-3% — overnight berthing/regas weather-check gap",
    "🌬 Midweek: building SE flow behind the front, gusts climbing toward 35-38 mph in the free feed's own numbers — tighten mooring and transfer margins"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Context",
  "headline": "Every FSRU berth call is a weather call",
  "facts": [
   "Excelerate's model is port flexibility: berthing windows worldwide, often on short notice",
   "Free APIs run 40-km grids, 1-3 hr steps — thunderstorm windows at a specific berth simply don't resolve",
   "AccuWeather hourly at berth coordinates plus 30-min lightning lead is what a regas schedule needs",
   "The same gap shows at every corridor your fleet touches"
  ]
 },
 "next_72h": [
  {
   "when": "Sunday PM",
   "what": "94-98°F, SE gusts to 29 mph",
   "impact": "Heat protocol for deck work; no lightning windows"
  },
  {
   "when": "Late tonight-overnight",
   "what": "AccuWeather 37-40% t-storm window vs free feed 1-3%",
   "impact": "Overnight transfer scheduling on the free feed green-lights into a storm window"
  },
  {
   "when": "Wed-Thu",
   "what": "Post-frontal SE flow building, gusts toward 35+ mph",
   "impact": "Mooring and transfer margins tighten; schedule weather checks hourly"
  }
 ],
 "comparison": {
  "intro": "Your team can already pull free weather data. Here's what each says about tonight at your berth — live from both APIs, same hour.",
  "rows": [
   {"feature":"Lightning strike tracking","free":"Not available — no free weather API serves real-time strike data","awx":"Real-time strikes + 30-min history, alerts pinned to each berth"},
   {
    "feature": "Tonight's storm window at the berth",
    "free": "\"Mostly clear, 1-3%\" — 40-km grid, no storm signal",
    "awx": "37-40% t-storm window timed hour-by-hour at berth coordinates"
   },
   {
    "feature": "Berthing wind & gust ramps",
    "free": "Broad 10-m wind, no ramp timing",
    "awx": "Hour-by-hour gust evolution pinned to the dock — berth-go/no-go with lead time"
   },
   {
    "feature": "Global FSRU coverage",
    "free": "One generic grid worldwide",
    "awx": "Same enterprise hourly + alerts at every corridor your fleet touches — one pane of glass"
   },
   {
    "feature": "Marine conditions for transfers",
    "free": "Coastal zone forecast, 6-hr granularity",
    "awx": "Hour-by-hour wave height, period & wind at the berth; transfer-window recommendations"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per berth — audit what hit, when, for planning and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY berth, and what do I do about it?\""
 },
 "capabilities": [
  ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your berth, not your region."],
  ["Berth-pinned wind & gust ramps","Hour-by-hour gust timing for mooring and transfer go/no-go calls."],
  ["Global corridor coverage","Enterprise hourly + alerts at every FSRU corridor worldwide."],
  ["Threshold alerting per berth","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t":"16:00Z","wx":"Intermittent clouds","tp":94,"pop":7},{"t":"17:00Z","wx":"Intermittent clouds","tp":95,"pop":7},{"t":"18:00Z","wx":"Partly sunny","tp":96,"pop":5},{"t":"19:00Z","wx":"Partly sunny","tp":97,"pop":0},{"t":"20:00Z","wx":"Partly sunny","tp":98,"pop":0},{"t":"21:00Z","wx":"Partly sunny","tp":97,"pop":0},{"t":"22:00Z","wx":"Partly sunny","tp":95,"pop":0},{"t":"23:00Z","wx":"Partly sunny","tp":94,"pop":0},{"t":"00:00Z","wx":"Partly sunny","tp":91,"pop":0},{"t":"01:00Z","wx":"Partly cloudy","tp":88,"pop":0},{"t":"02:00Z","wx":"Mostly clear","tp":87,"pop":0},{"t":"03:00Z","wx":"Mostly clear","tp":87,"pop":0}], "om": [{"t":"16:00Z","code":"Mostly clear","tp":88,"pop":3},{"t":"17:00Z","code":"Mostly clear","tp":89,"pop":2},{"t":"18:00Z","code":"Mostly clear","tp":90,"pop":3},{"t":"19:00Z","code":"Mostly clear","tp":91,"pop":3},{"t":"20:00Z","code":"Mostly clear","tp":90,"pop":4},{"t":"21:00Z","code":"Mostly clear","tp":90,"pop":3},{"t":"22:00Z","code":"Mostly clear","tp":89,"pop":3},{"t":"23:00Z","code":"Mostly clear","tp":88,"pop":2},{"t":"00:00Z","code":"Mostly clear","tp":87,"pop":2},{"t":"01:00Z","code":"Mostly clear","tp":86,"pop":2},{"t":"02:00Z","code":"Mostly clear","tp":85,"pop":1},{"t":"03:00Z","code":"Mostly clear","tp":84,"pop":1}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';;
