import React, { useState,useEffect } from 'react'
import { Box, TextField,FormControl,FormHelperText, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function InputComponent({password=false,placeholder,label,informacao,setinformacao,label_element='',type="text",status_helper=false,multiline=false}){

    const[showPassword,setshowPassword] = useState(false)

    const[status,setstatus] = useState(false)

    useEffect(() => {
        if(password === false){
            setshowPassword(true)
        }
    },[password])

    useEffect(() => {
        if(informacao === null){
            setstatus(false)
        }else{
            if(informacao.replace(" ","").length > 0){
                setstatus(false)
            }else{
                setstatus(true)
            }
            if(status_helper){
                setstatus(true)
            }
        }
    },[informacao,status_helper])

    function input_info(valor){
        setinformacao({
            label:label_element,
            value:valor
        })
    }

    return(
        <Box
        m={1}
        >
            <FormControl 
            error={status}
            variant="standard"
            >
                <TextField
                error={status}
                fullWidth
                placeholder={placeholder}
                variant="filled"
                size="small"
                label={label}
                type={showPassword 
                    ? type
                    : 'password'
                }
                multiline={multiline}
                onChange={(value) => input_info(value.target.value)}
                defaultValue={informacao}
                slotProps={{
                    input:{
                        endAdornment:
                            <>
                            {password
                            ? <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setshowPassword(!showPassword)}
                            edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            : null}
                            </>
                    }
                }}
                />
            </FormControl>
            {
                status
                ?   <>
                    {
                        status_helper
                        ? <FormHelperText error id="component-error-text">As senhas estão diferentes</FormHelperText>
                        : <FormHelperText error id="component-error-text">O campo não pode ficar em branco</FormHelperText>
                    }
                    </>
                : null
            }
        </Box>
    )

}