const DEMO_DATA = {
  operator: "PETRONAS (MLNG)",
  generated: "2026-09-16",
  topline: "RIGHT NOW at Bintulu: AccuWeather shows overnight thunderstorms hitting the MLNG complex at midnight (52%, 0.28 in) — then a second convective burst at 9 AM. The free weather API your ops desk can pull says steady drizzle and 72-94% rain all morning: no storm timing, no lightning window, no loading call.",
  risk_level: "ELEVATED",
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
const LIVE_COMPARISON = {"awx": [{"t": "00:00", "wx": "Thunderstorms", "tp": 77.0, "pop": 52, "rain": {"Value": 0.28, "Unit": "in", "UnitType": 1}, "cloud": 56}, {"t": "01:00", "wx": "Mostly cloudy", "tp": 77.0, "pop": 25, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 77}, {"t": "02:00", "wx": "Mostly cloudy", "tp": 76.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 86}, {"t": "03:00", "wx": "Mostly cloudy", "tp": 76.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 80}, {"t": "04:00", "wx": "Intermittent clouds", "tp": 75.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 73}, {"t": "05:00", "wx": "Intermittent clouds", "tp": 74.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 70}, {"t": "06:00", "wx": "Intermittent clouds", "tp": 75.0, "pop": 25, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 68}, {"t": "07:00", "wx": "Intermittent clouds", "tp": 76.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 69}, {"t": "08:00", "wx": "Intermittent clouds", "tp": 77.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 71}, {"t": "09:00", "wx": "Mostly cloudy w/ t-storms", "tp": 79.0, "pop": 63, "rain": {"Value": 0.04, "Unit": "in", "UnitType": 1}, "cloud": 71}, {"t": "10:00", "wx": "Intermittent clouds", "tp": 81.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 71}, {"t": "11:00", "wx": "Intermittent clouds", "tp": 82.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 72}], "om": [{"t": "00:00", "code": "Light drizzle", "tp": 76, "pop": 72}, {"t": "01:00", "code": "Light drizzle", "tp": 75, "pop": 62}, {"t": "02:00", "code": "Showers", "tp": 75, "pop": 57}, {"t": "03:00", "code": "Showers", "tp": 75, "pop": 61}, {"t": "04:00", "code": "Light drizzle", "tp": 74, "pop": 69}, {"t": "05:00", "code": "Drizzle", "tp": 74, "pop": 76}, {"t": "06:00", "code": "Drizzle", "tp": 74, "pop": 81}, {"t": "07:00", "code": "Drizzle", "tp": 74, "pop": 85}, {"t": "08:00", "code": "Showers", "tp": 75, "pop": 88}, {"t": "09:00", "code": "Showers", "tp": 76, "pop": 91}, {"t": "10:00", "code": "Showers", "tp": 77, "pop": 92}, {"t": "11:00", "code": "Showers", "tp": 77, "pop": 94}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
