const DEMO_DATA = {
 "operator": "Valero Energy",
 "generated": "2026-10-19",
 "topline": "RIGHT NOW at Port Arthur: AccuWeather runs the refinery dry through Tuesday evening \u2014 sunny, 73-77\u00b0F, 0% rain all day \u2014 while the free feed finally admits the same dry window only after hours of coarser data. No tropical development is expected in the Gulf through 7 days per NHC; the operational story this week is the first genuine cold front of the season: a post-midnight wind shift to NNE with gusts and a 34% shower signal late Tuesday, then the first sub-60\u00b0F overnight of the season. Loading, marine ops, and turnarounds get a rare clean runway \u2014 plan the work into it.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Valero Port Arthur Refinery",
   "lat": 29.95,
   "lon": -93.93,
   "current": "Sunny, 75\u00b0F \u2014 dry high-pressure runway",
   "risk": "MODERATE",
   "risk_why": [
    "\u2600\ufe0f Clean 24h+: AccuWeather holds 0% rain through Tuesday evening with sunny skies \u2014 one of the cleanest Gulf-corridor windows this month for loading, barging, and heavy lifts",
    "\ud83c\udf2c\ufe0f Tuesday-night cold front: NNE wind shift with gusts and a 34% shower signal after 7 PM local \u2014 first sub-60\u00b0F night of the season behind it; watch flare/steam and flare-gas behavior on the swing",
    "\ud83c\udf0a Marine lag: residual Central-Gulf advisory zones east of the Mississippi mouth keep some crew-boat corridors bumpy through Monday even as Port Arthur itself stays calm",
    "\ud83d\udcca Season pivot: first heating-degree days of the season arrive this week across the northern tier \u2014 the demand story quietly turns from cooling to heating; freeze-prep audits start now"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "No Gulf/Atlantic tropical development expected through 7 days (NHC). Season's first real cold front reaches the Texas coast Tuesday night.",
 "near_miss": {
  "headline": "Quiet is when you bank the work \u2014 and prep the freeze season",
  "facts": [
   "The NHC two-week window is clean for the Gulf: no formation expected through 7 days. October's tail of hurricane season still runs through Nov 30 \u2014 the checklist stays warm.",
   "This is the week freeze-protection audits pay for themselves: AccuWeather's site-level 15-day heating-degree outlook flags the first sustained sub-40\u00b0F overnight windows for inland Texas in early November.",
   "Port Arthur sits in the surge-vulnerable parish corridor \u2014 every calm week is a week to rehearse the lockdown plan. Free feeds won't call your flood-return windows; enterprise data does."
  ]
 },
 "next_72h": [
  {
   "when": "Today (Mon)",
   "what": "Sunny, 73-77\u00b0F, 0% rain, light south wind",
   "impact": "Full-speed marine loading, barging, heavy lifts; ideal turnaround-support window"
  },
  {
   "when": "Tuesday",
   "what": "Dry to ~7 PM, then NNE wind shift, gusts ~25 mph, 34% shower signal overnight",
   "impact": "Secure loose equipment and sheeting before the swing shift; first sub-60\u00b0F night \u2014 watch steam/flare systems"
  },
  {
   "when": "Wed-Thu",
   "what": "Cooler, drier north flow; highs near 70\u00b0F",
   "impact": "Comfortable ops; begin freeze-season instrumentation checks ahead of November"
  }
 ],
 "comparison": [
  [
   "Next 12 hours at the fence line",
   "AccuWeather: sunny and 0% rain every hour through Tuesday evening \u2014 a bankable dry runway",
   "Free feed: same dry verdict, coarser resolution and no site-level wind-gust timing"
  ],
  [
   "Tuesday-evening front timing",
   "AccuWeather pins the NNE shift and gust onset hour-by-hour \u2014 crane and barge schedules get exact cutoffs",
   "Free feed: broad 'chance of showers' with no operational timing"
  ],
  [
   "First freeze watch",
   "Site-level heating-degree outlook flags early-November sub-40\u00b0F windows for Port Arthur",
   "Free feed: no site-level freeze climatology or alerting"
  ],
  [
   "Alerting on your triggers",
   "Threshold alerts on wind gusts, lightning, and temperature at YOUR coordinates",
   "County-wide generic push alerts, if any"
  ]
 ],
 "cta": "See the AccuWeather for Business difference on your own coordinates \u2014 the table above is live and refreshes daily.",
 "closer": "Free data tells you today is quiet. Enterprise data tells you exactly how long the quiet lasts \u2014 and when the season's first front turns the page.",
 "capabilities": [
  [
   "Site-level hourly wind-gust timing",
   "Hour-by-hour gust fields at 29.95\u00b0N 93.93\u00b0W for crane, barge, and flare work \u2014 not a zone forecast"
  ],
  [
   "Cold-front transition alerts",
   "Automatic heads-up when the NNE shift and gust onset cross your thresholds Tuesday evening"
  ],
  [
   "15-day heating-degree outlook",
   "Freeze-prep planning at the site level, weeks ahead of the first sub-40\u00b0F window"
  ],
  [
   "Threshold alerting per site",
   "Your ops triggers, your refinery \u2014 auto-escalation when conditions cross your lines"
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "\u2014", "tp": 73.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T11:00:00-05:00"}, {"t": "12:00", "wx": "\u2014", "tp": 74.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T12:00:00-05:00"}, {"t": "13:00", "wx": "\u2014", "tp": 75.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T13:00:00-05:00"}, {"t": "14:00", "wx": "\u2014", "tp": 76.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T14:00:00-05:00"}, {"t": "15:00", "wx": "\u2014", "tp": 77.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T15:00:00-05:00"}, {"t": "16:00", "wx": "\u2014", "tp": 76.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T16:00:00-05:00"}, {"t": "17:00", "wx": "\u2014", "tp": 75.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T17:00:00-05:00"}, {"t": "18:00", "wx": "\u2014", "tp": 74.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T18:00:00-05:00"}, {"t": "19:00", "wx": "\u2014", "tp": 72.0, "pop": 0, "rain": 0.0, "cloud": 26, "ts": "2026-10-19T19:00:00-05:00"}, {"t": "20:00", "wx": "\u2014", "tp": 70.0, "pop": 0, "rain": 0.0, "cloud": 11, "ts": "2026-10-19T20:00:00-05:00"}, {"t": "21:00", "wx": "\u2014", "tp": 68.0, "pop": 0, "rain": 0.0, "cloud": 11, "ts": "2026-10-19T21:00:00-05:00"}, {"t": "22:00", "wx": "\u2014", "tp": 66.0, "pop": 0, "rain": 0.0, "cloud": 11, "ts": "2026-10-19T22:00:00-05:00"}], "om": [{"t": "15:00", "tp": 69.7, "pop": 0, "cloud": 20, "ts": "2026-10-19T15:00:00Z"}, {"t": "16:00", "tp": 72.6, "pop": 0, "cloud": 37, "ts": "2026-10-19T16:00:00Z"}, {"t": "17:00", "tp": 75.2, "pop": 0, "cloud": 100, "ts": "2026-10-19T17:00:00Z"}, {"t": "18:00", "tp": 77.0, "pop": 0, "cloud": 100, "ts": "2026-10-19T18:00:00Z"}, {"t": "19:00", "tp": 79.1, "pop": 0, "cloud": 88, "ts": "2026-10-19T19:00:00Z"}, {"t": "20:00", "tp": 79.9, "pop": 0, "cloud": 100, "ts": "2026-10-19T20:00:00Z"}, {"t": "21:00", "tp": 78.9, "pop": 1, "cloud": 100, "ts": "2026-10-19T21:00:00Z"}, {"t": "22:00", "tp": 78.4, "pop": 0, "cloud": 100, "ts": "2026-10-19T22:00:00Z"}, {"t": "23:00", "tp": 76.7, "pop": 0, "cloud": 100, "ts": "2026-10-19T23:00:00Z"}, {"t": "00:00", "tp": 73.9, "pop": 1, "cloud": 100, "ts": "2026-10-20T00:00:00Z"}, {"t": "01:00", "tp": 72.1, "pop": 0, "cloud": 92, "ts": "2026-10-20T01:00:00Z"}, {"t": "02:00", "tp": 69.3, "pop": 0, "cloud": 35, "ts": "2026-10-20T02:00:00Z"}], "loc": "Port Arthur TX (Valero refinery)", "key": "335732"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
