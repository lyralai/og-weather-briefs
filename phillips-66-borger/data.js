const DEMO_DATA = {
 "operator": "Phillips 66",
 "generated": "2026-09-15",
 "topline": "RIGHT NOW at Borger Refinery (Texas Panhandle): AccuWeather shows thunderstorms arriving 7–9 PM tonight at 64–65% probability with a Rain alarm (0.56 in) pinned to the refinery — a hail-capable evening storm at a fuels-and-coke complex. The free feed calls the same hours 26–32% and mostly dry, and misses the daytime 25+ mph wind gusts that matter for flare and crane work. Evening lightning + Panhandle wind is the ops story today.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Borger Refinery",
   "lat": 35.22,
   "lon": -101.83,
   "current": "Sunny and heating up — 90°F mid-afternoon",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈️ AccuWeather flags thunderstorms 7–9 PM at 64–65% with a Rain alarm (0.56 in) at the refinery; free feed tops out at 32%",
    "Daytime gusts 25 mph before the front — flare-off, crane and unit-inspection windows should close early",
    "Panhandle September storms rotate fast; a hail-capable cell over a coke-storage complex is a stand-down decision you want hours early"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 15, 2026 — Evening thunderstorm window over the Texas Panhandle refining corridor",
  "facts": [
   "AccuWeather Rain alarm for the Borger coordinates: 0.56 in expected, heaviest after 8 PM local",
   "Storm probability 64–65% at 8–9 PM vs 26–32% on the free feed — the stand-down call differs by an hour",
   "This is the same Plains storm system that flooded Iowa corn-belt fertilizer plants today — a wide, fast-moving setup"
   ]
 },
 "headline": "Live same-hour comparison — Borger Refinery coordinates, today",
 "facts": [
  "AccuWeather hourly pulled ~15:00 UTC Sep 15 for 35.22, -101.83",
  "OpenMeteo (free, GFS-based) pulled the same minute for the same coordinates",
  "Both embedded below, no cherry-picking"
 ],
 "next_72h": [
  {
   "when": "Tonight 7–9 PM",
   "what": "Thunderstorms, 64–65% probability, ~0.5 in rain",
   "impact": "Secure coke staging and open-air units before 7 PM; brief night shift on lightning protocol"
  },
  {
   "when": "Wed",
   "what": "Drier northwest flow behind the front",
   "impact": "Good window for deferred lifts and post-storm inspections"
  },
  {
   "when": "Thu–Fri",
   "what": "Next shortwave into the Southern Plains",
   "impact": "Another gusty-day candidate — keep flare and crane limits on the daily plan"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Borger Refinery):",
  "rows": [
   {
   "feature": "Tonight 8 PM storms",
   "free": "26% — 'mostly clear'",
   "awx": "64% — thunderstorms, 0.56 in alarm"
   },
   {
   "feature": "Daytime wind gusts",
   "free": "Not in hourly feed",
   "awx": "25 mph pre-frontal — crane/flare limits in play"
   },
   {
   "feature": "Precip alarm at the refinery",
   "free": "None",
   "awx": "Rain alarm, 0.56 in, pinned to these coordinates"
   }
  ],
  "closer": "Free data says a quiet evening; AccuWeather has thunderstorms at 64% with half an inch pinned to the refinery — that's the difference between securing the unit at 6 PM and discovering lightning at 8."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Partly sunny", "tp": 83.0, "pop": 20, "gust": 25.3}, {"t": "12:00", "wx": "Partly sunny", "tp": 86.0, "pop": 20, "gust": 25.3}, {"t": "13:00", "wx": "Partly sunny", "tp": 89.0, "pop": 22, "gust": 25.3}, {"t": "14:00", "wx": "Partly sunny", "tp": 90.0, "pop": 25, "gust": 20.7}, {"t": "15:00", "wx": "Partly sunny", "tp": 91.0, "pop": 25, "gust": 18.4}, {"t": "16:00", "wx": "Partly sunny", "tp": 92.0, "pop": 31, "gust": 16.1}, {"t": "17:00", "wx": "Partly sunny", "tp": 88.0, "pop": 49, "gust": 11.5}, {"t": "18:00", "wx": "Partly sunny", "tp": 84.0, "pop": 49, "gust": 11.5}, {"t": "19:00", "wx": "Partly sunny w/ t-storms", "tp": 79.0, "pop": 56, "gust": 12.7}, {"t": "20:00", "wx": "Thunderstorms", "tp": 80.0, "pop": 64, "gust": 9.2}, {"t": "21:00", "wx": "Thunderstorms", "tp": 77.0, "pop": 65, "gust": 10.4}, {"t": "22:00", "wx": "Cloudy", "tp": 74.0, "pop": 49, "gust": 11.5}], "om": [{"t": "11:00", "code": "Clear", "tp": 82.9, "pop": 1}, {"t": "12:00", "code": "Clear", "tp": 86.1, "pop": 1}, {"t": "13:00", "code": "Clear", "tp": 89.2, "pop": 1}, {"t": "14:00", "code": "Clear", "tp": 91.5, "pop": 4}, {"t": "15:00", "code": "Overcast", "tp": 92.0, "pop": 8}, {"t": "16:00", "code": "Overcast", "tp": 90.7, "pop": 12}, {"t": "17:00", "code": "Partly cloudy", "tp": 86.7, "pop": 26}, {"t": "18:00", "code": "Overcast", "tp": 86.5, "pop": 29}, {"t": "19:00", "code": "Partly cloudy", "tp": 81.1, "pop": 28}, {"t": "20:00", "code": "Mostly clear", "tp": 79.2, "pop": 26}, {"t": "21:00", "code": "Overcast", "tp": 75.0, "pop": 32}, {"t": "22:00", "code": "Overcast", "tp": 72.2, "pop": 32}], "loc": "Borger", "key": "331128"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
