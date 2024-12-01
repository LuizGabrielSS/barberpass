import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search';

import ContainerComponent from '../../components/container'
// import SearchComponent from './components/search'
import CarrosselComponent from './components/carrossel'
import DuvidasComponent from './components/duvidas'
import ServiceofferComponent from './components/serviceoffer'
import Footer from '../../components/footer'
import {Translator} from '../../components/translate'
import EmptyComponent from '../../components/empty'

import searchRequest from './requests/search'

export default function HomeScreen(){

    const { t } = useTranslation()

    const[data,setdata] = useState([])

    const [status,setstatus] = useState(200)

    const [loading,setloading] = useState(false)

    const [search,setsearch] = useState('')

    const[position,setposition] = useState({"latitude":-22.9339569,"longitude":-43.1192311})

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setposition({
                    "latitude":latitude,
                    "longitude":longitude
                })
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

    useEffect(() => {
        searchRequest(
            setloading,setstatus,search,setdata,position
        )
    },[position,search])

    return(
        <ContainerComponent
        loading={loading}
        children={status}
        >
            <Box
            pt={2}
            >
                <Box
                m={3}
                >
                    <TextField
                    label={
                        <Translator
                            path="home.search.label"
                            />
                        }
                    placeholder={(t("home.search.placeholder"))}
                    onChange={(value) => {setsearch(value.target.value)}}
                    fullWidth
                    defaultValue={search}
                    slotProps={{
                        input:{
                            endAdornment:
                                <SearchIcon/>
                            }
                        }}
                    />
                </Box>
                {
                    data.length === 0 
                    ?   <EmptyComponent/> 
                    :   <CarrosselComponent
                        data={data}
                        />
                }
                <ServiceofferComponent/>
                <DuvidasComponent/>
                <Footer/>
            </Box>    
        </ContainerComponent>
    )
}