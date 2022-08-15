
import { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";
import { useState } from 'react';

import "mapbox-gl/dist/mapbox-gl.css";

const PointMarker = ({longitude, latitude, name, addr}) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
        <Marker 
            longitude={longitude} 
            latitude={latitude} 
            scale={0.7} 
            onClick={e => {
                // If we let the click event propagate to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setShowPopup(true);
            }}
        > 
        </Marker>
        {showPopup && (
          <Popup
            anchor="top"
            longitude={longitude}
            latitude={latitude}
            onClose={() => setShowPopup(false)}
          >
            {name}
            {!name.includes("Bus Stop") && ' '}
            {!name.includes("Bus Stop") && addr}
        </Popup>
        )}
        </>
    )
}

export default PointMarker
