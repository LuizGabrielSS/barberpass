import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, MenuItem, Select,Typography } from '@mui/material'

import UsaVSG from "./usa.svg";
import BraVSG from "./brasil.svg"

function ItemComponent({Imagem,idioma}){

    return(
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={1}
        >
            <Box
            m={1}
            >
            <Avatar 
            src={Imagem} 
            alt="SVG"
            variant="square"
            />
            </Box>
            <Typography>
                {idioma}
            </Typography>
        </Box>
    )


}

export const Translator = ({ path }) => {
    const { t } = useTranslation()
    return t(path)
  }

export default function TranslateFunction(){

    const { i18n } = useTranslation()

    const[Value,SetValue] = useState("pt-BR")
  
    function handleChangeLanguage(language) {
      i18n.changeLanguage(language)
      SetValue(language)
    }

    return(
        <Box
        width={window.innerWidth> 420 ? (window.innerWidth/8) : (window.innerWidth/3)}
        m={1}
        >
            <Select
            defaultValue={Value}
            autoWidth
            onChange={(value) => handleChangeLanguage(value.target.value)}
            variant="standard"
            >
                <MenuItem
                value="en-US"
                >
                    <ItemComponent
                    Imagem={UsaVSG}
                    idioma="English - USA"
                    />
                </MenuItem>
                <MenuItem
                value="pt-BR"
                >
                    <ItemComponent
                    Imagem={BraVSG}
                    idioma="Portugues - Brasil"
                    />
                </MenuItem>
            </Select>
        </Box>
    )

}