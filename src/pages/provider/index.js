import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import ContainerComponent from '../../components/container'
import NotFoundComponent from './components/notfound'
import ProfileComponent from './components/profile'

import data_init from '../../mocks/services'

export default function ServiceProviderPage(){

    const { id } = useParams();

    const[data,setdata] = useState(null)

    const navegacao = useNavigate()

    useEffect(() => {
        for(let i = 0; i < data_init.length; i++){
            if(String(data_init[i].id) === id){
                setdata(data_init[i])
            }
        }
    },[id])

    return(
        <ContainerComponent>
            <Box pt={2}
            sx={{
                background: 'linear-gradient(to right, #b87333, rgb(181, 174, 164))', // Gradient background
                backgroundAttachment: 'fixed', // Make the background fixed
            }}
            >
                {
                    data !== null 
                    ? <ProfileComponent
                        data={data}
                        />
                    : <NotFoundComponent
                        navegacao={navegacao}
                        />
                }
            </Box>
        </ContainerComponent>
    )

}