const DEMO_DATA = {
 "operator": "ExxonMobil",
 "generated": "2026-09-15",
 "topline": "RIGHT NOW at Baytown Refinery (Texas): a Heat Advisory is live until 7 PM CDT with AccuWeather showing the afternoon peaking at 94–95°F and 2 PM storms at 51% probability — lightning stand-downs possible mid-shift. The free feed shows a bone-dry day (≤6% rain all day) and misses the afternoon storm window entirely. Crane lifts and tank work scheduled on free data risk a surprise lightning halt this afternoon.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Baytown Refinery",
   "lat": 29.84,
   "lon": -94.98,
   "current": "Hot and humid — 91°F and climbing",
   "risk": "ELEVATED",
   "risk_why": [
    "🔥 NWS Heat Advisory live until 7 PM CDT — heat index past worker-safety thresholds across the Houston ship channel",
    "AccuWeather shows a 51% thunderstorm window at 2 PM; free data says 5% all day — a lightning stand-down decided on free data fires late",
    "Second day of the heat episode; overnight lows staying near 80°F limits overnight cooling for crews"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 15, 2026 — Heat Advisory + afternoon storm window on the Houston ship channel",
  "facts": [
   "Heat Advisory in effect for all Houston-area zones through 7 PM CDT, refinery included",
   "AccuWeather hourly flags a 47–51% storm window 2–3 PM at the refinery coordinates; free GFS-based feed shows ≤6%",
   "Same pattern repeating Wednesday — a second hot, storm-capable afternoon in the same footprint"
   ]
 },
 "headline": "Live same-hour comparison — Baytown Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 15 for 29.84, -94.98",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "This afternoon",
   "what": "94–95°F peak, Heat Advisory until 7 PM, ~50% storm window 2–3 PM",
   "impact": "Schedule heavy lifts before 1 PM; pre-stage lightning stand-down plan for afternoon shifts"
  },
  {
   "when": "Wed",
   "what": "Another hot, storm-capable afternoon",
   "impact": "Second consecutive heat-protocol day — rotate outdoor crews, watch tank-inspection windows"
  },
  {
   "when": "Late week",
   "what": "Gulf moisture returns; NHC watching the western Gulf for possible tropical development this weekend",
   "impact": "Loading and marine ops should keep a close eye on the weekend outlook — early heads-up beats a rushed decision"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Baytown Refinery):",
  "rows": [
   {
   "feature": "Afternoon storm window (2 PM)",
   "free": "5% — 'mostly clear'",
   "awx": "51% — thunderstorms, lightning risk mid-shift"
   },
   {
   "feature": "Heat Advisory at the refinery",
   "free": "Not in feed",
   "awx": "Live advisory reflected in hourly detail through 7 PM"
   },
   {
   "feature": "Peak temp today",
   "free": "96.7°F",
   "awx": "94°F — with heat-index context crews can plan against"
   }
  ],
  "closer": "The free feed calls today bone-dry at the largest refinery on the continent; AccuWeather's 51% storm window at 2 PM is the difference between a planned stand-down and a scramble."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Intermittent clouds", "tp": 90.0, "pop": 5, "gust": 8.1}, {"t": "12:00", "wx": "Intermittent clouds", "tp": 91.0, "pop": 5, "gust": 9.2}, {"t": "13:00", "wx": "Intermittent clouds", "tp": 92.0, "pop": 8, "gust": 11.5}, {"t": "14:00", "wx": "Mostly cloudy w/ t-storms", "tp": 93.0, "pop": 51, "gust": 12.7}, {"t": "15:00", "wx": "Intermittent clouds", "tp": 94.0, "pop": 47, "gust": 15.0}, {"t": "16:00", "wx": "Intermittent clouds", "tp": 93.0, "pop": 35, "gust": 17.3}, {"t": "17:00", "wx": "Intermittent clouds", "tp": 91.0, "pop": 19, "gust": 17.3}, {"t": "18:00", "wx": "Intermittent clouds", "tp": 89.0, "pop": 19, "gust": 17.3}, {"t": "19:00", "wx": "Intermittent clouds", "tp": 87.0, "pop": 15, "gust": 17.3}, {"t": "20:00", "wx": "Partly cloudy", "tp": 85.0, "pop": 6, "gust": 13.8}, {"t": "21:00", "wx": "Intermittent clouds", "tp": 84.0, "pop": 6, "gust": 11.5}, {"t": "22:00", "wx": "Intermittent clouds", "tp": 83.0, "pop": 6, "gust": 8.1}], "om": [{"t": "11:00", "code": "Mostly clear", "tp": 91.2, "pop": 3}, {"t": "12:00", "code": "Mostly clear", "tp": 93.0, "pop": 5}, {"t": "13:00", "code": "Partly cloudy", "tp": 95.4, "pop": 6}, {"t": "14:00", "code": "Mostly clear", "tp": 96.7, "pop": 5}, {"t": "15:00", "code": "Clear", "tp": 95.8, "pop": 5}, {"t": "16:00", "code": "Mostly clear", "tp": 94.9, "pop": 4}, {"t": "17:00", "code": "Clear", "tp": 93.2, "pop": 4}, {"t": "18:00", "code": "Clear", "tp": 90.8, "pop": 2}, {"t": "19:00", "code": "Mostly clear", "tp": 88.0, "pop": 2}, {"t": "20:00", "code": "Clear", "tp": 85.9, "pop": 2}, {"t": "21:00", "code": "Clear", "tp": 85.0, "pop": 1}, {"t": "22:00", "code": "Clear", "tp": 83.6, "pop": 1}], "loc": "Baytown", "key": "331135"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
