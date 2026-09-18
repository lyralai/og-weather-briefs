const DEMO_DATA = {
 "operator": "Chevron",
 "generated": "2026-09-18",
 "topline": "RIGHT NOW at Pascagoula Refinery (~360 kbd): AccuWeather shows a 51% thunderstorm window at 4 PM this afternoon — and the same Gulf-moisture window repeating Saturday and Sunday afternoons. The free feed shows a 1% rain day and misses the window entirely. Docks, crane lifts and turnarounds scheduled on free data today are planning against the wrong sky.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Pascagoula Refinery",
   "lat": 30.36,
   "lon": -88.55,
   "current": "Hot and humid — 91°F, storm window building",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈ AccuWeather: 43-51% thunderstorm probability 2-4 PM today — lightning stand-down risk mid-shift",
    "Free feed (OpenMeteo/GFS): ≤1% rain all day at these coordinates — a stand-down decided on free data fires late",
    "Same pattern repeats Saturday AND Sunday afternoons (51% windows 3-4 PM) — three consecutive storm-capable afternoons on a direct hurricane-corridor site"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Direct hurricane corridor — and the season's statistical peak is now",
  "facts": [
   "Pascagoula took direct hits from Katrina (2005) and Zeta (2020); the site's weather playbook is built around Gulf timing",
   "Atlantic activity: NHC is watching AL99 southwest of the Azores (60% formation chance) — not a Gulf threat today, but the peak-season clock is running",
   "Meanwhile the daily risk here isn't a hurricane — it's the unglamorous 2-4 PM lightning window that free feeds keep missing"
  ]
 },
 "headline": "Live same-hour comparison — Pascagoula Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 18 for 30.36, -88.55",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "Today 2-4 PM",
   "what": "43-51% thunderstorm window (AccuWeather); free feed says 1%",
   "impact": "Pre-stage lightning stand-down for dock and crane ops; schedule lifts before 1 PM"
  },
  {
   "when": "Saturday & Sunday afternoons",
   "what": "Same 47-51% storm windows 3-4 PM",
   "impact": "Three straight storm-capable afternoons — build the pattern into the weekend shift plan"
  },
  {
   "when": "Overnights",
   "what": "Clear, lows near 71-74°F",
   "impact": "Best maintenance windows overnight/early morning each day"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Pascagoula Refinery):",
  "rows": [
   {
   "feature": "This afternoon storm window (4 PM)",
   "free": "1% — 'mostly clear'",
   "awx": "51% — thunderstorms, lightning stand-down risk mid-shift"
   },
   {
   "feature": "Weekend afternoon windows",
   "free": "2% or less each afternoon",
   "awx": "47-51% Saturday and Sunday 3-4 PM"
   },
   {
   "feature": "Peak temp today",
   "free": "—",
   "awx": "91°F with heat-index context crews can plan against"
   }
  ],
  "closer": "The free feed calls three straight storm afternoons 'mostly clear' at a 360 kbd refinery on the water; AccuWeather's 51% window at 4 PM is the difference between a planned stand-down and a scramble."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Mostly sunny", "tp": 87.0, "pop": 5, "gust": 12.7}, {"t": "12:00", "wx": "Mostly sunny", "tp": 88.0, "pop": 5, "gust": 13.8}, {"t": "13:00", "wx": "Mostly sunny", "tp": 90.0, "pop": 8, "gust": 16.1}, {"t": "14:00", "wx": "Mostly sunny", "tp": 91.0, "pop": 43, "gust": 16.1}, {"t": "15:00", "wx": "Mostly sunny", "tp": 91.0, "pop": 47, "gust": 17.3}, {"t": "16:00", "wx": "Partly sunny w/ t-storms", "tp": 90.0, "pop": 51, "gust": 17.3}, {"t": "17:00", "wx": "Mostly sunny", "tp": 88.0, "pop": 24, "gust": 13.8}, {"t": "18:00", "wx": "Mostly sunny", "tp": 86.0, "pop": 19, "gust": 10.4}, {"t": "19:00", "wx": "Mostly clear", "tp": 84.0, "pop": 13, "gust": 6.9}, {"t": "20:00", "wx": "Mostly clear", "tp": 81.0, "pop": 0, "gust": 5.8}, {"t": "21:00", "wx": "Mostly clear", "tp": 79.0, "pop": 0, "gust": 5.8}, {"t": "22:00", "wx": "Mostly clear", "tp": 76.0, "pop": 0, "gust": 5.8}, {"t": "23:00", "wx": "Mostly clear", "tp": 74.0, "pop": 0, "gust": 4.6}, {"t": "00:00", "wx": "Mostly clear", "tp": 74.0, "pop": 0, "gust": 4.6}, {"t": "01:00", "wx": "Mostly clear", "tp": 73.0, "pop": 0, "gust": 3.5}, {"t": "02:00", "wx": "Mostly clear", "tp": 72.0, "pop": 0, "gust": 3.5}, {"t": "03:00", "wx": "Mostly clear", "tp": 71.0, "pop": 0, "gust": 4.6}, {"t": "04:00", "wx": "Mostly clear", "tp": 70.0, "pop": 0, "gust": 5.8}, {"t": "05:00", "wx": "Mostly clear", "tp": 71.0, "pop": 0, "gust": 5.8}, {"t": "06:00", "wx": "Mostly clear", "tp": 72.0, "pop": 0, "gust": 5.8}, {"t": "07:00", "wx": "Mostly sunny", "tp": 71.0, "pop": 0, "gust": 5.8}, {"t": "08:00", "wx": "Mostly sunny", "tp": 74.0, "pop": 7, "gust": 6.9}, {"t": "09:00", "wx": "Mostly sunny", "tp": 79.0, "pop": 7, "gust": 6.9}, {"t": "10:00", "wx": "Mostly sunny", "tp": 82.0, "pop": 6, "gust": 6.9}], "om": [{"t": "00:00", "wx": "Clear", "tp": 82.2, "pop": 0}, {"t": "01:00", "wx": "Clear", "tp": 82.2, "pop": 0}, {"t": "02:00", "wx": "Clear", "tp": 79.7, "pop": 0}, {"t": "03:00", "wx": "Clear", "tp": 79.9, "pop": 0}, {"t": "04:00", "wx": "Clear", "tp": 77.4, "pop": 0}, {"t": "05:00", "wx": "Clear", "tp": 74.3, "pop": 0}, {"t": "06:00", "wx": "Clear", "tp": 74.3, "pop": 0}, {"t": "07:00", "wx": "Clear", "tp": 72.7, "pop": 0}, {"t": "08:00", "wx": "Clear", "tp": 71.1, "pop": 0}, {"t": "09:00", "wx": "Clear", "tp": 69.8, "pop": 0}, {"t": "10:00", "wx": "Clear", "tp": 69.3, "pop": 0}, {"t": "11:00", "wx": "Clear", "tp": 69.3, "pop": 0}, {"t": "12:00", "wx": "Clear", "tp": 68.0, "pop": 0}, {"t": "13:00", "wx": "Clear", "tp": 71.4, "pop": 0}, {"t": "14:00", "wx": "Clear", "tp": 77.2, "pop": 0}, {"t": "15:00", "wx": "Clear", "tp": 82.9, "pop": 0}, {"t": "16:00", "wx": "Clear", "tp": 87.4, "pop": 0}, {"t": "17:00", "wx": "Clear", "tp": 89.4, "pop": 0}, {"t": "18:00", "wx": "Clear", "tp": 89.6, "pop": 1}, {"t": "19:00", "wx": "Clear", "tp": 89.4, "pop": 1}, {"t": "20:00", "wx": "Clear", "tp": 89.2, "pop": 1}, {"t": "21:00", "wx": "Clear", "tp": 88.0, "pop": 1}, {"t": "22:00", "wx": "Clear", "tp": 86.7, "pop": 1}, {"t": "23:00", "wx": "Clear", "tp": 85.5, "pop": 1}], "loc": "Pascagoula", "key": "329431"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
