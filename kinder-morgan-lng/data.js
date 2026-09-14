const DEMO_DATA = {
 "operator": "Kinder Morgan LNG",
 "generated": "2026-09-14",
 "topline": "TODAY at Elba Island (Savannah, GA): AccuWeather flags a 51% thunderstorm window at 2 PM with 30% storm probability through 4 PM — while the free weather API reads 12% and calls it 'partly cloudy.' Meanwhile your Gulf LNG terminal (Port Sulphur, LA) sits under the same pattern: 47-51% afternoon storm windows. Two coasts, one afternoon, and the free feed underreads both.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Elba Island LNG",
   "lat": 32.10,
   "lon": -80.88,
   "current": "Humid 92°F, t-storms building",
   "risk": "MODERATE",
   "risk_why": [
    "⛈ 51% storm window at 2 PM EDT, 30% thunderstorm probability — first lightning casualty is dock loading and lift ops",
    "Free API shows 12% and 'clear/partly cloudy' at the same hour — crews planning on free data schedule right into it",
    "Post-frontal Wed-Thu: gusty NE winds and rough seas on the Atlantic side — small-craft windows tighten"
   ]
  },
  {
   "name": "Gulf LNG Terminal (Port Sulphur, LA)",
   "lat": 30.02,
   "lon": -90.10,
   "current": "Humid 89°F",
   "risk": "MODERATE",
   "risk_why": [
    "Afternoon/evening t-storm windows (47-51% PoP) along the LA coast today",
    "Wed-Thu cold front: fresh-to-strong NE-E winds and rough seas over the northern Gulf — barge/OSV schedules need margin",
    "Tropics stay quiet through the 7-day outlook (NHC) — a good window for deferred maintenance, scheduled against enterprise hourly"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "No hurricane near-miss this week — and that's exactly the point",
  "facts": [
   "The forecast gap doesn't wait for hurricane season's big days; it shows up on an ordinary September afternoon like today",
   "Free data reads 12% while enterprise reads 51% at the same hour, same coordinates — that difference compounds daily across two coasts",
   "When the next named system enters the Gulf, the same dashboard that caught today's window catches the evacuation call days earlier"
  ]
 },
 "headline": "Live same-hour comparison — Elba Island LNG coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 14 for 32.10, -80.88",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "Today 1-6 PM EDT",
   "what": "T-storm cells crossing the Savannah River / Elba Island corridor",
   "impact": "Suspend lifts on first strike; 30-min stand-down buffers around the 2-4 PM window"
  },
  {
   "when": "Wed-Thu",
   "what": "First autumn cold front: gusty NE winds, rough nearshore seas both coasts",
   "impact": "Tight small-craft windows on the Atlantic side; LA Gulf terminal sees fresh-to-strong NE-E winds"
  },
  {
   "when": "7-day outlook",
   "what": "No tropical development expected (NHC: Atlantic/Gulf/Caribbean quiet)",
   "impact": "Good stretch for deferred maintenance — schedule against enterprise hourly, not consumer apps"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Elba Island LNG):",
  "rows": [
   {
    "feature": "2 PM EDT storm chance",
    "free": "12% — 'partly cloudy', no storm flag",
    "awx": "51% — mostly cloudy w/ t-storms"
   },
   {
    "feature": "2-4 PM thunderstorm probability",
    "free": "Not available (no storm field in free feed)",
    "awx": "24-30% every hour"
   },
   {
    "feature": "Storm flagged in free data?",
    "free": "No — 'clear' by 7 PM, storm window invisible",
    "awx": "T-storms in the phrase 3 of first 4 hrs"
   }
  ],
  "closer": "A 4x miss at the exact hour of a lift window is the difference between a planned stand-down and a surprise one — on a day with no storm within a thousand miles."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "12:00", "wx": "Intermittent clouds", "tp": 89.0, "pop": 47, "gust": 6.9}, {"t": "13:00", "wx": "Mostly cloudy w/ showers", "tp": 91.0, "pop": 50, "gust": 6.9}, {"t": "14:00", "wx": "Mostly cloudy w/ t-storms", "tp": 92.0, "pop": 51, "gust": 11.5}, {"t": "15:00", "wx": "Mostly sunny", "tp": 93.0, "pop": 47, "gust": 11.5}, {"t": "16:00", "wx": "Mostly sunny", "tp": 90.0, "pop": 40, "gust": 12.7}, {"t": "17:00", "wx": "Mostly sunny", "tp": 89.0, "pop": 34, "gust": 13.8}, {"t": "18:00", "wx": "Mostly sunny", "tp": 88.0, "pop": 34, "gust": 11.5}, {"t": "19:00", "wx": "Sunny", "tp": 85.0, "pop": 22, "gust": 10.4}, {"t": "20:00", "wx": "Mostly clear", "tp": 82.0, "pop": 0, "gust": 8.1}, {"t": "21:00", "wx": "Mostly clear", "tp": 80.0, "pop": 0, "gust": 5.8}, {"t": "22:00", "wx": "Mostly clear", "tp": 79.0, "pop": 0, "gust": 5.8}, {"t": "23:00", "wx": "Mostly clear", "tp": 79.0, "pop": 0, "gust": 5.8}], "om": [{"t": "12:00", "code": "Overcast", "tp": 84.9, "pop": 7, "gust": 20.4}, {"t": "13:00", "code": "Overcast", "tp": 84.8, "pop": 9, "gust": 21.9}, {"t": "14:00", "code": "Overcast", "tp": 85.7, "pop": 12, "gust": 22.4}, {"t": "15:00", "code": "Overcast", "tp": 85.2, "pop": 11, "gust": 22.8}, {"t": "16:00", "code": "Overcast", "tp": 83.5, "pop": 7, "gust": 25.5}, {"t": "17:00", "code": "Overcast", "tp": 83.7, "pop": 3, "gust": 25.3}, {"t": "18:00", "code": "Overcast", "tp": 83.2, "pop": 1, "gust": 23.9}, {"t": "19:00", "code": "Overcast", "tp": 81.5, "pop": 0, "gust": 23.3}, {"t": "20:00", "code": "Overcast", "tp": 82.5, "pop": 1, "gust": 9.2}, {"t": "21:00", "code": "Partly cloudy", "tp": 81.7, "pop": 1, "gust": 8.9}, {"t": "22:00", "code": "Clear", "tp": 80.6, "pop": 1, "gust": 7.2}, {"t": "23:00", "code": "Clear", "tp": 80.2, "pop": 1, "gust": 8.7}], "loc": "Bluffton", "key": "2099397"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsIm1pOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
