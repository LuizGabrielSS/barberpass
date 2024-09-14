import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import LottieFunction from '../../../lottie'
// import ErrorView from './error.json'

export default function ErrorScreen(){

    return(
        <Box
        >
            <Dialog
            open={true}
            >
                <DialogTitle>Ops! Tivemos um problema</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        Parece que houve um problema para continuar com a sua solicitação
                        Por favor tente novamente mais tarde
                        Caso o problema se mantenha, entre em contato
                    </DialogContentText>
                    
                </DialogContent>
            </Dialog>
            {/* <LottieFunction
            gif={ErrorView}
            /> */}
        </Box>
    )

}