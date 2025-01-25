import React, { useState,useEffect } from 'react'
import { Box, TextField,FormControl,FormHelperText, IconButton,InputAdornment  } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSelector } from 'react-redux';

export default function InputComponent({password=false,placeholder,label,informacao,setinformacao,label_element='',type="text",status_helper=false,multiline=false,onDark=false,readOnly=false}){

    const[showPassword,setshowPassword] = useState(false)

    const[status,setstatus] = useState(false)

    const theme = useSelector((state) => state.mode.darkmode);

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
            width="100%"
        >
            <FormControl 
                error={status}
                variant="standard"
                fullWidth
            >
                <TextField
                    error={status}
                    fullWidth
                    placeholder={placeholder}
                    variant="filled"
                    label={label}
                    type={showPassword 
                        ? type
                        : 'password'
                    }
                    multiline={multiline}
                    onChange={(value) => input_info(value.target.value)}
                    defaultValue={informacao}
                    inputProps={{
                        readOnly: readOnly,
                    }}
                    InputProps={{
                        style: { 
                            color: onDark ? 'white' : 'black',
                        },
                        endAdornment: password ? (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setshowPassword(!showPassword)}
                                sx={{
                                    color: 'text.secondary'
                                }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        ) : null
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