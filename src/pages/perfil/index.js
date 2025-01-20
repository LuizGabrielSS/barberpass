import React, {useReducer, useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import ContainerComponent from '../../components/container';
import InputComponent from '../../components/input/complex'
import {Translator} from '../../components/translate'
import AutoCompleteComponent from '../../components/autocomplete'
import ButtonComponent from '../../components/button'
import validate_changes from './components/validate_fields'
import returnFields from './components/return_fields'
import PictureComponent from '../../components/pictures'

import UserRequest from './requests/init'
import saveChanges from './requests/save_changes'

const initialState = {
    'email':null,
    'user':null,
    'number':null,
    'modalidade':null,
    'picture':null
}

const options_modalidades = [
    {'id':'1','label':'cliente'},
    {'id':'2','label':'prestador de serviço'},
    {'id':'3','label':'outro'},
]

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

export default function PerfilScreen(){

    const { t } = useTranslation()

    const[loading,setloading] = useState(true);

    const[status,setstatus] = useState(200);

    const[state,dispatch] = useReducer(reducer,initialState)

    const[originalState,setoriginalState] = useState(initialState)

    const[buttonstatus,setbuttonstatus] = useState(false)

    const[buttonresetstatus,setbuttonresetstatus] = useState(false)

    const [altura, setAltura] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
          setAltura(window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpeza do listener quando o componente for desmontado
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => {
        UserRequest(setloading,setstatus,dispatch,setoriginalState,state)
    },[])

    useEffect(() => {
        validate_changes(state,setbuttonstatus,setbuttonresetstatus,originalState)
    },[state,originalState])

    return(
        <ContainerComponent
        loading={loading}
        status={status}
        >
            <Box
            pt={15}
            >
                <Box
            sx={{
                height: altura*87/100,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
            >
                <Box
                p={2}
                m={2}
                width={
                    window.innerWidth> 420 
                    ?"40%"
                    :"100%"
                }
                sx={{
                    // borderRadius:"10%",
                    // borderWidth:'2px',
                    // borderStyle:"solid",
                    // borderColor:'primary.main',
                    // backgroundColor:"#fff"
                }}
                >
                <Box
                m={3}
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h2"
                        : "h4"
                    }
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
                >
                    <AutoCompleteComponent
                    informacao={state.modalidade}
                    label={
                        <Translator
                            path="perfil.modalidade.label"
                            />
                        }
                    options={options_modalidades}
                    placeholder={(t("perfil.modalidade.placeholder"))}
                    setinformacao={dispatch}
                    label_element='modalidade'
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
                        color='primary'
                        variant='contained'
                        status={!buttonstatus}
                    />
                    <ButtonComponent
                        action={() => returnFields(dispatch,originalState,setloading)}
                        text={t('perfil.return')}
                        color='primary'
                        status={!buttonresetstatus}
                    />
                </Box>
                </Box>
            </Box>
            </Box>
        </ContainerComponent>
    )

}