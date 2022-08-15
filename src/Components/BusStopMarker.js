
import { Marker} from "react-map-gl";
import icon from '../Img/bus-stop-red.svg'

const BusStopMarker = ({longitude, latitude,  name}) => {
    return (
        <Marker 
            longitude={longitude} 
            latitude={latitude} 
            scale={0.7} 
            onClick={() => alert(name)}
        > 
          {<img id="img" style={{width:"3vw", height:"4vh"}} src={icon}></img>}
        </Marker>
    )
}

export default BusStopMarker