import React from 'react'
import {Box} from '@mui/material'

import ButtonComponent from '../../../../components/button'
import {Translator} from '../../../../components/translate'

export default function NavigationButtons({action,screen,setscreen,buttonstatus}){

    if(screen === 'login'){
        return(<>
            <Box
            m={3}
            >
                <ButtonComponent
                action={action}
                text={<Translator
                    path="login.button.login"
                    />}
                color='primary'
                variant='contained'
                status={!buttonstatus}
                />
            </Box>
            <Box
            m={3}
            >
                <ButtonComponent
                action={() => setscreen('password')}
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
                action={() => setscreen('sign_up')}
                text={<Translator
                    path="login.button.sign_up"
                    />}
                color='primary'
                />
            </Box>
        </> )
    }else if(screen === 'password'){
        return(<>
        <Box
            m={3}
            >
                <ButtonComponent
                action={action}
                text={<Translator
                    path="login.button.password"
                    />}
                color='primary'
                variant='contained'
                status={!buttonstatus}
                />
            </Box>
            <Box
            m={3}
            >
                <ButtonComponent
                action={() => setscreen('login')}
                text={<Translator
                    path="login.button.login"
                    />}
                color='primary'
                variant='text'
                />
            </Box>
            <Box
            m={3}
            >
                <ButtonComponent
                action={() => setscreen('sign_up')}
                text={<Translator
                    path="login.button.sign_up"
                    />}
                color='primary'
                />
            </Box>
        </>)
    }else if(screen === 'signup'){
        return(<>
        <Box
            m={3}
            >
            </Box>
            <Box
            m={3}
            >
                <ButtonComponent
                action={action}
                text={<Translator
                    path="login.button.sign_up"
                    />}
                color='primary'
                variant='contained'
                status={!buttonstatus}
                />
            </Box>
            <Box
            m={3}
            >
                <ButtonComponent
                action={() => setscreen('password')}
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
                action={() => setscreen('login')}
                text={<Translator
                    path="login.button.login"
                    />}
                color='primary'
                />
            </Box>
        </>)
    }

}