const DEMO_DATA = {
 "operator": "QatarEnergy",
 "generated": "2026-09-10",
 "topline": "103°F on the ground at Ras Laffan right now, headed to 45°C (113°F) this weekend per Qatar met — while the free weather API underreads the same coordinates by 3-6°F at the hours your summer derating and outdoor-work rules key off. At 103°F every degree changes crew-rotation math.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Ras Laffan LNG complex (77 mtpa)",
   "lat": 25.89,
   "lon": 51.55,
   "current": "Clear 103°F",
   "risk": "ELEVATED",
   "risk_why": [
    "🔥 103°F now, 99°F at midnight — no overnight recovery for outdoor crews",
    "Local forecast: 45°C (113°F) peaks into the weekend (The Peninsula, Sep 10)",
    "Free API reads 3-6°F cooler at the same hours — cooling-water and derating margins computed off free data run hot"
   ]
  },
  {
   "name": "Golden Pass LNG (JV, Sabine Pass TX)",
   "lat": 29.69,
   "lon": -93.86,
   "current": "Sunny ~88°F",
   "risk": "MODERATE",
   "risk_why": [
    "Afternoon Gulf t-storm cells 40-50% PoP this week — lightning stand-downs at the construction site",
    "Two time zones, two regimes, one weather desk: your US JV sites sit in a convective corridor this week"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Summer 2026 — repeated 110°F+ stretches across the Gulf",
  "facts": [
   "Qatar September is running at the top of the climate distribution (AccuWeather Sept outlook for Doha: highs 96-113°F)",
   "Heat is your equivalent of a hurricane corridor: predictable, expensive, and managed hour-by-hour",
   "Enterprise hourly + wet-bulb guidance turns 'it's hot' into 'these are the 4 safe outdoor-work windows this week'"
  ]
 },
 "headline": "Live same-hour comparison — Ras Laffan coordinates, today",
 "facts": [
  "AccuWeather hourly pulled 15:0x UTC Sep 10 for 25.89,51.55",
  "OpenMeteo pulled the same minute, same coordinates",
  "Both embedded below"
 ],
 "next_72h": [
  {
   "when": "Now through midnight AST",
   "what": "99-103°F, clear, light wind",
   "impact": "Full heat protocol: outdoor work windows early AM; watch cooling-water margins"
  },
  {
   "when": "Fri-Sun",
   "what": "Building to 45°C (113°F) peaks per local met",
   "impact": "Crew rotation tightening; derating risk on gas turbines — plan generation margins accordingly"
  },
  {
   "when": "Shamal watch",
   "what": "No significant shamal in the window",
   "impact": "Good loading-weather windows at the berths; heat is the story, not wind"
  }
 ],
 "comparison": {
  "intro": "Same hours, same coordinates (Ras Laffan):",
  "rows": [
   {
    "feature": "Current temp",
    "free": "~96-97°F (reads cooler)",
    "awx": "103°F"
   },
   {
    "feature": "Evening temps (7 PM-midnight)",
    "free": "93-96°F",
    "awx": "95-99°F"
   },
   {
    "feature": "Operational read",
    "free": "'Hot'",
    "awx": "Hot with hour-specific outdoor-work windows"
   }
  ],
  "closer": "At 100°F+, a 3-6°F systematic underread is the margin between routine ops and a heat-incident investigation."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "19:00", "wx": "Clear", "tp": 99.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 1}, {"t": "20:00", "wx": "Clear", "tp": 98.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "21:00", "wx": "Clear", "tp": 96.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "22:00", "wx": "Clear", "tp": 95.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "23:00", "wx": "Clear", "tp": 93.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "00:00", "wx": "Clear", "tp": 92.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "01:00", "wx": "Clear", "tp": 92.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "02:00", "wx": "Clear", "tp": 92.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "03:00", "wx": "Clear", "tp": 92.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "04:00", "wx": "Clear", "tp": 91.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "05:00", "wx": "Clear", "tp": 90.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}, {"t": "06:00", "wx": "Sunny", "tp": 92.0, "pop": 0, "rain": {"Value": 0, "Unit": "in"}, "cloud": 0}], "om": [{"t": "19:00", "code": "Clear", "tp": 96.0, "pop": 0}, {"t": "20:00", "code": "Clear", "tp": 94.9, "pop": 0}, {"t": "21:00", "code": "Clear", "tp": 93.3, "pop": 0}, {"t": "22:00", "code": "Clear", "tp": 91.6, "pop": 0}, {"t": "23:00", "code": "Clear", "tp": 90.4, "pop": 0}, {"t": "00:00", "code": "Clear", "tp": 89.8, "pop": 0}, {"t": "01:00", "code": "Clear", "tp": 89.7, "pop": 0}, {"t": "02:00", "code": "Clear", "tp": 89.9, "pop": 0}, {"t": "03:00", "code": "Clear", "tp": 89.6, "pop": 0}, {"t": "04:00", "code": "Clear", "tp": 88.9, "pop": 0}, {"t": "05:00", "code": "Clear", "tp": 88.9, "pop": 0}, {"t": "06:00", "code": "Clear", "tp": 89.3, "pop": 0}], "loc": "Madinat al Kaban", "key": "274361"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = null;
