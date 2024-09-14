//Externas
import React from 'react'
import {Container,Box} from '@mui/material'
import { useSelector } from "react-redux";

//Internas
import HeaderComponent from '../header'
import LoadingScreen from './components/loading'
import NetworkScreen from './components/network'
import ErrorScreen from './components/error'

export default function ContainerComponent({loading=false,status=200,children}){

    return(
        <Box
        height="100%"
        width="100%"
        >
            <Container>
                {
                    loading
                    ? <LoadingScreen/>
                    :   <>
                            {
                                status === 200
                                ?   <>
                                    <HeaderComponent/>
                                    {children}
                                    </>
                                :   <>
                                    {
                                        status.toLowerCase() === "network"
                                        ? <NetworkScreen/>
                                        : <ErrorScreen/>
                                    }
                                    </>
                            }
                        </>
                }
            </Container>
        </Box>
    )

}