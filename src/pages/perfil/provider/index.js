import React, {useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

export default function ProfileProvider({}){

    const { t } = useTranslation()

    const[buttonstatus,setbuttonstatus] = useState(false)
    
    const[buttonresetstatus,setbuttonresetstatus] = useState(false)

    useEffect(() => {
        validate_changes(state,setbuttonstatus,setbuttonresetstatus,originalState)
    },[state,originalState])

    const navegacao = useNavigate()

    return(
        
    )

}   