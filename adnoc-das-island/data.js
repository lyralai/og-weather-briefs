const DEMO_DATA = {
 "operator": "ADNOC LNG",
 "generated": "2026-09-06",
 "topline": "RIGHT NOW at Das Island: 99\u00b0F and clear through the night \u2014 but heat stress on outdoor crews peaks again tomorrow, and both free and premium data agree only on the temperature. The difference is what your ops thresholds do with it.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Das Island LNG",
   "lat": 24.88,
   "lon": 52.88,
   "current": "Clear 99\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "\ud83d\udd25 Overnight low ~92-94\u00b0F \u2014 no recovery window for outdoor crews before tomorrow's shift",
    "Wind stays light through Monday: flare/vent dispersion and crane lift margins reduced",
    "Late-summer Shamal season setup: sustained wind + dust events become more frequent from here"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Last summer, in your region",
  "headline": "Jul-Aug 2026 heat episodes: Persian Gulf sea temps hit record highs again \u2014 extreme heat-humidity load on Das Island outdoor ops",
  "facts": [
   "Gulf-wide heat indices repeatedly crossed 140\u00b0F \u2014 among the highest ever recorded on Earth",
   "Outdoor shift rotation and hydration protocols activated across offshore UAE assets",
   "LNG tanker loading in peak heat adds thermal stress to personnel AND cargo boil-off management",
   "Heat is a production variable, not just an HR one \u2014 it shows up in your throughput numbers"
  ]
 },
 "next_72h": [
  {
   "when": "Tonight",
   "what": "Clear, low ~92-94\u00b0F, light wind",
   "impact": "Machinery cooling capacity reduced; monitor compressor temps"
  },
  {
   "when": "Mon Sep 7",
   "what": "Sunny, high ~99-101\u00b0F",
   "impact": "Peak heat-stress window 11 AM-4 PM; rotate outdoor crews"
  },
  {
   "when": "Tue-Wed",
   "what": "Continued heat; watch for early Shamal signals",
   "impact": "Sustained-wind forecasts tied to your berth decide loading timing"
  }
 ],
 "comparison": {
  "intro": "Your team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each tells you about heat ops at Das Island \u2014 and what AccuWeather adds.",
  "rows": [
 {"feature":"Lightning strike tracking","free":"Not available — no free weather API serves real-time strike data","awx":"Real-time strikes + 30-min history, alerts pinned to each site"},
   {
    "feature": "Heat-stress threshold timing at your facility",
    "free": "Temperature to 2\u00b0C on a 25-km grid \u2014 the island, not your plant",
    "awx": "Hour-by-hour heat index + RealFeel at your coordinates, with advance notice of when your heat-action thresholds trip"
   },
   {
    "feature": "Shamal wind & dust onset",
    "free": "Coarse wind field, 3-hr steps, no dust product",
    "awx": "Proprietary Shamal onset timing, hour-by-hour gusts, visibility impact for helicopter and marine logistics"
   },
   {
    "feature": "Marine conditions for tanker berthing",
    "free": "Open-sea grid point, no berth resolution",
    "awx": "Hourly wind, wave & current at the berth; loading-window recommendations"
   },
   {
    "feature": "Alerting on YOUR thresholds",
    "free": "Generic public advisories, if any",
    "awx": "Threshold alerting per site \u2014 auto-escalation when conditions cross your operational lines"
   },
   {
    "feature": "Expert consult on the hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for evacuate-vs-ride-out and loading-defer decisions"
   }
  ],
  "closer": "Free data tells you it's hot. AccuWeather tells you when heat crosses YOUR operating thresholds \u2014 before your crews feel it."
 },
 "capabilities": [
  [
   "Hourly RealFeel & heat index, asset-pinned",
   "Know when heat-stress protocols trigger \u2014 at your plant coordinates, not the regional grid."
  ],
  [
   "Shamal wind & dust nowcasting",
   "Sustained-wind onset tied to Das Island: loading timing, helicopter ops, flare dispersion."
  ],
  [
   "Marine wind & wave windows",
   "Berthing windows for LNG tankers against hour-by-hour sea state at your jetty."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, auto-escalation, no one watching a dashboard at 3 AM."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Clear", "tp": 99, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "17:00Z", "wx": "Clear", "tp": 97, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "18:00Z", "wx": "Clear", "tp": 96, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "19:00Z", "wx": "Clear", "tp": 95, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "20:00Z", "wx": "Clear", "tp": 94, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "21:00Z", "wx": "Clear", "tp": 93, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "22:00Z", "wx": "Clear", "tp": 93, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "23:00Z", "wx": "Clear", "tp": 93, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "00:00Z", "wx": "Clear", "tp": 93, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "01:00Z", "wx": "Clear", "tp": 93, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "02:00Z", "wx": "Clear", "tp": 92, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "03:00Z", "wx": "Sunny", "tp": 94, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}], "om": [{"t": "16:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "17:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "18:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "19:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "20:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "21:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "22:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "23:00Z", "code": "Clear", "tp": 97, "pop": 0}, {"t": "00:00Z", "code": "Clear", "tp": 97, "pop": 0}, {"t": "01:00Z", "code": "Clear", "tp": 97, "pop": 0}, {"t": "02:00Z", "code": "Clear", "tp": 96, "pop": 0}, {"t": "03:00Z", "code": "Clear", "tp": 95, "pop": 0}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';;
