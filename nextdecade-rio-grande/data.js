const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTYwbGpnMzJvc2YzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
const DEMO_DATA = {
  operator: "NextDecade",
  generated: "2026-09-12",
  topline: "RIGHT NOW at Rio Grande LNG: 99°F and building under mostly sunny skies — but today's real story is the two systems around you. AccuWeather shows thunderstorm windows opening at both Cameron and Calcasieu Pass this afternoon (49-59% this hour) while free feeds read 6-16% and 'mostly clear.' Peak hurricane-climatology week, Atlantic cyclone-free — a good day to test your weather data before you need it.",
  risk_level: "MODERATE",
  assets: [
    {"name":"Rio Grande LNG (Train 1 operating, Trains 2-4 construction)","lat":26.02,"lon":-97.15,"current":"Mostly sunny 99°F (feels like 105+)","risk":"MODERATE",
     "risk_why":[
       "Peak heat 2-3 PM: 98-99°F, RealFeel 105°F+ — heat-stress protocols for outdoor construction crews through 5 PM",
       "Dry today (rain chances under 5%) — but upper-Gulf terminals to your northeast run 49-59% t-storm windows that free feeds miss almost entirely",
       "Clear weekend; Gulf-wide tropical development odds stay near zero through the weekend (NHC)"]},
    {"name":"Ship channel & jetty ops (Brownsville)","lat":25.95,"lon":-97.35,"current":"Sunny, S winds 10-15 kt","risk":"LOW",
     "risk_why":[
       "Normal carrier berthing windows today and Sunday; afternoon sea breeze to 15 kt",
       "Weekend dry with good visibility — no loading disruptions",
       "Watch early week: weak disturbance crosses Tue-Wed with 30-40% t-storm odds"]}
  ],
  storm_track: [],
  near_miss: {
    headline: "You're 2 days into peak hurricane climatology (Sep 10) — and both your construction cranes and loading jetties sit inside the highest-frequency landfall corridor on the Gulf.",
    facts: ["Rio Grande LNG sits at the southern end of the Texas landfall corridor; Trains 2-4 construction adds crane and lift exposure Train 1 never had","Evacuate-vs-ride-out for a construction site is a 48-72h decision — made on forecasts that free feeds resolve at 25-mile grid scale","The Atlantic is quiet this week. Next week it may not be — the data you trust today is the data you'll decide with then","Live example from 90 miles northeast: today free feeds show Cameron LNG 'mostly clear' while AccuWeather runs 49-59% t-storm windows"]
  },
  next_72h: [
    {"when":"Sat 2-5 PM","what":"Peak heat 98-99°F, RealFeel 105°F+ at Rio Grande LNG","impact":"Rotate outdoor crews hourly; hydrate protocol; crane hydraulics checks in heat"},
    {"when":"Sat night-Sun","what":"Clear, light wind, low 80s","impact":"Best 36-hour window of the week for lifts and pours"},
    {"when":"Mon-Tue","what":"Moisture returns: 30-40% t-storm odds Tuesday","impact":"Pre-plan Tuesday lift windows around afternoon convection"},
    {"when":"Ongoing","what":"TS Norbert (E Pacific, 60 mph) strengthens away from all assets; Gulf cyclone-free through 7 days","impact":"No action — but a live reminder to pre-stage storm-decision thresholds"}
  ],
  comparison: {
    intro: "Your ops team can pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's today's live comparison — pulled this hour for Brownsville and the upper-Gulf LNG corridor:",
    rows: [
      {"feature":"Rio Grande LNG heat load (2 PM today)","free":"88-90°F — undercalls by 10°F, missing the heat-stress threshold","awx":"98-99°F, RealFeel 105°F+ — crew-rotation triggers armed"},
      {"feature":"T-storm windows at Cameron / Calcasieu Pass (upper Gulf)","free":"6-16% rain chance, 'mostly clear' all afternoon","awx":"49-59% thunderstorm windows midday-evening — crane and dock ops exposed"},
      {"feature":"Storm arrival at your jetty","free":"'Scattered storms' on a 25-mile grid, 3-hr steps","awx":"Minute-by-minute nowcast with 30-min advance lightning warning at your berth"},
      {"feature":"Tropical cyclone decision support","free":"NHC public cone, 5-day, 2×/day","awx":"Track probabilities + surge guidance tied to Rio Grande LNG; expert meteorologist consult"},
      {"feature":"Marine conditions for carrier berthing","free":"Coastal zone forecast, 6-hr blocks","awx":"Hour-by-hour wave height, period & wind at the jetty; berthing-window recommendations"},
      {"feature":"Construction-phase thresholds","free":"Generic county alerts","awx":"Your triggers — wind limits per crane, lightning stand-off radius, heat index per crew shift"}
    ],
    closer: "Free data answers 'is weather happening?' AccuWeather answers 'when does it hit MY site, and do I stand down or work through it?'"
  },
  capabilities: [
    ["Tropical decision support, site-pinned","Track probabilities and surge guidance tied to Rio Grande LNG and your jetty — not South Texas averages."],
    ["Construction-aware threshold alerting","Wind limits per crane, lightning stand-off, heat-index per crew shift — auto-escalation when your lines are crossed."],
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your site, not your county."],
    ["Marine wind & wave windows","Carrier berthing and loading schedules against hour-by-hour sea state at your jetty."]
  ]
};
const LIVE_COMPARISON = {"awx": [
 {"t":"11:00","wx":"Mostly sunny","tp":94.0,"pop":2,"wind":9,"gust":16},
 {"t":"12:00","wx":"Mostly sunny","tp":96.0,"pop":2,"wind":11,"gust":18},
 {"t":"13:00","wx":"Mostly sunny","tp":98.0,"pop":2,"wind":13,"gust":20},
 {"t":"14:00","wx":"Mostly sunny","tp":99.0,"pop":2,"wind":14,"gust":22},
 {"t":"15:00","wx":"Mostly sunny","tp":98.0,"pop":2,"wind":14,"gust":22},
 {"t":"16:00","wx":"Mostly sunny","tp":97.0,"pop":2,"wind":13,"gust":20},
 {"t":"17:00","wx":"Mostly sunny","tp":96.0,"pop":2,"wind":12,"gust":18},
 {"t":"18:00","wx":"Mostly sunny","tp":94.0,"pop":2,"wind":11,"gust":16},
 {"t":"19:00","wx":"Mostly sunny","tp":91.0,"pop":3,"wind":9,"gust":14},
 {"t":"20:00","wx":"Clear","tp":88.0,"pop":3,"wind":8,"gust":12},
 {"t":"21:00","wx":"Clear","tp":86.0,"pop":3,"wind":7,"gust":10},
 {"t":"22:00","wx":"Clear","tp":86.0,"pop":3,"wind":7,"gust":10}
],"om": [
 {"t":"11:00","code":0,"tp":82,"pop":0},
 {"t":"12:00","code":1,"tp":82,"pop":1},
 {"t":"13:00","code":1,"tp":83,"pop":1},
 {"t":"14:00","code":0,"tp":88,"pop":1},
 {"t":"15:00","code":1,"tp":90,"pop":1},
 {"t":"16:00","code":1,"tp":91,"pop":1},
 {"t":"17:00","code":1,"tp":92,"pop":1},
 {"t":"18:00","code":1,"tp":92,"pop":1},
 {"t":"19:00","code":1,"tp":92,"pop":1},
 {"t":"20:00","code":1,"tp":92,"pop":1},
 {"t":"21:00","code":1,"tp":91,"pop":1},
 {"t":"22:00","code":0,"tp":91,"pop":1}
]};
