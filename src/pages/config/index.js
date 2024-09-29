import React from 'react'
import {Box, Typography} from '@mui/material'

import ContainerComponent from '../../components/container'
import {Translator} from '../../components/translate'
import Mode from './components/mode'
import Translate from './components/translate'

export default function ConfigPage(){

    return(
        <ContainerComponent>
            <Box
            p={2}
            >
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h2"
                    : "h4"
                }
                >
                    <Translator
                    path="config.title"
                    />
                </Typography>
                <Mode/>
                <Translate/>
            </Box>
        </ContainerComponent>
    )

}