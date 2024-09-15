import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import LottieFunction from '../../../lottie'
import NetworkView from './network.json'

export default function NetworkScreen(){

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
                <Dialog
                open={true}
                >
                    <DialogTitle>Parece ter ocorrido um problema de conexão</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                                Parece que voce esta tendo problemas com a sua conexão,
                                Por favor, vá pegar uma agua e tente novamente mais tarde
                            </DialogContentText>
                    </DialogContent>
                </Dialog>
                <LottieFunction
                gif={NetworkView}
                />
            </Box>
        </Box>
    )
}