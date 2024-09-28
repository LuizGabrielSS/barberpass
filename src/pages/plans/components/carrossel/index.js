import React, { useState, useEffect } from 'react'
import { Box, IconButton,Typography,Divider } from '@mui/material'

//icones
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function ItemsComponent({name,price,beneficios,color}){

    return(
        <Box
        p={2}
        m={2}
        sx={{
            borderTop: `2px solid ${color}`,
            borderBottom: `2px solid ${color}`,
            borderRadius: '8px'
        }}
        >
            <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <Typography
                variant={window.innerWidth>420 ? 'h4' : 'h5'}
                >
                    {name}
                </Typography>
            </Box>
            <Divider sx={{ borderColor: color }} />
            <Box
            m={2}
            p={2}
            >
                <Box>
                    <Typography
                    variant={window.innerWidth>420 ? 'h5' : 'h6'}
                    >
                        Beneficios
                    </Typography>
                </Box>
                {beneficios.map((item) => (
                    <Box
                    m={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <ArrowRightIcon/>
                        <Typography
                        variant={window.innerWidth>420 ? 'h6' : 'body1'}
                        >
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Divider sx={{ borderColor: color }} />
            <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <Typography
                variant={window.innerWidth>420 ? 'h4' : 'h5'}
                >
                    {price}
                </Typography>
            </Box>
        </Box>
    )
}

export default function CarrosselComponent({data}){

    const[plansOnScreen,SetPlansOnScreen] = useState([])
    
    useEffect(() => {
        if (data && data.length > 0) {
            SetPlansOnScreen([data[0]]);
        }
    }, [data]);

    const PassarFoto = (direction) => {
        const currentIndex = data.indexOf(plansOnScreen[0]);
        let newIndex;

        if (direction === "maior") {
            newIndex = (currentIndex + 1) % data.length;
        } else {
            newIndex = (currentIndex - 1 + data.length) % data.length;
        }

        SetPlansOnScreen([data[newIndex]]);
    };

    return(
        <Box
        justifyContent="center"
        alignContent='center'
        alignSelf='center'
        display='flex'
        m={2}
        p={2}
        >
            <Box
            width="100%"
            height="100%"
            justifyContent="center"
            alignContent='center'
            alignSelf='center'
            display='flex'
            m={2}
            >
                <IconButton onClick={() => PassarFoto("menor")}>
                    <ArrowBackIosNewIcon/>
                </IconButton>
                {plansOnScreen.map((item) => (
                    <ItemsComponent
                    key={item.id}
                    name={item.nome}
                    price={item.price}
                    beneficios={item.Beneficios}
                    color={item.color}
                    />
                ))}
                <IconButton onClick={() => PassarFoto("maior")}>
                    <ArrowForwardIosIcon/>
                </IconButton> 
            </Box>
        </Box>
    )

}