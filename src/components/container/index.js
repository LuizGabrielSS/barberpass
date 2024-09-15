//Externas
import React from 'react'
import {Box} from '@mui/material'

//Internas
import HeaderComponent from '../header'
import LoadingScreen from './components/loading'
import NetworkScreen from './components/network'
import ErrorScreen from './components/error'

export default function ContainerComponent({loading=false,status=200,children}){

    function DefineColor(){
        if(loading === true || status !== 200){
            return "background.main"
        }else{
            return null
        }
    }

    return(
        <Box
        height={window.innerHeight}
        width={window.innerWidth}
        sx={{
            backgroundColor:DefineColor()
        }}
        >
            <>
                {
                    loading
                    ? <LoadingScreen/>
                    :   <>
                            {
                                status === 200
                                ?   <Box
                                    >
                                    <HeaderComponent
                                    altura={window.innerWidth/19}
                                    />
                                    <Box
                                    marginTop={9}
                                    >
                                        {children}
                                    </Box>
                                    </Box>
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
            </>
        </Box>
    )

}