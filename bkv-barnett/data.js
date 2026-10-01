const DEMO_DATA = {
 "operator": "BKV Barnett (BKV Corporation)",
 "generated": "2026-10-01",
 "topline": "RIGHT NOW in the Barnett Shale (Fort Worth basin): AccuWeather shows thunderstorms with 78-85% probability and flash-flood-level rain rates through mid-afternoon, a second storm window late afternoon, and a third tonight \u2014 on top of an active Flash Flood Warning for Tarrant/Dallas/Denton counties. The free feed carries a fraction of the storm signal and no rain-rate detail at all. Same sky, two very different briefings for a gas field whose crews, flowback tanks, and compressor sites are spread across the warning polygon.",
 "risk_level": "HIGH",
 "assets": [
  {
   "name": "Barnett Shale wellhead & compression footprint",
   "lat": 32.93,
   "lon": -97.42,
   "current": "Thunderstorms, ~78\u00b0F",
   "risk": "HIGH",
   "risk_why": [
    "\u26c8 AccuWeather shows thunderstorm probability peaking 85% around 12-1 PM, with a second pulse ~4 PM (64%) and a third tonight (75%) \u2014 three lightning-standdown windows in one day",
    "Active Flash Flood Warning (Tarrant/Dallas/Denton) + Flood Watch across 30+ North Texas counties; heavy rain training over the same bands",
    "Our lightning feed counts 10-45 strikes near Barnett operating assets in the last hour \u2014 the highest concentration on today's board",
    "Field logistics (water haul-off, rig moves, tank battery inspections) face muddy-lease and low-water-crossing delays through at least Friday"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "North Texas flash-flood day sits directly on the Barnett footprint",
  "facts": [
   "AccuWeather proprietary alerts flagged Dangerous Weather Imminent: Flash Flooding at multiple Barnett-area operators before the NWS warning polygon expanded",
   "Barnett production sites cluster in the same Tarrant/Denton/Johnson county corridor under the current warning",
   "Second and third storm windows today keep lightning crews on standby into the evening"
  ],
  "why_now": "Three storm windows in one operating day = repeated crew standdowns. Free feeds tell you it's raining; AccuWeather tells you when the lightning-free work windows are."
 }
};
const LIVE_COMPARISON = {"awx":[{"t":"11:00","wx":"Thunderstorms","tp":74.0,"pop":78,"rain":0.05,"cloud":100},{"t":"12:00","wx":"Thunderstorms","tp":75.0,"pop":85,"rain":0.12,"cloud":99},{"t":"13:00","wx":"Thunderstorms","tp":76.0,"pop":85,"rain":0.12,"cloud":100},{"t":"14:00","wx":"Cloudy","tp":77.0,"pop":49,"rain":0,"cloud":100},{"t":"15:00","wx":"Cloudy","tp":80.0,"pop":49,"rain":0,"cloud":100},{"t":"16:00","wx":"Thunderstorms","tp":78.0,"pop":64,"rain":0.16,"cloud":100},{"t":"17:00","wx":"Cloudy","tp":78.0,"pop":49,"rain":0,"cloud":96},{"t":"18:00","wx":"Thunderstorms","tp":77.0,"pop":59,"rain":0.16,"cloud":93},{"t":"19:00","wx":"Cloudy","tp":77.0,"pop":49,"rain":0,"cloud":90},{"t":"20:00","wx":"Mostly cloudy","tp":73.0,"pop":49,"rain":0,"cloud":88},{"t":"21:00","wx":"Mostly cloudy","tp":71.0,"pop":49,"rain":0,"cloud":89},{"t":"22:00","wx":"Rain","tp":71.0,"pop":64,"rain":0.1,"cloud":90}],"om":[{"t":"00:00","tp":80.2,"pop":34,"cloud":9},{"t":"01:00","tp":79.3,"pop":41,"cloud":38},{"t":"02:00","tp":78.9,"pop":36,"cloud":98},{"t":"03:00","tp":78.6,"pop":31,"cloud":8},{"t":"04:00","tp":78.3,"pop":40,"cloud":76},{"t":"05:00","tp":78.4,"pop":48,"cloud":15},{"t":"06:00","tp":78.8,"pop":45,"cloud":7},{"t":"07:00","tp":78.2,"pop":30,"cloud":58},{"t":"08:00","tp":78.5,"pop":33,"cloud":46},{"t":"09:00","tp":77.6,"pop":38,"cloud":100},{"t":"10:00","tp":78.0,"pop":39,"cloud":100},{"t":"11:00","tp":74.7,"pop":66,"cloud":100}],"loc":"Newark East (Barnett Shale)","key":"2225270"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
