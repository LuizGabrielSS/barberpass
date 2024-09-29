import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

import SwitchMode from '../../../../components/switchmode'
import {Translator} from '../../../../components/translate'

export default function ModeComponent(){

    const theme = useSelector((state) => state.mode.darkmode);

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
                    {
                        theme.mode === "light" ? 
                        <Translator
                        path="config.mode.light"
                        />
                        :
                        <Translator
                        path="config.mode.dark"
                        />
                    }
                </Typography>
                <Divider/>
            </Box>
            <Box
            m={2}
            >
                <SwitchMode/>
            </Box>
        </Box>
    )

}