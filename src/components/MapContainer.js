import React, { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1IjoiZWR1YXJkb2xhbmRhIiwiYSI6ImNrMDh6MnF2cTAzZTUzbXViazU4NmVuMjQifQ.DylC8dgz76CmxcL8HshTRQ";
const MapContainer = ({ latitud, longitud }) => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 200,
    latitude: Number(latitud),
    longitude: parseFloat(longitud),
    zoom: 13,
    margin: 20
  });

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div style={{ margin: "0 auto" }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      ></MapGL>
    </div>
  );
};

export default MapContainer;
