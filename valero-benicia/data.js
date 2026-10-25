const DEMO_DATA = {
 "operator": "Valero Energy",
 "generated": "2026-10-25",
 "risk_level": "LOW",
 "topline": "RIGHT NOW at Benicia: a dry, mild day \u2014 AccuWeather holds 0% rain through tonight with afternoon temps climbing to the low 70sF, while the free feed shows the same dry picture but sharper afternoon gusts near 19 mph. No storm systems in play; the operational story is clean turnaround weather and a cool, clear evening.",
 "assets": [
  {
   "name": "Valero Benicia Refinery",
   "lat": 38.0697,
   "lon": -122.1372,
   "current": "Partly sunny, upper 60sF \u2014 dry day",
   "risk": "LOW",
   "risk_why": [
    "Dry 24h+: AccuWeather 0% rain through tonight \u2014 clean window for loading, marine ops at the Benicia berth, and heavy lifts",
    "Afternoon westerlies: free-feed gusts near 19 mph mid-afternoon \u2014 minor crane/flare-smoke consideration, nothing restrictive",
    "Evening cool-down: clearing overnight, first sub-55F night \u2014 watch steam/trace and flare behavior on the swing"
   ]
  }
 ],
 "loc": "Benicia CA (Valero refinery)",
 "key": "332043"
};
const LIVE_COMPARISON = {"awx": [{"t": "09:00", "wx": "Partly sunny", "tp": 120.2, "pop": 0, "ts": "2026-10-25T09:00:00-07:00"}, {"t": "10:00", "wx": "Partly sunny", "tp": 129.2, "pop": 0, "ts": "2026-10-25T10:00:00-07:00"}, {"t": "11:00", "wx": "Partly sunny", "tp": 140.0, "pop": 0, "ts": "2026-10-25T11:00:00-07:00"}, {"t": "12:00", "wx": "Partly sunny", "tp": 149.0, "pop": 0, "ts": "2026-10-25T12:00:00-07:00"}, {"t": "13:00", "wx": "Partly sunny", "tp": 154.4, "pop": 0, "ts": "2026-10-25T13:00:00-07:00"}, {"t": "14:00", "wx": "Partly sunny", "tp": 158.0, "pop": 0, "ts": "2026-10-25T14:00:00-07:00"}, {"t": "15:00", "wx": "Partly sunny", "tp": 159.8, "pop": 0, "ts": "2026-10-25T15:00:00-07:00"}, {"t": "16:00", "wx": "Partly sunny", "tp": 163.4, "pop": 0, "ts": "2026-10-25T16:00:00-07:00"}, {"t": "17:00", "wx": "Partly sunny", "tp": 158.0, "pop": 0, "ts": "2026-10-25T17:00:00-07:00"}, {"t": "18:00", "wx": "Partly sunny", "tp": 152.6, "pop": 0, "ts": "2026-10-25T18:00:00-07:00"}, {"t": "19:00", "wx": "Partly cloudy", "tp": 147.2, "pop": 0, "ts": "2026-10-25T19:00:00-07:00"}, {"t": "20:00", "wx": "Mostly clear", "tp": 143.6, "pop": 0, "ts": "2026-10-25T20:00:00-07:00"}], "om": [{"t": "15:00", "tp": 48.2, "pop": 0, "ts": "2026-10-25T15:00Z"}, {"t": "16:00", "tp": 54.7, "pop": 0, "ts": "2026-10-25T16:00Z"}, {"t": "17:00", "tp": 58.6, "pop": 0, "ts": "2026-10-25T17:00Z"}, {"t": "18:00", "tp": 62.4, "pop": 0, "ts": "2026-10-25T18:00Z"}, {"t": "19:00", "tp": 65.7, "pop": 0, "ts": "2026-10-25T19:00Z"}, {"t": "20:00", "tp": 68.0, "pop": 0, "ts": "2026-10-25T20:00Z"}, {"t": "21:00", "tp": 70.2, "pop": 0, "ts": "2026-10-25T21:00Z"}, {"t": "22:00", "tp": 72.0, "pop": 0, "ts": "2026-10-25T22:00Z"}, {"t": "23:00", "tp": 72.5, "pop": 0, "ts": "2026-10-25T23:00Z"}, {"t": "00:00", "tp": 70.5, "pop": 0, "ts": "2026-10-26T00:00Z"}, {"t": "01:00", "tp": 65.7, "pop": 0, "ts": "2026-10-26T01:00Z"}, {"t": "02:00", "tp": 61.5, "pop": 0, "ts": "2026-10-26T02:00Z"}], "loc": "Benicia CA (Valero refinery)", "key": "332043"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
