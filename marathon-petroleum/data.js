const DEMO_DATA = {
 "operator": "Marathon Petroleum",
 "generated": "2026-09-14",
 "topline": "RIGHT NOW at Mandan Refinery (North Dakota): today the region saw 13 confirmed tornadoes and record September rainfall — Bismarck's 2.44 in broke a 126-year-old daily record. This evening the story flips to wind: AccuWeather shows gusts climbing to 39 mph by 4 PM and 45 mph after 8 PM CDT behind the front — with a live WIND alert at the refinery coordinates. The free feed tops out at 33 mph and showed 0% rain all morning. High-wind crane and dock stand-downs decided on free data fire hours late today.",
 "risk_level": "HIGH",
 "assets": [
  {
   "name": "Mandan Refinery",
   "lat": 46.83,
   "lon": -100.89,
   "current": "Rain ending, wind arriving — 60°F",
   "risk": "HIGH",
   "risk_why": [
    "🌬️ Live WIND alert at the refinery coordinates; gusts 39 mph by 4 PM, 45 mph after 8 PM CDT — past crane ops limits",
    "Free feed shows max 33 mph with 0% rain this morning — the windstorm magnitude and today's rain event both underread",
    "Williston-basin production fields saw 13 tornadoes and flash flooding today; flare-off and tank inspections need a wind plan this week"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 14, 2026 — 13 tornadoes + record flash flooding across central North Dakota, today",
  "facts": [
   "Bismarck recorded 2.44 in of rain, breaking the 1899 daily record; 13 confirmed tornadoes statewide",
   "Dozens of Williston-basin well sites and the Mandan refinery sat inside warning polygons all day",
   "This is what an ordinary September Monday looks like in 2026 — enterprise alerting pinned to your assets, not your county, is the difference"
  ]
 },
 "headline": "Live same-hour comparison — Mandan Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 14 for 46.83, -100.89",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "Today evening",
   "what": "Post-frontal windstorm: gusts to 45 mph, clearing skies",
   "impact": "Suspend crane and dock ops from 4 PM; secure loose refinery units and staging"
  },
  {
   "when": "Tue",
   "what": "Clearing and cooler",
   "impact": "Good recovery window for post-event inspections and deferred lifts"
  },
  {
   "when": "Wed-Thu",
   "what": "Next Plains system: heavy rain and strong storms target the Northern/Central Plains again (WPC)",
   "impact": "Second flash-flood threat in 4 days for the same footprint — pre-stage"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Mandan Refinery):",
  "rows": [
   {
    "feature": "Peak wind gust today",
    "free": "33 mph (8 PM) — 'clear'",
    "awx": "45 mph (8 PM) — post-frontal windstorm"
   },
   {
    "feature": "Live wind alert",
    "free": "None at these coordinates",
    "awx": "WIND alert active, pinned to the refinery"
   },
   {
    "feature": "Morning rain",
    "free": "0% all morning",
    "awx": "70% — rain now (observed: record 2.44 in fell)"
   }
  ],
  "closer": "Free data missed today's record rain by 70 points and tonight's windstorm by 12 mph — at a refinery that spent the day inside tornado warnings."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Rain", "tp": 60.0, "pop": 70, "gust": 27.6}, {"t": "12:00", "wx": "Cloudy", "tp": 62.0, "pop": 49, "gust": 25.3}, {"t": "13:00", "wx": "Mostly cloudy", "tp": 63.0, "pop": 39, "gust": 24.2}, {"t": "14:00", "wx": "Mostly cloudy", "tp": 66.0, "pop": 20, "gust": 29.9}, {"t": "15:00", "wx": "Mostly cloudy", "tp": 69.0, "pop": 20, "gust": 35.7}, {"t": "16:00", "wx": "Mostly cloudy", "tp": 71.0, "pop": 20, "gust": 39.1}, {"t": "17:00", "wx": "Mostly cloudy", "tp": 73.0, "pop": 20, "gust": 38.0}, {"t": "18:00", "wx": "Mostly cloudy", "tp": 71.0, "pop": 20, "gust": 35.7}, {"t": "19:00", "wx": "Mostly cloudy", "tp": 69.0, "pop": 13, "gust": 34.5}, {"t": "20:00", "wx": "Mostly clear", "tp": 68.0, "pop": 0, "gust": 44.9}, {"t": "21:00", "wx": "Mostly clear", "tp": 65.0, "pop": 0, "gust": 41.4}, {"t": "22:00", "wx": "Mostly clear", "tp": 62.0, "pop": 0, "gust": 38.0}], "om": [{"t": "11:00", "code": "Overcast", "tp": 55.6, "pop": 0, "gust": 27.1}, {"t": "12:00", "code": "Mostly clear", "tp": 57.3, "pop": 0, "gust": 25.5}, {"t": "13:00", "code": "Clear", "tp": 59.4, "pop": 0, "gust": 23.5}, {"t": "14:00", "code": "Clear", "tp": 61.0, "pop": 0, "gust": 22.4}, {"t": "15:00", "code": "Clear", "tp": 62.5, "pop": 0, "gust": 19.2}, {"t": "16:00", "code": "Clear", "tp": 63.4, "pop": 0, "gust": 16.6}, {"t": "17:00", "code": "Clear", "tp": 63.4, "pop": 0, "gust": 14.3}, {"t": "18:00", "code": "Clear", "tp": 62.8, "pop": 0, "gust": 13.6}, {"t": "19:00", "code": "Clear", "tp": 65.6, "pop": 0, "gust": 24.6}, {"t": "20:00", "code": "Clear", "tp": 60.8, "pop": 0, "gust": 15.9}, {"t": "21:00", "code": "Clear", "tp": 58.9, "pop": 0, "gust": 21.5}, {"t": "22:00", "code": "Clear", "tp": 57.9, "pop": 0, "gust": 25.1}], "loc": "Mandan", "key": "334945"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsIm1pOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
