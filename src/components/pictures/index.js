import React,{useState} from 'react'
import { Box,Avatar} from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import ChangeImage from './change'

export default function PictureComponent({picture,square,changeOption=false,dispatch=null}){

    const[open,setopen] = useState(false)

    const handleMouseEnter = (e) => {
        changeOption ? e.currentTarget.style.cursor = 'pointer' : e.currentTarget.style.cursor = 'default';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.cursor = 'default';
    };

    return(
        <Box
        sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            position: "relative"
        }}
        >
            {
                changeOption
                ? <ChangeImage
                dispatch={dispatch}
                open={open}
                setopen={setopen}
                />
                : null
            }
            <Avatar
            onClick={
                () => changeOption ? setopen(true) : null
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src={picture}
            sx={{
                width: window.innerWidth> 420 ?"50%" :"70%",
                height: window.innerWidth> 420 ?"50%" :"70%",
            }}
            variant={square ? 'square' : 'circular'}
            />
        </Box>
    )

}