import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

import PictureComponent from '../../../../components/pictures'
import MapComponent from './components/map'
import FuncionamentoComponent from './components/funcionamento'
import EspecialidadesComponent from './components/especialidades'
import GaleriaComponent from './components/galeria'
import AvalicoesComponent from './components/avaliacoes'
import AgendarComponents from './components/agendar'

function BoxComponent({children, divider=true, ...props}){

    return(
        <Box
        m={3}
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        {...props}
        >
            {
                divider
                ? <Divider/>
                : null
            }
            {children}
            {
                divider
                ? <Divider/>
                : null
            }
        </Box>
    )

}

export default function ProviderProfile({data}){

    return(
        <Box>
            <BoxComponent
            divider={false}
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
            </BoxComponent>
            <BoxComponent
            divider={false}
            >
                <PictureComponent
                    picture={data.image}
                    square={false}
                    />
            </BoxComponent>
            <BoxComponent
            divider={false}
            >
                <FuncionamentoComponent
                    abertura={data.horario_abertura}
                    dias={data.dias}
                    fechamento={data.horario_fechamento}
                    />
            </BoxComponent>
            <BoxComponent
            divider={false}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
                <AgendarComponents
                abertura={data.horario_abertura}
                dias={data.dias}
                fechamento={data.horario_fechamento}
                />
            </BoxComponent>
            <BoxComponent>
                <EspecialidadesComponent
                especialidades={data.especialidades}
                />
            </BoxComponent>
            <BoxComponent
            divider={false}
            >
                <GaleriaComponent
                galeria={data.galeria}
                />
            </BoxComponent>
            <BoxComponent
            >
                <AvalicoesComponent
                avaliacoes={data.avaliacoes}
                />
            </BoxComponent>
            <BoxComponent
            divider={false}
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
            </BoxComponent>
            <BoxComponent
            >
                <MapComponent
                position={[data.latitude,data.longitude]}
                nome={data.nome}
                iconUrl={data.image}
                />
            </BoxComponent>
        </Box>
    )

}