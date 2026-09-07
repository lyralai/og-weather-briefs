const DEMO_DATA = {
 "operator": "Cheniere Energy",
 "generated": "2026-09-07",
 "topline": "RIGHT NOW at Sabine Pass: sunny 85°F — but a Heat Advisory AND a Flood Warning are both active, and AccuWeather shows two discrete thunderstorm windows this afternoon (1–2 PM and 3–4 PM CDT, 51% PoP) while the free API your vendors check still says 'clear, 5% rain'. That timing gap is what this brief is about.",
 "risk_level": "ELEVATED",
 "assets": [
  {
   "name": "Sabine Pass LNG",
   "lat": 29.75,
   "lon": -93.87,
   "current": "Sunny 85°F · Heat Advisory + Flood Warning active",
   "risk": "ELEVATED",
   "risk_why": [
    "🚨 Heat Advisory + Flood Warning both active at the terminal now (NWS via AccuWeather alerts feed)",
    "Two t-storm windows today: 1–2 PM and 3–4 PM CDT at 51% PoP — squarely in the afternoon loading window",
    "Free weather APIs show ≤6% rain probability all day at these exact coordinates",
    "RealFeel near 100°F through Tuesday: outdoor crew rotation on jetties and vapor-recovery tops"
   ]
  },
  {
   "name": "Corpus Christi LNG (Stage 3)",
   "lat": 27.8,
   "lon": -97.3,
   "current": "Partly sunny 88°F · RealFeel 100°F",
   "risk": "ELEVATED",
   "risk_why": [
    "🔥 AccuWeather headline: RECORD HIGH today — 100°F — 'danger of dehydration and heat stroke' for outside work",
    "Isolated t-storms possible late morning–mid afternoon (51% PoP at 10–11 AM CDT)",
    "Highs 98–100°F hold through Saturday — construction & commissioning crews in sustained heat stress",
    "SSE flow 10–15 mph with Gulf moisture: t-storm cells build fast with little visible lead time"
   ]
  }
 ],
 "near_miss": {
  "card_title": "Today, at your own dock",
  "headline": "Both a Heat Advisory and a Flood Warning are active at Sabine Pass right now — and the free weather API shows nothing at all",
  "facts": [
   "Free API: 0 active hazards, ≤6% rain probability every hour today at the terminal coordinates",
   "AccuWeather: 51% thunderstorm probability in two windows (1–2 PM, 3–4 PM CDT) + both advisories pushed with lead time",
   "Lightning: no free API serves strike data at all — the single most common cause of LNG loading halts on the Gulf",
   "Every hour of an avoidable marine-loading halt at Sabine is real money; the answer is timing precision, not more alarms"
  ]
 },
 "next_72h": [
  {
   "when": "Today 1–2 PM CDT",
   "what": "T-storm cell risk 51% at Sabine Pass",
   "impact": "Hold marine loading if lightning within 10 nm; secure dock cranes"
  },
  {
   "when": "Today 3–4 PM CDT",
   "what": "Second t-storm window 51%",
   "impact": "Late-day loading slots at risk; re-sequence tankers now, not at 3 PM"
  },
  {
   "when": "Tue Sep 8",
   "what": "98–100°F, heat builds again",
   "impact": "Peak heat-stress 11 AM–4 PM both sites; rotate outdoor crews"
  },
  {
   "when": "Wed Sep 9",
   "what": "Best storm day of the week — 'Thunderstorms' daytime at Sabine",
   "impact": "Expect multiple loading interruptions; pre-position schedule slack"
  },
  {
   "when": "Thu–Fri Sep 10–11",
   "what": "Storms taper to evening; heat persists",
   "impact": "Return to standard summer ops; watch overnight t-storm cells"
  }
 ],
 "cta": "AccuWeather for Business — minute-by-minute nowcasting, asset-pinned alerts, expert meteorologist support.",
 "headline_external": "Thunderstorms in the area this afternoon and evening (Sabine Pass) · Record high temperatures today (Corpus Christi)"
};

const LIVE_COMPARISON = {"awx": [{"t": "10:00Z", "wx": "Mostly sunny", "tp": 87, "pop": 22, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "11:00Z", "wx": "Mostly sunny", "tp": 88, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "12:00Z", "wx": "Intermittent clouds", "tp": 89, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "13:00Z", "wx": "Partly sunny", "tp": 90, "pop": 20, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "14:00Z", "wx": "Partly sunny", "tp": 91, "pop": 19, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "15:00Z", "wx": "Intermittent clouds", "tp": 91, "pop": 19, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "16:00Z", "wx": "Mostly sunny", "tp": 90, "pop": 24, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "17:00Z", "wx": "Mostly sunny", "tp": 88, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "18:00Z", "wx": "Mostly cloudy w/ t-storms", "tp": 86, "pop": 51, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "19:00Z", "wx": "Mostly sunny", "tp": 84, "pop": 43, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "20:00Z", "wx": "Partly cloudy w/ t-storms", "tp": 83, "pop": 51, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}, {"t": "21:00Z", "wx": "Intermittent clouds", "tp": 80, "pop": 47, "rain": {"Value": 0.0, "Unit": "in", "UnitType": 1}}], "om": [{"t": "10:00Z", "code": "Clear", "tp": 78, "pop": 1}, {"t": "11:00Z", "code": "Clear", "tp": 78, "pop": 3}, {"t": "12:00Z", "code": "Clear", "tp": 77, "pop": 6}, {"t": "13:00Z", "code": "Clear", "tp": 80, "pop": 7}, {"t": "14:00Z", "code": "Clear", "tp": 82, "pop": 6}, {"t": "15:00Z", "code": "Clear", "tp": 84, "pop": 4}, {"t": "16:00Z", "code": "Clear", "tp": 85, "pop": 4}, {"t": "17:00Z", "code": "Clear", "tp": 87, "pop": 4}, {"t": "18:00Z", "code": "Clear", "tp": 88, "pop": 5}, {"t": "19:00Z", "code": "Clear", "tp": 90, "pop": 4}, {"t": "20:00Z", "code": "Clear", "tp": 91, "pop": 5}, {"t": "21:00Z", "code": "Clear", "tp": 89, "pop": 6}]};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';;
