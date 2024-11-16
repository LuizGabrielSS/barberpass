import React from 'react'
import { Box, Typography } from '@mui/material'

import PictureComponent from '../../../../components/pictures'
import MapComponent from './components/map'
import FuncionamentoComponent from './components/funcionamento'
import EspecialidadesComponent from './components/especialidades'
import GaleriaComponent from './components/galeria'
import AvalicoesComponent from './components/avaliacoes'

export default function ProviderProfile({data}){

    const position = [data.latitude,data.longitude]

    return(
        <Box>
             <Box
            m={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h4"
                    : "h6"
                }
                >
                    {data.nome}
                </Typography>
            </Box>
            <Box
            m={3}
            >
                <PictureComponent
                picture={data.image}
                square={false}
                />
            </Box>
            <Box
                m={3}
                >
                    <FuncionamentoComponent
                    abertura={data.horario_abertura}
                    dias={data.dias}
                    fechamento={data.horario_fechamento}
                    />
            </Box>
            <Box
            m={3}
            >
                <EspecialidadesComponent
                especialidades={data.especialidades}
                />
            </Box>
            <Box
            m={3}
            >
                <GaleriaComponent
                galeria={data.galeria}
                />
            </Box>
            <Box
            m={3}
            >
                <AvalicoesComponent
                avaliacoes={data.avaliacoes}
                />
            </Box>
            <Box
            m={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
                <Typography
                variant={
                    window.innerWidth> 420 
                    ? "h6"
                    : "body1"
                }
                >
                    {data.endereco}
                </Typography>
            </Box>
            <Box
            m={3}
            >
                <MapComponent
                position={position}
                nome={data.nome}
                iconUrl={data.image}
                />
            </Box>
        </Box>
    )

}