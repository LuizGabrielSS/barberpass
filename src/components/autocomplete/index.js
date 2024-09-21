import React from 'react'
import {Autocomplete, Box,TextField} from '@mui/material'

import {Translator} from '../translate'

export default function AutocompleteComponent({informacao,setinformacao,options,label,placeholder,label_element}){

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
            renderInput={(params) => 
                <TextField 
                {...params}
                placeholder={placeholder} 
                label={label} 
                variant="filled"
                onChange={(event,value) => input_info(value)}
                />
            }
            />
        </Box>
    )
}