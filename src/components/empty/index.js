import React from 'react'

import { Box, Typography } from '@mui/material'

export default function EmptyComponent(){

    return(
        <Box
        m={2}
        backgrounColor="background.ter"
        p={5}
        sx={{
            border: `2px solid`,
            // borderRadius: '8px'
        }}
        >
            <Typography
            variant={window.innerWidth>420 ? 'h4' : 'h5'}
            >
                Ops! Não encontramos nada com base no que foi solicitado
            </Typography>
            <Typography
            variant={window.innerWidth>420 ? 'h6' : 'body1'}
            >
                Por favor, continue pesquisando, talvez tenhamos o que voce deseja com outro nome
            </Typography>
        </Box>
    )

}