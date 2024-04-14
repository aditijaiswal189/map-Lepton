import {
  GeolocateControl,
  Map,
  NavigationControl,
  useControl,
} from "react-map-gl";
import { GeoJsonLayer, IconLayer } from "deck.gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { AEROPLANE, PUBLICTOKENMAP } from "../../constants/api.constants";

import { locality } from "../../data/locality.ts";
import { airports } from "../../data/airport.ts";
import { useState } from "react";
import {
  Bars3Icon,
  BuildingOffice2Icon,
  EyeIcon,
  EyeSlashIcon,
  FolderOpenIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import DisplayInfo from "../../ui/DisplayInfo.tsx";

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const LOCALITY = locality;
const AIRPORTS = airports;
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
  const [gurgaonShow, setGurgaonShow] = useState<boolean>(false);
  const [airportShow, setAirportShow] = useState<boolean>(false);
  const [layerFolderOpen, setLayerFolderOpen] = useState<boolean>(false);
  const [isDisplayModal, setIsDisplayModal] = useState<object>({});

  function handleGurgaon() {
    setGurgaonShow(!gurgaonShow);
  }
  function handleAirport() {
    setAirportShow(!airportShow);
  }
  function handleLayerFolderOpen() {
    setLayerFolderOpen(!layerFolderOpen);
  }

  function handleCloseDisplayModal() {
    setIsDisplayModal({});
  }
  const onClick = (info) => {
    if (info.object) {
      // eslint-disable-next-line
      setIsDisplayModal(info.object);
    }
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
        <div className="absolute top-2 left-2 z-50 bg-primary bg-opacity-80 p-4 justify-between rounded-xl w-[50%]  md:w-[40%]  lg:w-[30%] xl:w-[20%] 2xl:w-[15%]">
          <div
            className={`py-2 flex justify-between ${
              layerFolderOpen
                ? "border-solid border-secondary border-b-[1px]"
                : ""
            }  `}
          >
            <div className="flex justify-between gap-2  ">
              <span>
                <FolderOpenIcon className="h-8 w-8" />
              </span>
              Layers
            </div>
            <button className="items-end" onClick={handleLayerFolderOpen}>
              {layerFolderOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
          {layerFolderOpen && (
            <>
              <button
                className="py-3 mt-5 w-[100%]
           hover:bg-primary2 focus:outline-none  font-medium rounded-lg text-lg pl-5 pr-2  dark:bg-primary2 dark:hover:bg-primary2 dark:focus:ring-primary2 dark:border-primary2 transition-all hover:rounded-xl"
                onClick={handleGurgaon}
              >
                <div className="flex justify-between w-[100%]  ">
                  <div className="flex gap-2">
                    -
                    <span>
                      <BuildingOffice2Icon className="h-8 w-8" />
                    </span>
                    Gurgaon
                  </div>
                  <div>
                    {gurgaonShow ? (
                      <EyeIcon className="h-8 w-8" />
                    ) : (
                      <EyeSlashIcon className="h-8 w-8" />
                    )}
                  </div>
                </div>
              </button>
              <button
                className="flex py-3  w-[100%]
           hover:bg-primary2 focus:outline-none  font-medium rounded-lg text-lg pl-5 pr-2  dark:bg-primary2 dark:hover:bg-primary2 dark:focus:ring-primary2 dark:border-primary2 transition-all"
                onClick={handleAirport}
              >
                <div className="flex justify-between  w-[100%]">
                  <div className="flex gap-2">
                    -
                    <span>
                      <PaperAirplaneIcon className="h-8 w-8" />
                    </span>
                    Airports
                  </div>
                </div>
                <div>
                  {airportShow ? (
                    <EyeIcon className="h-8 w-8" />
                  ) : (
                    <EyeSlashIcon className="h-8 w-8" />
                  )}
                </div>
              </button>
            </>
          )}
        </div>

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
