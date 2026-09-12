const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2YzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
const DEMO_DATA = {
  operator: "Sempra Infrastructure",
  generated: "2026-09-12",
  topline: "RIGHT NOW across your portfolio: Cameron LNG sits under a live AccuWeather thunderstorm window (59% at noon, storms 12-4 PM) while the free weather API reads 6% and 'mostly clear.' Meanwhile ECA on the Baja Pacific coast tracks TS Norbert strengthening offshore — no threat today, but the exact storm class your Pacific berth loads through every season.",
  risk_level: "ELEVATED",
  assets: [
    {"name":"Cameron LNG (Hackberry, LA)","lat":29.85,"lon":-93.32,"current":"Partly sunny 90°F","risk":"ELEVATED",
     "risk_why":[
       "Thunderstorms 12-4 PM today (49-59% peak midday) — lightning stand-off likely for dock and crane ops",
       "Free feeds read 6-16% 'mostly clear' — a 4-9× miss on the exact window that stops loading",
       "Drying this evening; Sunday clear and mild"]},
    {"name":"ECA LNG (Costa Azul, Baja California)","lat":31.72,"lon":-116.70,"current":"Sunny 83°F","risk":"LOW",
     "risk_why":[
       "Sunny and dry through the weekend (76-83°F) — normal berthing and loading",
       "TS Norbert (60 mph) is 600+ mi southwest and moving away — no impact; monitor marine swell on Pacific tanker approaches",
       "ECA Phase 1 expansion commissioning: good week for outdoor work windows"]}
  ],
  storm_track: [[-112.9,15.1],[-115.6,16.2],[-118.2,17.0],[-120.5,17.6],[-122.8,18.1]],
  storm_label: "TS Norbert forecast track (NHC, Sep 12) — moving away from Baja",
  near_miss: {
    headline: "TS Norbert is strengthening to hurricane strength this weekend — on ECA's side of Mexico, moving away. Cameron's storms today are the operational story; Norbert is the reminder.",
    facts: ["ECA is the only LNG terminal on North America's Pacific coast with direct Eastern Pacific hurricane exposure","Pacific-season systems like Norbert arrive with 3-5 days notice at best; ECA's loading schedule competes with swell and surge risk","Today at Cameron: AccuWeather 59% t-storms vs free-feed 6% — the same data gap your storm decisions would run on","Two coasts, one ops desk: portfolio-scale weather intelligence beats checking two free apps"]
  },
  next_72h: [
    {"when":"Sat 12-4 PM","what":"Thunderstorm window at Cameron LNG (49-59%)","impact":"Suspend dock lifts; lightning stand-off; verify before restart ~5 PM"},
    {"when":"Sat night","what":"Clearing, low 80s","impact":"Resume normal loading overnight"},
    {"when":"Sun","what":"Sunny coast-wide; ECA 79-83°F","impact":"Clean ops day both coasts"},
    {"when":"Sun-Tue","what":"TS Norbert reaches hurricane strength WNW of Baja (open ocean)","impact":"No asset impact; watch long-period swell on Pacific tanker approaches to ECA"}
  ],
  comparison: {
    intro: "Your ops teams can pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about your exact coordinates today — pulled this hour:",
    rows: [
      {"feature":"Cameron LNG t-storm window (12 PM today)","free":"6% rain, code 'mainly clear' — storms effectively invisible","awx":"59% thunderstorms, 12-4 PM — dock ops exposed now"},
      {"feature":"ECA afternoon temp (1 PM today)","free":"66°F under fog — wrong by 17°F","awx":"83°F sunny — verified against the site"},
      {"feature":"Norbert track vs your Pacific berth","free":"Public NHC cone graphics, 5-day, 2×/day","awx":"Track probabilities + swell guidance pinned to ECA's berth, with expert consult"},
      {"feature":"Storm arrival at your dock","free":"Parish-level probability, 3-hr steps","awx":"Minute-by-minute nowcast, 30-min advance lightning warning"},
      {"feature":"Marine conditions for berthing (both coasts)","free":"Zone forecasts, 6-hr blocks","awx":"Hour-by-hour wave height, period & wind at each berth; loading-window recommendations"},
      {"feature":"Portfolio view (Gulf + Pacific + Mexico)","free":"Three free apps, no reconciliation","awx":"One threshold-alerting layer across every Sempra site"}
    ],
    closer: "Free data answers 'is weather happening?' AccuWeather answers 'when does it hit MY berth — in Louisiana or Baja — and do I stand down or work through it?'"
  },
  capabilities: [
    ["Portfolio-scale threshold alerting","One alerting layer across Cameron LNG, ECA, Port Arthur LNG — your triggers, your sites."],
    ["Tropical cyclone decision support","Track probabilities and swell guidance pinned to ECA's Pacific berth and Cameron's Gulf dock."],
    ["Minute-by-minute lightning nowcast","30-minute advance warning at each terminal — not the parish."],
    ["Marine wind & wave windows","Hour-by-hour sea state at every berth; berthing-window recommendations."]
  ]
};
const LIVE_COMPARISON = {"awx": [
 {"t":"11:00","wx":"Partly sunny","tp":88.0,"pop":49,"wind":7,"gust":12},
 {"t":"12:00","wx":"Partly sunny w/ t-storms","tp":89.0,"pop":59,"wind":8,"gust":14},
 {"t":"13:00","wx":"Intermittent clouds","tp":90.0,"pop":49,"wind":8,"gust":14},
 {"t":"14:00","wx":"Mostly cloudy w/ t-storms","tp":90.0,"pop":51,"wind":9,"gust":15},
 {"t":"15:00","wx":"Intermittent clouds","tp":91.0,"pop":47,"wind":9,"gust":15},
 {"t":"16:00","wx":"Intermittent clouds","tp":90.0,"pop":40,"wind":8,"gust":13},
 {"t":"17:00","wx":"Partly sunny","tp":89.0,"pop":33,"wind":7,"gust":12},
 {"t":"18:00","wx":"Partly sunny","tp":87.0,"pop":33,"wind":6,"gust":10},
 {"t":"19:00","wx":"Partly sunny","tp":86.0,"pop":36,"wind":6,"gust":9},
 {"t":"20:00","wx":"Partly cloudy","tp":83.0,"pop":43,"wind":5,"gust":8},
 {"t":"21:00","wx":"Partly cloudy","tp":82.0,"pop":47,"wind":5,"gust":8},
 {"t":"22:00","wx":"Partly cloudy w/ t-storms","tp":82.0,"pop":51,"wind":5,"gust":8}
],"om": [
 {"t":"11:00","code":2,"tp":80,"pop":7},
 {"t":"12:00","code":2,"tp":80,"pop":6},
 {"t":"13:00","code":0,"tp":83,"pop":8},
 {"t":"14:00","code":1,"tp":87,"pop":10},
 {"t":"15:00","code":1,"tp":89,"pop":11},
 {"t":"16:00","code":1,"tp":90,"pop":13},
 {"t":"17:00","code":3,"tp":89,"pop":12},
 {"t":"18:00","code":3,"tp":87,"pop":16},
 {"t":"19:00","code":3,"tp":88,"pop":16},
 {"t":"20:00","code":3,"tp":89,"pop":16},
 {"t":"21:00","code":3,"tp":90,"pop":10},
 {"t":"22:00","code":3,"tp":88,"pop":6}
]};
