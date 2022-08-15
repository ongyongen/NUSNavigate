
import Map, {GeolocateControl, Marker, Popup } from "react-map-gl";
import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder';
import { useState, useRef, useCallback} from 'react';
import "mapbox-gl/dist/mapbox-gl.css";

import PointMarker from './PointMarker.js'
import BusStopMarker from './BusStopMarker.js'

import './map.css'

let data = require('../data.json');

const BaseMap = () => {
  const [popupInfo, setPopupInfo] = useState(null);


  var bus_stop = data.filter((x) => x.name.includes("Bus Stop"))
  var others = data.filter((x) => x.name.includes("Bus Stop") == false)
  var names = data.map((x) => x["name"])

  const [viewState, setViewState] = useState({
    longitude: 103.77655039734071,
    latitude: 1.2955175316779877, 
    zoom: 15
  });


  const [input, setInput] = useState("")
  const [showSelection, setShowSelection] = useState(true)
  const [point, setPoint] = useState([])

  const recordUserInput = (e) => {
    setInput(e.target.value)
    setShowSelection(true)
  }

  const recordUserSelectedLocation = (e) => {
    let pointIndex = names.indexOf(e.target.value)
    let point = [data[pointIndex]]
    setPoint(point)
    setInput(e.target.value)
    setShowSelection(false)
  }


  return (
    <div id="map-page">
      <h1>NUS Map</h1>
      <input id="map-search-input" onChange={recordUserInput} value={input}></input>
      <div id="search-results">
        {names.map((name) => {
          if (showSelection && input != "" && name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) == true) {
            return <button id="search-results-item" onClick={recordUserSelectedLocation} value={name}>{name}</button>
          }
        })}
      </div>
      <Map
        mapboxAccessToken={'pk.eyJ1Ijoib25neW9uZ2VuMjAwMCIsImEiOiJjbDZseXN2ejQwZ25pM2JxcTNwbGY2Mm01In0.6_e_3aUVc5M9RUMI9S2sfw'}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{width:"95vw", height:"70vh"}}
      >
      {bus_stop.map((point) => (
        <BusStopMarker
          longitude={point["lon"]}
          latitude={point["lat"]}
          name={point["name"]}
        />
      ))}
      {point.map((point) => (
        <Marker
            longitude={point["lon"]}
            latitude={point["lat"]}
            name={point["name"]}
            addr={point["address"]}
            onClick={e => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setPopupInfo(point);
            }}
        />
      ))}
       {popupInfo && (
          <Popup
            anchor="top"
            longitude={point[0]["lon"]}
            latitude={point[0]["lat"]}
            onClose={() => setPopupInfo(null)}
          >{point[0]["name"]}</Popup>
       )}
      </Map>
    </div>
  );
}

export default BaseMap;





   





