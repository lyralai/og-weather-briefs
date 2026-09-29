const DEMO_DATA = {
 "operator": "CVR Energy — Wynnewood Refinery",
 "generated": "2026-09-29",
 "topline": "RIGHT NOW at the Wynnewood refinery (~70 kbd, south-central OK): a stalled corridor keeps AccuWeather flash-flood flags pinned across the Kansas-Oklahoma belt for a fourth day — the same corridor that has flooded Midwest operators all month. NWS has a Flood Watch up, but it arrived after AccuWeather's severe-potential flag; and tonight the free feed shows a 1-2% dry evening while AccuWeather carries a building late-evening shower signal with gusts to 32 mph. For a refinery with a nitrogen plant next door under the same flags, the question isn't whether to watch weather — it's which feed gives the hour the cells arrive.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Wynnewood Refinery",
   "lat": 34.93,
   "lon": -97.15,
   "current": "Warm and mostly cloudy, upper-80s peak, breezy",
   "risk": "ELEVATED",
   "risk_why": [
    "AccuWeather severe-potential flash-flood flag live in the corridor for a 4th consecutive day — NWS Flood Watch arrived after the AWX flag",
    "Warm sector day: upper-80s heat peak this afternoon on top of repeated wet days — drainage and containment already stressed",
    "Free GFS-based feeds show a 1-2% dry evening — any late-day cell timing is invisible on the free data",
    "Adjacent CVR nitrogen/fertilizer operations sit under the same flags — a single corridor event hits both plants"
   ]
  },
  {
   "name": "Washita / railroad product corridor",
   "lat": 34.93,
   "lon": -97.0,
   "current": "Saturated ground from the month's repeated rain events",
   "risk": "MODERATE",
   "risk_why": [
    "Unit-train loading racks depend on hour-level storm timing on convective days",
    "Repeated flash-flood flags this month have already disrupted Midwest rail product moves — Wynnewood rack windows need the same hour-pinned guidance"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Why Wynnewood ops watch weather closely",
  "headline": "Oklahoma refinery weather: the stalled flood corridor and evening convection",
  "facts": [
    "Wynnewood sits on the southern end of the KS/OK corridor that has carried AccuWeather flash-flood flags nearly continuously since late September",
    "Lightning stand-downs on tank farms and loading racks are routine ops decisions — timing is everything",
    "September 2026 has already seen the corridor's flags precede NWS watches by hours at Coffeyville-class sites",
    "Late-September boundaries fire evening storms as the first cool fronts arrive — the operational question every night this week"
  ]
 },
 "next_72h": [
  { "when": "Tue Sep 29 (today)", "what": "Upper-80s peak, breezy; AccuWeather carries building late-evening shower signal with gusts to ~32 mph — free feed 1-2% dry", "impact": "Schedule rack and tank work before evening; secure loose scaffolding for the gust build" },
  { "when": "Wed Sep 30", "what": "Frontal passage brings cooler air, scattered showers, gusty NW winds", "impact": "Post-frontal gust check on crane lifts; verify drainage after overnight rain" },
  { "when": "Thu Oct 1", "what": "Cooler and drying", "impact": "Full ops window; clear deferred rack moves" }
 ],
 "comparison": {
  "intro": "Your team can pull free weather data (OpenMeteo, NOAA/GFS). Here is what each says about tonight at Wynnewood — same coordinates, same hour:",
  "rows": [
    { "feature": "Tonight's shower window", "free": "1-2% rain all evening — no signal", "awx": "Building shower signal late evening with hour-pinned probability" },
    { "feature": "Flash-flood corridor status", "free": "County watch text, no lead-time framing", "awx": "Severe-potential flag live days ahead of the NWS watch — hour-level context" },
    { "feature": "Lightning stand-down timing", "free": "No convective nowcasting", "awx": "Hour-by-hour onset with live strike feed tied to your coordinates" },
    { "feature": "Alert escalation", "free": "Generic county products", "awx": "Thresholds pinned to the refinery fence line" },
    { "feature": "Expert consult on hard calls", "free": "None", "awx": "24/7 meteorologist support for stand-down vs continue decisions" }
  ],
  "closer": "Free data says a dry evening. The corridor that has flooded operators all month says check the feed that shows the hour the cells arrive."
 },
 "capabilities": [
  [ "Hourly storm-window timing at the fence line", "Windows tied to the refinery, not a county average." ],
  [ "Lightning-aware tank & rack scheduling", "Strike-feed alerting before cells arrive." ],
  [ "Flash-flood corridor monitoring", "Severe-potential flags with lead time over standard watches." ],
  [ "Threshold alerting per unit", "Your triggers, auto-escalation, nobody watching radar at 9 PM." ]
 ]
};
LIVE_COMPARISON = {"awx":[{"t":"16:00Z","wx":"Partly sunny w/ a t-shower","tp":88.0,"pop":30,"gust":19.0},{"t":"17:00Z","wx":"Intermittent clouds","tp":90.0,"pop":25,"gust":18.0},{"t":"18:00Z","wx":"Mostly cloudy","tp":89.0,"pop":18,"gust":18.0},{"t":"19:00Z","wx":"Mostly cloudy","tp":86.0,"pop":15,"gust":17.0},{"t":"20:00Z","wx":"Mostly cloudy","tp":84.0,"pop":12,"gust":18.0},{"t":"21:00Z","wx":"Mostly cloudy","tp":82.0,"pop":14,"gust":20.0},{"t":"22:00Z","wx":"Mostly cloudy","tp":80.0,"pop":16,"gust":20.0},{"t":"23:00Z","wx":"Cloudy","tp":80.0,"pop":18,"gust":18.0},{"t":"00:00Z","wx":"Cloudy","tp":79.0,"pop":19,"gust":19.0},{"t":"01:00Z","wx":"Cloudy","tp":77.0,"pop":20,"gust":20.0},{"t":"02:00Z","wx":"Mostly cloudy","tp":77.0,"pop":22,"gust":21.0},{"t":"03:00Z","wx":"Mostly cloudy","tp":76.0,"pop":22,"gust":22.0}],"om":[{"t":"16:00Z","code":"Overcast","tp":91.0,"pop":2},{"t":"17:00Z","code":"Overcast","tp":90.0,"pop":2},{"t":"18:00Z","code":"Overcast","tp":89.0,"pop":2},{"t":"19:00Z","code":"Overcast","tp":86.0,"pop":2},{"t":"20:00Z","code":"Overcast","tp":84.0,"pop":2},{"t":"21:00Z","code":"Overcast","tp":82.0,"pop":1},{"t":"22:00Z","code":"Overcast","tp":80.0,"pop":1},{"t":"23:00Z","code":"Overcast","tp":80.0,"pop":1},{"t":"00:00Z","code":"Overcast","tp":79.0,"pop":1},{"t":"01:00Z","code":"Overcast","tp":77.0,"pop":1},{"t":"02:00Z","code":"Overcast","tp":77.0,"pop":2},{"t":"03:00Z","code":"Overcast","tp":76.0,"pop":3}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTVibGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
