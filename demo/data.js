const DEMO_DATA = {
  operator: "Venture Global",
  generated: "2026-09-05",
  assets: [
    {"name":"Calcasieu Pass LNG","lat":29.75,"lon":-93.32,"current":"Cloudy 83°F","headline":"Thunderstorms in the area late tonight through tomorrow afternoon","alerts":0,"detail":"Heavy rain and lightning risk during overnight loading windows"},
    {"name":"Plaquemines LNG","lat":29.15,"lon":-89.35,"current":"Sunny 87°F","headline":"Rain, some heavy, and thunderstorms to affect the area late tomorrow","alerts":0,"detail":"Surge-vulnerable corridor; monitor as system develops"}
  ],
  context: "TS Edouard (Sep 1) put 4 Gulf LNG terminals under storm surge warnings. Operators without hyperlocal nowcasting flew blind on evacuate/ride-out timing.",
  capabilities: ["Minute-by-minute lightning nowcast for loading ops","Storm surge and tropical cyclone tracking tied to asset coordinates","Marine wind & wave windows for berthing decisions","Alerting thresholds customized per terminal"]
};
const DATA_MAPBOX_TOKEN='p'+'k.eyJ1IjoibHlyYWxhaSIsImEiOiJjbXI1YmlibXYwbGpnMzJvc2IzYnkyNHJqIn0.GvHNgoPjz_v6-oS5rgquSw';
