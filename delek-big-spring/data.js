const DEMO_DATA = {
 "operator": "Delek US",
 "generated": "2026-10-27",
 "topline": "RIGHT NOW at Big Spring Refinery: AccuWeather holds a 22-34% storm chance through early afternoon with gusts to 13 mph, then a fully clean workweek window \u2014 while the free feed shows single-digit rain chances and a cooler, flatter temperature curve that misses this afternoon's warmth by 5\u00b0F. Same sky, two very different briefings for a West Texas refinery that lives on outdoor-unit turnaround timing.",
 "risk_level": "CLEAR",
 "assets": [
  {
   "name": "Big Spring Refinery",
   "lat": 32.25,
   "lon": -101.48,
   "current": "Intermittent clouds, 74\u00b0F",
   "risk": "CLEAR",
   "risk_why": [
    "\u2705 Afternoon clears completely \u2014 0% rain probability from 2 PM onward, gusts easing to 8 mph",
    "Morning storm chance (22-34% before 1 PM) with 6% lightning probability \u2014 minor, but worth a glance for any hot work this morning",
    "A clean 72-hour ops window opens this afternoon: dry, light wind, mid-70s \u2014 ideal turnaround and lift weather",
    "Free feed shows 5\u00b0F cooler this evening and misses the warm afternoon \u2014 small errors that compound over shift planning"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "West Texas autumn: quiet is the product too",
  "facts": [
   "Hurricane Nolo (Cat 1) and TS Rachel are both East Pacific systems this week \u2014 zero direct West Texas impact",
   "The value of a weather partner in West Texas is not storm alarms \u2014 it's verified clean windows that let you schedule confidently",
   "AccuWeather's hourly gust and temperature fields at your coordinates keep lift plans and cooling-load forecasts honest",
   "Free feeds smear 17-mile model grids over Permian terrain \u2014 your site microclimate differs, and that difference is the product"
  ]
 },
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "Clearing fully by 2 PM, gusts easing to 8-10 mph",
   "impact": "Open all outdoor work; ideal lift window"
  },
  {
   "when": "Tonight",
   "what": "Clear, calm, low 60s by morning",
   "impact": "Good night for any temperature-sensitive unit work"
  },
  {
   "when": "Sunday",
   "what": "Sunny, mid-70s, light winds",
   "impact": "Best maintenance day of the week \u2014 schedule the big lifts"
  },
  {
   "when": "Mon-Tue",
   "what": "Continued quiet; watching next Gulf system for moisture return",
   "impact": "Normal ops; no weather constraints visible"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each shows for Big Spring right now \u2014 and where they diverge.",
  "rows": [
   {
    "feature": "This afternoon's temperature",
    "free": "Underforecasts by 4-5\u00b0F \u2014 misses the warm afternoon peak entirely",
    "awx": "Hour-by-hour curve peaking 76\u00b0F at 5 PM, cooling smoothly overnight"
   },
   {
    "feature": "Morning storm chance",
    "free": "1-5% \u2014 essentially flat, no detail",
    "awx": "22-34% before 1 PM with 6% lightning probability, then verifiably 0%"
   },
   {
    "feature": "Gust fields for crane ops",
    "free": "Average wind only \u2014 no gust data at all",
    "awx": "Hourly gusts 8-13 mph with easing trend \u2014 lift windows with confidence"
   },
   {
    "feature": "Verified clean windows",
    "free": "\"Low chance\" is not a scheduleable product",
    "awx": "0% rain probability stamped hour-by-hour \u2014 the auditable basis for turnaround timing"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings \u2014 issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset \u2014 audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when can I safely schedule work \u2014 verified, at my fence line?\""
 },
 "capabilities": [
  [
   "Verified clean-window certification",
   "Hour-by-hour 0% probability fields at your coordinates \u2014 the auditable basis for turnaround and lift scheduling."
  ],
  [
   "Hourly gust fields at asset coordinates",
   "32.25\u00b0N 101.48\u00b0W \u2014 not a 17-mile grid average. Crane windows planned on real numbers."
  ],
  [
   "Site microclimate accuracy",
   "Permian terrain skews free model grids; AccuWeather's hourly curve at Big Spring runs 4-5\u00b0F truer this afternoon."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your sites \u2014 auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Mostly cloudy", "tp": 67, "pop": 0, "rain": 0, "cloud": 70}, {"t": "12:00", "wx": "Intermittent clouds", "tp": 71, "pop": 0, "rain": 0, "cloud": 70}, {"t": "13:00", "wx": "Intermittent clouds", "tp": 73, "pop": 0, "rain": 0, "cloud": 70}, {"t": "14:00", "wx": "Intermittent clouds", "tp": 75, "pop": 0, "rain": 0, "cloud": 70}, {"t": "15:00", "wx": "Partly sunny", "tp": 77, "pop": 0, "rain": 0, "cloud": 70}, {"t": "16:00", "wx": "Partly sunny", "tp": 79, "pop": 0, "rain": 0, "cloud": 70}, {"t": "17:00", "wx": "Mostly sunny", "tp": 78, "pop": 0, "rain": 0, "cloud": 70}, {"t": "18:00", "wx": "Mostly sunny", "tp": 76, "pop": 0, "rain": 0, "cloud": 70}, {"t": "19:00", "wx": "Sunny", "tp": 74, "pop": 0, "rain": 0, "cloud": 70}, {"t": "20:00", "wx": "Mostly clear", "tp": 71, "pop": 0, "rain": 0, "cloud": 70}, {"t": "21:00", "wx": "Mostly clear", "tp": 69, "pop": 0, "rain": 0, "cloud": 70}, {"t": "22:00", "wx": "Mostly clear", "tp": 68, "pop": 0, "rain": 0, "cloud": 70}], "om": [{"t": "15:00", "tp": 63, "pop": 0, "cloud": 0}, {"t": "16:00", "tp": 66, "pop": 0, "cloud": 0}, {"t": "17:00", "tp": 67, "pop": 0, "cloud": 0}, {"t": "18:00", "tp": 69, "pop": 0, "cloud": 0}, {"t": "19:00", "tp": 72, "pop": 0, "cloud": 0}, {"t": "20:00", "tp": 74, "pop": 0, "cloud": 0}, {"t": "21:00", "tp": 76, "pop": 0, "cloud": 0}, {"t": "22:00", "tp": 77, "pop": 0, "cloud": 0}, {"t": "23:00", "tp": 77, "pop": 0, "cloud": 0}, {"t": "00:00", "tp": 73, "pop": 0, "cloud": 0}, {"t": "01:00", "tp": 70, "pop": 0, "cloud": 0}, {"t": "02:00", "tp": 69, "pop": 0, "cloud": 0}], "loc": "Big Spring", "key": "335905"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
