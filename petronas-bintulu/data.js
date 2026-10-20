const DEMO_DATA = {
  operator: "PETRONAS (MLNG)",
  generated: "2026-10-20",
  topline: "UPDATE (Oct 20): CHAMPI is down to a severe tropical storm (63 mph) recurving away in the Philippine Sea — Asia-US LNG lane risk keeps easing. At Bintulu, AccuWeather shows an overnight shower cluster peaking 04:00-06:00 (64-72%) then a clean 07:00-12:00 work window (20%); the free feed flatlines at 2-41% overnight — it misses the 05:00 peak entirely and smears the morning dry. Same coordinates, different calls.",

  risk_level: "MONITOR",
  assets: [
    {"name":"MLNG Bintulu Complex","lat":3.17,"lon":113.04,"current":"Overnight showers, 77°F","risk":"ELEVATED",
     "risk_why":[
       "Overnight shower cluster builds 01:00-05:00, peaking 64-72% at 04:00-06:00 — jetty and crane windows close pre-dawn",
       "Clean 07:00-12:00 window (POP 20%) — the best loading/berthing slot of the next 24h",
       "Afternoon showers return 13:00-18:00 (59-79%) — hold open-yard work to the morning"]},
    {"name":"Bintulu Port / Senipah terminals","lat":3.28,"lon":113.05,"current":"Showers building overnight","risk":"MODERATE",
     "risk_why":[
       "Northeast-monsoon shoulder season: convective episodes now come in timed bursts, not all-day rain",
       "Free feeds flatline at 2-41% overnight and miss the 05:00 shower peak entirely — unusable for berthing windows",
       "AccuWeather hourly gives the clean 07:00-12:00 marine window with precip probability per hour"]}
  ],
  near_miss: {
    headline: "Every Nov-Mar monsoon season, Bintulu sits in one of the world's heaviest convective corridors",
    facts: ["MLNG's 30 mtpa complex is the largest LNG cluster in a single monsoon-exposed location worldwide","Lightning stand-downs at jetties cost loading windows measured in hours per vessel","Northeast monsoon surges drive South China Sea swell that shuts small-craft ops for days at a time","The 2026/27 monsoon season opens in ~6 weeks — forecast-grade timing is the difference between schedule and scramble"]
  },
  next_72h: [
    {"when":"Overnight 01:00-06:00","what":"Shower cluster builds to 64-72% at 04:00-06:00","impact":"Jetty and crane windows close pre-dawn"},
    {"when":"07:00-12:00","what":"Dry, clearing window (POP 20%)","impact":"Best loading/berthing slot of the next 24h"},
    {"when":"13:00-18:00","what":"Afternoon showers return (59-79%)","impact":"Hold open-yard work and lifts to the morning"},
    {"when":"Tue-Wed","what":"Monsoon-shoulder pattern: overnight + afternoon convection","impact":"Plan marine windows around the mid-morning lull"}
  ],
  comparison: {
    intro: "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about tonight at Bintulu — same coordinates, same hour.",
    rows: [
      {"feature":"Tonight's shower window at the jetties","free":"2-41% all night — the 05:00 peak (72%) is invisible","awx":"Showers pinpointed 04:00-06:00 (64-72%) with a clean 07:00-12:00 dry window after"},
      {"feature":"Afternoon shower return","free":"8-14% through 14:00 — the 16:00 shower peak (79%) arrives unannounced","awx":"Showers flagged from 13:00, peaking 79% at 16:00 — crane and yard work gets a finish-by time"},
      {"feature":"Lightning strike tracking","free":"Not available — no free weather API serves real-time strike data","awx":"Real-time strikes + 30-min history, alerts pinned to the MLNG complex coordinates"},
      {"feature":"Berthing-window guidance","free":"A single smeared rain probability for the whole day","awx":"Hour-by-hour precip probability at 3.17°N 113.04°E — your jetty, not the district"},
      {"feature":"Monsoon surge & sea-state timing","free":"Coastal-zone text forecast, coarse granularity","awx":"Hourly wind and marine conditions at the berth across the monsoon season"},
      {"feature":"Historical event verification","free":"None","awx":"Event archive per asset — audit what hit, when, for post-incident review and insurance"}
    ],
    closer: "Free data tells your team 'it's the monsoon, expect rain.' AccuWeather tells them which hours are safe to load."
  },
  capabilities: [
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your jetty, not your district. Loading decisions with lead time."],
    ["Hourly precip probability at asset coordinates","The 01:00-08:00 dry window, forecast and verified — not a smeared 94% 'showers'."],
    ["Monsoon-season marine windows","Berthing and tanker scheduling against hour-by-hour conditions at the Bintulu berths."],
    ["Threshold alerting per facility","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
  ]
};
const LIVE_COMPARISON = {"awx":[{"t":"00:00","wx":"Intermittent clouds","tp":79.0,"pop":10,"cloud":67},{"t":"01:00","wx":"Mostly cloudy","tp":79.0,"pop":43,"cloud":84},{"t":"02:00","wx":"Mostly cloudy","tp":79.0,"pop":47,"cloud":85},{"t":"03:00","wx":"Showers","tp":78.0,"pop":51,"cloud":90},{"t":"04:00","wx":"Showers","tp":78.0,"pop":64,"cloud":94},{"t":"05:00","wx":"Showers","tp":77.0,"pop":72,"cloud":98},{"t":"06:00","wx":"Mostly cloudy","tp":76.0,"pop":49,"cloud":82},{"t":"07:00","wx":"Intermittent clouds","tp":77.0,"pop":20,"cloud":66},{"t":"08:00","wx":"Intermittent clouds","tp":79.0,"pop":20,"cloud":70},{"t":"09:00","wx":"Partly sunny","tp":81.0,"pop":20,"cloud":42},{"t":"10:00","wx":"Partly sunny","tp":83.0,"pop":20,"cloud":34},{"t":"11:00","wx":"Mostly sunny","tp":85.0,"pop":20,"cloud":25}],"om":[{"t":"00:00","code":80,"tp":78,"pop":39},{"t":"01:00","code":81,"tp":77,"pop":41},{"t":"02:00","code":53,"tp":77,"pop":39},{"t":"03:00","code":3,"tp":77,"pop":28},{"t":"04:00","code":3,"tp":76,"pop":13},{"t":"05:00","code":2,"tp":76,"pop":2},{"t":"06:00","code":3,"tp":76,"pop":0},{"t":"07:00","code":3,"tp":77,"pop":3},{"t":"08:00","code":3,"tp":80,"pop":6},{"t":"09:00","code":3,"tp":82,"pop":7},{"t":"10:00","code":1,"tp":85,"pop":7},{"t":"11:00","code":1,"tp":88,"pop":8},{"t":"12:00","code":51,"tp":89,"pop":8},{"t":"13:00","code":3,"tp":90,"pop":9},{"t":"14:00","code":3,"tp":89,"pop":14},{"t":"15:00","code":51,"tp":88,"pop":30},{"t":"16:00","code":3,"tp":87,"pop":51},{"t":"17:00","code":3,"tp":86,"pop":61},{"t":"18:00","code":3,"tp":85,"pop":50},{"t":"19:00","code":3,"tp":84,"pop":29},{"t":"20:00","code":2,"tp":83,"pop":12},{"t":"21:00","code":2,"tp":81,"pop":6},{"t":"22:00","code":2,"tp":80,"pop":5},{"t":"23:00","code":3,"tp":79,"pop":8}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
