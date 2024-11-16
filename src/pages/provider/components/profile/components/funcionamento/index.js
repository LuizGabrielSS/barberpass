import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimeField } from '@mui/x-date-pickers/TimeField';
import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
import { Box, Typography } from '@mui/material'

import ButtonComponent from '../../../../../../components/button'

const days_week = [
    {
        "id":0,
        "name":"Dom"
    },
    {
        "id":1,
        "name":"Seg"
    },
    {
        "id":2,
        "name":"Ter"
    },
    {
        "id":3,
        "name":"Qua"
    },
    {
        "id":4,
        "name":"Qui"
    },
    {
        "id":5,
        "name":"Sex"
    },
    {
        "id":6,
        "name":"Sab"
    },
]

dayjs.extend(isBetween);

export default function FuncionamentoComponent({abertura,fechamento,dias}){

    function getTodayDateString(hour) {
        return dayjs().format('YYYY-MM-DD'+hour);
    }

    const init_date = getTodayDateString(abertura);

    const end_date = getTodayDateString(fechamento);

    const today = dayjs();
    const todayDayOfWeek = today.day(); // 0 (Sunday) to 6 (Saturday)
    const status = today.isBetween(init_date, end_date) && dias.includes(todayDayOfWeek);

    return(
        <Box>
            <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
            m={2}
            >
                <TimeField
                label="Abertura"
                defaultValue={dayjs(init_date)}
                format="HH:mm:ss"
            />
            </Box>
            {
                status
                ?   <Typography
                    variant={
                    window.innerWidth> 420 
                    ? "h6"
                    : "body1"
                }
                    color="success"
                    >
                        Aberto
                    </Typography>
                :   <Typography
                    variant={
                    window.innerWidth> 420 
                    ? "h6"
                    : "body1"
                }
                    color="error"
                    >
                        Fechado
                    </Typography>
            }
            <Box
            m={2}
            >
                <TimeField
                    label="Fechamento"
                    defaultValue={dayjs(end_date)}
                    format="HH:mm:ss"
                />
            </Box>
            </LocalizationProvider>
            </Box>
            <Box
            m={2}
            sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexWrap:'wrap'
            }}
            >
                {
                    days_week.map((item,index) => {
                        return(
                            <Box
                            key={index}
                            >
                                <ButtonComponent
                                color={
                                    dias.includes(item.id)
                                    ? 'primary'
                                    : 'secondary'
                                }
                                variant={
                                    dias.includes(item.id)
                                    ? 'contained'
                                    : 'link'
                                }
                                text={item.name}
                                />                                    
                            </Box>
                        )
                    })
                    }
            </Box>
        </Box>
        
    )

}