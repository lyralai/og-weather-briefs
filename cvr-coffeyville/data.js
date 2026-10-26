const DEMO_DATA = {
 "operator": "CVR Energy",
 "generated": "2026-10-26",
 "risk_level": "LOW",
 "topline": "TODAY at Coffeyville (~115 kbd): sunny and dry — AccuWeather commits 0% precipitation through tonight with a warm-up from 64F to 77F and modest southerly gusts, while the free feed answers with the same sky but no committed hour-by-hour window. Rail and truck racks run unconstrained; late-week gusts near 25 mph are the only watch item.",
 "assets": [
  {
   "name": "Coffeyville Refinery",
   "lat": 37.04,
   "lon": -95.61,
   "current": "Partly sunny, low-to-mid 70sF",
   "risk": "LOW",
   "risk_why": [
    "Dry 24h: AccuWeather 0% precipitation through tonight — unconstrained truck/rail loading",
    "Breezy afternoon: gusts to ~17 mph — well below operating limits",
    "Overnight 50sF: no freeze concern for utility or water systems"
   ]
  }
 ],
 "loc": "Coffeyville KS (CVR refinery)",
 "key": "333256"
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Partly sunny","tp":64.0,"pop":0,"ts":"2026-10-26T11:00:00-05:00"},{"t":"12:00","wx":"Partly sunny","tp":69.0,"pop":0,"ts":"2026-10-26T12:00:00-05:00"},{"t":"13:00","wx":"Partly sunny","tp":74.0,"pop":0,"ts":"2026-10-26T13:00:00-05:00"},{"t":"14:00","wx":"Partly sunny","tp":76.0,"pop":0,"ts":"2026-10-26T14:00:00-05:00"},{"t":"15:00","wx":"Partly sunny","tp":77.0,"pop":0,"ts":"2026-10-26T15:00:00-05:00"},{"t":"16:00","wx":"Partly sunny","tp":76.0,"pop":0,"ts":"2026-10-26T16:00:00-05:00"},{"t":"17:00","wx":"Partly sunny","tp":74.0,"pop":0,"ts":"2026-10-26T17:00:00-05:00"},{"t":"18:00","wx":"Partly sunny","tp":71.0,"pop":0,"ts":"2026-10-26T18:00:00-05:00"},{"t":"19:00","wx":"Partly cloudy","tp":67.0,"pop":0,"ts":"2026-10-26T19:00:00-05:00"},{"t":"20:00","wx":"Mostly clear","tp":64.0,"pop":0,"ts":"2026-10-26T20:00:00-05:00"},{"t":"21:00","wx":"Mostly clear","tp":61.0,"pop":0,"ts":"2026-10-26T21:00:00-05:00"},{"t":"22:00","wx":"Mostly clear","tp":58.0,"pop":0,"ts":"2026-10-26T22:00:00-05:00"}],"om":[{"t":"11:00","tp":64.7,"pop":0,"ts":"2026-10-26T11:00Z"},{"t":"12:00","tp":68.0,"pop":0,"ts":"2026-10-26T12:00Z"},{"t":"13:00","tp":70.8,"pop":0,"ts":"2026-10-26T13:00Z"},{"t":"14:00","tp":72.6,"pop":0,"ts":"2026-10-26T14:00Z"},{"t":"15:00","tp":73.2,"pop":0,"ts":"2026-10-26T15:00Z"},{"t":"16:00","tp":71.9,"pop":0,"ts":"2026-10-26T16:00Z"},{"t":"17:00","tp":70.6,"pop":0,"ts":"2026-10-26T17:00Z"},{"t":"18:00","tp":67.5,"pop":0,"ts":"2026-10-26T18:00Z"},{"t":"19:00","tp":64.3,"pop":0,"ts":"2026-10-26T19:00Z"},{"t":"20:00","tp":62.0,"pop":0,"ts":"2026-10-26T20:00Z"},{"t":"21:00","tp":59.9,"pop":0,"ts":"2026-10-26T21:00Z"},{"t":"22:00","tp":58.6,"pop":1,"ts":"2026-10-26T22:00Z"}],"loc":"Coffeyville KS (CVR refinery)","key":"333256"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibTV0bGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
