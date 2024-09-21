import React, {useReducer, useState,useEffect} from 'react'
import {Box} from '@mui/material'

import ContainerComponent from '../../components/container'

import LoginComponent from './components/login'
import PasswordComponent from './components/password'
import SignUpComponent from './components/signup'

const initialState = {
    'email':null,
    'password':null,
    'repeat_password':null,
    'number':null,
    'modalidade':null,
    'name':null
}

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

export default function LoginScreen(){

    const fundo = "/background/login.png"

    const[scren,setscreen] = useState('login')

    const[state,dispatch] = useReducer(reducer,initialState)

    const [altura, setAltura] = useState(window.innerHeight);
    
    const [largura, setLargura] = useState(window.innerWidth);

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

    return(
        <ContainerComponent
        >
            <Box
            // height={altura*87/100}
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
                    borderColor:'rgb(200, 200, 200)',
                    backgroundColor:"#fff"
                }}
                >
                    {
                        scren === 'login'
                        ?  <LoginComponent setscreen={setscreen} state={state} dispatch={dispatch}/>
                        :   <>
                            {
                                scren === 'password'
                                ? <PasswordComponent setscreen={setscreen} state={state} dispatch={dispatch}/>
                                : <SignUpComponent setscreen={setscreen} altura={altura} state={state} dispatch={dispatch}/>
                            }
                            </>
                    }
                </Box>
            </Box>
        </ContainerComponent>
    )

}