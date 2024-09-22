import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlaceIcon from '@mui/icons-material/Place';

import {Translator} from '../../../../components/translate'
import { Grid } from '@mui/material';

function DetailItem({name,info,Icon}){

    return (
        <Box
            m={1}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: 'wrap'
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Icon />
                </Grid>
                <Grid item xs={3}>
                    <Typography bold>
                        {name}:
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        {info}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );

}

function ItenCarrossel({item,index}){

    const[open,setopen] = useState(false)

    return(
        <Box
        m={1}
        sx={{
            backgroundColor:(index % 2 === 0 ? "primary.main" : "primary.secondary"),
            borderRadius:"5%",
            padding:1,
            alignItems:"center",
            justifyContent:"center",
        }}
        onMouseEnter={() => setopen(true)}
        onMouseLeave={() => setopen(false)}
        onClick={() => setopen(!open)}
        >
            <Typography
            color={index % 2 === 0 ? "text.main" : "text.ter"}
            align='center'
            >
                {item.nome}
            </Typography>
            {
                open
                ?  <Box
                    sx={{
                        backgroundColor:"primary.ter",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:"5%",
                        padding:1,
                        margin:1
                    }}
                    >
                        <DetailItem
                        Icon={CategoryIcon}
                        name={
                            <Translator
                            path="home.carrossel.category"
                            />
                        }
                        info={item.categoria}
                        />
                        <DetailItem
                        Icon={DescriptionIcon}
                        name={
                            <Translator
                            path="home.carrossel.description"
                            />
                        }
                        info={item.descricao}
                        />
                        <DetailItem
                        Icon={AccessAlarmIcon}
                        name={
                            <Translator
                            path="home.carrossel.time"
                            />
                        }
                        info={item.funcionamento}
                        />
                        <DetailItem
                        Icon={PlaceIcon}
                        name={
                            <Translator
                            path="home.carrossel.map"
                            />
                        }
                        info={item.endereco}
                        />
                    </Box>
                : null
            }
        </Box>
    )

}

export default function CarrosselComponent({data}){

    return(
        <Box
        m={3}
        sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexWrap:'wrap'
        }}
        >
            {data.map((item,index) => {
                return(
                    <ItenCarrossel
                    key={item.id}
                    item={item}
                    index={index}
                    />
                )
            })}
        </Box>
    )

}