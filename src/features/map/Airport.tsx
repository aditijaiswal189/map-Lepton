import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { PUBLICTOKENMAP } from "../../constants/api.constants";

// Map component
const Airport = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = PUBLICTOKENMAP;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.0266, 28.4595],
      zoom: 5,
    });

    map.on("load", () => {
      // Add GeoJSON source
      map.addSource("airports", {
        type: "geojson",
        data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson",
      });

      // Add layer
      map.addLayer({
        id: "earthquake-layer",
        type: "circle",
        source: "airports",
        paint: {
          "circle-radius": 6,
          "circle-color": "#a23",
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "90vh" }} />;
};

export default Airport;
