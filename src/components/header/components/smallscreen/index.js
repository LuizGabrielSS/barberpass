//Externos
import React from 'react'
import { Box,List, Typography,ListItem,Drawer,ListItemText,ListItemIcon,ListItemButton } from '@mui/material'

//icones
import TableViewIcon from '@mui/icons-material/TableView';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

//Internos
import {Translator} from '../../../translate';

export default function SmallScreen({OpenList,SetOpenList,drawerWidth,localizacao,navegacao}){

    return(
        <Drawer variant="temporary" open={OpenList} onClose={() => SetOpenList(!OpenList)}
        >
            <Box sx={{ width: drawerWidth }}>
                <List>
                    <SmallItems
                    Icone={TableViewIcon}
                    action={()=> navegacao('/plans')}
                    text={
                        <Translator
                        path="header.price"
                        />
                    }
                    />
                    <SmallItems
                    Icone={AddLocationAltIcon}
                    action={()=> navegacao('/map')}
                    text={
                        <Translator
                        path="header.map"
                        />
                    }
                    />
                    <SmallItems
                    Icone={ContactPageIcon}
                    action={()=> navegacao('/contact')}
                    text={
                        <Translator
                        path="header.contact"
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
