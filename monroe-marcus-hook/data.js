const DEMO_DATA = {
 "operator": "Monroe Energy",
 "generated": "2026-09-23",
 "topline": "RIGHT NOW at Marcus Hook: a significant early-season nor'easter is organizing off the coast — Gale Warnings are live on the adjacent Delaware Bay waters and gusty onshore flow ramps through Friday. Tanker berthing windows, dock crane margins and barge schedules on the Delaware should be locked in before the weekend blow.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Marcus Hook Refinery & Trainer complex",
   "lat": 39.82,
   "lon": -75.41,
   "current": "Cloudy, 62°F, E wind building",
   "risk": "ELEVATED",
   "risk_why": [
    "Significant September nor'easter developing Wed-Fri: coastal flooding, 70 mph gusts possible in the region per AccuWeather",
    "Gale Warning-adjacent waters — Delaware Bay/river marine windows tighten fast as gradient winds build",
    "AccuWeather carries flash-flood + high-wind potential flags on the site today; free feeds carry no convection signal"
   ]
  }
 ],
 "near_miss": {
  "card_title": "This week — it's not a near miss, it's live",
  "headline": "First fall nor'easter: multi-day coastal flooding, pounding surf and 70 mph gusts forecast for the Mid-Atlantic and New England",
  "facts": [
   "AccuWeather forecasters flag significant beach erosion, storm surge and power-outage risk Thu-Sat",
   "Marine terminals from the Chesapeake to Boston Harbor sit under Gale Warnings today",
   "Nor'easter wind onset timing decides defer-vs-proceed on tanker arrivals — the single costliest call a river refinery makes",
   "Free 3-hour marine-zone data shifts onset timing by hours exactly when it matters"
  ]
 },
 "next_72h": [
  {
   "when": "Wed Sep 23 (today)",
   "what": "Cloudy, rain arriving, E wind building; AccuWeather PoP 34% this afternoon vs free feed 22%",
   "impact": "Pre-storm dock work: finish cargo ops and secure loose crane gear before dark"
  },
  {
   "when": "Thu Sep 24",
   "what": "Nor'easter organizes offshore; rain heavy at times, gusts rising",
   "impact": "Marginal berthing windows early; defer non-critical arrivals to avoid thrashing at the berth"
  },
  {
   "when": "Fri Sep 25",
   "what": "Storm strengthens rapidly — strong winds, coastal flooding risk peaks",
   "impact": "Likely full marine stand-down; plan crew rotations and power-loss checks now"
  }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here's what each tells you about Marcus Hook ops — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Nor'easter wind onset hour-by-hour at YOUR dock",
    "free": "3-hr steps on a coarse grid; gusts interpolated",
    "awx": "Hour-by-hour gusts pinned to the refinery coordinates with 72h+ advance on crane/berthing thresholds"
   },
   {
    "feature": "Rain window timing on the Delaware",
    "free": "Smoothed PoP, no convection detail",
    "awx": "Pop-up convection + nor'easter rain bands hour-by-hour — dock work scheduling, not 'chance of rain'"
   },
   {
    "feature": "Marine alerts on your operating thresholds",
    "free": "Generic public advisories, if any",
    "awx": "Auto-escalation when gusts cross crane/berthing lines; gale windows mapped to your river reach"
   },
   {
    "feature": "Coastal-flood / surge staging",
    "free": "Zone text products, hours late",
    "awx": "Site-specific surge-timing guidance for low-lying tank farms and dock infrastructure"
   },
   {
    "feature": "Expert consult on the hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for defer-arrival and tie-down decisions"
   }
  ],
  "closer": "Free data tells you rain is likely. AccuWeather tells you the hour the gusts cross your crane line — while the tanker is still a day out."
 },
 "capabilities": [
  [
   "Hourly wind & gust at dock resolution",
   "Berthing and loading windows tied to Marcus Hook's own coordinates, not a marine-zone average."
  ],
  [
   "Nor'easter onset nowcasting",
   "Wind threshold crossings hours ahead — defer-vs-proceed calls made with time to spare."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, auto-escalation, no one watching a dashboard at 3 AM."
  ],
  [
   "Coastal-flood staging guidance",
   "Surge timing mapped to your dock and tank-farm elevation profile."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Cloudy","tp":62,"pop":34,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"17:00Z","wx":"Cloudy","tp":64,"pop":29,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"18:00Z","wx":"Cloudy","tp":65,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"19:00Z","wx":"Mostly cloudy","tp":67,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"20:00Z","wx":"Mostly cloudy","tp":65,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"21:00Z","wx":"Intermittent clouds","tp":65,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"22:00Z","wx":"Intermittent clouds","tp":64,"pop":20,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"23:00Z","wx":"Partly cloudy","tp":62,"pop":13,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"00:00Z","wx":"Mostly cloudy","tp":59,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"01:00Z","wx":"Mostly cloudy","tp":57,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"02:00Z","wx":"Mostly cloudy","tp":56,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"03:00Z","wx":"Mostly cloudy","tp":57,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}}],"om":[{"t":"00:00Z","code":"Overcast","tp":61,"pop":22},{"t":"01:00Z","code":"Partly cloudy","tp":61,"pop":7},{"t":"02:00Z","code":"Overcast","tp":61,"pop":5},{"t":"03:00Z","code":"Overcast","tp":60,"pop":11},{"t":"04:00Z","code":"Overcast","tp":59,"pop":10},{"t":"05:00Z","code":"Overcast","tp":60,"pop":13},{"t":"06:00Z","code":"Overcast","tp":59,"pop":16},{"t":"07:00Z","code":"Overcast","tp":58,"pop":8},{"t":"08:00Z","code":"Overcast","tp":56,"pop":7},{"t":"09:00Z","code":"Overcast","tp":56,"pop":13},{"t":"10:00Z","code":"Overcast","tp":55,"pop":12},{"t":"11:00Z","code":"Overcast","tp":55,"pop":12}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
