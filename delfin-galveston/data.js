const DEMO_DATA = {
 "operator": "Delfin LNG",
 "generated": "2026-09-08",
 "topline": "RIGHT NOW off Galveston: 90\u00b0F with RealFeel near 106\u00b0F and evening thunderstorm chances climbing past 50%. Heat-stress protocols on deck crews and lightning holds on offshore lifts are live decisions today \u2014 and this hour shows exactly where free data and ops-grade data part ways.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Delfin Deepwater Port (FLNG buoy system)",
   "lat": 29.2,
   "lon": -94.5,
   "current": "Partly sunny 90\u00b0F \u00b7 RF 106\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "RealFeel 102-106\u00b0F through 4 PM \u2014 heat-stress protocols for topside and buoy-visit crews trigger this afternoon",
    "Scattered t-storms after 6 PM (PoP ~50%) \u2014 lightning holds on crane ops and tanker transfers likely",
    "Gusts building 15-18 mph by evening \u2014 small-craft transfer conditions tighten on top of storm cells"
   ]
  }
 ],
 "near_miss": {
  "card_title": "8 days ago, in your basin",
  "headline": "TS Edouard pushed storm surge warnings across 4 Gulf LNG terminals",
  "facts": [
   "Non-essential personnel evacuated from nearby platforms as Edouard tracked east of the Calcasieu corridor",
   "Marine ops disrupted across TX/LA ports for ~3 days",
   "Floating LNG infrastructure faces the same calls with less slack \u2014 disconnect-or-ride decisions have hour-level consequences",
   "Operators working off free data had gust-onset timing shift by hours between updates"
  ]
 },
 "next_72h": [
  {
   "when": "Tue Sep 8 (today)",
   "what": "90-91\u00b0F, RF 104-106\u00b0F; t-storms ~50% after 6 PM, gusts 17-18 mph",
   "impact": "Rotate deck crews 11 AM-4 PM; pre-stage lightning-hold plan for evening transfer ops"
  },
  {
   "when": "Wed Sep 9",
   "what": "Warm and humid, scattered afternoon storms again",
   "impact": "Repeat heat-stress protocol; watch cell timing vs. shuttle boat schedules"
  },
  {
   "when": "Thu Sep 10",
   "what": "Slightly drier but staying warm; Gulfwide NHC outlook quiet",
   "impact": "Good window for deferred maintenance \u2014 use the calm before peak season"
  }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here's the same hour off Galveston from each source \u2014 and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Heat-stress timing at your facility",
    "free": "Temperature to 2\u00b0C on a 25-km grid \u2014 the Gulf, not your buoy",
    "awx": "Hour-by-hour RealFeel at your coordinates with advance notice of when heat-action thresholds trip"
   },
   {
    "feature": "Lightning hold windows",
    "free": "Precip probability on a coarse grid, no strike timing",
    "awx": "Storm-scale nowcasting with lightning onset and duration estimates for your exact block"
   },
   {
    "feature": "Sea state for buoy & tanker ops",
    "free": "Open-sea grid point, no berth/buoy resolution",
    "awx": "Hourly wind, wave & current at your coordinates; disconnect/transfer window recommendations"
   },
   {
    "feature": "Alerting on YOUR thresholds",
    "free": "Generic public advisories, if any",
    "awx": "Threshold alerting per site \u2014 auto-escalation when conditions cross your operational lines"
   },
   {
    "feature": "Expert consult on the hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for disconnect-vs-ride and transfer-defer decisions"
   }
  ],
  "closer": "Free data tells you it's hot. AccuWeather tells you when heat and lightning cross YOUR operating thresholds \u2014 before your crews feel it."
 },
 "capabilities": [
  [
   "Hourly RealFeel & heat index, asset-pinned",
   "Know when heat-stress protocols trigger \u2014 at your buoy coordinates, not a Gulf grid point."
  ],
  [
   "Lightning nowcasting for offshore ops",
   "Storm-cell onset and hold windows for crane, buoy-visit and transfer operations."
  ],
  [
   "Sea state at your coordinates",
   "Disconnect and transfer windows against hour-by-hour wind, wave & current."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, auto-escalation, no one watching a dashboard at 3 AM."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Cloudy", "tp": 86, "pop": 40, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "17:00Z", "wx": "Mostly sunny", "tp": 88, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "18:00Z", "wx": "Mostly sunny", "tp": 90, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "19:00Z", "wx": "Partly sunny", "tp": 91, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "20:00Z", "wx": "Partly sunny", "tp": 90, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "21:00Z", "wx": "Partly sunny", "tp": 90, "pop": 37, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "22:00Z", "wx": "Partly sunny", "tp": 89, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "23:00Z", "wx": "Partly sunny w/ t-storms", "tp": 88, "pop": 51, "rain": {"Value": 0.04, "Unit": "in", "UnitType": 1}}, {"t": "00:00Z", "wx": "Partly sunny", "tp": 87, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "01:00Z", "wx": "Mostly clear", "tp": 85, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "02:00Z", "wx": "Mostly clear", "tp": 84, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "03:00Z", "wx": "Mostly clear", "tp": 84, "pop": 37, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}], "om": [{"t": "16:00Z", "code": "Overcast", "tp": 80, "pop": 21}, {"t": "17:00Z", "code": "Overcast", "tp": 84, "pop": 22}, {"t": "18:00Z", "code": "Overcast", "tp": 81, "pop": 12}, {"t": "19:00Z", "code": "Overcast", "tp": 83, "pop": 9}, {"t": "20:00Z", "code": "Overcast", "tp": 84, "pop": 4}, {"t": "21:00Z", "code": "Overcast", "tp": 85, "pop": 3}, {"t": "22:00Z", "code": "Overcast", "tp": 86, "pop": 3}, {"t": "23:00Z", "code": "Overcast", "tp": 85, "pop": 2}, {"t": "00:00Z", "code": "Partly cloudy", "tp": 85, "pop": 2}, {"t": "01:00Z", "code": "Clear", "tp": 85, "pop": 2}, {"t": "02:00Z", "code": "Clear", "tp": 86, "pop": 1}, {"t": "03:00Z", "code": "Clear", "tp": 86, "pop": 1}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';

const AWX_WIND_GRID = {"fetched":1788715095025,"w":-95.5,"e":-89.5,"s":27.5,"n":31.4,"cols":5,"rows":4,"U":[0.0,0.0,0.0,0.0,0.0,-3.68,-0.0,-1.09,0.98,5.24,-1.76,-0.0,2.03,3.52,1.97,-0.88,1.2,-0.0,-0.0,0.43],"V":[0.0,0.0,0.0,0.0,0.0,1.56,7.99,-2.56,-0.98,2.12,0.75,-1.04,-2.03,-1.49,-1.97,0.37,-0.51,1.3,-1.48,0.0]};;
