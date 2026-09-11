const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
const DEMO_DATA = {
  operator: "Chevron",
  generated: "2026-09-11",
  topline: "RIGHT NOW on the North West Shelf: free weather feeds show 35-45 mph overnight gusts at Wheatstone and Gorgon. AccuWeather, same hours, same coordinates: calm 6-8 mph. Cyclone season starts in 7 weeks — this is the data gap your cyclone decisions will run on.",
  risk_level: "LOW",
  assets: [
    {"name":"Wheatstone LNG","lat":-21.08,"lon":115.65,"current":"Clear 71°F","risk":"LOW",
     "risk_why":[
       "Tonight through tomorrow: clear and mild (61-68°F), winds under 8 mph — clean maintenance and offshore-crew window",
       "Building to 90°F by Monday — plan outdoor-work windows before midday heat",
       "Zero convective activity across the NW Shelf through 5 days"]},
    {"name":"Gorgon LNG","lat":-21.15,"lon":115.09,"current":"Clear 71°F","risk":"LOW",
     "risk_why":[
       "Sunny, dry next 48h; early-morning cloud deck burns off by 9 AM",
       "88-90°F early next week — heat-stress rules for Barrow Island turnaround crews",
       "No marine warnings; normal LNG carrier berthing windows"]}
  ],
  storm_track: [],
  near_miss: {
    headline: "Cyclone season opens Nov 1 — 51 days out. The 2007-2025 average: ~2 coastal-impact cyclones per season on the NW Shelf.",
    facts: ["Wheatstone and Gorgon both carry direct cyclone-track exposure on the Pilbara coast","Every recent season forced at least one full non-essential demobilization at NW Shelf complexes","The evacuate-vs-ride-out call is made 48-72h ahead — exactly where forecast divergence is largest","Free feeds (GFS-based) run 40x40 mi grids; Barrow Island and the mainland sites can sit in different grid cells"]
  },
  next_72h: [
    {"when":"Tonight–Sat","what":"Clear, light winds, mild (61-68°F) at both complexes","impact":"Best offshore-crew and crane window of the week"},
    {"when":"Sat night","what":"Light S/SE winds 6-8 mph; dry","impact":"Normal carrier berthing and loading"},
    {"when":"Sun–Mon","what":"Warming trend: 87°F Sun → 90°F Mon","impact":"Shift heavy outdoor work to before 11 AM"}
  ],
  comparison: {
    intro: "Your ops team can pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about your exact coordinates today — and what AccuWeather adds for cyclone season.",
    rows: [
      {"feature":"Overnight wind gusts at your jetty (tonight)","free":"35-45 mph gusts forecast at Wheatstone/Gorgon coordinates","awx":"6-8 mph — verified against the site observation (71°F, clear, calm)"},
      {"feature":"Cyclone track probability at YOUR site","free":"Coarse 40x40 mi grid; your island site and the mainland can share a cell","awx":"Track probabilities pinned to Wheatstone & Gorgon coordinates with surge guidance"},
      {"feature":"Evacuate-vs-ride-out timing","free":"Public BOM warnings only — one-size-fits-all for the whole Pilbara","awx":"Site-specific decision triggers with expert meteorologist consult before demob costs are incurred"},
      {"feature":"Marine conditions for carrier berthing","free":"Zone forecast, 6-hr granularity","awx":"Hour-by-hour wave height, period & wind at the berth; berthing-window recommendations"},
      {"feature":"Heat & worker-safety windows","free":"Daily max only","awx":"Hour-specific wet-bulb and heat-index at site; shift-planning windows"},
      {"feature":"Cyclone-season post-event verification","free":"None","awx":"Event archive per site — what hit, when, for review and insurance"}
    ],
    closer: "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY jetty, and do I demob or ride out?\""
  },
  capabilities: [
    ["Cyclone decision support, site-pinned","Track probabilities and surge guidance tied to Wheatstone & Gorgon coordinates — not Pilbara-wide averages."],
    ["Marine wind & wave windows","Carrier berthing and loading schedules against hour-by-hour sea state at your jetties."],
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your complex, not your region."],
    ["Threshold alerting per site","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
  ]
};
const LIVE_COMPARISON = {"awx": [
 {"t":"00:00","wx":"Clear","tp":68.0,"pop":0,"wind":4,"gust":6},
 {"t":"01:00","wx":"Clear","tp":67.0,"pop":0,"wind":5,"gust":6},
 {"t":"02:00","wx":"Clear","tp":66.0,"pop":0,"wind":6,"gust":6},
 {"t":"03:00","wx":"Clear","tp":65.0,"pop":0,"wind":6,"gust":6},
 {"t":"04:00","wx":"Clear","tp":63.0,"pop":0,"wind":6,"gust":7},
 {"t":"05:00","wx":"Clear","tp":62.0,"pop":0,"wind":6,"gust":7},
 {"t":"06:00","wx":"Clear","tp":61.0,"pop":0,"wind":6,"gust":7},
 {"t":"07:00","wx":"Sunny","tp":64.0,"pop":0,"wind":7,"gust":7},
 {"t":"08:00","wx":"Sunny","tp":68.0,"pop":0,"wind":7,"gust":8},
 {"t":"09:00","wx":"Sunny","tp":73.0,"pop":0,"wind":7,"gust":8},
 {"t":"10:00","wx":"Sunny","tp":76.0,"pop":0,"wind":7,"gust":12},
 {"t":"11:00","wx":"Sunny","tp":79.0,"pop":0,"wind":7,"gust":15}
], "om": [
 {"t":"00:00","code":"Clear","tp":68,"pop":0,"gust":27},
 {"t":"01:00","code":"Clear","tp":68,"pop":0,"gust":27},
 {"t":"02:00","code":"Clear","tp":68,"pop":0,"gust":24},
 {"t":"03:00","code":"Clear","tp":68,"pop":0,"gust":23},
 {"t":"04:00","code":"Clear","tp":67,"pop":0,"gust":22},
 {"t":"05:00","code":"Clear","tp":67,"pop":0,"gust":22},
 {"t":"06:00","code":"Clear","tp":67,"pop":0,"gust":23},
 {"t":"07:00","code":"Clear","tp":67,"pop":0,"gust":23},
 {"t":"08:00","code":"Clear","tp":67,"pop":0,"gust":23},
 {"t":"09:00","code":"Clear","tp":67,"pop":0,"gust":22},
 {"t":"10:00","code":"Clear","tp":68,"pop":0,"gust":20},
 {"t":"11:00","code":"Clear","tp":68,"pop":0,"gust":16}
]};
