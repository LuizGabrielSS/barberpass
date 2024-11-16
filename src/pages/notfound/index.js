import React from 'react'
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle,Typography,DialogActions } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import ContainerComponent from '../../components/container'
import LottieFunction from '../../components/lottie'
import ButtonComponent from '../../components/button'

import notFound from './not_found.json'

export default function NotFoundScreen(){

    const navegacao = useNavigate()
    
    return(
        <ContainerComponent>
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
                        <DialogTitle>Pagina inexistente</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <Typography
                                >
                                Parece que a pagina que voce procura não existe
                                Por favor, retorne a pagina inicial
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <ButtonComponent
                                text="Voltar"
                                action={() => navegacao("/")}
                                color='primary'
                                variant='contained'
                                />
                        </DialogActions>
                    </Dialog>
                    <LottieFunction
                        gif={notFound}
                        />
                </Box>
            </Box>
        </ContainerComponent>
    )

}