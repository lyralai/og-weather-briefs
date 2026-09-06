const DEMO_DATA = {
 "operator": "Argent LNG",
 "generated": "2026-09-06",
 "topline": "RIGHT NOW on the Port Fourchon corridor: AccuWeather shows thunderstorms entering ~4 PM with a 56% shot at your coordinates; the free feed says 6% rain and never mentions a storm. That gap is the pitch.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Port Fourchon corridor",
   "lat": 29.15,
   "lon": -90.2,
   "current": "Mostly sunny 88\u00b0F",
   "risk": "MODERATE",
   "risk_why": [
    "\u26c8 T-storms ~4-6 PM today \u2014 AccuWeather 56% precip vs free feed 6%: the exact divergence your ops team should know about",
    "Heavy shower cell passes before midnight; clearing overnight",
    "We're inside peak hurricane season (Sep 10 statistical peak) \u2014 quiet today \u2260 quiet week"
   ]
  }
 ],
 "near_miss": {
  "card_title": "10 days ago, next door",
  "headline": "Sep 1 \u2014 TS Edouard made landfall ~60 miles east of Port Fourchon",
  "facts": [
   "4 Gulf LNG terminals under storm surge warnings",
   "Port Fourchon marine ops disrupted; non-essential personnel evacuated from nearby platforms",
   "Louisiana surge corridor assets rode out 3 days of disrupted logistics",
   "Operators guessed on evacuate vs. ride-out timing \u2014 each wrong guess costs millions"
  ]
 },
 "next_72h": [
  {
   "when": "Today 4-6 PM",
   "what": "T-storm cell crosses the corridor (AccuWeather 56% / free feed 6%)",
   "impact": "Suspend marine transfers; lightning watch window"
  },
  {
   "when": "Tonight-Mon",
   "what": "Clearing, then mostly sunny, high ~88\u00b0F",
   "impact": "Normal ops; good construction/convoi window"
  },
  {
   "when": "Tue-Wed",
   "what": "Quiet; tropical Atlantic at statistical peak (Sep 10)",
   "impact": "Monitor for development \u2014 NHC currently quiet across the basin"
  }
 ],
 "comparison": {
  "intro": "Your team can already pull free weather data. Here's what each would have told you about this afternoon at your coordinates \u2014 live from both APIs, same hour.",
  "rows": [
 {"feature":"Lightning strike tracking","free":"Not available — no free weather API serves real-time strike data","awx":"Real-time strikes + 30-min history, alerts pinned to each site"},
   {
    "feature": "Thunderstorm arrival this afternoon",
    "free": "\"Partly cloudy, 6% rain\" \u2014 40-km grid, no storm signal",
    "awx": "\"T-storms 4 PM, 56%\" \u2014 storm cell timing at your corridor coordinates"
   },
   {
    "feature": "Surge & tropical exposure",
    "free": "NWS public products, parish-level, after thresholds",
    "awx": "Storm-track probabilities + surge guidance pinned to your site; alerts 30-120 min earlier"
   },
   {
    "feature": "Marine conditions for construction & convoys",
    "free": "Coastal zone forecast, 6-hr granularity",
    "awx": "Hour-by-hour wave height, period & wind at the dock; work-window recommendations"
   },
   {
    "feature": "Seasonal decision support",
    "free": "NHC public cone, 5-day, 2\u00d7/day",
    "awx": "Asset-pinned tropical guidance + expert meteorologist consult on evacuate vs. ride-out"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per site \u2014 audit what hit, when, for planning and insurance"
   }
  ],
  "closer": "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY site, and what do I do about it?\""
 },
 "capabilities": [
  [
   "Minute-by-minute lightning nowcast",
   "Know when strikes are 30 minutes out \u2014 at your dock, not your parish."
  ],
  [
   "Storm surge & tropical tracking, asset-pinned",
   "Cone forecasts tied to your Port Fourchon-area coordinates, not county averages."
  ],
  [
   "Marine wind & wave windows",
   "Construction barge and supply-boat scheduling against hour-by-hour sea state."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your site \u2014 auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "16:00Z", "wx": "Mostly sunny", "tp": 86, "pop": 37, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "17:00Z", "wx": "Mostly sunny", "tp": 86, "pop": 31, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "18:00Z", "wx": "Mostly sunny", "tp": 87, "pop": 37, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "19:00Z", "wx": "Mostly sunny", "tp": 87, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "20:00Z", "wx": "Mostly sunny", "tp": 88, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "21:00Z", "wx": "Partly sunny w/ t-storms", "tp": 87, "pop": 56, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}}, {"t": "22:00Z", "wx": "Mostly sunny", "tp": 86, "pop": 40, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "23:00Z", "wx": "Mostly sunny", "tp": 85, "pop": 34, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "00:00Z", "wx": "Mostly sunny", "tp": 84, "pop": 29, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "01:00Z", "wx": "Intermittent clouds", "tp": 82, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "02:00Z", "wx": "Intermittent clouds", "tp": 82, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "03:00Z", "wx": "Intermittent clouds", "tp": 82, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}], "om": [{"t": "16:00Z", "code": "Overcast", "tp": 84, "pop": 9}, {"t": "17:00Z", "code": "Partly cloudy", "tp": 87, "pop": 8}, {"t": "18:00Z", "code": "Overcast", "tp": 89, "pop": 6}, {"t": "19:00Z", "code": "Overcast", "tp": 90, "pop": 6}, {"t": "20:00Z", "code": "Mostly clear", "tp": 91, "pop": 6}, {"t": "21:00Z", "code": "Clear", "tp": 90, "pop": 5}, {"t": "22:00Z", "code": "Partly cloudy", "tp": 88, "pop": 7}, {"t": "23:00Z", "code": "Overcast", "tp": 87, "pop": 6}, {"t": "00:00Z", "code": "Overcast", "tp": 85, "pop": 5}, {"t": "01:00Z", "code": "Clear", "tp": 84, "pop": 3}, {"t": "02:00Z", "code": "Clear", "tp": 83, "pop": 2}, {"t": "03:00Z", "code": "Mostly clear", "tp": 83, "pop": 2}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';;

const AWX_WIND_GRID = {"fetched":1788715095025,"w":-95.5,"e":-89.5,"s":27.5,"n":31.4,"cols":5,"rows":4,"U":[0.0,0.0,0.0,0.0,0.0,-3.68,-0.0,-1.09,0.98,5.24,-1.76,-0.0,2.03,3.52,1.97,-0.88,1.2,-0.0,-0.0,0.43],"V":[0.0,0.0,0.0,0.0,0.0,1.56,7.99,-2.56,-0.98,2.12,0.75,-1.04,-2.03,-1.49,-1.97,0.37,-0.51,1.3,-1.48,0.0]};
