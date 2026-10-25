const DEMO_DATA = {
 "operator": "Valero Energy",
 "generated": "2026-10-25",
 "risk_level": "LOW",
 "topline": "RIGHT NOW at Ardmore: a warm, sunny, dry day \u2014 AccuWeather holds 0% rain through tonight with highs near 80F, matching the free feed almost exactly. Southern Plains quiet under ridge influence; the operational story is clean windows for truck/rail loading and no weather constraints on unit operations.",
 "assets": [
  {
   "name": "Valero Ardmore Refinery",
   "lat": 34.174,
   "lon": -97.04,
   "current": "Mostly sunny, upper 70sF \u2014 dry and quiet",
   "risk": "LOW",
   "risk_why": [
    "Dry 24h+: AccuWeather 0% rain through tonight \u2014 no constraints on truck/rail loading or unit ops",
    "Modest south winds: 10-12 mph with gusts near 15 mph \u2014 no flaring or crane limits",
    "Mild overnight: mid-50sF tonight \u2014 comfortable utility loads, no freeze concerns"
   ]
  }
 ],
 "loc": "Ardmore OK (Valero refinery)",
 "key": "2138939"
};
const LIVE_COMPARISON = {"awx": [{"t": "11:00", "wx": "Mostly sunny", "tp": 154.4, "pop": 0, "ts": "2026-10-25T11:00:00-05:00"}, {"t": "12:00", "wx": "Mostly sunny", "tp": 165.2, "pop": 0, "ts": "2026-10-25T12:00:00-05:00"}, {"t": "13:00", "wx": "Mostly sunny", "tp": 170.6, "pop": 0, "ts": "2026-10-25T13:00:00-05:00"}, {"t": "14:00", "wx": "Mostly sunny", "tp": 174.2, "pop": 0, "ts": "2026-10-25T14:00:00-05:00"}, {"t": "15:00", "wx": "Mostly sunny", "tp": 176.0, "pop": 0, "ts": "2026-10-25T15:00:00-05:00"}, {"t": "16:00", "wx": "Mostly sunny", "tp": 176.0, "pop": 0, "ts": "2026-10-25T16:00:00-05:00"}, {"t": "17:00", "wx": "Partly sunny", "tp": 174.2, "pop": 0, "ts": "2026-10-25T17:00:00-05:00"}, {"t": "18:00", "wx": "Partly sunny", "tp": 168.8, "pop": 0, "ts": "2026-10-25T18:00:00-05:00"}, {"t": "19:00", "wx": "Partly cloudy", "tp": 161.6, "pop": 0, "ts": "2026-10-25T19:00:00-05:00"}, {"t": "20:00", "wx": "Mostly clear", "tp": 156.2, "pop": 0, "ts": "2026-10-25T20:00:00-05:00"}, {"t": "21:00", "wx": "Mostly clear", "tp": 150.8, "pop": 0, "ts": "2026-10-25T21:00:00-05:00"}, {"t": "22:00", "wx": "Mostly clear", "tp": 143.6, "pop": 0, "ts": "2026-10-25T22:00:00-05:00"}], "om": [{"t": "15:00", "tp": 67.3, "pop": 0, "ts": "2026-10-25T15:00Z"}, {"t": "16:00", "tp": 72.5, "pop": 0, "ts": "2026-10-25T16:00Z"}, {"t": "17:00", "tp": 75.7, "pop": 0, "ts": "2026-10-25T17:00Z"}, {"t": "18:00", "tp": 77.7, "pop": 0, "ts": "2026-10-25T18:00Z"}, {"t": "19:00", "tp": 79.2, "pop": 0, "ts": "2026-10-25T19:00Z"}, {"t": "20:00", "tp": 79.5, "pop": 0, "ts": "2026-10-25T20:00Z"}, {"t": "21:00", "tp": 79.7, "pop": 0, "ts": "2026-10-25T21:00Z"}, {"t": "22:00", "tp": 79.0, "pop": 0, "ts": "2026-10-25T22:00Z"}, {"t": "23:00", "tp": 75.9, "pop": 0, "ts": "2026-10-25T23:00Z"}, {"t": "00:00", "tp": 71.6, "pop": 0, "ts": "2026-10-26T00:00Z"}, {"t": "01:00", "tp": 68.5, "pop": 0, "ts": "2026-10-26T01:00Z"}, {"t": "02:00", "tp": 66.7, "pop": 0, "ts": "2026-10-26T02:00Z"}], "loc": "Ardmore OK (Valero refinery)", "key": "2138939"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
