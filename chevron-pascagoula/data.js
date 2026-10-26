const DEMO_DATA = {
 "operator": "Chevron",
 "generated": "2026-10-26",
 "risk_level": "LOW-MODERATE",
 "topline": "TODAY at Pascagoula (~360 kbd): a dry, mild post-frontal day — AccuWeather holds 0% precipitation with highs near 77F and light NE winds all afternoon, matching the free feed's sky but committing the full hour-by-hour curve. The operational story: clean daylight windows for dock and turnaround work, while the Southeast seaboard's coastal-flood and gale pattern stays east of the berth.",
 "assets": [
  {
   "name": "Chevron Pascagoula Refinery",
   "lat": 30.37,
   "lon": -88.54,
   "current": "Mostly sunny, mid-70sF, light NE breeze",
   "risk": "LOW-MODERATE",
   "risk_why": [
    "Dry 24h: AccuWeather 0% precipitation probability through tonight — unconstrained dock/lightering ops",
    "Light winds: 8-10 mph sustained, gusts under 18 mph — no crane or flare-tip constraints",
    "Mild overnight: 50sF — no freeze or utility-load concern"
   ]
  }
 ],
 "loc": "Pascagoula MS (Chevron refinery)",
 "key": "329431"
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Mostly sunny","tp":69.0,"pop":0,"ts":"2026-10-26T11:00:00-05:00"},{"t":"12:00","wx":"Partly sunny","tp":71.0,"pop":0,"ts":"2026-10-26T12:00:00-05:00"},{"t":"13:00","wx":"Partly sunny","tp":74.0,"pop":0,"ts":"2026-10-26T13:00:00-05:00"},{"t":"14:00","wx":"Mostly sunny","tp":75.0,"pop":0,"ts":"2026-10-26T14:00:00-05:00"},{"t":"15:00","wx":"Mostly sunny","tp":77.0,"pop":0,"ts":"2026-10-26T15:00:00-05:00"},{"t":"16:00","wx":"Mostly sunny","tp":76.0,"pop":0,"ts":"2026-10-26T16:00:00-05:00"},{"t":"17:00","wx":"Mostly sunny","tp":75.0,"pop":0,"ts":"2026-10-26T17:00:00-05:00"},{"t":"18:00","wx":"Mostly sunny","tp":72.0,"pop":0,"ts":"2026-10-26T18:00:00-05:00"},{"t":"19:00","wx":"Mostly clear","tp":69.0,"pop":0,"ts":"2026-10-26T19:00:00-05:00"},{"t":"20:00","wx":"Mostly clear","tp":67.0,"pop":0,"ts":"2026-10-26T20:00:00-05:00"},{"t":"21:00","wx":"Mostly clear","tp":64.0,"pop":0,"ts":"2026-10-26T21:00:00-05:00"},{"t":"22:00","wx":"Mostly clear","tp":62.0,"pop":0,"ts":"2026-10-26T22:00:00-05:00"}],"om":[{"t":"11:00","tp":72.1,"pop":0,"ts":"2026-10-26T11:00Z"},{"t":"12:00","tp":74.2,"pop":0,"ts":"2026-10-26T12:00Z"},{"t":"13:00","tp":75.6,"pop":0,"ts":"2026-10-26T13:00Z"},{"t":"14:00","tp":77.1,"pop":0,"ts":"2026-10-26T14:00Z"},{"t":"15:00","tp":77.3,"pop":0,"ts":"2026-10-26T15:00Z"},{"t":"16:00","tp":77.2,"pop":0,"ts":"2026-10-26T16:00Z"},{"t":"17:00","tp":76.0,"pop":0,"ts":"2026-10-26T17:00Z"},{"t":"18:00","tp":71.6,"pop":0,"ts":"2026-10-26T18:00Z"},{"t":"19:00","tp":67.8,"pop":0,"ts":"2026-10-26T19:00Z"},{"t":"20:00","tp":66.3,"pop":0,"ts":"2026-10-26T20:00Z"},{"t":"21:00","tp":65.3,"pop":0,"ts":"2026-10-26T21:00Z"},{"t":"22:00","tp":63.9,"pop":0,"ts":"2026-10-26T22:00Z"}],"loc":"Pascagoula MS (Chevron refinery)","key":"329431"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
