
import { Marker} from "react-map-gl";

const PointMarker = ({longitude, latitude, name}) => {
    return (
    <Marker 
        longitude={longitude} 
        latitude={latitude} 
        scale={0.7} 
        onClick={() => alert(name)}
    > 
    </Marker>
    )
}

export default PointMarker