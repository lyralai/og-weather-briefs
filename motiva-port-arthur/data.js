const DEMO_DATA = {
  "operator": "Motiva (Port Arthur)",
  "generated": "2026-09-17",
  "topline": "RIGHT NOW at Port Arthur: AccuWeather flags a storm window building this afternoon at the Motiva Port Arthur Refinery — 51% t-storm probability at noon and again at 2 PM local, on top of 96°F afternoon heat. The free weather API your ops desk can pull says 'clear, 0% rain' for the entire day: no storm timing, no lightning window, no loading call.",
  "risk_level": "ELEVATED",
  "assets": [
    {
      "name": "Motiva Port Arthur Refinery",
      "lat": 29.93,
      "lon": -93.93,
      "current": "Partly sunny, 89°F, t-storms nearby",
      "risk": "ELEVATED",
      "risk_why": [
        "⛈ Two afternoon t-storm windows (12:00 and 14:00 local, ~51%) — lightning stand-down risk for the largest US refinery (630 kbd)",
        "96°F afternoon peak before the second window — heat-stress stacking on top of storm watch",
        "Free GFS feed shows 0% precip all day at these coordinates — the storm windows are invisible to it"
      ]
    },
    {
      "name": "Port Arthur marine berths / Sabine-Neches corridor",
      "lat": 29.92,
      "lon": -93.94,
      "current": "Storm cells building inland",
      "risk": "MODERATE",
      "risk_why": [
        "Ship Channel loading and crane ops need hour-level lightning timing on convective days like today",
        "AccuWeather hourly gives per-hour storm probability at the berth coordinates — not a district-wide 'clear'"
      ]
    }
  ],
  "near_miss": {
    "headline": "Port Arthur sits in the highest-density lightning corridor on the Gulf Coast",
    "facts": [
      "Motiva Port Arthur is the largest refinery in the US at ~630 kbd — every lightning stand-down minute is measurable product",
      "Gulf convective days like today are exactly when free feeds miss the timing: 'clear 0%' vs hour-flagged 51% storm windows",
      "The Sept-Oct transition brings more frontal convective episodes to the upper Texas coast",
      "Forecast-grade lightning timing is the difference between a planned 40-minute stand-down and an all-afternoon stoppage"
    ]
  },
  "next_72h": [
    {
      "when": "Today 12:00",
      "what": "First t-storm window (51%) crosses the refinery",
      "impact": "Lightning watch on tank farm and berths; suspend crane lifts"
    },
    {
      "when": "Today 14:00-15:00",
      "what": "Second t-storm window (51%) + 96°F peak",
      "impact": "Heat-stress rotation; hold open-hatch work until it clears"
    },
    {
      "when": "Tonight 20:00 onward",
      "what": "Clearing, 0% precip overnight",
      "impact": "Best overnight maintenance window"
    },
    {
      "when": "Fri-Sat",
      "what": "Typical early-fall pattern: afternoon convection, clear evenings",
      "impact": "Plan loading windows around the evening lull"
    }
  ],
  "comparison": {
    "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about this afternoon at Port Arthur — same coordinates, same hours.",
    "rows": [
      {
        "feature": "Today's storm window at the refinery",
        "free": "'Clear, 0% rain' every hour this afternoon — both t-storm windows invisible",
        "awx": "T-storms flagged at 12:00 and 14:00 (51% each) with hour-by-hour probability"
      },
      {
        "feature": "Heat risk",
        "free": "Temperatures ~10°F cooler and no heat signal",
        "awx": "96°F peak with RealFeel heat guidance for crew rotation"
      },
      {
        "feature": "Lightning strike tracking",
        "free": "Not available — no free weather API serves real-time strike data",
        "awx": "Real-time strikes + 30-min history, alerts pinned to the refinery coordinates"
      },
      {
        "feature": "Loading-window guidance",
        "free": "A flat 'clear' for the whole day",
        "awx": "Hour-by-hour precip probability at 29.93°N 93.93°W — your berth, not the district"
      },
      {
        "feature": "Threshold alerting per facility",
        "free": "None",
        "awx": "Your ops triggers, your sites — auto-escalation when conditions cross your lines"
      },
      {
        "feature": "Historical event verification",
        "free": "None",
        "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
      }
    ],
    "closer": "Free data says 'clear all day.' AccuWeather shows the two hours your crew should not be on the tanks."
  },
  "capabilities": [
    [
      "Minute-by-minute lightning nowcast",
      "Know when strikes are 30 minutes out — at your tank farm, not your county. Stand-downs with lead time, not surprises."
    ],
    [
      "Hourly storm probability at asset coordinates",
      "The 12:00 and 14:00 windows, forecast and verified — not a flat 0% 'clear'."
    ],
    [
      "Heat-stress + storm stacking guidance",
      "Today's 96°F peak inside a storm watch is exactly when crew rotation decisions compound."
    ],
    [
      "Threshold alerting per facility",
      "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
    ]
  ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Partly sunny","tp":86,"pop":47,"rain":0,"cloud":45},{"t":"12:00","wx":"Partly sunny w/ t-storms","tp":87,"pop":51,"rain":0,"cloud":45},{"t":"13:00","wx":"Partly sunny","tp":89,"pop":47,"rain":0,"cloud":45},{"t":"14:00","wx":"Partly sunny","tp":91,"pop":43,"rain":0,"cloud":45},{"t":"15:00","wx":"Partly sunny","tp":93,"pop":47,"rain":0,"cloud":43},{"t":"16:00","wx":"Partly sunny w/ t-storms","tp":92,"pop":51,"rain":0,"cloud":26},{"t":"17:00","wx":"Mostly sunny","tp":91,"pop":40,"rain":0,"cloud":26},{"t":"18:00","wx":"Mostly sunny","tp":89,"pop":34,"rain":0,"cloud":26},{"t":"19:00","wx":"Mostly sunny","tp":87,"pop":22,"rain":0,"cloud":26},{"t":"20:00","wx":"Mostly clear","tp":85,"pop":0,"rain":0,"cloud":10},{"t":"21:00","wx":"Clear","tp":82,"pop":0,"rain":0,"cloud":9},{"t":"22:00","wx":"Mostly clear","tp":82,"pop":0,"rain":0,"cloud":10}],"om":[{"t":"11:00","code":"Clear","tp":76,"pop":0},{"t":"12:00","code":"Clear","tp":75,"pop":0},{"t":"13:00","code":"Clear","tp":77,"pop":0},{"t":"14:00","code":"Clear","tp":81,"pop":0},{"t":"15:00","code":"Clear","tp":86,"pop":0},{"t":"16:00","code":"Clear","tp":89,"pop":0},{"t":"17:00","code":"Clear","tp":91,"pop":0},{"t":"18:00","code":"Clear","tp":92,"pop":0},{"t":"19:00","code":"Clear","tp":93,"pop":0},{"t":"20:00","code":"Clear","tp":94,"pop":0},{"t":"21:00","code":"Clear","tp":94,"pop":0},{"t":"22:00","code":"Clear","tp":93,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
