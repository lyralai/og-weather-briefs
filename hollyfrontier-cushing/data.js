const DEMO_DATA = {
 "operator": "HollyFrontier (HF Sinclair) — Cushing Refinery (Oklahoma)",
 "generated": "2026-09-28",
 "topline": "RIGHT NOW at the Cushing refinery (~50 kbd, in America's largest crude-storage hub): a bright dry Monday on both feeds — but AccuWeather flash-flood severe-potential flags have been live on Midcontinent sites for days and today's storm cell is already on the Tyler corridor to the south. For an operation that lives on tank containment, rail spots, and the pipeline nexus, the feed that carries the convective flags early is the one that keeps containment crews ahead of the next cell.",
 "risk_level": "MODERATE",
 "assets": [
  {
   "name": "Cushing Refinery",
   "lat": 35.99,
   "lon": -96.97,
   "current": "Sunny, mid-80s F, light westerly gusts",
   "risk": "MODERATE",
   "risk_why": [
    "Dry and sunny at Cushing proper today — a full ops window",
    "AccuWeather severe-potential flash-flood flags persist across the KS/OK Midcontinent corridor — Cushing sits at the north edge of the risk region",
    "September convective pattern: stalled boundaries over Oklahoma fire late-day cells; lightning stand-downs on tank gauging and rail loading are the weekly question",
    "Cushing is the NYMEX delivery point — any hub disruption is a market event, not just an ops event"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why Cushing ops watch weather closely",
  "headline": "The crude hub where weather and the oil price meet",
  "facts": [
    "Cushing is the physical delivery point for WTI — tank farm operations here are market-critical infrastructure",
    "September stalled boundaries over Oklahoma trigger evening thunderstorms with lightning stand-down implications for gauging and transfers",
    "AccuWeather has flagged severe flash-flood potential on Midcontinent energy sites for days while NWS stayed silent at several",
    "The same corridor flooded Midwest operators earlier this month — the pattern is primed"
   ]
 },
 "next_72h": [
  { "when": "Mon Sep 28 (today)", "what": "Sunny, dry, mid-80s; storm cells south on the Tyler corridor", "impact": "Full ops window; use it — schedule tank gauging and transfers today" },
  { "when": "Tue Sep 29", "what": "Boundary sags south; slight late-day storm chance returns", "impact": "Plan lightning stand-down windows after 4 PM; verify tank-farm drainage" },
  { "when": "Wed Sep 30", "what": "Drier northwest flow returns", "impact": "Full ops window; backlog maintenance" }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here is what each says about this week at Cushing — same coordinates, same minute:",
  "rows": [
    { "feature": "Corridor flash-flood flags", "free": "No severe-potential context", "awx": "AccuWeather severe-potential flags live on KS/OK energy sites for days" },
    { "feature": "Lightning stand-down timing", "free": "No convective nowcasting", "awx": "Hour-by-hour onset with live strike feed tied to your coordinates" },
    { "feature": "Storm-window planning", "free": "Daily-max products only", "awx": "Hourly convective timing for gauging, transfers, rail loading" },
    { "feature": "Expert consult on hard calls", "free": "None", "awx": "24/7 meteorologist support for stand-down vs continue decisions" }
  ],
  "closer": "Free data shows a quiet week. AccuWeather has flagged severe flash-flood potential on this corridor for days — early warning is the whole product."
 },
 "capabilities": [
  [ "Severe-potential flags at the fence line", "Days of lead on corridor convective risk." ],
  [ "Lightning-aware tank & rail scheduling", "Strike-feed alerting before cells arrive." ],
  [ "Threshold alerting per unit", "Your triggers, auto-escalation, nobody watching radar at 6 PM." ],
  [ "Hub-critical ops support", "Expert consult for market-critical infrastructure." ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"11:00Z","wx":"Partly sunny","tp":77.0,"pop":0,"gust":9.2},{"t":"12:00Z","wx":"Mostly sunny","tp":79.0,"pop":0,"gust":9.2},{"t":"13:00Z","wx":"Mostly sunny","tp":82.0,"pop":0,"gust":10.4},{"t":"14:00Z","wx":"Sunny","tp":84.0,"pop":0,"gust":10.4},{"t":"15:00Z","wx":"Sunny","tp":85.0,"pop":0,"gust":10.4},{"t":"16:00Z","wx":"Mostly sunny","tp":87.0,"pop":0,"gust":10.4},{"t":"17:00Z","wx":"Mostly sunny","tp":85.0,"pop":0,"gust":10.4},{"t":"18:00Z","wx":"Sunny","tp":83.0,"pop":0,"gust":9.2},{"t":"19:00Z","wx":"Sunny","tp":80.0,"pop":0,"gust":8.1},{"t":"20:00Z","wx":"Clear","tp":78.0,"pop":0,"gust":8.1},{"t":"21:00Z","wx":"Clear","tp":75.0,"pop":0,"gust":8.1},{"t":"22:00Z","wx":"Clear","tp":73.0,"pop":0,"gust":8.1}],"om":[{"t":"15:00Z","code":"Clear","tp":76.4,"pop":5},{"t":"16:00Z","code":"Cloudy","tp":78.4,"pop":3},{"t":"17:00Z","code":"Cloudy","tp":78.8,"pop":4},{"t":"18:00Z","code":"Partly cloudy","tp":82.5,"pop":5},{"t":"19:00Z","code":"Clear","tp":84.7,"pop":3},{"t":"20:00Z","code":"Clear","tp":87.3,"pop":1},{"t":"21:00Z","code":"Clear","tp":88.5,"pop":0},{"t":"22:00Z","code":"Clear","tp":88.7,"pop":0},{"t":"23:00Z","code":"Clear","tp":87.8,"pop":0},{"t":"00:00Z","code":"Clear","tp":84.9,"pop":0},{"t":"01:00Z","code":"Clear","tp":81.4,"pop":0},{"t":"02:00Z","code":"Clear","tp":79.5,"pop":0},{"t":"03:00Z","code":"Clear","tp":78.3,"pop":0},{"t":"04:00Z","code":"Clear","tp":77.5,"pop":0},{"t":"05:00Z","code":"Clear","tp":76.1,"pop":0}]};
const DATA_MAPBOX_TOKEN='p'+"k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw";
