
import Map, {GeolocateControl, Marker,Popup} from "react-map-gl";
import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef, useCallback} from 'react';
import BaseMap from "./Components/BaseMap.js"

const App = () => {
  return (
    <div>
      <BaseMap/>
    </div>
  );
}

export default App;



