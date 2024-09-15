import React, { useState, useEffect } from 'react';
import {Box,Typography} from '@mui/material'

import LottieFunction from '../../../lottie'
import LoadingView from './loading.json'

export default function LoadingScreen(){

    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
          setDots(prevDots => {
            if (prevDots.length < 3) {
              return prevDots + '.';
            }
            return '';
          });
        }, 500); // Muda os pontos a cada 500 ms
    
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
      }, []);
    
    return(
        <Box
        p={1}
        sx={{
            backgroundColor:"background.main",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <Box
            m={1}
            mx={2}
            p={2}
            sx={{
                backgroundColor:"background.secondary",
                borderRadius:"50%"
            }}
            >
                <Box
                alignItems="center"
                display="flex"
                justifyContent="center"
                // sx={{
                //     backgroundColor:"background.main",
                // }}
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h5"
                        : "h6"
                    }
                    >
                        
                        Carregando{dots}
                    </Typography>
                </Box>

                <LottieFunction
                gif={LoadingView}
                />
            </Box>
        </Box>
    )

}