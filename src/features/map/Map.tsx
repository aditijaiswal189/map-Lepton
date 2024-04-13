import {
  GeolocateControl,
  Map,
  NavigationControl,
  useControl,
} from "react-map-gl";
import { GeoJsonLayer, IconLayer } from "deck.gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { PUBLICTOKENMAP } from "../../constants/api.constants";

import { locality } from "../../data/locality.ts";
import { airports } from "../../data/airport.ts";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type PropertiesType = {
  name: string;
  color: string;
};

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
  const [layerShow, setLayerShow] = useState<boolean>(false);
  function handleShowLayer() {
    setLayerShow(!layerShow);
  }
  const onClick = (info) => {
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
      getFillColor: [170, 0, 80, 80],
      getLineWidth: 20,
      getPointRadius: 4,
      getTextSize: 12,
      pickable: true,
      autoHighlight: true,
      onClick,
    }),
    new IconLayer({
      id: "IconLayer",
      data: AIRPORTS.features,

      getColor: () => [220, 180, 0],
      getIcon: () => ({
        url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAZlBMVEX///8BAQEAAAD8/Pz5+flYWFjz8/Pi4uLa2trLy8vv7+/e3t6mpqa4uLj29vbOzs41NTWIiIh/f38bGxtHR0eZmZlvb2+tra1mZmbp6elOTk4MDAySkpJAQEAlJSXCwsIsLCx3d3eFUOyfAAAEzUlEQVR4nO2a2ZaqMBBFIZFRUFAElEH9/5+8mYAkYkOvS0I/1PbFhQzHk6RSleA4AAAAAAAAAAAAAAAAAAAAwJ/lcNhbwRfCqn2XebC3jE/ipOgRpcZ7S9E45kyX67qou+8tRiUllrnsg1Dxh7Rh51ByyxjI+0ttenqjwTXqW2ngEX5yewa/DgHY8T2kaEu3l8b+fVYm4U865g6+x+ZkTYr87aU9kOBaPoPTyquIazUzbfLN21yaX7Lb0/9N5dW3aM6k84epdBiotm3fpPXUZ1inQU1fp5p9965pvKN0ALOO4Lqyb494c21BixQDePN67XN6VNDRQy9ltGiukcuqzaURwlr0m8ECJrDJvOTO5MQZYkeS6ZLDRbg2XoQeJqSR7pU+kGaD8C/L04C45jJxl+ka3TUXZcbmBD+RApXsBpHXiX41NRrO9TMROs/HmU2I80Z3bnBPfBltw+WHx71JaYToIQd5d+p84sjlLE7Mx742Du7IrDSHdztX1yY1L/Kq0KfDQPu5D41LI93u9jkmtNHhfQ6D63n5zv8L/e/xu1FnIldrZ6T9TKQdLbjGibwfrJsxs7fgmoDki2nHZ9hZ39SvLmoCa64x/LYR8/+ia68fEitD3KWs8btv9l3j0G634ByZM47LNzKBXwnnvvqGrru4xji11x96HdqzHCWWhB5CMx2PT1Sv/VzjRMW3NjWYFa0lrtD8oDBS8v1aXf5Cc76hdm9llHx2QKDH9vXor0kbraIaKrL919uq+RhM5FVOWKVri20TPL/lmy6qzz1J6HaaGwjVbBkhRiqvxfZa6I1ma4gpGlOJ0T7S0u+uTfYly/cxQNTMJufq132G67Nhz1YCx6e2XaaHSE1DaJGVfazQ7ChNyd9K56bmdHtJI7FLs+hyck7qwZ2kxb2+iPWmh1PNN/ulDMl51SqVqMhZInmo1cN75CIXOcAiaRWJh5WxD5b2U9+nvs6cjz+9laH7sj6bBi8luBLXJnvuyuqr6QnrHB1pojM9HhfyAhtRcpNPT5TNmIt+t00hz3rVrfz/b1LMpUJapVP5ndTg6GpS2mXYlfGqI122x3SqQl9dc2huIje4uWoLi92FYVchjR3cqRNVog1F7HjyCQazkHPBtQ36rgXfTRiM6Z8z11wl52pz2pxD2vMKdLJPcq2bjRFS4YU6oynSvb3qK6XD+ul7fo/qII/UGWO3JBT7x3K4JU/tv2xRYan2Mj9t4Sj72JdBxfeYz3acxZmF+WmrUvNG1OihQyGSXiHYfm/ygyBXNt8Xlr+9MYWyk8MF9dRSS/E+GAI0MhpFJqpftFQ7jobCxppNLO+2LcV7Pxv2LpunhQXMaFhApW4stlQ1GvfjqNkIUkX1ZSl60eJK88EbArZnYUXkfElCJ7hy35bjfdQM274WogjvNjex8rfUUtgpRVZgetqaOGXcuGKhpbBzH4x721HmTDXockvdRI7QWVDFwA6vQVfE+7jgiZWNnWdByPO5xdfZMLGYD2qLS3A56+TZingvptWLvRI6YBnTmpaicYR83hbL+2RlS2FucWbjJYyRnopb04tiZHUoUJ60IjysMSNBmeEXfnRwuXa7Kq7tukYI174GiH37W7x/9bV6AAAAAAAAAAAAAAAAAAAAA/wDPxIsREH/LlAAAAAASUVORK5CYII=",
        width: 128,
        height: 128,
      }),
      getPosition: (d) => d.geometry.coordinates,
      getSize: 40,
      // iconAtlas:
      // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAZlBMVEX///8BAQEAAAD8/Pz5+flYWFjz8/Pi4uLa2trLy8vv7+/e3t6mpqa4uLj29vbOzs41NTWIiIh/f38bGxtHR0eZmZlvb2+tra1mZmbp6elOTk4MDAySkpJAQEAlJSXCwsIsLCx3d3eFUOyfAAAEzUlEQVR4nO2a2ZaqMBBFIZFRUFAElEH9/5+8mYAkYkOvS0I/1PbFhQzHk6RSleA4AAAAAAAAAAAAAAAAAAAAwJ/lcNhbwRfCqn2XebC3jE/ipOgRpcZ7S9E45kyX67qou+8tRiUllrnsg1Dxh7Rh51ByyxjI+0ttenqjwTXqW2ngEX5yewa/DgHY8T2kaEu3l8b+fVYm4U865g6+x+ZkTYr87aU9kOBaPoPTyquIazUzbfLN21yaX7Lb0/9N5dW3aM6k84epdBiotm3fpPXUZ1inQU1fp5p9965pvKN0ALOO4Lqyb494c21BixQDePN67XN6VNDRQy9ltGiukcuqzaURwlr0m8ECJrDJvOTO5MQZYkeS6ZLDRbg2XoQeJqSR7pU+kGaD8C/L04C45jJxl+ka3TUXZcbmBD+RApXsBpHXiX41NRrO9TMROs/HmU2I80Z3bnBPfBltw+WHx71JaYToIQd5d+p84sjlLE7Mx742Du7IrDSHdztX1yY1L/Kq0KfDQPu5D41LI93u9jkmtNHhfQ6D63n5zv8L/e/xu1FnIldrZ6T9TKQdLbjGibwfrJsxs7fgmoDki2nHZ9hZ39SvLmoCa64x/LYR8/+ia68fEitD3KWs8btv9l3j0G634ByZM47LNzKBXwnnvvqGrru4xji11x96HdqzHCWWhB5CMx2PT1Sv/VzjRMW3NjWYFa0lrtD8oDBS8v1aXf5Cc76hdm9llHx2QKDH9vXor0kbraIaKrL919uq+RhM5FVOWKVri20TPL/lmy6qzz1J6HaaGwjVbBkhRiqvxfZa6I1ma4gpGlOJ0T7S0u+uTfYly/cxQNTMJufq132G67Nhz1YCx6e2XaaHSE1DaJGVfazQ7ChNyd9K56bmdHtJI7FLs+hyck7qwZ2kxb2+iPWmh1PNN/ulDMl51SqVqMhZInmo1cN75CIXOcAiaRWJh5WxD5b2U9+nvs6cjz+9laH7sj6bBi8luBLXJnvuyuqr6QnrHB1pojM9HhfyAhtRcpNPT5TNmIt+t00hz3rVrfz/b1LMpUJapVP5ndTg6GpS2mXYlfGqI122x3SqQl9dc2huIje4uWoLi92FYVchjR3cqRNVog1F7HjyCQazkHPBtQ36rgXfTRiM6Z8z11wl52pz2pxD2vMKdLJPcq2bjRFS4YU6oynSvb3qK6XD+ul7fo/qII/UGWO3JBT7x3K4JU/tv2xRYan2Mj9t4Sj72JdBxfeYz3acxZmF+WmrUvNG1OihQyGSXiHYfm/ygyBXNt8Xlr+9MYWyk8MF9dRSS/E+GAI0MhpFJqpftFQ7jobCxppNLO+2LcV7Pxv2LpunhQXMaFhApW4stlQ1GvfjqNkIUkX1ZSl60eJK88EbArZnYUXkfElCJ7hy35bjfdQM274WogjvNjex8rfUUtgpRVZgetqaOGXcuGKhpbBzH4x721HmTDXockvdRI7QWVDFwA6vQVfE+7jgiZWNnWdByPO5xdfZMLGYD2qLS3A56+TZingvptWLvRI6YBnTmpaicYR83hbL+2RlS2FucWbjJYyRnopb04tiZHUoUJ60IjysMSNBmeEXfnRwuXa7Kq7tukYI174GiH37W7x/9bV6AAAAAAAAAAAAAAAAAAAAA/wDPxIsREH/LlAAAAAASUVORK5CYII=",
      // iconMapping:
      // "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.json",
      pickable: true,
    }),
  ];

  return (
    <div className="h-screen relative">
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <button
          className="absolute top-14 left-14  bg-primary bg-opacity-40 p-4 flex justify-between gap-10"
          onClick={handleShowLayer}
        >
          <div>Show Layer</div>
          {layerShow ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
        {layerShow && (
          <DeckGLOverlay controller={true} layers={layers} /* interleaved*/ />
        )}
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
