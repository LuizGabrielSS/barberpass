import React from 'react'
import {Autocomplete, Box,TextField} from '@mui/material'
import { useSelector } from 'react-redux';

import {Translator} from '../translate'

export default function AutocompleteComponent({informacao,setinformacao,options,label,placeholder,label_element,onDark=false,readOnly=false}){

    const theme = useSelector((state) => state.mode.darkmode);

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
            <Autocomplete
            disablePortal
            defaultValue={informacao}
            noOptionsText={<Translator path="components.noOptionsText"/>}
            options={options}
            disableClearable
            readOnly={readOnly}
            renderInput={(params) => 
                <TextField 
                {...params}
                placeholder={placeholder} 
                label={label} 
                variant="filled"
                onChange={(event,value) => input_info(value)}
                InputProps={{
                    ...params.InputProps,
                    style: { 
                        color: theme.mode === "dark" && onDark ? 'white' : 'black',
                    }
                }}
                />
            }
            />
        </Box>
    )
}