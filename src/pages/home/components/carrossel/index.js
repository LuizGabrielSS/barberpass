import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PlaceIcon from '@mui/icons-material/Place';

import {Translator} from '../../../../components/translate'
import { Grid } from '@mui/material';

function DetailItem({name,info,Icon,index}){

    return (
        <Box
            m={1}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: 'nowrap',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <Icon sx={{ color: index % 2 === 0 ? "text.ter" : "text.main" }}/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 3,
                }}
            >
                <Typography 
                    color={index % 2 === 0 ? "text.ter" : "text.main"}
                    variant={
                        window.innerWidth > 420 
                        ? "h6"
                        : "subtitle1"
                    } 
                    bold
                >
                    {name}:
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 4,
                }}
            >
                <Typography
                    color={index % 2 === 0 ? "text.ter" : "text.main"}
                    variant={
                        window.innerWidth > 420 
                        ? "h6"
                        : "subtitle1"
                    } 
                >
                    {
                        info === null
                        ? "Desconhecido"
                        : info
                    }
                </Typography>
            </Box>
        </Box>
    );

}

function ItenCarrossel({item,index,navegacao}){

    const[open,setopen] = useState(false)

    return(
        <Box
        m={1}
        sx={{
            backgroundColor:(index % 2 === 0 ? "primary.main" : "primary.secondary"),
            // borderRadius:"10%",
            padding:1,
            alignItems:"center",
            justifyContent:"center",
            cursor: 'pointer',
        }}
        onMouseEnter={() => setopen(true)}
        onMouseLeave={() => setopen(false)}
        onClick={() => setopen(!open)}
        >
            <Typography
            color={index % 2 === 0 ? "text.main" : "text.ter"}
            align='center'
            variant={
                window.innerWidth > 420 
                ? "h5"
                : "h6"
            } 
            >
                {item.nome}
            </Typography>
            {
                open
                ?  <Box
                    sx={{
                        backgroundColor:(index % 2 === 0 ? "primary.secondary" : "primary.main"),
                        // backgroundColor:"primary.ter",
                        alignItems:"center",
                        justifyContent:"center",
                        // borderRadius:"5%",
                        padding:1,
                        margin:1,
                        cursor: 'pointer',
                    }}
                    onClick={() => navegacao("/provider/"+item.id)}
                    >
                        <DetailItem
                        index={index}
                        Icon={CategoryIcon}
                        name={
                            <Translator
                            path="home.carrossel.category"
                            />
                        }
                        info={item.categoria}
                        />
                        <DetailItem
                        index={index}
                        Icon={DescriptionIcon}
                        name={
                            <Translator
                            path="home.carrossel.description"
                            />
                        }
                        info={item.descricao}
                        />
                        <DetailItem
                        index={index}
                        Icon={AccessAlarmIcon}
                        name={
                            <Translator
                            path="home.carrossel.time"
                            />
                        }
                        info={item.funcionamento}
                        />
                        <DetailItem
                        index={index}
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

    const navegacao = useNavigate()

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
                    navegacao={navegacao}
                    />
                )
            })}
        </Box>
    )

}