import React from 'react'
import {Backdrop, Box, CircularProgress, Typography} from '@mui/material'

export default function LoadingDialogComponent({open}){

    return(
        <Backdrop
        open={open}
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        >
            <Box
            p={2}
            style={{backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:'10px'}}
            justifyContent="center"
            alignItems="center"
            >
                <Box
                m={2}
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                >
                    <CircularProgress
                    sx={{
                        color:"primary.secondary"
                    }}
                    />
                </Box>
                <Box
                m={2}
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                >
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h5"
                    : "h6"
                }
                color="primary.secondary"
                >
                    Carregando...
                </Typography>
                </Box>
            </Box>
        </Backdrop>
    )

}