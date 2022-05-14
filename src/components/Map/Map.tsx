import { useEffect, useRef, useState } from "react";
import { REACT_APP_MAPBOX_TOKEN } from "./token";

var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken = REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [37.978802, 56.252147],
        zoom: 14
      });
      setMap(map);
    }
  }, [ref, map]);
  return (
    <div
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      ref={ref}
    />
  );
};

export default Map;
