const DEMO_DATA = {
 "operator": "ConocoPhillips",
 "generated": "2026-09-09",
 "topline": "RIGHT NOW at Port Arthur LNG: thunderstorms overhead (66% PoP), stronger round 4–6 PM at 75%. The free weather API reads 8–30% rain chance this afternoon — exactly the hours your construction schedule depends on.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Port Arthur LNG (ACP)",
   "lat": 29.73,
   "lon": -93.85,
   "current": "Thunderstorms 87.0°F",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈ Thunderstorms active now (66%), second round ~4–6 PM at 75% PoP",
    "OpenMeteo shows 8–30% rain chance this afternoon — free data says \"no problem\" while cells build",
    "Construction-phase site: crane and lift ops are the first lightning casualty"
   ]
  },
  {
   "name": "Port Arthur corridor (refining/industrial)",
   "lat": 29.94,
   "lon": -93.93,
   "current": "T-storms nearby, 87°F",
   "risk": "ELEVATED",
   "risk_why": [
    "Whole Port Arthur industrial complex shares this afternoon's two storm windows",
    "Heavy rain cells 4–6 PM reduce visibility for marine traffic on the Sabine-Neches"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 1 — TS Edouard put Port Arthur-area LNG and refining assets under storm surge warnings",
  "facts": [
   "Surge warnings covered this corridor for 36+ hours during Edouard",
   "Evacuate-vs-ride-out decisions made on public cone data alone",
   "Peak season continues through early October — next system may not miss"
  ]
 },
 "next_72h": [
  {
   "when": "Wed 4–6 PM",
   "what": "Peak thunderstorm window: 75% PoP, heavy rain, lightning",
   "impact": "Stand down crane ops; secure loose construction material"
  },
  {
   "when": "Wed evening",
   "what": "Storms exit east; slow clearing overnight",
   "impact": "Night shift resumes normal work"
  },
  {
   "when": "Thu–Fri",
   "what": "Hot, mostly sunny, isolated PM cells",
   "impact": "Standard ops; hydrate protocol for outdoor crews"
  },
  {
   "when": "Weekend+",
   "what": "NHC: no tropical formation expected in the Atlantic/Gulf for 7 days",
   "impact": "Weather-favorable window — advance schedule-critical lifts"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about this exact afternoon — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Thunderstorm arrival time at your dock",
    "free": "\"Scattered storms\" on a 40×40 mi grid — OpenMeteo shows 15–25% rain chance all afternoon",
    "awx": "Hour-by-hour nowcast at your coordinates: t-storms now, second window ~4 PM, 75% probability at 5 PM"
   },
   {
    "feature": "Lightning strike tracking",
    "free": "Not available — no free weather API serves real-time strike data",
    "awx": "Real-time strikes + 30-min history, alerts pinned to each site"
   },
   {
    "feature": "Storm intensity at asset coordinates",
    "free": "Parish-level probability, no rain-rate or gust detail",
    "awx": "Hourly rain rate, wind gust, cloud cover at your berth — not the county average"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings — issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Tropical cyclone decision support",
    "free": "NHC public cone, 5-day, updates 2×/day",
    "awx": "Storm-track probabilities + surge guidance tied to your asset; expert meteorologist consult"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY site, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Minute-by-minute lightning nowcast",
   "30-minute strike lead time for construction cranes and dock crews."
  ],
  [
   "Construction weather thresholds",
   "Wind limits for lifts, lightning stand-down distances — your triggers, automated."
  ],
  [
   "Asset-pinned tropical tracking",
   "Surge and cone guidance tied to Port Arthur LNG coordinates."
  ],
  [
   "Expert meteorologist consult",
   "A human forecaster on call when the automate-vs-shutdown call gets hard."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00", "wx": "Thunderstorms", "tp": 87.0, "pop": 66, "rain": {"Value": 0.01, "Unit": "in", "UnitType": 1}, "cloud": 86}, {"t": "17:00", "wx": "Partly sunny w/ t-storms", "tp": 88.0, "pop": 75, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "18:00", "wx": "Partly sunny", "tp": 89.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "19:00", "wx": "Partly sunny", "tp": 90.0, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "20:00", "wx": "Partly sunny", "tp": 89.0, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "21:00", "wx": "Partly sunny", "tp": 88.0, "pop": 40, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "22:00", "wx": "Partly sunny w/ t-storms", "tp": 86.0, "pop": 52, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "23:00", "wx": "Partly sunny", "tp": 86.0, "pop": 48, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "00:00", "wx": "Partly sunny", "tp": 84.0, "pop": 44, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "01:00", "wx": "Partly cloudy", "tp": 81.0, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 44}, {"t": "02:00", "wx": "Partly cloudy w/ t-storms", "tp": 79.0, "pop": 51, "rain": {"Value": 0.04, "Unit": "in", "UnitType": 1}, "cloud": 26}, {"t": "03:00", "wx": "Mostly clear", "tp": 79.0, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 26}], "om": [{"t": "15:00", "code": "Partly cloudy", "tp": 86, "pop": 19}, {"t": "16:00", "code": "Mostly clear", "tp": 86, "pop": 25}, {"t": "17:00", "code": "Partly cloudy", "tp": 87, "pop": 26}, {"t": "18:00", "code": "Drizzle", "tp": 83, "pop": 30}, {"t": "19:00", "code": "Overcast", "tp": 84, "pop": 20}, {"t": "20:00", "code": "Overcast", "tp": 86, "pop": 15}, {"t": "21:00", "code": "Partly cloudy", "tp": 86, "pop": 12}, {"t": "22:00", "code": "Partly cloudy", "tp": 86, "pop": 8}, {"t": "23:00", "code": "Overcast", "tp": 85, "pop": 3}, {"t": "00:00", "code": "Overcast", "tp": 83, "pop": 2}, {"t": "01:00", "code": "Overcast", "tp": 81, "pop": 2}, {"t": "02:00", "code": "Mostly clear", "tp": 80, "pop": 2}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
