const DEMO_DATA = {
 "operator": "Constellation Energy (Everett LNG)",
 "generated": "2026-09-23",
 "topline": "RIGHT NOW at Everett: a Gale Warning is live on the adjacent Massachusetts Bay and Ipswich Bay waters as the first fall nor'easter organizes — Boston Harbor LNG berthing windows close fast when gradient winds build, and this storm strengthens rapidly Thursday night into Friday. The arrival you schedule today is the one that avoids the blow.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Everett Marine Terminal (LNG)",
   "lat": 42.378,
   "lon": -70.996,
   "current": "Partly sunny, 65°F, NE breeze",
   "risk": "ELEVATED",
   "risk_why": [
    "Gale Warning live on Massachusetts Bay/Ipswich Bay — Boston Harbor approach exposed",
    "AccuWeather flash-flood and high-wind potential flags active on the site; nor'easter intensifies Thu night-Fri",
    "Marine delivery windows at an island-side LNG berth are the first thing a 70 mph-gust event removes"
   ]
  }
 ],
 "near_miss": {
  "card_title": "This week — it's not a near miss, it's live",
  "headline": "Weekend nor'easter: New York and Boston face 70 mph gusts, significant coastal flooding and beach erosion",
  "facts": [
   "AccuWeather forecasters call it a significant early-season nor'easter with multi-day impacts",
   "Everett sits inside the Gale Warning block from today",
   "Boston-area LNG tanker arrivals are wind-gate operations — every nor'easter is a defer-or-anchor decision",
   "Free marine-zone data updates on 3-6 hour cycles while onset timing shifts by hours"
  ]
 },
 "next_72h": [
  {
   "when": "Wed Sep 23 (today)",
   "what": "Partly sunny, dry, NE breeze — calm before the turn",
   "impact": "Last full-rate cargo day; complete offload and non-essential marine movements"
  },
  {
   "when": "Thu Sep 24",
   "what": "Storm organizes offshore; wind and rain arrive late-day",
   "impact": "Early berthing windows only; schedule inbound tankers to anchor rather than race the front"
  },
  {
   "when": "Fri Sep 25",
   "what": "Rapid intensification — 70 mph gusts possible, coastal flooding peaks",
   "impact": "Full marine stand-down expected; tie down, verify backup power for sendout continuity"
  }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here's what each tells you about Everett ops — and what AccuWeather adds.",
  "rows": [
   {
    "feature": "Gale onset timing at the berth",
    "free": "Marine-zone text, 3-hr grid steps",
    "awx": "Hour-by-hour gust forecasts pinned to the terminal with 72h+ advance on berthing thresholds"
   },
   {
    "feature": "Boston Harbor approach visibility & sea state",
    "free": "Open-sea grid point, no harbor resolution",
    "awx": "Visibility, wind and sea-state at your coordinates — arrival windows, not zone averages"
   },
   {
    "feature": "Threshold alerting on gust lines",
    "free": "Generic public advisories",
    "awx": "Auto-escalation when gusts cross berthing/crane lines; storm windows mapped to your ops calendar"
   },
   {
    "feature": "Winter nor'easter season planning",
    "free": "Raw temperature, no site impact",
    "awx": "Season-outlook consult plus storm-by-storm impact scoring for sendout and delivery"
   },
   {
    "feature": "Expert consult on the hard calls",
    "free": "None",
    "awx": "24/7 meteorologist support for tanker defer-anchor and sendout-surge decisions"
   }
  ],
  "closer": "Free data shows a windy weekend. AccuWeather shows the exact hour your berthing window closes — days early."
 },
 "capabilities": [
  [
   "Hourly wind & gust at berth resolution",
   "Arrival windows tied to Everett's own coordinates, not a Massachusetts Bay zone forecast."
  ],
  [
   "Nor'easter onset nowcasting",
   "Gale threshold crossings hours ahead — defer-or-anchor decided with margin."
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, auto-escalation, no one watching a dashboard at 3 AM."
  ],
  [
   "Sendout-surge weather mapping",
   "Cold-sector timing and wind-chill demand tied to your sendout planning."
  ]
 ]
};
const LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Partly sunny","tp":65,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"17:00Z","wx":"Partly sunny","tp":64,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"18:00Z","wx":"Partly sunny","tp":63,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"19:00Z","wx":"Partly sunny","tp":62,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"20:00Z","wx":"Partly sunny","tp":61,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"21:00Z","wx":"Partly sunny","tp":60,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"22:00Z","wx":"Partly sunny","tp":58,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"23:00Z","wx":"Partly cloudy","tp":57,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"00:00Z","wx":"Mostly clear","tp":55,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"01:00Z","wx":"Mostly clear","tp":54,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"02:00Z","wx":"Mostly clear","tp":53,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}},{"t":"03:00Z","wx":"Mostly clear","tp":53,"pop":0,"rain":{"Value":0.0,"Unit":"in","UnitType":1}}],"om":[{"t":"00:00Z","code":"Clear","tp":56,"pop":0},{"t":"01:00Z","code":"Clear","tp":56,"pop":0},{"t":"02:00Z","code":"Clear","tp":56,"pop":0},{"t":"03:00Z","code":"Clear","tp":53,"pop":0},{"t":"04:00Z","code":"Clear","tp":51,"pop":0},{"t":"05:00Z","code":"Clear","tp":51,"pop":0},{"t":"06:00Z","code":"Clear","tp":50,"pop":0},{"t":"07:00Z","code":"Clear","tp":49,"pop":0},{"t":"08:00Z","code":"Clear","tp":50,"pop":0},{"t":"09:00Z","code":"Clear","tp":51,"pop":0},{"t":"10:00Z","code":"Mostly clear","tp":51,"pop":0},{"t":"11:00Z","code":"Mostly clear","tp":51,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
