import React, {useReducer} from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import ContainerComponent from '../../components/container'
import InputComponent from '../../components/input/complex'
import AutoCompleteComponent from '../../components/autocomplete'
import ButtonComponent from '../../components/button'
import {Translator} from '../../components/translate'


const initialState = {
    'email':null,
    'number':null,
    'modalidade':null,
    'name':null,
    'mensagem':null,
}

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

const options_modalidades = [
    {'id':'1','label':'cliente'},
    {'id':'2','label':'prestador de serviço'},
    {'id':'2','label':'outro'},
]

export default function ContactScreen(){

    const { t } = useTranslation()

    const[state,dispatch] = useReducer(reducer,initialState)

    return(
        <ContainerComponent>
            <Box
            pt={2}
            >
                <Box
                p={2}
                m={2}
                sx={{
                    borderRadius:"10%",
                    borderWidth:'2px',
                    borderStyle:"solid",
                    borderColor:'primary.main',
                }}
                >
                    <Box
                    m={2}
                    >
                        <InputComponent
                        informacao={state.name}
                        setinformacao={dispatch}
                        label_element='name'
                        placeholder={(t("contact.name.placeholder"))}
                        label={
                            <Translator
                                path="contact.name.label"
                                />
                            }
                        />
                    </Box>
                    <Box
                    m={2}
                    >
                        <InputComponent
                        informacao={state.email}
                        setinformacao={dispatch}
                        label_element='email'
                        placeholder={(t("contact.email.placeholder"))}
                        label={
                            <Translator
                                path="contact.email.label"
                                />
                            }
                        />
                    </Box>
                    <Box
                    m={2}
                    >
                        <InputComponent
                        informacao={state.number}
                        setinformacao={dispatch}
                        label_element='number'
                        placeholder={(t("contact.number.placeholder"))}
                        label={
                            <Translator
                                path="contact.number.label"
                                />
                            }
                        />
                    </Box>
                    <Box
                    m={2}
                    >
                    <AutoCompleteComponent
                    informacao={state.modalidade}
                    label={
                        <Translator
                            path="contact.modalidade.label"
                            />
                        }
                    options={options_modalidades}
                    placeholder={(t("contact.modalidade.placeholder"))}
                    setinformacao={dispatch}
                    label_element='modalidade'
                    />
                    </Box>
                    <Box
                    m={2}
                    >
                        <InputComponent
                        informacao={state.mensagem}
                        setinformacao={dispatch}
                        label_element='mensagem'
                        placeholder={(t("contact.mensagem.placeholder"))}
                        label={
                            <Translator
                                path="contact.mensagem.label"
                                />
                            }
                        multiline={true}
                        />
                    </Box>
                    <Box
                    m={2}
                    >
                        <ButtonComponent
                        action={null}
                        text={<Translator
                            path="contact.button.send"
                            />}
                        color='primary'
                        variant='contained'
                        // status={!buttonstatus}
                    />
                    </Box>
                </Box>
            </Box>
        </ContainerComponent>
    )

}