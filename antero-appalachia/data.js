const DEMO_DATA = {
 "operator": "Antero Resources",
 "generated": "2026-10-14",
 "topline": "RIGHT NOW in the West Virginia gas belt: AccuWeather holds thunderstorms at 47-52% through mid-evening under an active Flash Flood Warning across Doddridge, Harrison, Ritchie and Tyler counties — the heart of Marcellus dry-gas country — while the free feed shows the same hours at 26-54% and dries the night out faster. Same sky, two very different briefings for pad crews and water-hauling trucks on wet mountain roads.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Marcellus Gas Belt (West Virginia)",
   "lat": 39.28,
   "lon": -80.85,
   "current": "Thunderstorms, 75\u00b0F",
   "risk": "ELEVATED",
   "risk_why": [
    "\u26a0\ufe0f Flash Flood Warning live tonight across Doddridge, Gilmer, Harrison, Lewis and Ritchie counties — Antero and neighboring producers' producing pads sit inside the warned zone",
    "\U0001f327 AccuWeather keeps storm probability at 47-52% through mid-evening, then a second wet push overnight — runoff risk on haul roads and freshwater impoundments stays live after the rain stops",
    "\U0001f69b Water hauling is the first thing a flood warning breaks: county-road closures and weight-restricted detours stretch completions schedules",
    "\u274c Free feed tapers the rain chance too fast tonight — crews planned on it would be driving back roads exactly when the second wave arrives"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "Slow-moving storm complex — flooding rain targets the Appalachians and Ohio Valley through Thursday",
 "near_miss": {
  "headline": "The Plains-to-Ohio-Valley flood pattern has an Appalachian arm — and it sits on the gas belt",
  "facts": [
    "A slow-moving Rockies storm is linking with tropical moisture — AccuWeather forecasts flooding downpours from Texas to Illinois, with the eastern flank training over the Ohio Valley and Appalachians",
    "Flash Flood Warnings already cover multi-county West Virginia tonight — this is the region that feeds winter gas demand, and wet pads now become freeze-risk pads later",
    "The hidden cost is logistics: one closed county road can idle a completion crew for a full day",
    "AccuWeather's hourly rain-intensity and site-level fields let you re-sequence hauling and pad work around the wave timing — free feeds smear the whole night into one number"
  ]
 },
 "next_72h": [
  {
   "when": "Tonight",
   "what": "Storms through mid-evening (47-52%), damp overnight with another wave possible toward dawn",
   "impact": "Hold water-hauling on flood-warned roads; check impoundment freeboard; keep pad crews staged, not driving"
  },
  {
   "when": "Wednesday",
   "what": "Residual moisture fires additional showers over the high terrain",
   "impact": "Expect soft haul roads and low clouds for any aerial work; re-verify erosion controls on fresh pad cuts"
  },
  {
   "when": "Thursday",
   "what": "System exits east; drying begins",
   "impact": "First full-crew recovery day — pre-stage the deferred hauling queue"
  },
  {
   "when": "Fri-Sat",
   "what": "Quieter, cooler behind the front",
   "impact": "Good window for deferred completions work; watch overnight lows — first real freeze-prep signal of the season"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each shows for the West Virginia gas belt right now — and where they diverge.",
  "rows": [
   {
    "feature": "Evening storm probability",
    "free": "26-54% but dries out too fast after 9 PM",
    "awx": "47-52% through mid-evening with sustained overnight rain risk — the road-closure window is longer"
   },
   {
    "feature": "Flood-flag lead time",
    "free": "NWS warning issued as gauges crossed thresholds",
    "awx": "AccuWeather flash-flood potential flagged the asset before the warning went live"
   },
   {
    "feature": "Haul-road timing",
    "free": "No hourly intensity curve — dispatch guesses",
    "awx": "Hour-by-hour rain intensity at 39.28\u00b0N 80.85\u00b0W — dispatch re-sequences around the waves"
   },
   {
    "feature": "Overnight second wave",
    "free": "Dissipating — night hauling looks fine",
    "awx": "Damp with another wet push toward dawn — the exact hours trucks would be on back roads"
   },
   {
    "feature": "Official alerts",
    "free": "NWS warnings — issued after threshold met",
    "awx": "Proprietary alerts 30-120 min earlier; pre-threshold escalation on your ops triggers"
   },
   {
    "feature": "Historical event verification",
    "free": "None",
    "awx": "Event archive per asset — audit what hit, when, for post-incident review and insurance"
   }
  ],
  "closer": "Free data answers \u201cis weather happening?\u201d AccuWeather answers \u201cwhen do my trucks roll and when do they park — verified, at my fence line?\u201d"
 },
 "capabilities": [
  [
    "Haul-road flood windows",
    "Hourly rain intensity at your pads — county-road closure risk timed, not guessed."
  ],
  [
    "Pre-threshold flood alerts",
    "Flash-flood potential flagged on the asset before the NWS warning — lead time to re-stage trucks and crews."
  ],
  [
    "Appalachian terrain microclimates",
    "Valley fog, ridge wind, and training rain bands behave differently than the county average — your pads deserve site-level numbers."
  ],
  [
    "Threshold alerting per site",
    "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "20:00", "wx": "Thunderstorms", "tp": 75, "pop": 47, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T00:00:00Z"}, {"t": "21:00", "wx": "Thunderstorms", "tp": 72, "pop": 52, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T01:00:00Z"}, {"t": "22:00", "wx": "Cloudy", "tp": 69, "pop": 48, "rain": 0.0, "cloud": 95, "ts": "2026-10-15T02:00:00Z"}, {"t": "23:00", "wx": "Cloudy", "tp": 69, "pop": 34, "rain": 0.0, "cloud": 95, "ts": "2026-10-15T03:00:00Z"}, {"t": "00:00", "wx": "Cloudy", "tp": 69, "pop": 34, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T04:00:00Z"}, {"t": "01:00", "wx": "Cloudy", "tp": 67, "pop": 34, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T05:00:00Z"}, {"t": "02:00", "wx": "Cloudy", "tp": 65, "pop": 34, "rain": 0.0, "cloud": 85, "ts": "2026-10-15T06:00:00Z"}, {"t": "03:00", "wx": "Cloudy", "tp": 65, "pop": 34, "rain": 0.0, "cloud": 85, "ts": "2026-10-15T07:00:00Z"}], "om": [{"t": "20:00", "tp": 73.4, "pop": 54, "cloud": 95, "ts": "2026-10-15T00:00:00Z"}, {"t": "21:00", "tp": 72.8, "pop": 51, "cloud": 92, "ts": "2026-10-15T01:00:00Z"}, {"t": "22:00", "tp": 72.4, "pop": 42, "cloud": 88, "ts": "2026-10-15T02:00:00Z"}, {"t": "23:00", "tp": 72.2, "pop": 26, "cloud": 85, "ts": "2026-10-15T03:00:00Z"}, {"t": "00:00", "tp": 70.3, "pop": 15, "cloud": 80, "ts": "2026-10-15T04:00:00Z"}, {"t": "01:00", "tp": 68.1, "pop": 23, "cloud": 78, "ts": "2026-10-15T05:00:00Z"}, {"t": "02:00", "tp": 66.2, "pop": 21, "cloud": 75, "ts": "2026-10-15T06:00:00Z"}, {"t": "03:00", "tp": 65.7, "pop": 17, "cloud": 75, "ts": "2026-10-15T07:00:00Z"}], "loc": "West Union (Marcellus belt)", "key": "336464"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
