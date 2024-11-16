import React from 'react'
import { Box,Typography } from '@mui/material'

import LottieFunction from '../../../../components/lottie'
import ButtonComponent from '../../../../components/button'

import notFound from '../../../notfound/not_found.json'

export default function notFoundComponent({navegacao}){

    return(
        <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        height="70vh"
        mt={2}
        >
            <Box>
                <Box
                alignItems="center"
                justifyContent="center"
                display="flex"
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h5"
                        : "h6"
                    }
                    >
                        Infelizmente parece que este prestador de serviço não existe
                    </Typography>
                </Box>
                <Box
                >
                    <LottieFunction
                        gif={notFound}
                        />
                </Box>
                <Box
                alignItems="center"
                justifyContent="center"
                display="flex"
                mt={2}
                >
                    <ButtonComponent
                        text="Voltar a tela inicial"
                        action={() => navegacao("/")}
                        color='primary'
                        variant='contained'
                        />
                </Box>
            </Box>
        </Box>
    )

}