import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import ContainerComponent from '../../components/container'
import SearchComponent from './components/search'
import CarrosselComponent from './components/carrossel'
import DuvidasComponent from './components/duvidas'
import ServiceofferComponent from './components/serviceoffer'
import Footer from '../../components/footer'
import {Translator} from '../../components/translate'
import EmptyComponent from '../../components/empty'

import data_init from '../../mocks/services'

export default function HomeScreen(){

    const { t } = useTranslation()

    const[data,setdata] = useState(data_init)

    const [searchdata,setsearchdata] = useState(data)

    return(
        <ContainerComponent
        >
            <Box
            pt={2}
            >
                <SearchComponent
                data={data}
                setsearchdata={setsearchdata}
                placeholder={(t("home.search.placeholder"))}
                label={
                    <Translator
                        path="home.search.label"
                        />
                    }
                />
                {
                    searchdata.length === 0 
                    ?   <EmptyComponent/> 
                    :   <CarrosselComponent
                        data={searchdata}
                        />
                }
                <ServiceofferComponent/>
                <DuvidasComponent/>
                <Footer/>
            </Box>    
        </ContainerComponent>
    )
}