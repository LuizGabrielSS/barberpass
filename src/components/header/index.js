import React,{useState} from 'react'
import { Box,CssBaseline, Button,IconButton,CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { useLocation, useNavigate } from 'react-router-dom';

//Icones
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

import ButtonComponent from '../button'
import {Translator} from '../translate';
import SmallScreen from './components/smallscreen'
import BigScreen from './components/bigscreen'

export default function HeaderComponent({altura}){

    const[OpenList,SetOpenList] = useState(false)

    const drawerWidth = window.innerWidth> 420 ? (window.innerWidth/7) : (window.innerWidth/2)

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(OpenList && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));

    const localizacao = useLocation();

    const navegacao = useNavigate()

    return(
        <Box
        sx={{display:'flex'}}
        >
            <CssBaseline/> 
            <AppBar 
            position="fixed" 
            open={OpenList}
            sx={{ height: altura }}
            >
                <Box
                sx={{
                    backgroundColor:"primary.main",
                    justifyContent:"space-between",
                    alignItems:"center",
                    display:"flex"
                }}
                py={1}
                >
                    <Box
                    sx={{
                        display:"flex",
                        justifyContent:"space-between"
                    }}
                    mx={3}
                    >
                        {
                            window.innerWidth> 420 
                            ? null
                            
                            : <IconButton onClick={() => SetOpenList(!OpenList)}>
                            {
                                OpenList
                                ?<CloseIcon/>
                                :<ReorderIcon/>
                            }
                        </IconButton>
                        }
                        <Button
                        variant="text"
                        onClick={()=> navegacao('/')}
                        >
                            {
                                window.innerWidth> 420 
                                ? <CardMedia
                                sx={{ width: window.innerWidth/7 }}
                                src={`${process.env.PUBLIC_URL}/logo/logo_with_name.png`}
                                component="img"
                                />
                                : <CardMedia
                                sx={{ width: window.innerWidth/7 }}
                                src={`${process.env.PUBLIC_URL}/logo/logo_without_back.png`}
                                component="img"
                                />
                            }
                        </Button>
                        {
                            window.innerWidth> 420 
                                ?   <BigScreen
                                    localizacao={localizacao}
                                    navegacao={navegacao}
                                />
                                
                                : null
                        }
                    </Box>
                    <Box
                    sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                    }}
                    mx={1}
                    >
                        <ButtonComponent
                        action={()=> navegacao('/login')}
                        text={
                            <Translator
                            path="header.login"
                            />
                        }
                        variant='contained'
                        />
                    </Box>
                </Box>
            </AppBar>
            {
                window.innerWidth> 420 
                    ? null
                    
                    : <SmallScreen
                    localizacao={localizacao}
                    navegacao={navegacao}
                    OpenList={OpenList}
                    SetOpenList={SetOpenList}
                    drawerWidth={drawerWidth}
                    />
            }
        </Box>
    )

}