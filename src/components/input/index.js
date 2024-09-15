import React, { useState,useEffect } from 'react'
import { Box, TextField,FormControl,FormHelperText, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function InputComponent({password=false,variant="filled",placeholder,label,status=false,helpertext="",informacao,setinformacao}){

    const[showPassword,setshowPassword] = useState(false)

    useEffect(() => {
        if(password === false){
            setshowPassword(true)
        }
    },[password])

    return(
        <Box
        m={1}
        >
            <FormControl 
            error={status}
            variant="standard"
            >
                <TextField
                fullWidth
                placeholder={placeholder}
                variant={variant}
                size="small"
                label={label}
                type={showPassword ? 'text' : 'password'}
                onChange={(value) => setinformacao(value.target.value)}
                defaultValue={informacao}
                endAdornment={
                    password
                    ? null
                    : <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
            {
                status
                ? <FormHelperText id="component-error-text">{helpertext}</FormHelperText>
                : null 
            }
        </Box>
    )

}