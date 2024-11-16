import React, { useRef, useEffect } from 'react';
import { Marker,Popup } from 'react-leaflet';
import L from 'leaflet';

export default function MarkerComponent({position, open=true, text, iconUrl}){

    const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });

    const markerRef = useRef();

    useEffect(() => {
        if(open){
            if (markerRef.current) {
                markerRef.current.openPopup();
              }
        }
      }, [open]);

    return(
        <Marker position={position} icon={customIcon} ref={markerRef}>
            <Popup>
                {text}
            </Popup>
        </Marker>
    )
}