import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import { useTranslation } from 'react-i18next'

import InputComponent from '../../../../components/input/login'
import {Translator} from '../../../../components/translate'
import NavigationButtons from '../navigation'

import validate_field from '../validation'

export default function LoginComponent({setscreen,state,dispatch}){

    const { t } = useTranslation()

    const[buttonstatus,setbuttonstatus] = useState(false)

    useEffect(() => {
        validate_field(state,'login',setbuttonstatus)
    },[state])

    return(
        <>
            <Box
            m={3}
            >
                <InputComponent
                placeholder={(t("login.email.placeholder"))}
                label={
                    <Translator
                        path="login.email.label"
                        />
                    }
                informacao={state.email}
                setinformacao={dispatch}
                label_element='email'
                />
            </Box>
            <Box
            m={3}
            >
                <InputComponent
                placeholder={(t("login.password.placeholder"))}
                label={
                    <Translator
                        path="login.password.label"
                        />
                    }
                informacao={state.password}
                setinformacao={dispatch}
                password={true}
                label_element='password'
                />
            </Box>
            <NavigationButtons
            action={null}
            screen='login'
            setscreen={setscreen}
            buttonstatus={buttonstatus}
            />
        </>
    )

}