import React, { useState,useEffect } from 'react'
import dayjs from 'dayjs'
import { Box, Dialog, DialogTitle,DialogContent,DialogContentText, Typography, DialogActions } from '@mui/material'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import ButtonComponent from '../../../../../../components/button'
import store from '../../../../../../redux'

function DateComponent({date,setdate,dias,timeSlots,sethorario,horario}){

    return(
        <Box
        >
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            m={2}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                    defaultValue={date}
                    renderInput={(params) => <input {...params} />}
                    onChange={(newValue) => setdate(newValue)}
                    shouldDisableDate={(date) => dias.includes(date.day()) === false}
                    disablePast
                    slotProps={{ actionBar: { actions: [] } }}
                    />
                </LocalizationProvider>
            </Box>
            {
                date !== null
                ?   <Box
                    m={1}
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexWrap:'wrap'
                    }}
                    >
                        {timeSlots.map((slot, index) => (
                            <ButtonComponent
                                key={index}
                                action={() => sethorario(slot)}
                                color='primary'
                                text={`${slot}:00`}
                                variant={horario === slot ? 'contained' : 'outlined'}
                            />
                        ))}
                    </Box>
                : null
            }
        </Box>
    )

}

function DialogConfirmComponent({open,setopen,data,horario,setopenAll}){

    const formatDate = (date) => {
        if(date === null){
            return null
        }
        const day = date.date();
        const month = date.month() + 1; // Month is 0-indexed
        const year = date.year();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    function fechar(){
        setopenAll(false)
        setopen(!open)
    }

    return(
        <Dialog
        open={open}
        >
            <DialogTitle>Confirmar agendamento</DialogTitle>
            <DialogContent>
                <DialogContentText>
                        <Typography>
                        Tem certeza que deseja agendar um horario para o dia {formatDate(data)} às {horario}:00?
                        </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonComponent
                action={() => fechar()}
                color='success'
                text="Confirmar"
                />
                <ButtonComponent
                action={() => fechar()}
                color='error'
                text="Voltar"
                />
            </DialogActions>
        </Dialog>
    )

}

export default function AgendarComponent({dias,abertura,fechamento}){

    const[date,setdate] = useState(null)

    const[horario,sethorario] = useState(null)

    const[open,setopen] = useState(false)

    const[opendialog,setopendialog] = useState(false)

    const [timeSlots, settimeSlots] = useState([]);

    useEffect(() => {
        if (abertura !== undefined && fechamento !== undefined) {
            const [aberturaHour, aberturaMinute] = abertura.split(':').map(Number);
            const [fechamentoHour, fechamentoMinute] = fechamento.split(':').map(Number);

            const start = aberturaHour + aberturaMinute / 60;
            const end = fechamentoHour + fechamentoMinute / 60;

            const slots = [];
            for (let i = start; i < end; i++) {
            slots.push(Math.floor(i));
            }

            settimeSlots(slots);
        }
    }, [abertura, fechamento]);

    return(
        <Box
        m={2}
        >
            <DialogConfirmComponent
            data={date}
            horario={horario}
            open={opendialog}
            setopen={setopendialog}
            setopenAll={setopen}
            />
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
                <ButtonComponent
                action={() => setopen(!open)}
                color='primary.main'
                text="Agendar horario"
                status={store.getState().user.user === null}
                />
            </Box>
            {
                open
                ? 
                <Box>
                    <DateComponent
                    date={date}
                    setdate={setdate}
                    dias={dias}
                    timeSlots={timeSlots}
                    sethorario={sethorario}
                    horario={horario}
                    />
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <ButtonComponent
                        action={() => setopendialog(!opendialog)}
                        color='primary.main'
                        text="Agendar"
                        status={horario === null || date === null}
                        />
                    </Box>
                </Box>
                : null
            }
        </Box>
    )

}