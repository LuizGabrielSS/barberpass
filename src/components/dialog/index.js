import React, { useEffect, useState } from 'react'
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography} from '@mui/material'

import ButtonComponent from '../button'

export default function DialogComponent({open,title,text,action,navigate}){

    const[OpenDialog,SetOpenDialog] = useState(false)

    useEffect(() => {
        if(open){
            SetOpenDialog(true)
        }
    },[open])

    function defineAction(){
        if(action){
            SetOpenDialog(false);
            navigate('/')
        }else{
            SetOpenDialog(false);
        }
    }

    return(
        <Box>
            <Dialog 
                open={OpenDialog}
                onClose={() => SetOpenDialog(false)}
                PaperProps={{
                    style: {
                        borderRadius:"10%",
                        borderWidth:'3px',
                        borderStyle:"solid",
                        borderColor:"rgb(184, 115, 51)",
                    }
                }}
            >
                <DialogTitle>
                    <Typography
                        style={{ fontWeight: 'bold' }}
                        variant={window.innerWidth>420 ? 'h6' : 'body1'}
                    >
                        {title}
                    </Typography>
                </DialogTitle>
                <Divider/>
                <DialogContent>
                    <Box
                    m={2}
                    variant={window.innerWidth>420 ? 'body1' : 'body2'}
                    >
                        <Typography>
                            {text}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <ButtonComponent
                    action={() => defineAction()}
                    color='primary'
                    variant='contained'
                    text='OK'
                    />
                </DialogActions>
            </Dialog>
        </Box>
    )

}