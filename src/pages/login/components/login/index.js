import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

import InputComponent from '../../../../components/input/complex'
import {Translator} from '../../../../components/translate'
import NavigationButtons from '../navigation'

import validate_field from '../validation'

import loginRequest from '../../requests/login'

export default function LoginComponent({setscreen,state,dispatch,setLoading,setStatus,dispatchDialog}){

    const { t } = useTranslation()

    const[buttonstatus,setbuttonstatus] = useState(false)

    useEffect(() => {
        validate_field(state,'login',setbuttonstatus)
    },[state])

    const navegacao = useNavigate()

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            loginRequest(
                setLoading,
                setStatus,
                state.email,
                state.password,
                dispatchDialog,
                navegacao
            );
        }
    };

    return(
        <div onKeyPress={handleKeyPress}>
            <Box m={3}>
                <InputComponent
                    placeholder={t("login.email.placeholder")}
                    label={<Translator path="login.email.label" />}
                    informacao={state.email}
                    setinformacao={dispatch}
                    label_element='email'
                />
            </Box>
            <Box m={3}>
                <InputComponent
                    placeholder={t("login.password.placeholder")}
                    label={<Translator path="login.password.label" />}
                    informacao={state.password}
                    setinformacao={dispatch}
                    password={true}
                    label_element='password'
                />
            </Box>
            <NavigationButtons
                action={() => 
                    loginRequest(
                        setLoading,
                        setStatus,
                        state.email,
                        state.password,
                        dispatchDialog,
                        navegacao
                    )
                }
                screen='login'
                setscreen={setscreen}
                buttonstatus={buttonstatus}
            />
        </div>
    )

}