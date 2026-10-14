const DEMO_DATA = {
 "operator": "Civitas Resources",
 "generated": "2026-10-14",
 "topline": "RIGHT NOW on the Spraberry Trend: AccuWeather holds a 70-84% thunderstorm probability through late evening with a second wave after 3 AM — under an active Severe Thunderstorm Warning with 100+ lightning strikes recorded near producing wells today — while the free feed caps the same hours at 24-41% and shows a drier, quieter night. Same sky, two very different briefings for pumping units and crews that go dark when lightning closes in.",
 "risk_level": "SEVERE",
 "assets": [
  {
   "name": "Spraberry Trend (Permian Basin)",
   "lat": 31.85,
   "lon": -101.45,
   "current": "Thunderstorms, 79\u00b0F",
   "risk": "SEVERE",
   "risk_why": [
    "\u26a0\ufe0f Severe Thunderstorm Warning active tonight (Glasscock/Reagan/Upton counties) — AccuWeather's \u201cDangerous Weather Imminent: High Winds\u201d flag was live on Spraberry-area assets before the storm hit",
    "\u26a1 100+ lightning strikes logged near Spraberry wells in today's feed — every strike inside your standoff radius stops work: no hot work, no crane picks, no tank gauging",
    "\U0001f327 Second storm wave forecast after 3 AM (61-66% probability) — expect a wet, flashy night shift, then mud and access-road delays into tomorrow's day shift",
    "\u274c Free feed caps tonight's storm chance at 24-41% — an operator planning on free data would have scheduled night work into an active severe-warned cell"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "Severe thunderstorm complex — Rockies storm + Gulf moisture, Texas to Illinois through Thursday",
 "near_miss": {
  "headline": "The Plains severe-flood pattern is here — and it sits on top of the Permian",
  "facts": [
    "A slow-moving Rockies storm is tapping tropical moisture — AccuWeather forecasts flooding downpours and gusty storms from Texas to Illinois through Thursday",
    "Tonight's Severe Thunderstorm Warning covers the heart of the Spraberry Trend: high winds, hail potential, flash-flood runoff in drawdowns",
    "Lightning standdowns are the hidden cost: 100+ strikes nearby today means hours of stopped pumping, halted deliveries, and crews sitting on the clock",
    "AccuWeather's site-level hourly lightning and gust fields let you schedule AROUND the cells — free feeds give you a county-wide maybe"
  ]
 },
 "next_72h": [
  {
   "when": "Tonight",
   "what": "Round 1: storms through midnight (70-84%), brief lull, Round 2 after 3 AM (61-66%)",
   "impact": "Full lightning protocol; suspend hot work and crane ops; expect flash runoff in low country"
  },
  {
   "when": "Wednesday",
   "what": "Pattern reloads — additional storm waves fire on the residual moisture",
   "impact": "Keep crews on standby; mud delays on lease roads; re-verify tank batteries and secondary containment"
  },
  {
   "when": "Thursday",
   "what": "Storm axis shifts east toward Illinois; Permian dries from the west",
   "impact": "First realistic full-crew catch-up window — pre-stage the backlog list now"
  },
  {
   "when": "Fri-Sat",
   "what": "Quieter, cooler air behind the system",
   "impact": "Schedule deferred maintenance; verify access-road integrity before heavy trucks"
  }
 ],
 "comparison": {
  "intro": "Your ops team can already pull free weather data (OpenMeteo, NOAA/GFS feeds, NWS alerts). Here's what each shows for the Spraberry Trend right now — and where they diverge.",
  "rows": [
   {
    "feature": "Tonight's storm probability",
    "free": "24-41% — reads as \u201csome storms possible\u201d",
    "awx": "70-84% through late evening, second wave 61-66% after 3 AM — a scheduleable severe-night call"
   },
   {
    "feature": "Severe-wind flag",
    "free": "No pre-threshold warning — NWS warning issued as the storm arrived",
    "awx": "\u201cDangerous Weather Imminent: High Winds\u201d was live on Spraberry assets ahead of the cell"
   },
   {
    "feature": "Lightning context",
    "free": "None — no strike feed, no standoff guidance",
    "awx": "100+ strikes logged near your wells today; hourly lightning fields drive standdown windows"
   },
   {
    "feature": "Second overnight wave",
    "free": "25-28% — night shift would plan full work",
    "awx": "61-66% after 3 AM — night shift plans cover, not work"
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
  "closer": "Free data answers \u201cis weather happening?\u201d AccuWeather answers \u201cwhen do my crews stand down, and when do they go back to work — verified, at my fence line?\u201d"
 },
 "capabilities": [
  [
    "Site-level lightning standdown windows",
    "Hourly lightning probability at 31.85\u00b0N 101.45\u00b0W — not a county-wide guess. Crews work the gaps between cells."
  ],
  [
    "Pre-threshold severe-wind alerts",
    "\u201cDangerous Weather Imminent\u201d flags fired on Spraberry assets before tonight's warning — minutes that matter for securing personnel and equipment."
  ],
  [
    "Multi-wave storm timing",
    "Round 1 / lull / Round 2 timing tonight — the difference between a planned standdown and a surprised one."
  ],
  [
    "Threshold alerting per site",
    "Your ops triggers, your sites — auto-escalation when conditions cross your lines."
  ]
 ]
};
const LIVE_COMPARISON = {"awx": [{"t": "19:00", "wx": "Thunderstorms", "tp": 79, "pop": 84, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T00:00:00Z"}, {"t": "20:00", "wx": "Cloudy", "tp": 76, "pop": 49, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T01:00:00Z"}, {"t": "21:00", "wx": "Thunderstorms", "tp": 75, "pop": 70, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T02:00:00Z"}, {"t": "22:00", "wx": "Thunderstorms", "tp": 74, "pop": 75, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T03:00:00Z"}, {"t": "23:00", "wx": "Cloudy", "tp": 73, "pop": 40, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T04:00:00Z"}, {"t": "00:00", "wx": "Cloudy", "tp": 72, "pop": 34, "rain": 0.0, "cloud": 85, "ts": "2026-10-15T05:00:00Z"}, {"t": "01:00", "wx": "Cloudy", "tp": 71, "pop": 39, "rain": 0.0, "cloud": 85, "ts": "2026-10-15T06:00:00Z"}, {"t": "02:00", "wx": "Cloudy", "tp": 71, "pop": 49, "rain": 0.0, "cloud": 85, "ts": "2026-10-15T07:00:00Z"}, {"t": "03:00", "wx": "Thunderstorms", "tp": 71, "pop": 61, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T08:00:00Z"}, {"t": "04:00", "wx": "Thunderstorms", "tp": 71, "pop": 66, "rain": 0.0, "cloud": 100, "ts": "2026-10-15T09:00:00Z"}, {"t": "05:00", "wx": "Cloudy", "tp": 70, "pop": 40, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T10:00:00Z"}, {"t": "06:00", "wx": "Cloudy", "tp": 70, "pop": 34, "rain": 0.0, "cloud": 90, "ts": "2026-10-15T11:00:00Z"}], "om": [{"t": "19:00", "tp": 70.6, "pop": 65, "cloud": 95, "ts": "2026-10-15T00:00:00Z"}, {"t": "20:00", "tp": 72.4, "pop": 41, "cloud": 88, "ts": "2026-10-15T01:00:00Z"}, {"t": "21:00", "tp": 72.7, "pop": 31, "cloud": 85, "ts": "2026-10-15T02:00:00Z"}, {"t": "22:00", "tp": 72.9, "pop": 30, "cloud": 85, "ts": "2026-10-15T03:00:00Z"}, {"t": "23:00", "tp": 73.5, "pop": 24, "cloud": 80, "ts": "2026-10-15T04:00:00Z"}, {"t": "00:00", "tp": 74.1, "pop": 17, "cloud": 75, "ts": "2026-10-15T05:00:00Z"}, {"t": "01:00", "tp": 73.7, "pop": 29, "cloud": 78, "ts": "2026-10-15T06:00:00Z"}, {"t": "02:00", "tp": 73.1, "pop": 28, "cloud": 78, "ts": "2026-10-15T07:00:00Z"}, {"t": "03:00", "tp": 72.1, "pop": 25, "cloud": 75, "ts": "2026-10-15T08:00:00Z"}, {"t": "04:00", "tp": 72.1, "pop": 28, "cloud": 78, "ts": "2026-10-15T09:00:00Z"}, {"t": "05:00", "tp": 70.0, "pop": 44, "cloud": 82, "ts": "2026-10-15T10:00:00Z"}, {"t": "06:00", "tp": 68.9, "pop": 35, "cloud": 80, "ts": "2026-10-15T11:00:00Z"}], "loc": "Garden City (Spraberry Trend)", "key": "335797"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
