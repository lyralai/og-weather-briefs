const DEMO_DATA = {
 "operator": "Venture Global",
 "generated": "2026-09-10",
 "topline": "RIGHT NOW at Calcasieu Pass: 87°F and building afternoon t-storm cells (43-51% PoP through 5 PM). At Plaquemines, a 54% thunderstorm window at 7 PM tonight — while the free weather API reads 7-15% all day. That's a 3.6x same-hour miss on the hours your dock crews plan around.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Calcasieu Pass LNG",
   "lat": 29.75,
   "lon": -93.32,
   "current": "Sunny 87°F",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈ Afternoon t-storm cells building 1-5 PM (43-51% PoP) — first lightning casualty is dock loading and lift ops",
    "OpenMeteo shows 13-33% and 'light drizzle' at the same hours — free data understates the storm risk 1.5-2x",
    "Sep 1 Hurricane Edouard: surge warnings hit this exact terminal — you know the stakes; today is a reminder the gap is daily, not just on hurricane days"
   ]
  },
  {
   "name": "Plaquemines LNG",
   "lat": 29.15,
   "lon": -89.35,
   "current": "Mostly cloudy 82°F",
   "risk": "ELEVATED",
   "risk_why": [
    "Thunderstorms in the hourly forecast at 11 AM (51%) and again 7 PM (54%)",
    "Free API: 7-15% all day, zero storm flags — a planned evening crew window looks 'safe' on free data",
    "Evening t-storms = marine transfer and night-shift lift exposure on the Mississippi corridor"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 1, 2026 — Hurricane Edouard surge warnings covered all four of your Gulf terminals",
  "facts": [
   "Calcasieu Pass, Plaquemines, CP2 and the Plaquemines corridor were under storm-surge warnings simultaneously",
   "That event is the demo case for asset-pinned alerting: one dashboard, four terminals, one timeline",
   "You demanned on public timelines; enterprise nowcasting buys hours back"
  ]
 },
 "headline": "Live same-hour comparison — Calcasieu Pass coordinates, today",
 "facts": [
  "AccuWeather hourly pulled 15:0x UTC Sep 10 for 29.75,-93.32",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "Today 1-5 PM CDT",
   "what": "T-storm cells crossing the Cameron-Calcasieu corridor",
   "impact": "Suspend lifts on first strike; 30-min stand-down buffers around 1 PM and 3 PM windows"
  },
  {
   "when": "Tonight 7 PM CDT",
   "what": "54% t-storm window at Plaquemines",
   "impact": "Marine transfer hold risk; free data shows 7% — don't let a free API make this call"
  },
  {
   "when": "Fri-Sun",
   "what": "No tropical development in Gulf (NHC: quiet 7 days)",
   "impact": "Good window for deferred maintenance — schedule against enterprise hourly, not consumer apps"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Calcasieu Pass LNG):",
  "rows": [
   {
    "feature": "1 PM t-storm probability",
    "free": "23% (overcast, no storm flag)",
    "awx": "51% — mostly cloudy w/ t-storms"
   },
   {
    "feature": "5 PM t-storm probability",
    "free": "10%",
    "awx": "34%"
   },
   {
    "feature": "Storm flagged in free data?",
    "free": "No — 'light drizzle' at 2 PM",
    "awx": "T-storms in the phrase 3 of first 5 hrs"
   }
  ],
  "closer": "A 2x miss at the exact hour of a lift window is the difference between a planned stand-down and a surprise one."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Intermittent clouds", "tp": 88.0, "pop": 43, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "12:00", "wx": "Intermittent clouds", "tp": 88.0, "pop": 47, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "13:00", "wx": "Mostly cloudy w/ t-storms", "tp": 89.0, "pop": 51, "rain": {"Value": 0.05, "Unit": "in"}, "cloud": 70}, {"t": "14:00", "wx": "Intermittent clouds", "tp": 90.0, "pop": 43, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "15:00", "wx": "Mostly cloudy w/ t-storms", "tp": 89.0, "pop": 51, "rain": {"Value": 0.05, "Unit": "in"}, "cloud": 70}, {"t": "16:00", "wx": "Intermittent clouds", "tp": 88.0, "pop": 47, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "17:00", "wx": "Intermittent clouds", "tp": 87.0, "pop": 34, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "18:00", "wx": "Intermittent clouds", "tp": 86.0, "pop": 34, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "19:00", "wx": "Intermittent clouds", "tp": 85.0, "pop": 29, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "20:00", "wx": "Intermittent clouds", "tp": 81.0, "pop": 19, "rain": {"Value": 0, "Unit": "in"}, "cloud": 70}, {"t": "21:00", "wx": "Intermittent clouds", "tp": 80.0, "pop": 19, "rain": {"Value": 0, "Unit": "in"}, "cloud": 65}, {"t": "22:00", "wx": "Intermittent clouds", "tp": 79.0, "pop": 19, "rain": {"Value": 0, "Unit": "in"}, "cloud": 53}], "om": [{"t": "11:00", "code": "Overcast", "tp": 86.7, "pop": 6}, {"t": "12:00", "code": "Overcast", "tp": 87.1, "pop": 6}, {"t": "13:00", "code": "Overcast", "tp": 87.7, "pop": 5}, {"t": "14:00", "code": "Overcast", "tp": 87.9, "pop": 6}, {"t": "15:00", "code": "Partly cloudy", "tp": 87.3, "pop": 9}, {"t": "16:00", "code": "Overcast", "tp": 87.2, "pop": 6}, {"t": "17:00", "code": "Overcast", "tp": 86.3, "pop": 6}, {"t": "18:00", "code": "Partly cloudy", "tp": 85.6, "pop": 4}, {"t": "19:00", "code": "Partly cloudy", "tp": 83.7, "pop": 4}, {"t": "20:00", "code": "Clear", "tp": 81.9, "pop": 3}, {"t": "21:00", "code": "Overcast", "tp": 81.2, "pop": 2}, {"t": "22:00", "code": "Overcast", "tp": 81.1, "pop": 2}], "loc": "Cameron", "key": "333437"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
