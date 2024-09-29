import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import { useTranslation } from 'react-i18next'

import InputComponent from '../../../../components/input/complex'
import AutoCompleteComponent from '../../../../components/autocomplete'
import {Translator} from '../../../../components/translate'
import NavigationButtons from '../navigation'

import validate_field from '../validation'

const options_modalidades = [
    {'id':'1','label':'cliente'},
    {'id':'2','label':'prestador de serviço'},
]

export default function SignUpComponent({setscreen,state,dispatch,altura,setLoading,setStatus,dispatchDialog}){

    const[buttonstatus,setbuttonstatus] = useState(false)

    useEffect(() => {
        validate_field(state,'signup',setbuttonstatus)
    },[state])

    const { t } = useTranslation()

    return(
        <Box
        sx={{
            height: altura*70/100,
            overflow: 'scroll',
            '::-webkit-scrollbar': {
                width: '0px', // Esconde a barra de rolagem no WebKit
                background: 'transparent', // Esconde a barra de rolagem no WebKit
            },
        }}      
        >
            <Box
            m={3}
            >
                <InputComponent
                placeholder={(t("login.name.placeholder"))}
                label={
                    <Translator
                        path="login.name.label"
                        />
                    }
                informacao={state.name}
                setinformacao={dispatch}
                label_element='name'
                />
            </Box>
            <Box
                m={3}
                >
                <InputComponent
                placeholder={(t("login.number.placeholder"))}
                label={
                    <Translator
                        path="login.number.label"
                        />
                    }
                informacao={state.number}
                setinformacao={dispatch}
                label_element='number'
                type="number"
                />
            </Box>
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
                <AutoCompleteComponent
                informacao={state.modalidade}
                label={
                    <Translator
                        path="login.modalidade.label"
                        />
                    }
                options={options_modalidades}
                placeholder={(t("login.modalidade.placeholder"))}
                setinformacao={dispatch}
                label_element='modalidade'
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
            <Box
            m={3}
            >
                <InputComponent
                placeholder={(t("login.repeat_password.placeholder"))}
                label={
                    <Translator
                        path="login.repeat_password.label"
                        />
                    }
                informacao={state.repeat_password}
                setinformacao={dispatch}
                password={true}
                label_element='repeat_password'
                status_helper={state.repeat_password !== state.password}
                />
            </Box>
           <NavigationButtons
            action={null}
            screen='signup'
            setscreen={setscreen}
            buttonstatus={buttonstatus}
            /> 
        </Box>
    )
}