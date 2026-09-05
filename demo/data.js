const DEMO_DATA = {
  operator: "Venture Global",
  generated: "2026-09-05",
  topline: "Thunderstorm activity forecast at both terminals within 36 hours. Last week a tropical system triggered surge warnings at 4 Gulf LNG terminals — including yours.",
  risk_level: "ELEVATED",
  assets: [
    {"name":"Calcasieu Pass LNG","lat":29.75,"lon":-93.32,"current":"Cloudy 83°F","risk":"ELEVATED","risk_why":["Thunderstorms late tonight through tomorrow afternoon","Lightning risk during overnight loading windows","Heavy rain = visibility & crane ops limits"]},
    {"name":"Plaquemines LNG","lat":29.15,"lon":-89.35,"current":"Sunny 87°F","risk":"ELEVATED","risk_why":["Heavy rain + thunderstorms arriving late tomorrow","Low-lying surge-vulnerable corridor","Rising river + rain compound drainage risk"]}
  ],
  near_miss: {
    headline: "Sep 1 — TS Edouard made landfall 60 miles east of Calcasieu Pass",
    facts: ["4 Gulf LNG terminals under storm surge warnings","Non-essential personnel evacuated from nearby platforms","Marine ops disrupted across TX/LA ports for 3 days","Operators guessed on evacuate vs. ride-out timing — each wrong guess costs millions"]
  },
  next_72h: [
    {"when":"Tonight","what":"Thunderstorms move into Calcasieu Pass corridor","impact":"Loading windows at risk"},
    {"when":"Sun AM","what":"Storms peak — lightning + heavy rain both sites","impact":"Outdoor work, crane ops"},
    {"when":"Mon–Tue","what":"System clears; tropical Atlantic entering peak week (Sep 10)","impact":"Watch for development"}
  ],
  capabilities: [
    ["Minute-by-minute lightning nowcast","Know when strikes are 30 minutes out — at your dock, not your region. Loading decisions with lead time."],
    ["Storm surge & tropical tracking, asset-pinned","Cone forecasts tied to Calcasieu Pass & Plaquemines coordinates, not Parish-level averages."],
    ["Marine wind & wave windows","Berthing and tanker scheduling against hour-by-hour sea state at your berths."],
    ["Threshold alerting per terminal","Your ops triggers, your sites — auto-escalation when conditions cross your lines."]
  ]
};
const DATA_MAPBOX_TOKEN='pk'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
