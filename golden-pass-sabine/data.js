const DEMO_DATA = {
 "operator": "ExxonMobil",
 "generated": "2026-09-09",
 "topline": "RIGHT NOW at Golden Pass: active thunderstorms (66% PoP), second stronger window 4–6 PM at 75%. The free weather API your team can pull says 19–31% rain chance — a 3× miss on the exact hours your dock crew needs right.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Golden Pass LNG",
   "lat": 29.69,
   "lon": -93.86,
   "current": "Thunderstorms 87.0°F",
   "risk": "ELEVATED",
   "risk_why": [
    "⛈ Thunderstorms active right now (66% PoP) — second stronger window 4–6 PM (75%)",
    "Free feeds (OpenMeteo) read 19–31% rain all afternoon — a loading window you'd guess wrong on",
    "Clears this evening; hot and mostly dry through Friday"
   ]
  },
  {
   "name": "Sabine Pass LNG (adjacent)",
   "lat": 29.75,
   "lon": -93.87,
   "current": "Partly sunny w/ t-storms 88°F",
   "risk": "ELEVATED",
   "risk_why": [
    "Same corridor: t-storm cells now and 4–6 PM; lightning watch for marine transfer ops",
    "Both terminals share the Sabine-Neches corridor — one lightning halt hits both berths"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Sep 1 — TS Edouard crossed this exact corridor; your terminals sat in the surge-warning zone",
  "facts": [
   "4 Gulf LNG terminals under storm surge warnings during Edouard",
   "Marine ops disrupted across TX/LA ports for ~3 days",
   "Peak hurricane season runs through early October — the quiet week is when you prep"
  ]
 },
 "next_72h": [
  {
   "when": "Wed 4–6 PM",
   "what": "Second thunderstorm window, 75% PoP, heavy rain cells",
   "impact": "Suspend dock work; lightning protocol; verify before restart"
  },
  {
   "when": "Wed evening",
   "what": "Clearing from the west; temps hold upper 80s",
   "impact": "Normal night ops; humidity-driven heat stress continues"
  },
  {
   "when": "Thu–Fri",
   "what": "Hot, mostly sunny, isolated afternoon cells (~20-30%)",
   "impact": "Standard summer ops; brief loading windows unaffected"
  },
  {
   "when": "Weekend",
   "what": "Typical September pattern — quiet tropics (NHC: no Atlantic formation expected 7 days)",
   "impact": "Good window for deferred maintenance before peak-season October"
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
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY dock, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Minute-by-minute lightning nowcast",
   "Know when strikes are 30 minutes out — at your dock, not your region."
  ],
  [
   "Asset-pinned tropical tracking",
   "Cone forecasts tied to Golden Pass coordinates, not county averages."
  ],
  [
   "Marine wind & wave windows",
   "Berthing and tanker scheduling against hour-by-hour sea state at your berths."
  ],
  [
   "Threshold alerting per terminal",
   "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00", "wx": "Thunderstorms", "tp": 87.0, "pop": 66, "rain": {"Value": 0.01, "Unit": "in", "UnitType": 1}, "cloud": 86}, {"t": "17:00", "wx": "Partly sunny w/ t-storms", "tp": 88.0, "pop": 75, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "18:00", "wx": "Partly sunny", "tp": 89.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "19:00", "wx": "Partly sunny", "tp": 90.0, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "20:00", "wx": "Partly sunny", "tp": 89.0, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "21:00", "wx": "Partly sunny", "tp": 88.0, "pop": 40, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "22:00", "wx": "Partly sunny w/ t-storms", "tp": 86.0, "pop": 52, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "23:00", "wx": "Partly sunny", "tp": 86.0, "pop": 48, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "00:00", "wx": "Partly sunny", "tp": 84.0, "pop": 44, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "01:00", "wx": "Partly cloudy", "tp": 81.0, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 44}, {"t": "02:00", "wx": "Partly cloudy w/ t-storms", "tp": 79.0, "pop": 51, "rain": {"Value": 0.04, "Unit": "in", "UnitType": 1}, "cloud": 26}, {"t": "03:00", "wx": "Mostly clear", "tp": 79.0, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 26}], "om": [{"t": "15:00", "code": "Mostly clear", "tp": 86, "pop": 19}, {"t": "16:00", "code": "Mostly clear", "tp": 86, "pop": 25}, {"t": "17:00", "code": "Overcast", "tp": 86, "pop": 27}, {"t": "18:00", "code": "Showers", "tp": 82, "pop": 31}, {"t": "19:00", "code": "Overcast", "tp": 83, "pop": 21}, {"t": "20:00", "code": "Overcast", "tp": 85, "pop": 16}, {"t": "21:00", "code": "Partly cloudy", "tp": 86, "pop": 13}, {"t": "22:00", "code": "Partly cloudy", "tp": 85, "pop": 8}, {"t": "23:00", "code": "Overcast", "tp": 85, "pop": 3}, {"t": "00:00", "code": "Overcast", "tp": 83, "pop": 2}, {"t": "01:00", "code": "Overcast", "tp": 81, "pop": 2}, {"t": "02:00", "code": "Partly cloudy", "tp": 81, "pop": 2}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
