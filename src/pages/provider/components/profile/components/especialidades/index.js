import React, { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ButtonComponent from '../../../../../../components/button'

function ItemComponent({title,detail,price}){

    const[open,setopen] = useState(false)

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        }}
        >
            <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            onClick={()=>setopen(!open)}
            sx={{ width: '100%' }}
            >
                <ButtonComponent
                action={null}
                variant='text'
                text={title}
                color='primary.main'
                />
                {
                    open
                    ? <KeyboardArrowUpIcon color='primary.main'/>
                    : <KeyboardArrowDownIcon color='primary.main'/>
                }
            </Box>
            {
                open
                ?   <Box
                    px={5}
                    py={2}
                    sx={{ width: '100%' }}
                    >
                        <Box>
                            <Typography
                            variant="h6"
                            >
                                {detail}
                            </Typography>
                        </Box>
                        <Box
                        sx={{
                            display:"flex",
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '100%'
                        }}
                        >
                        <ButtonComponent
                            action={null}
                            text={`${price}R$`}
                            color='primary.main'
                            />
                        </Box>
                    </Box>
                : null
            }       
        </Box>
    )
}

export default function EspecialidadesComponent({especialidades}){

    return(
        <Box
        m={2}
        >
            <Divider/>
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
                    Especialidades
                </Typography>
            </Box>

            {especialidades.map((especialidade) => (
                        <Box
                        key={especialidade.id}
                        m={1}
                        >
                            <ItemComponent
                            title={especialidade.nome}
                            detail={especialidade.detalhe}
                            price={especialidade.preco}
                            />
                            
                        </Box>
                    ))}
            <Divider/>
        </Box>
    )

}