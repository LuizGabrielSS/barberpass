import React, { useState } from 'react';
import { Marker,Popup } from 'react-leaflet';
import L from 'leaflet';
import { Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PictureComponent from '../../../../components/pictures';
import ButtonComponent from '../../../../components/button';
import FuncionamentoComponent from '../../../provider/components/profile/components/funcionamento';

function DetailComponent({details,setopen,open}){

    const navegacao = useNavigate()

    return (
        <Modal
            open={open}
            onClose={() => setopen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: window.innerWidth > 420 ? window.innerWidth * 4 / 10 : window.innerWidth * 9 / 10,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box
                    m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography 
                        id="modal-title" 
                        variant={
                            window.innerWidth > 420 
                            ? "h4"
                            : "h6"
                        } 
                        component="h2"
                    >
                        {details.nome}
                    </Typography>
                </Box>
                <Box 
                m={1}
                
                >
                    <PictureComponent
                        picture={details.image}
                        square={false}
                    />
                </Box>
                <Box 
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography 
                        id="modal-title" 
                        variant={
                            window.innerWidth > 420 
                            ? "h6"
                            : "body1"
                        } 
                        component="h2"
                    >
                        {details.categoria}
                    </Typography>
                </Box>
                <Box>
                    <FuncionamentoComponent
                        abertura={details.horario_abertura}
                        dias={details.dias}
                        fechamento={details.horario_fechamento}
                    />
                </Box>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ButtonComponent
                        action={() => navegacao("/provider/" + details.id)}
                        text="Detalhes"
                        color='primary'
                    />
                </Box>
            </Box>
        </Modal>
    );

}

export default function MarkerComponent({position, text, iconUrl, simple=true, details={}}){

    const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });

    const[open,setopen] = useState(false)

    const handleClick = () => {
        setopen(!open)
    }

    return(
        <Marker 
            position={position} 
            icon={customIcon} 
            eventHandlers={{
                click: handleClick,
            }}
        >
            {
                simple
                ?   <Popup>
                        {text}
                    </Popup> 
                :   <DetailComponent 
                    details={details}
                    open={open}
                    setopen={setopen}
                    />    
            }
        </Marker>
    )
}