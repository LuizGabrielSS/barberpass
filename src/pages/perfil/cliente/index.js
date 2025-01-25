import React, {useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

import InputComponent from '../../../components/input/complex'
import {Translator} from '../../../components/translate'
import ButtonComponent from '../../../components/button'
import validate_changes from './components/validate_fields'
import returnFields from './components/return_fields'
import PictureComponent from '../../../components/pictures'

import PasswordIcon from '@mui/icons-material/Password';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import saveChanges from '../requests/save_changes'

export default function ProfileClient({originalState,setoriginalState,state,dispatch,setloading,setstatus,schedules,SetSchedules}){

    const { t } = useTranslation()

    const[buttonstatus,setbuttonstatus] = useState(false)

    const[buttonresetstatus,setbuttonresetstatus] = useState(false)

    useEffect(() => {
        validate_changes(state,setbuttonstatus,setbuttonresetstatus,originalState)
    },[state,originalState])

    const navegacao = useNavigate()

    return(
        <Box
            sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            }}
            >
                <Box
                p={5}
                m={2}
                width={
                    window.innerWidth> 420 
                    ?"40%"
                    :"100%"
                }
                sx={{
                    borderRadius:"10%",
                    borderWidth:'2px',
                    borderStyle:"solid",
                    borderColor:'primary.main',
                    backgroundColor:"#663300"
                }}
                >
                <Box
                m={3}
                sx={{
                    textAlign: 'center'
                }}
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h2"
                        : "h4"
                    }
                    color="#fff"
                    >
                    <Translator
                    path="perfil.title"
                    />
                </Typography>
                </Box>
                <Box
                m={3}
                >
                    <PictureComponent
                    picture={state.picture}
                    changeOption={true}
                    dispatch={dispatch}
                    />
                </Box>
                <Box
                m={3}
                >
                    <InputComponent
                    label={t('perfil.user.label')}
                    placeholder={t('perfil.user.placeholder')}
                    informacao={state.user}
                    label_element='user'
                    setinformacao={dispatch}
                    onDark={true}
                />
                </Box>
                <Box
                m={3}
                >
                    <InputComponent
                    label={t('perfil.email.label')}
                    placeholder={t('perfil.email.placeholder')}
                    informacao={state.email}
                    label_element='email'
                    setinformacao={dispatch}
                    onDark={true}
                    readOnly={true}
                    />
                </Box>
                <Box
                m={3}
                >
                    <InputComponent
                    label={t('perfil.number.label')}
                    placeholder={t('perfil.number.placeholder')}
                    informacao={state.number}
                    label_element='number'
                    setinformacao={dispatch}
                    onDark={true}
                />
                </Box>
                <Box
                m={3}
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:'wrap'
                }}
                >
                    <ButtonComponent
                        action={() => saveChanges(setoriginalState,state,setloading,setstatus)}
                        text={t('perfil.save')}
                        color='button'
                        variant='contained'
                        status={!buttonstatus}
                    />
                    <ButtonComponent
                        action={() => returnFields(dispatch,originalState,setloading)}
                        text={t('perfil.return')}
                        color='button'
                        status={!buttonresetstatus}
                    />
                </Box>
                <Box
                m={3}
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:'wrap'
                }}
                >
                    <ButtonComponent
                        text={t('perfil.configure')}
                        color='button'
                        variant='contained'
                        Icon={SettingsIcon}
                        action={() => navegacao('/config')}
                    />
                    <ButtonComponent
                        text={t('perfil.password')}
                        color='button'
                        variant='contained'
                        Icon={PasswordIcon}
                    />
                    <ButtonComponent
                        text={t('perfil.suporte')}
                        color='button'
                        variant='contained'
                        Icon={PeopleAltIcon}
                        action={() => navegacao('/contact')}
                    />
                </Box>
                </Box>
        </Box>
    )

}