import React, {useState} from 'react'
import {Box} from '@mui/material'
import { useTranslation } from 'react-i18next'

import ContainerComponent from '../../components/container'
import InputComponent from '../../components/input'
import {Translator} from '../../components/translate'
import ButtonComponent from '../../components/button'
import fundo from './fundo.png'

export default function LoginScreen(){

    const[user,setuser] = useState("")

    const[password,setpassword] = useState("")

    const { t } = useTranslation()

    return(
        <ContainerComponent>
            <Box
            height={window.innerHeight*87/100}
            sx={{
                backgroundImage:`url(${fundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
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
                    <Box
                    m={3}
                    >
                        <InputComponent
                        placeholder={(t("login.user.placeholder"))}
                        label={
                            <Translator
                                path="login.user.label"
                                />
                            }
                        informacao={user}
                        setinformacao={setuser}
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
                        informacao={password}
                        setinformacao={setpassword}
                        password={true}
                        />
                    </Box>
                    <Box
                    m={3}
                    >
                        <ButtonComponent
                        action={null}
                        text={<Translator
                            path="login.button.login"
                            />}
                        color='primary'
                        variant='contained'
                        />
                    </Box>
                    <Box
                    m={3}
                    >
                        <ButtonComponent
                        action={null}
                        text={<Translator
                            path="login.button.password"
                            />}
                        color='primary'
                        variant='text'
                        />
                    </Box>
                    <Box
                    m={3}
                    >
                        <ButtonComponent
                        action={null}
                        text={<Translator
                            path="login.button.sign_up"
                            />}
                        color='primary'
                        />
                    </Box>
                </Box>
            </Box>
        </ContainerComponent>
    )

}