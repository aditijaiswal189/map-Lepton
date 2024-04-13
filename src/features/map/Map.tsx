import { useState, useEffect } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PUBLICTOKENMAP } from "../../constants/api.constants";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 7,
      });
    });
  }, []);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div className="h-screen">
          <Map
            mapboxAccessToken={PUBLICTOKENMAP}
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;
