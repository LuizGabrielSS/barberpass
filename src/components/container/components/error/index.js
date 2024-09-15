import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle,Typography } from '@mui/material'

import LottieFunction from '../../../lottie'
import ErrorView from './error.json'

export default function ErrorScreen(){

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
                <DialogTitle>Ops! Tivemos um problema</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography
                        >
                        Parece que houve um problema para continuar com a sua solicitação.
                        Por favor tente novamente mais tarde e
                        caso o problema se mantenha, entre em contato conosco
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <LottieFunction
            gif={ErrorView}
            />
            </Box>
        </Box>
    )

}