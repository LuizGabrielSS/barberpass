import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

import TranslateFunction,{Translator} from '../../../../components/translate'

export default function TranslateComponent(){

    return(
        <Box
        justifyContent="center"
        alignItems='center'
        >
            <Box
            m={4}
            >
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h5"
                    : "h6"
                }
                >
                    <Translator
                    path="config.translate.title"
                    />
                </Typography>
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h5"
                    : "h6"
                }
                >
                    (
                    <Translator
                    path="config.translate.text"
                    />
                    )
                </Typography>
                <Divider/>
            </Box>
            <Box
            m={3}
            >

                <TranslateFunction/>
            </Box>
        </Box>
    )

}