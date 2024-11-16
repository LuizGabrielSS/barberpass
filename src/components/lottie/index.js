import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'react-lottie';

export default function LottieComponent({gif}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: gif,
    };

    return(
        <Box
        // m={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        >
            <Lottie options={defaultOptions} height={window.innerHeight*6/10}/>
        </Box>
    )
}