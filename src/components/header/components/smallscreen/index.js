import React from 'react'
import { Box,List, Typography,ListItem,Drawer,ListItemText,ListItemIcon,ListItemButton } from '@mui/material'
import TableViewIcon from '@mui/icons-material/TableView';

import {Translator} from '../../../translate';

export default function SmallScreen({OpenList,SetOpenList,drawerWidth,localizacao,navegacao}){

    return(
        <Drawer variant="temporary" open={OpenList} onClose={() => SetOpenList(!OpenList)}
        >
            <Box sx={{ width: drawerWidth }}>
                <List>
                    <SmallItems
                    Icone={TableViewIcon}
                    action={()=> navegacao('/precos')}
                    text={
                        <Translator
                        path="header.price"
                        />
                    }
                    />
                </List>
            </Box>
            
        </Drawer>
    )
}

function SmallItems({action,text,Icone}){
    return(
        <Box>
            <ListItem>
                <ListItemButton
                onClick={action}
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
