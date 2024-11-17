import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ButtonComponent from '../../../../components/button'

function ItemComponent({title,detail}){

    const[open,setopen] = useState(false)

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:'column',
            flexWrap:'wrap'
        }}
        >
            <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            onClick={()=>setopen(!open)}
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
                    >
                        <Typography
                        variant={
                            window.innerWidth > 420 
                            ? "h6"
                            : "body2"
                        } 
                        >
                            {detail}
                        </Typography>
                    </Box>
                : null
            }            
        </Box>
    )

}

export default function DuvidasComponent(){

    return(
        <Box
        m={3}
        >
            <Box
            m={2}
            >
                <Typography
                variant='h4'
                >
                    Dúvidas Frequentes
                </Typography>
            </Box>
            <ItemComponent
            title='Como faço para cadastrar meu estabelecimento?'
            detail='Para cadastrar seu estabelecimento, basta clicar no botão "Cadastrar Estabelecimento" no menu principal e preencher os campos solicitados.'
            />
            <ItemComponent
            title='Como faço para editar as informações do meu estabelecimento?'
            detail='Para editar as informações do seu estabelecimento, basta acessar a página do seu estabelecimento e clicar no botão "Editar".'
            />
            <ItemComponent
            title='Como faço para excluir meu estabelecimento?'
            detail='Para excluir seu estabelecimento, basta acessar a página do seu estabelecimento e clicar no botão "Excluir".'
            /> 
             <ItemComponent
            title='Como faço para entrar em contato com o suporte?'
            detail='Para entrar em contato com o suporte, basta enviar um e-mail para'
            />
        </Box>
    )

}