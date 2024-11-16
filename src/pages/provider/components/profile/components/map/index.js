import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function MapComponent({position,nome,iconUrl}){

    const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });

    return(
        <MapContainer 
                key={position} // Add key prop to force re-render when position changes
                style={{ height: '85vh', width: '100%' }} 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="© OpenStreetMap contributors"
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        {nome}
                    </Popup>
                </Marker>
            </MapContainer>
    )
}