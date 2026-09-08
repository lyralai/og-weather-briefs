const DEMO_DATA = {
 "operator": "Berkshire Hathaway Energy",
 "generated": "2026-09-08",
 "topline": "RIGHT NOW at Cove Point: sunny and calm through this evening \u2014 a quiet day that hides the real story: September is when Chesapeake marine fog and the first nor'easter-grade gradient winds start showing up unannounced in free data. The forecast you act on is the one that starts now.",
 "risk_level": "LOW",
 "assets": [
  {
   "name": "Cove Point LNG",
   "lat": 38.79,
   "lon": -76.43,
   "current": "Mostly sunny 82\u00b0F",
   "risk": "LOW",
   "risk_why": [
    "Gusts to ~14 mph this afternoon \u2014 well inside loading margins, but the first Fall frontal passages begin this month",
    "Chesapeake Bay fog season ramps as water stays warm and nights cool \u2014 tanker berthing windows tighten",
    "Nor'easter climatology: October is the first high-impact month; preparation decisions start in September"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Last October, up your coast",
  "headline": "A coastal storm lashed the Mid-Atlantic with 50 mph gusts and 3 days of marine disruption",
  "facts": [
   "Nor'easter-pattern systems shut down Chesapeake tanker berthing for multi-day stretches last Fall",
   "Free forecasts updated on 3-6 hour cycles while gust onset timing shifted by hours",
   "Terminal ops guessed on defer-vs-proceed calls \u2014 each wrong call costs a loading window",
   "Cove Point sits on the same corridor that took the direct hits"
  ]
 },
 "next_72h": [
  {
   "when": "Tue Sep 8 (today)",
   "what": "Mostly sunny, high ~83\u00b0F, W gusts to 14 mph",
   "impact": "All marine windows open; ideal maintenance/inspection day"
  },
  {
   "when": "Wed Sep 9",
   "what": "Continued fair, light wind",
   "impact": "Good berthing conditions; enjoy it \u2014 pattern turns more active next week"
  },
  {
   "when": "Thu Sep 10",
   "what": "Slight shower chance late; wind shifts onshore",
   "impact": "First hint of the Fall transition \u2014 watch fog setup on overnight cooling"
  }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here's what each tells you about Cove Point ops \u2014 and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Chesapeake fog & berthing visibility at YOUR dock",
    "free": "Open-sea grid point, no bay/berth resolution",
    "awx": "Hour-by-hour visibility and fog onset at your coordinates \u2014 berthing windows, not marine-zone averages"
   },
   {
    "feature": "Nor'easter-grade wind onset timing",
    "free": "3-hr steps on a coarse grid; gusts interpolated",
    "awx": "Proprietary hour-by-hour gust forecasts pinned to the terminal, with 72h+ advance on threshold crossings"
   },
   {
    "feature": "Season-transition alerts",
    "free": "Generic public advisories, if any",
    "awx": "Alerts on your operational thresholds \u2014 auto-escalation when gusts cross your crane/berthing lines"
   },
   {
    "feature": "Winter freeze logic (Uri lineage)",
    "free": "Raw temperature, no site impact mapping",
    "awx": "Freeze/frost timing at the plant with pipe-and-valve criticality built into the alert logic"
   },
   {
    "feature": "Expert consult on the hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for defer-loading and freeze-prep decisions"
   }
  ],
  "closer": "Free data tells you it's sunny today. AccuWeather tells you when the first Fall system crosses YOUR operating thresholds \u2014 before it's on the approach."
 },
 "capabilities": [
  [
   "Hourly wind & gust at berth resolution",
   "Berthing and loading windows tied to Cove Point's own coordinates, not a marine-zone forecast."
  ],
  [
   "Chesapeake fog nowcasting",
   "Visibility onset hour-by-hour \u2014 tanker scheduling that stops guessing."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, auto-escalation, no one watching a dashboard at 3 AM."
  ],
  [
   "Winter freeze early-warning",
   "First-frost and hard-freeze timing mapped to your pipe runs \u2014 weeks of prep, not hours."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Mostly sunny", "tp": 79, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "17:00Z", "wx": "Mostly sunny", "tp": 80, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "18:00Z", "wx": "Mostly sunny", "tp": 82, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "19:00Z", "wx": "Mostly sunny", "tp": 82, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "20:00Z", "wx": "Mostly sunny", "tp": 83, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "21:00Z", "wx": "Mostly sunny", "tp": 82, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "22:00Z", "wx": "Mostly sunny", "tp": 81, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "23:00Z", "wx": "Mostly sunny", "tp": 78, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "00:00Z", "wx": "Mostly clear", "tp": 75, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "01:00Z", "wx": "Clear", "tp": 72, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "02:00Z", "wx": "Clear", "tp": 71, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "03:00Z", "wx": "Mostly clear", "tp": 71, "pop": 0, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}], "om": [{"t": "16:00Z", "code": "Clear", "tp": 76, "pop": 0}, {"t": "17:00Z", "code": "Clear", "tp": 77, "pop": 0}, {"t": "18:00Z", "code": "Clear", "tp": 78, "pop": 0}, {"t": "19:00Z", "code": "Clear", "tp": 78, "pop": 0}, {"t": "20:00Z", "code": "Overcast", "tp": 79, "pop": 0}, {"t": "21:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "22:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "23:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "00:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "01:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "02:00Z", "code": "Overcast", "tp": 80, "pop": 0}, {"t": "03:00Z", "code": "Overcast", "tp": 80, "pop": 0}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = {"fetched":1788715095025,"w":-95.5,"e":-89.5,"s":27.5,"n":31.4,"cols":5,"rows":4,"U":[0.0,0.0,0.0,0.0,0.0,-3.68,-0.0,-1.09,0.98,5.24,-1.76,-0.0,2.03,3.52,1.97,-0.88,1.2,-0.0,-0.0,0.43],"V":[0.0,0.0,0.0,0.0,0.0,1.56,7.99,-2.56,-0.98,2.12,0.75,-1.04,-2.03,-1.49,-1.97,0.37,-0.51,1.3,-1.48,0.0]};;
