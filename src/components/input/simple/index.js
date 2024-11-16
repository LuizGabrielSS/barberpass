import React from 'react'
import { Box, TextField,FormControl, FormHelperText } from '@mui/material'
import { useSelector } from 'react-redux';

export default function InputComponent({placeholder,label,informacao,setinformacao,status=false,multiline=false,onDark=false,password=false}){

    const theme = useSelector((state) => state.mode.darkmode);

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
                    multiline={multiline}
                    onChange={(value) => setinformacao(value.target.value)}
                    defaultValue={informacao}
                    InputProps={{
                        style: { 
                            color: theme.mode === "dark" && onDark ? 'white' : 'black',
                        }
                    }}
                />
            </FormControl>
            {
                status
                ? <FormHelperText error id="component-error-text">O campo não pode ficar em branco</FormHelperText>
                : null
            }
        </Box>
    )

}