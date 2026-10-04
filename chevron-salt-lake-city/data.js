const DEMO_DATA = {
 "operator": "Chevron (Salt Lake City Refinery)",
 "generated": "2026-10-04",
 "topline": "RIGHT NOW at Salt Lake City: crisp October high pressure \u2014 mostly sunny climbing to 88\u00b0F this afternoon, zero storm probability for 12 hours, free feeds agree. The SLC exposure isn't today's weather; it's the Wasatch inversion season that starts about now. First strong ridge + snowpack nights flip Salt Lake Valley into PM2.5 exceedances that drive refinery flare monitoring, permitting optics and worker exposure limits. Today is the calm before that window opens.",
 "risk_level": "LOW (today) / INVERSION WATCH (season starts)",
 "assets": [
  {
   "name": "Salt Lake City Refinery",
   "lat": 40.77,
   "lon": -111.97,
   "current": "Mostly sunny, 58\u00b0F rising to 88\u00b0F this afternoon",
   "risk": "LOW",
   "risk_why": [
    "Clear and dry through 21:00 local \u2014 no operational weather constraint on truck racks or rail today",
    "Temperature swing 54\u00b0F\u219288\u00b0F (34\u00b0F spread) \u2014 watch tank-breathing and vapor-pressure handling on the product side",
    "October = start of Wasatch inversion season; first multi-day ridge will trap valley PM2.5 against refinery emissions visibility",
    "No tropical or winter-storm threat to northern Utah this week"
   ]
  }
 ],
 "storm_track": [],
 "storm_label": "",
 "near_miss": {
  "headline": "Free feeds say 'sunny all week' \u2014 inversions don't show up as weather icons",
  "facts": [
   "AccuWeather site-level hourly + air-quality correlation flags the first inversion setup days ahead: ridge, light winds, valley snow cover",
   "A free app's 'sunny' icon is technically true during an inversion \u2014 the worst air-quality weeks of the SLC refinery's year look like perfect weather",
   "AccuWeather's hourly wind + mixing-height guidance vs. a city icon: that gap is the whole product for a valley-floor refinery"
  ],
  "why_now": "Inversion season runs October\u2013February; the first exceedance event of the year is typically mid-October."
 }
};
const LIVE_COMPARISON = {"awx": [{"t": "10:00", "wx": "Partly sunny", "tp": 66.0, "pop": 0, "rain": 0, "cloud": 30}, {"t": "11:00", "wx": "Mostly sunny", "tp": 71.0, "pop": 0, "rain": 0, "cloud": 20}, {"t": "12:00", "wx": "Mostly sunny", "tp": 76.0, "pop": 0, "rain": 0, "cloud": 15}, {"t": "13:00", "wx": "Mostly sunny", "tp": 82.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "14:00", "wx": "Mostly sunny", "tp": 84.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "15:00", "wx": "Mostly sunny", "tp": 85.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "16:00", "wx": "Mostly sunny", "tp": 88.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "17:00", "wx": "Mostly sunny", "tp": 85.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "18:00", "wx": "Mostly sunny", "tp": 84.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "19:00", "wx": "Mostly sunny", "tp": 81.0, "pop": 0, "rain": 0, "cloud": 10}, {"t": "20:00", "wx": "Clear", "tp": 77.0, "pop": 0, "rain": 0, "cloud": 5}, {"t": "21:00", "wx": "Clear", "tp": 74.0, "pop": 0, "rain": 0, "cloud": 5}], "om": [{"t": "10:00", "tp": 68.3, "pop": 0, "cloud": 0}, {"t": "11:00", "tp": 75.5, "pop": 0, "cloud": 0}, {"t": "12:00", "tp": 81.6, "pop": 0, "cloud": 0}, {"t": "13:00", "tp": 84.7, "pop": 0, "cloud": 0}, {"t": "14:00", "tp": 86.4, "pop": 0, "cloud": 0}, {"t": "15:00", "tp": 86.1, "pop": 0, "cloud": 0}, {"t": "16:00", "tp": 86.6, "pop": 0, "cloud": 0}, {"t": "17:00", "tp": 85.9, "pop": 0, "cloud": 0}, {"t": "18:00", "tp": 84.1, "pop": 0, "cloud": 0}, {"t": "19:00", "tp": 77.7, "pop": 0, "cloud": 0}, {"t": "20:00", "tp": 72.2, "pop": 0, "cloud": 0}, {"t": "21:00", "tp": 69.1, "pop": 0, "cloud": 0}], "loc": "Salt Lake City UT", "key": "331216"};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
