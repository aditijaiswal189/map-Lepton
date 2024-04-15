import { GeolocateControl, Map, NavigationControl } from "react-map-gl";
import { GeoJsonLayer, IconLayer } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AEROPLANE, PUBLICTOKENMAP } from "../../constants/api.constants";
import { locality } from "../../data/locality.js";
import { airports } from "../../data/airport.js";
import { useState } from "react";
import DisplayInfo from "../../ui/DisplayInfo.jsx";
import {
  INITIAL_VIEW_STATE,
  MAP_STYLE,
} from "../../constants/map.constants.js";
import DeckGLOverlay from "./DeckGLOverlay.jsx";
import LayerButton from "./LayerButton.jsx";
import LayerHeader from "./LayerHeader.jsx";

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const LOCALITY = locality;
const AIRPORTS = airports;
// Set your Mapbox token here or via environment variable
const MAPBOX_TOKEN = PUBLICTOKENMAP;

function MyMap() {
  const [gurgaonShow, setGurgaonShow] = useState(false);
  const [airportShow, setAirportShow] = useState(false);
  const [layerFolderOpen, setLayerFolderOpen] = useState(false);
  const [isDisplayModal, setIsDisplayModal] = useState({});

  const handleGurgaon = () => {
    setGurgaonShow(!gurgaonShow);
  };
  const handleAirport = () => {
    setAirportShow(!airportShow);
  };
  const handleLayerFolderOpen = () => {
    setLayerFolderOpen(!layerFolderOpen);
  };
  const handleCloseDisplayModal = () => {
    setIsDisplayModal({});
  };

  const onClick = (info) => {
    if (info.object) setIsDisplayModal(info.object);
  };
  const layer1 = new GeoJsonLayer({
    id: "localities",
    data: LOCALITY,
    filled: true,
    getFillColor: [170, 0, 80, 80],
    getLineWidth: 20,
    getPointRadius: 4,
    getTextSize: 12,
    pickable: true,
    autoHighlight: true,
    onClick,
  });
  const layer2 = new IconLayer({
    id: "IconLayer",
    data: AIRPORTS.features,
    getColor: () => [220, 180, 0],
    getIcon: () => ({
      url: AEROPLANE,
      width: 128,
      height: 128,
    }),
    getPosition: (d) => d.geometry.coordinates,
    getSize: 40,
    pickable: true,
    onClick,
  });
  return (
    <div className="h-screen relative">
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <LayerHeader
          handleLayerFolderOpen={handleLayerFolderOpen}
          layerFolderOpen={layerFolderOpen}
        >
          {layerFolderOpen && (
            <LayerButton
              gurgaonShow={gurgaonShow}
              handleGurgaon={handleGurgaon}
              airportShow={airportShow}
              handleAirport={handleAirport}
            />
          )}
        </LayerHeader>
        {gurgaonShow && <DeckGLOverlay controller={true} layers={layer1} />}
        {airportShow && <DeckGLOverlay controller={true} layers={layer2} />}
        <NavigationControl position="top-right" />
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
      {Object.keys(isDisplayModal).length > 0 && (
        <DisplayInfo
          handleCloseDisplayModal={handleCloseDisplayModal}
          info={isDisplayModal}
        />
      )}
    </div>
  );
}
export default MyMap;
