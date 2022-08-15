
import { Marker} from "react-map-gl";
import {GeolocateControl, Popup} from "react-map-gl";
import { useState, useRef, useCallback, useEffect} from 'react';


import Map from "react-map-gl";
import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder';

import "mapbox-gl/dist/mapbox-gl.css";

const PointMarker = ({longitude, latitude, name, addr}) => {
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <>
        <Marker 
            longitude={longitude} 
            latitude={latitude} 
            scale={0.7} 
        > 
        </Marker>
        {<Popup
            longitude={longitude}
            latitude={latitude}
            onClose={() => setPopupInfo(null)}
            closeOnClick={false}
        >
            {name}
        </Popup>}
        </>
    )
}

export default PointMarker

/*             onClick={() => alert(`${name} \nAddress: ${addr}`)}
*/