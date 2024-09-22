import React from 'react'
import { Box, CardMedia, Typography } from '@mui/material'

import {Translator} from '../../../../components/translate'

export default function ServiceofferComponent(){
    
    return(
        <Box
        m={3}
        p={2}
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        backgroundColor="primary.secondary"
        >   
            <Box
            flex={1}
            >
                <CardMedia
                sx={{ width: window.innerWidth/3 }}
                src={`${process.env.PUBLIC_URL}/logo/logo_without_back.png`}
                component="img"
                />
            </Box>
            <Box
            flex={1}
            sx={{
                flexWrap: 'wrap'
            }}
            >
                <Typography
                variant={window.innerWidth>420 ? 'h4' : 'h5'}
                >
                    <Translator path='home.serviceoffer.title'/>
                </Typography>
                <Typography
                variant={window.innerWidth>420 ? 'h6' : 'body1'}
                >
                    <Translator path='home.serviceoffer.text'/>
                </Typography>
            </Box>
        </Box>
    )
}