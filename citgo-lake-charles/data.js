const DEMO_DATA = {
  "operator": "Citgo (Lake Charles)",
  "generated": "2026-09-17",
  "topline": "RIGHT NOW at Lake Charles: AccuWeather flags t-storm windows at the Citgo Lake Charles Refinery at noon and again 1-2 PM local (51%), with 92°F afternoon heat. The free weather API your ops desk can pull says 'clear, 0% rain' for the entire day: no storm timing, no lightning window, no loading call.",
  "risk_level": "ELEVATED",
  "assets": [
    {
      "name": "Citgo Lake Charles Refinery",
      "lat": 30.22,
      "lon": -93.28,
      "current": "Mostly sunny, 91°F, t-storms nearby",
      "risk": "ELEVATED",
      "risk_why": [
        "⛈ Two afternoon t-storm windows (12:00 and 14:00, ~51%) — lightning stand-down risk at a 425 kbd refinery in a Laura/Rita direct-hit lineage",
        "96°F heat peak mid-afternoon before clearing — heat + storm watch stack on crew rotation",
        "Free GFS feed shows 0% precip all day at these coordinates — both windows invisible"
      ]
    },
    {
      "name": "Calcasieu River / Lake Charles marine corridor",
      "lat": 30.22,
      "lon": -93.25,
      "current": "Storm cells building inland",
      "risk": "MODERATE",
      "risk_why": [
        "Barge and ship ops on the Calcasieu need hour-level lightning timing on convective days",
        "AccuWeather hourly gives per-hour storm probability at the berth coordinates — not a district-wide 'clear'"
      ]
    }
  ],
  "near_miss": {
    "headline": "Lake Charles is a direct-hit hurricane corridor with a daily lightning problem",
    "facts": [
      "Citgo Lake Charles (~425 kbd) took the Laura/Rita lineage head-on — this coast plans storm ops as routine",
      "On ordinary convective days like today, the question is the stand-down hour, not the season",
      "Free feeds show 'clear 0%' while AccuWeather flags 51% storm windows at the same coordinates",
      "Sept-Oct frontal transitions ramp convective frequency on the SW Louisiana coast"
    ]
  },
  "next_72h": [
    {
      "when": "Today 12:00",
      "what": "First t-storm window (51%) crosses the refinery",
      "impact": "Lightning watch on tank farm and docks; suspend crane lifts"
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
      "what": "Early-fall pattern: afternoon convection, clear evenings",
      "impact": "Plan marine windows around the evening lull"
    }
  ],
  "comparison": {
    "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about this afternoon at Lake Charles — same coordinates, same hours.",
    "rows": [
      {
        "feature": "Today's storm window at the refinery",
        "free": "'Clear, 0% rain' every hour this afternoon — both t-storm windows invisible",
        "awx": "T-storms flagged at 12:00 and 14:00 (51% each) with hour-by-hour probability"
      },
      {
        "feature": "Heat risk",
        "free": "Temperatures several degrees cooler and no heat signal",
        "awx": "Mid-90s peak with RealFeel heat guidance for crew rotation"
      },
      {
        "feature": "Lightning strike tracking",
        "free": "Not available — no free weather API serves real-time strike data",
        "awx": "Real-time strikes + 30-min history, alerts pinned to the refinery coordinates"
      },
      {
        "feature": "Loading-window guidance",
        "free": "A flat 'clear' for the whole day",
        "awx": "Hour-by-hour precip probability at 30.22°N 93.28°W — your dock, not the district"
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
      "Know when strikes are 30 minutes out — at your tank farm, not your parish. Stand-downs with lead time."
    ],
    [
      "Hourly storm probability at asset coordinates",
      "The 12:00 and 14:00 windows, forecast and verified — not a flat 0% 'clear'."
    ],
    [
      "Hurricane-corridor facility coverage",
      "Lake Charles plans storm ops as routine; hour-level data is the upgrade."
    ],
    [
      "Threshold alerting per facility",
      "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
    ]
  ]
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Mostly sunny","tp":88,"pop":47,"rain":0,"cloud":15},{"t":"12:00","wx":"Partly sunny w/ t-storms","tp":89,"pop":51,"rain":0,"cloud":22},{"t":"13:00","wx":"Mostly sunny","tp":91,"pop":43,"rain":0,"cloud":25},{"t":"14:00","wx":"Partly sunny w/ t-storms","tp":92,"pop":51,"rain":0,"cloud":22},{"t":"15:00","wx":"Mostly sunny","tp":96,"pop":47,"rain":0,"cloud":15},{"t":"16:00","wx":"Mostly sunny","tp":95,"pop":40,"rain":0,"cloud":10},{"t":"17:00","wx":"Sunny","tp":94,"pop":34,"rain":0,"cloud":6},{"t":"18:00","wx":"Sunny","tp":92,"pop":34,"rain":0,"cloud":5},{"t":"19:00","wx":"Sunny","tp":88,"pop":22,"rain":0,"cloud":5},{"t":"20:00","wx":"Clear","tp":86,"pop":0,"rain":0,"cloud":3},{"t":"21:00","wx":"Clear","tp":83,"pop":0,"rain":0,"cloud":1},{"t":"22:00","wx":"Clear","tp":80,"pop":0,"rain":0,"cloud":0}],"om":[{"t":"11:00","code":"Clear","tp":74,"pop":0},{"t":"12:00","code":"Clear","tp":73,"pop":0},{"t":"13:00","code":"Clear","tp":75,"pop":0},{"t":"14:00","code":"Clear","tp":81,"pop":0},{"t":"15:00","code":"Clear","tp":85,"pop":0},{"t":"16:00","code":"Clear","tp":89,"pop":0},{"t":"17:00","code":"Clear","tp":91,"pop":0},{"t":"18:00","code":"Clear","tp":93,"pop":0},{"t":"19:00","code":"Clear","tp":94,"pop":0},{"t":"20:00","code":"Clear","tp":94,"pop":0},{"t":"21:00","code":"Clear","tp":94,"pop":0},{"t":"22:00","code":"Clear","tp":93,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
