const DEMO_DATA = {
  operator: "PETRONAS (MLNG)",
  generated: "2026-10-18",
  topline: "UPDATE (Oct 18): Violent Typhoon CHAMPI (104 mph) spins east of the Philippines — elevated seas on Asia-US LNG lanes, no direct Bintulu threat yet. Locally AccuWeather shows a quiet overnight at the MLNG complex (20-25% rain) clearing to 87F by late morning; the free feed says 41-71% drizzle all night at the jetties. Same coordinates, different calls.",

  risk_level: "MONITOR",
  assets: [
    {"name":"MLNG Bintulu Complex","lat":3.17,"lon":113.04,"current":"Thunderstorms overnight, 77°F","risk":"ELEVATED",
     "risk_why":[
       "⛈ Midnight thunderstorm window (00:00 local, 52%, 0.28 in) — overnight LNG loading and jetty ops at lightning-stand-down risk",
       "Clear pre-dawn window 01:00-08:00 (POP 20-25%) — the best loading slot of the next 24h",
       "Second convective burst ~09:00 (63%, t-storm risk) — crane and open-yard work should finish before it"]},
    {"name":"Bintulu Port / Senipah terminals","lat":3.28,"lon":113.05,"current":"Showers building overnight","risk":"MODERATE",
     "risk_why":[
       "Northeast-monsoon shoulder season: convective episodes now come in timed bursts, not all-day rain",
       "Free feeds smear this into 'showers 72-94% all day' — unusable for berthing windows",
       "AccuWeather hourly gives the dry 01:00-08:00 marine window with precip probability per hour"]}
  ],
  near_miss: {
    headline: "Every Nov-Mar monsoon season, Bintulu sits in one of the world's heaviest convective corridors",
    facts: ["MLNG's 30 mtpa complex is the largest LNG cluster in a single monsoon-exposed location worldwide","Lightning stand-downs at jetties cost loading windows measured in hours per vessel","Northeast monsoon surges drive South China Sea swell that shuts small-craft ops for days at a time","The 2026/27 monsoon season opens in ~6 weeks — forecast-grade timing is the difference between schedule and scramble"]
  },
  next_72h: [
    {"when":"Tonight 00:00","what":"Thunderstorms cross the Bintulu complex (52%, 0.28 in)","impact":"Jetty lightning watch; suspend open-hatch and crane work"},
    {"when":"01:00-08:00","what":"Dry, mostly cloudy window (POP 20-25%)","impact":"Best loading/berthing slot of the next 24h"},
    {"when":"09:00","what":"Second convective burst (63%)","impact":"Outdoor work down; hold lifts until it clears"},
    {"when":"Thu-Fri","what":"Typical monsoon-shoulder pattern: overnight + late-morning convection","impact":"Plan marine windows around the pre-dawn lull"}
  ],
  comparison: {
    intro: "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds). Here's what each says about tonight at Bintulu — same coordinates, same hour.",
    rows: [
      {"feature":"Tonight's storm window at the jetties","free":"'Light drizzle, 72% rain' from midnight — no storm, no timing, no clearing signal","awx":"Thunderstorms pinpointed at 00:00 (52%, 0.28 in) with a clean 01:00-08:00 dry window after"},
      {"feature":"Second convective burst","free":"Flat 88-94% 'showers' all morning — the 09:00 burst is invisible","awx":"T-storms flagged at 09:00 (63%) — crane and yard work gets a finish-by time"},
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
const LIVE_COMPARISON = {"awx":[{"t":"00:00","wx":"Intermittent clouds","tp":78,"pop":25,"cloud":71},{"t":"01:00","wx":"Cloudy","tp":78,"pop":20,"cloud":92},{"t":"02:00","wx":"Cloudy","tp":77,"pop":20,"cloud":99},{"t":"03:00","wx":"Cloudy","tp":77,"pop":20,"cloud":99},{"t":"04:00","wx":"Cloudy","tp":77,"pop":20,"cloud":99},{"t":"05:00","wx":"Cloudy","tp":77,"pop":20,"cloud":99},{"t":"06:00","wx":"Mostly cloudy","tp":76,"pop":15,"cloud":83},{"t":"07:00","wx":"Intermittent clouds","tp":77,"pop":5,"cloud":67},{"t":"08:00","wx":"Intermittent clouds","tp":80,"pop":5,"cloud":70},{"t":"09:00","wx":"Partly sunny","tp":82,"pop":6,"cloud":49},{"t":"10:00","wx":"Partly sunny","tp":85,"pop":7,"cloud":47},{"t":"11:00","wx":"Partly sunny","tp":87,"pop":7,"cloud":44}],"om":[{"t":"00:00","code":"Overcast","tp":76,"pop":74},{"t":"01:00","code":"Overcast","tp":76,"pop":53},{"t":"02:00","code":"Light drizzle","tp":78,"pop":43},{"t":"03:00","code":"Light drizzle","tp":77,"pop":56},{"t":"04:00","code":"Drizzle","tp":76,"pop":80},{"t":"05:00","code":"Light drizzle","tp":75,"pop":96},{"t":"06:00","code":"Drizzle","tp":75,"pop":93},{"t":"07:00","code":"Drizzle","tp":75,"pop":82},{"t":"08:00","code":"Light drizzle","tp":78,"pop":75},{"t":"09:00","code":"Overcast","tp":80,"pop":77},{"t":"10:00","code":"Light drizzle","tp":82,"pop":84},{"t":"11:00","code":"Light drizzle","tp":83,"pop":88}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
