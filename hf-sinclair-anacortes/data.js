const DEMO_DATA = {
 "operator": "HF Sinclair — Puget Sound Refinery (Anacortes WA)",
 "generated": "2026-09-28",
 "topline": "RIGHT NOW at the Puget Sound refinery (~145 kbd, Anacortes): a Gale Warning is live on the northern inland waters, and the two weather feeds disagree about how hard the wind arrives tonight — AccuWeather builds gusts to 34 mph late evening while the free feed's hour-by-hour smoothing hides the onset. For a refinery with crude docks on Fidalgo Bay, the feed that pins the gust curve hour-by-hour is the one that decides tonight's berthing window.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Puget Sound Refinery",
   "lat": 48.51,
   "lon": -122.68,
   "current": "Cloudy, mid-50s to low-60s F, gusts building 16 mph",
   "risk": "ELEVATED",
   "risk_why": [
    "NWS Gale Warning live on Northern Inland Waters including the San Juan Islands — marine wind gates for tanker arrivals and tug movements",
    "AccuWeather hourly builds gusts through the evening (up to ~34 mph) while the free feed smooths the onset — berth-window timing is the operational question",
    "Post-storm day-2 queue: Pacific Northwest refinery cargo schedules still working the nor'easter backlog",
    "East Pacific tropical cluster (Nolo, Odalys, Polo, Rachel) stays offshore — no direct WA impact, long-period swell only"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why Puget Sound ops watch weather closely",
  "headline": "Pacific Northwest marine wind gates and the autumn gale season",
  "facts": [
    "Anacortes sits at the throat of the San Juan Island shipping channels — gale-force gusts close crude and product berths",
    "Autumn gale systems arrive fast off the Pacific; onset timing is the difference between a controlled departure and a ship riding at anchor",
    "AccuWeather carries the evening gust build hour-by-hour; the free feed's smoothed curve lags the marine alert reality",
    "A Gale Warning is live right now on the refinery's own marine approaches"
   ]
 },
 "next_72h": [
  { "when": "Mon Sep 28 (today)", "what": "Gale Warning on the inland waters; clouds, gusts building to ~30 mph by late evening", "impact": "Hold night marine moves; secure dock loading arms and cranes by dusk" },
  { "when": "Tue Sep 29", "what": "Gale ending, winds easing, showers lingering", "impact": "Cargo queue clears midday; expect a compressed berthing schedule" },
  { "when": "Wed Sep 30", "what": "Returning to typical late-September pattern, drier", "impact": "Full ops window for deferred dock maintenance" }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here is what each says about tonight at Anacortes — same coordinates, same minute:",
  "rows": [
    { "feature": "Tonight's gust build (8 PM-midnight)", "free": "Smoothed hourly, onset lagged", "awx": "Gusts pinned hour-by-hour to ~34 mph under a live Gale Warning" },
    { "feature": "Marine berthing windows", "free": "No marine-alert context", "awx": "Gale structure with wind-gate windows tied to your berth coordinates" },
    { "feature": "Alert escalation", "free": "Generic county products", "awx": "Thresholds pinned to the refinery fence line and marine approaches" },
    { "feature": "Expert consult on hard calls", "free": "None", "awx": "24/7 meteorologist support for berth open/close decisions" }
  ],
  "closer": "The free feed smooths tonight's gale onset. AccuWeather pins the gust curve to the hour — the difference between a planned berth closure and a ship caught on the dock."
 },
 "capabilities": [
  [ "Hourly gust curves at the berth", "Wind gates tied to your marine approaches, not a regional average." ],
  [ "Marine-alert integration", "Gale and small-craft structures tied to your coordinates." ],
  [ "Threshold alerting per unit", "Your triggers, auto-escalation, nobody watching radar at midnight." ],
  [ "Cargo-queue planning support", "Expert consult when compressed schedules meet marginal weather." ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"09:00Z","wx":"Mostly cloudy","tp":51.0,"pop":1,"gust":9.2},{"t":"10:00Z","wx":"Mostly cloudy","tp":54.0,"pop":1,"gust":11.5},{"t":"11:00Z","wx":"Cloudy","tp":58.0,"pop":1,"gust":13.8},{"t":"12:00Z","wx":"Cloudy","tp":59.0,"pop":1,"gust":13.8},{"t":"13:00Z","wx":"Cloudy","tp":61.0,"pop":3,"gust":15.0},{"t":"14:00Z","wx":"Cloudy","tp":61.0,"pop":7,"gust":16.1},{"t":"15:00Z","wx":"Cloudy","tp":62.0,"pop":7,"gust":16.1},{"t":"16:00Z","wx":"Cloudy","tp":61.0,"pop":7,"gust":15.0},{"t":"17:00Z","wx":"Cloudy","tp":62.0,"pop":7,"gust":13.8},{"t":"18:00Z","wx":"Cloudy","tp":60.0,"pop":7,"gust":13.8},{"t":"19:00Z","wx":"Cloudy","tp":59.0,"pop":7,"gust":12.7},{"t":"20:00Z","wx":"Cloudy","tp":58.0,"pop":7,"gust":11.5}],"om":[{"t":"15:00Z","code":"Clear","tp":45.6,"pop":1},{"t":"16:00Z","code":"Clear","tp":51.7,"pop":1},{"t":"17:00Z","code":"Clear","tp":55.6,"pop":1},{"t":"18:00Z","code":"Mainly clear","tp":58.5,"pop":1},{"t":"19:00Z","code":"Mainly clear","tp":59.9,"pop":1},{"t":"20:00Z","code":"Mainly clear","tp":62.0,"pop":1},{"t":"21:00Z","code":"Partly cloudy","tp":62.2,"pop":2},{"t":"22:00Z","code":"Mainly clear","tp":63.0,"pop":3},{"t":"23:00Z","code":"Cloudy","tp":61.3,"pop":5},{"t":"00:00Z","code":"Cloudy","tp":60.6,"pop":9},{"t":"01:00Z","code":"Cloudy","tp":59.7,"pop":13},{"t":"02:00Z","code":"Cloudy","tp":58.8,"pop":14},{"t":"03:00Z","code":"Cloudy","tp":59.3,"pop":17},{"t":"04:00Z","code":"Cloudy","tp":58.6,"pop":24},{"t":"05:00Z","code":"Cloudy","tp":58.0,"pop":30}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
