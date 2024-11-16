import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import ContainerComponent from '../../components/container'
import MarkerComponent from './components/marker'
import SearchComponent from './components/search'
import FilterComponent from './components/filter'

import data_init from '../../mocks/services'
import category from '../../mocks/category'

export default function Map(){

    const[position,setposition] = useState([-22.9339569,-43.1192311])

    const[dataShow,setdataShow] = useState(data_init)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setposition([latitude,longitude])
              },
              (error) => {
                console.error("Erro ao obter localização:", error);
              },
              {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
              }
            );
          }
    },[])

    return(
        <ContainerComponent>
            <Box pt={2}>
                <MapContainer 
                    key={position} // Add key prop to force re-render when position changes
                    style={{ height: '85vh', width: '100%' }} 
                    center={position} 
                    zoom={13} 
                    scrollWheelZoom={true}
                >
                    <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width:"75%" }}>
                        <Box
                        display="flex"
                        >
                            <Box 
                            flex={1}
                            width="95%"
                            >
                                <SearchComponent
                                    setposition={setposition}
                                />
                            </Box>
                            <Box 
                            >
                                <FilterComponent
                                    setdataShow={setdataShow}
                                    originalData={data_init}
                                    categorias={category}
                                />
                            </Box>
                        </Box>
                    </div>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="© OpenStreetMap contributors"
                    />
                    <MarkerComponent 
                        position={position}
                        text="Sua localizaçao"
                        iconUrl={`${process.env.PUBLIC_URL}/logo/logo_without_back.png`}
                    />
                    {
                      dataShow.map((item,index) => {
                        return(
                            <MarkerComponent
                                key={index}
                                position={[item.latitude,item.longitude]}
                                text={item.nome}
                                iconUrl={item.image}
                            />)
                      })
                    }              
                </MapContainer>
            </Box>
        </ContainerComponent>
    )

}