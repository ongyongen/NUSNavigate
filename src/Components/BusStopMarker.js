
import { Marker} from "react-map-gl"
import { Popup } from "react-map-gl"
import { useState } from 'react'
import icon from '../Img/bus-stop-red.svg'
import "mapbox-gl/dist/mapbox-gl.css";

const BusStopMarker = ({longitude, latitude,  name}) => {
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
                {<img id="img" style={{width:"3vw", height:"4vh"}} src={icon}></img>}
            </Marker>
            {showPopup && (
                <Popup
                    anchor="top"
                    longitude={longitude}
                    latitude={latitude}
                    onClose={() => setShowPopup(false)}
                >
                    {name}
                </Popup>
            )}
        </>
    )
}

export default BusStopMarker

