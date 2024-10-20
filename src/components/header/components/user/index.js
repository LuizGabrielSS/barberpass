import React, { useState } from 'react'
import { Box, Divider, Menu, MenuItem } from '@mui/material';

import ButtonComponent from '../../../button'
import {Translator} from '../../../translate';
import store from '../../../../redux'
import { clean } from '../../../../services/keep_token'

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

function ItemComponent({name,action,Icon}){

    return(
        <MenuItem
        onClick={action}
        >
            <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <Icon/>
                {name}
            </Box>
        </MenuItem>
    )

}

function UserLogged({user,navegacao}){

    const[open,setopen] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setopen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setopen(false);
    };

    return (
        <Box>
            <ButtonComponent
                action={handleClick}
                text={user}
                variant='contained'
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ margin: 1 }}
            >
                <ItemComponent
                Icon={PersonIcon}
                action={() => navegacao('/perfil')}
                name='Perfil'
                />
                <Divider/>
                <ItemComponent
                Icon={SettingsIcon}
                action={() => navegacao('/config')}
                name='Config'
                />
                <Divider/>
                <ItemComponent
                Icon={LogoutIcon}
                action={() => clean()}
                name='Log out'
                />
            </Menu>
        </Box>
    );

}

export default function UserComponent({navegacao}){

    return(
        <Box>
            {
                store.getState().user.user === null
                ?   <ButtonComponent
                    action={()=> navegacao('/login')}
                    text={
                        <Translator
                        path="header.login"
                        />
                    }
                    variant='contained'
                    />
                :   <UserLogged
                        user={store.getState().user.user}
                        navegacao={navegacao}
                    />
            }
        </Box>
    )
}