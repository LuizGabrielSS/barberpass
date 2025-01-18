import React, {useReducer, useState,useEffect} from 'react'
import {Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';

import ContainerComponent from '../../components/container'
import DialogComponent from '../../components/dialog'

import LoginComponent from './components/login'
import PasswordComponent from './components/password'
import SignUpComponent from './components/signup'

const initialState = {
    'email':null,
    'password':null,
    'repeat_password':null,
    'modalidade':null,
    'name':null
}

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

const initialStateDialog = {
    'open':false,
    'title':'',
    'text':'',
    'action':false
}

export default function LoginScreen(){

    const fundo = "/background/login.png"

    const[scren,setscreen] = useState('login')

    const[state,dispatch] = useReducer(reducer,initialState)

    const[stateDialog,dispatchDialog] = useReducer(reducer,initialStateDialog)

    const [altura, setAltura] = useState(window.innerHeight);
    
    const [largura, setLargura] = useState(window.innerWidth);

    const[Loading,setLoading] = useState(false)

    const[Status,setStatus] = useState(200)

    useEffect(() => {
        const handleResize = () => {
          setAltura(window.innerHeight);
          setLargura(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpeza do listener quando o componente for desmontado
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const navigate = useNavigate()

    return(
        <ContainerComponent
        loading={Loading}
        status={Status}
        >
            <Box
            sx={{
                height: altura*87/100,
                backgroundImage:`url(${process.env.PUBLIC_URL}${fundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
            >
                <Box
                p={4}
                sx={{
                    borderRadius:"10%",
                    borderWidth:'2px',
                    borderStyle:"solid",
                    borderColor:'primary.main',
                    backgroundColor:"#fff"
                }}
                >
                    <DialogComponent
                    open={stateDialog.open}
                    title={stateDialog.title}
                    text={stateDialog.text}
                    action={stateDialog.action}
                    navigate={navigate}
                    />
                    {
                        scren === 'login'
                        ?  <LoginComponent setscreen={setscreen} state={state} dispatch={dispatch} setLoading={setLoading} setStatus={setStatus} dispatchDialog={dispatchDialog}/>
                        :   <>
                            {
                                scren === 'password'
                                ? <PasswordComponent setscreen={setscreen} state={state} dispatch={dispatch} setLoading={setLoading} setStatus={setStatus} dispatchDialog={dispatchDialog}/>
                                : <SignUpComponent setscreen={setscreen} altura={altura} state={state} dispatch={dispatch} setLoading={setLoading} setStatus={setStatus} dispatchDialog={dispatchDialog}/>
                            }
                            </>
                    }
                </Box>
            </Box>
        </ContainerComponent>
    )

}