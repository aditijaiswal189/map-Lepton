import {
  GeolocateControl,
  Map,
  NavigationControl,
  useControl,
} from "react-map-gl";
import { GeoJsonLayer, ScatterplotLayer } from "deck.gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { PUBLICTOKENMAP } from "../../constants/api.constants";

import { locality } from "../../data/locality.js";

type PropertiesType = {
  name: string;
  color: string;
};
// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const LOCALITY = locality;

// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = PUBLICTOKENMAP;

const INITIAL_VIEW_STATE = {
  latitude: 28.4595,
  longitude: 77.0266,
  zoom: 10,
  bearing: 0,
  pitch: 30,
};

const MAP_STYLE = "mapbox://styles/mapbox/streets-v11";
function DeckGLOverlay(props) {
  const overlay = useControl(() => new DeckOverlay(props));
  overlay.setProps(props);
  return null;
}

function MyMap() {
  const onClick = (info) => {
    console.log(info, "yes bro");
    if (info.object) {
      // eslint-disable-next-line

      console.log("yes say");
      alert(
        `${info.object.properties.Locality} (${info.object.properties.city})`
      );
    }
  };

  const layers = [
    new GeoJsonLayer<PropertiesType>({
      id: "localities",
      data: LOCALITY,
      filled: true,
      getFillColor: [70, 0, 80, 80],
      getLineWidth: 20,
      getPointRadius: 4,
      getTextSize: 12,
      pickable: true,
      autoHighlight: true,
      onClick,
    }),
  ];

  return (
    <div className="h-screen">
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <DeckGLOverlay controller={true} layers={layers} /* interleaved*/ />
        <NavigationControl position="top-left" />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
}

export default MyMap;

// import { useState, useEffect } from "react";
// import Map, { GeolocateControl, Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { PUBLICTOKENMAP } from "../../constants/api.constants";

// function MyMap() {
//   const [viewport, setViewport] = useState({
//     latitude: 0,
//     longitude: 0,
//     zoom: 7,
//   });
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setViewport({
//         ...viewport,
//         latitude: pos.coords.latitude,
//         longitude: pos.coords.longitude,
//         zoom: 7,
//       });
//     });
//   }, [viewport]);
//   return (
//     <div>
//       {viewport.latitude && viewport.longitude && (
//         <div className="h-screen">
//           <Map
//             mapboxAccessToken={PUBLICTOKENMAP}
//             initialViewState={viewport}
//             mapStyle="mapbox://styles/mapbox/streets-v11"
//           >
//             <Marker
//               longitude={viewport.longitude}
//               latitude={viewport.latitude}
//             />
//             <GeolocateControl
//               positionOptions={{ enableHighAccuracy: true }}
//               trackUserLocation={true}
//             />
//           </Map>
//         </div>
//       )}
//     </div>
//   );
// }
// export default MyMap;
