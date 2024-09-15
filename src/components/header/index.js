import React,{useState} from 'react'
import { Box, Typography,CssBaseline, Button,List,ListItem,IconButton,Drawer,ListItemText,ListItemIcon,ListItemButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

import ButtonComponent from '../button'
import {Translator} from '../translate';

function BigScreen(){

    return(
        <Box
        mx={2}
        sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
        }}
        >
            <ButtonComponent
            action={null}
            text={
                <Translator
                path="header.price"
                />
            }
            active={true}
            variant="outlined"
            />
        </Box> 
    )

}

function SmallItems({action,text,Icone}){
    return(
        <Box>
            <ListItem>
                <ListItemButton
                onClick={() => action}
                >
                        <ListItemIcon
                        >
                            <Icone
                            />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                            bold
                            sx={{
                                color:"#000"
                            }}
                            >
                                {text}
                            </Typography>
                        </ListItemText>
                </ListItemButton>    
            </ListItem>            
        </Box>
    )
}

function SmallScreen({OpenList,SetOpenList,drawerWidth}){

    return(
        <Drawer variant="temporary" open={OpenList} onClose={() => SetOpenList(!OpenList)}
        >
            <Box sx={{ width: drawerWidth }}>
                <List>
                    <SmallItems
                    Icone={ReorderIcon}
                    action={null}
                    text="test"
                    />
                </List>
            </Box>
            
        </Drawer>
    )
}

export default function HeaderComponent(){

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

    return(
        <Box
        sx={{display:'flex'}}
        >
            <CssBaseline/> 
            <AppBar 
            position="fixed" 
            open={OpenList}
            >
                <Box
                sx={{
                    backgroundColor:"primary.main",
                    justifyContent:"space-between",
                    alignItems:"center",
                    display:"flex"
                }}
                >
                    <Box
                    sx={{
                        display:"flex",
                        justifyContent:"space-between"
                    }}
                    m={3}
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
                        >
                            <Typography
                            variant={
                                window.innerWidth> 420 
                                ? "h4"
                                : "body2"
                            }
                            color="text.main"
                            
                            >
                                BarberPass
                            </Typography>
                        </Button>
                        {
                            window.innerWidth> 420 
                                ?   <BigScreen/>
                                
                                : null
                        }
                    </Box>

                    {/* aqui é fixo*/}
                    <Box
                    sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                    }}
                    mx={1}
                    >
                        
                        <ButtonComponent
                        action={null}
                        text={
                            <Translator
                            path="header.login"
                            />
                        }
                        active={true}
                        variant='contained'
                        />
                    </Box>
                </Box>
            </AppBar>
            {
                window.innerWidth> 420 
                    ? null
                    
                    : <SmallScreen
                    OpenList={OpenList}
                    SetOpenList={SetOpenList}
                    drawerWidth={drawerWidth}
                    />
            }
        </Box>
    )

}