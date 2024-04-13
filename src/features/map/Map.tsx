import { useState, useEffect } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PUBLICTOKENMAP } from "../../constants/api.constants";
import LeftDisplay from "./LeftDisplay";

function MyMap() {
  const [viewport, setViewport] = useState<{
    latitude: number;
    longitude: number;
    zoom: number;
  }>({ latitude: 0, longitude: 0, zoom: 7 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 7,
      });
    });
  }, [viewport]);

  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div className="h-screen relative">
          <Map
            mapboxAccessToken={PUBLICTOKENMAP}
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <LeftDisplay />
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
