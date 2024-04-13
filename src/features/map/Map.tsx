import { PUBLICTOKENMAP } from "../../constants/api.constants";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = PUBLICTOKENMAP;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});

function Map() {
  console.log(map);
  return <div id="map"></div>;
}

export default Map;
