const DEMO_DATA = {
  operator: "Venture Global",
  generated: "2026-09-05",
  topline: "RIGHT NOW at Calcasieu Pass: AccuWeather forecasts thunderstorms within the hour (73% precip). The free weather API your competitors use says clear skies, 1% chance of rain.",
  risk_level: "ELEVATED",
  assets: [
    {"name":"Calcasieu Pass LNG","lat":29.75,"lon":-93.32,"current":"Cloudy 83°F","risk":"ELEVATED",
     "risk_why":[
       "⛈ Thunderstorms arrive ~11 PM tonight (Mon 2 AM peak lightning) — overnight loading window at risk",
       "Heavy rain 1-2\"/hr 2-6 AM — visibility & crane ops limits",
       "Clears ~4 PM tomorrow; 40+ hrs of clean ops after"]},
    {"name":"Plaquemines LNG","lat":29.15,"lon":-89.35,"current":"Sunny 87°F","risk":"ELEVATED",
     "risk_why":[
       "Clear tonight — storms hold off until ~6 AM tomorrow",
       "Peak intensity 10 AM-2 PM: lightning + heavy rain",
       "Low-lying surge-vulnerable corridor; tropical peak week ahead"]}
  ],
  near_miss: {
    headline: "Sep 1 — TS Edouard made landfall 60 miles east of Calcasieu Pass",
    facts: ["4 Gulf LNG terminals under storm surge warnings","Non-essential personnel evacuated from nearby platforms","Marine ops disrupted across TX/LA ports for 3 days","Operators guessed on evacuate vs. ride-out timing — each wrong guess costs millions"]
  },
  next_72h: [
    {"when":"Tonight 11 PM","what":"Thunderstorms enter Calcasieu Pass corridor","impact":"Suspend loading ops; lightning watch begins"},
    {"when":"Mon 2-6 AM","what":"Peak: lightning + 1-2\"/hr rain, both terminals","impact":"All outdoor work down; crane ops suspended"},
    {"when":"Mon 4 PM","what":"System exits east; clearing begins","impact":"Resume loading ~6 PM; verify before restart"},
    {"when":"Tue-Wed","what":"Clear, hot; tropical Atlantic peak week (Sep 10)","impact":"Normal ops; monitor for development"}
  ],
  comparison: {
    intro: "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each would have told you about this exact event — and what AccuWeather adds.",
    rows: [
      {"feature":"Thunderstorm arrival time at your dock","free":"\"Scattered storms tonight\" — 40×40 mi grid, 3-hr steps","awx":"Minute-by-minute nowcast: first strikes 11:04 PM, 30-min advance lightning warning"},
      {"feature":"Storm intensity at asset coordinates","free":"Parish-level probability of precipitation","awx":"Hourly rain rate, wind gust, lightning density at 29.75°N 93.32°W — your berth, not the parish"},
      {"feature":"Official alerts","free":"NWS warnings — issued after threshold met","awx":"Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"},
      {"feature":"Marine conditions for loading/berthing","free":"Coastal zone forecast, 6-hr granularity","awx":"Hour-by-hour wave height, period & wind at the berth; loading-window recommendations"},
      {"feature":"Tropical cyclone decision support","free":"NHC public cone, 5-day, updates 2×/day","awx":"Storm-track probabilities + surge guidance tied to your asset; expert meteorologist consult"},
      {"feature":"Historical event verification","free":"None","awx":"Event archive per asset — audit what hit, when, for post-incident review and insurance"}
    ],
    closer: "Free data answers \"is weather happening?\" AccuWeather answers \"when does it hit MY dock, and what do I do about it?\""
  },
  capabilities: [
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your dock, not your region. Loading decisions with lead time."],
    ["Storm surge & tropical tracking, asset-pinned","Cone forecasts tied to Calcasieu Pass & Plaquemines coordinates, not Parish-level averages."],
    ["Marine wind & wave windows","Berthing and tanker scheduling against hour-by-hour sea state at your berths."],
    ["Threshold alerting per terminal","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
  ]
};
const LIVE_COMPARISON = {"awx": [{"t": "15:00", "wx": "Thunderstorms", "tp": 85.0, "pop": 65, "rain": {"Value": 0.01, "Unit": "in", "UnitType": 1}, "cloud": 93}, {"t": "16:00", "wx": "Thunderstorms", "tp": 84.0, "pop": 73, "rain": {"Value": 0.05, "Unit": "in", "UnitType": 1}, "cloud": 100}, {"t": "17:00", "wx": "Partly sunny", "tp": 85.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "18:00", "wx": "Partly sunny w/ t-storms", "tp": 84.0, "pop": 55, "rain": {"Value": 0.07, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "19:00", "wx": "Partly sunny", "tp": 83.0, "pop": 49, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 45}, {"t": "20:00", "wx": "Mostly cloudy", "tp": 82.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 79}, {"t": "21:00", "wx": "Intermittent clouds", "tp": 81.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 60}, {"t": "22:00", "wx": "Partly cloudy", "tp": 80.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 44}, {"t": "23:00", "wx": "Partly cloudy", "tp": 79.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 35}, {"t": "00:00", "wx": "Partly cloudy", "tp": 80.0, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 33}, {"t": "01:00", "wx": "Intermittent clouds", "tp": 80.0, "pop": 25, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 70}, {"t": "02:00", "wx": "Partly cloudy", "tp": 80.0, "pop": 45, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}, "cloud": 33}], "om": []};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
