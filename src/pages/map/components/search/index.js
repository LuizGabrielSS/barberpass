import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import opencage from 'opencage-api-client'
import SearchIcon from '@mui/icons-material/Search';

import ButtonComponent from '../../../../components/button'

export default function SearchComponent({setposition}){

    const[locations,setlocations] = useState([])

    const[inputText,SetinputText] = useState("")

    const initializeAutocomplete = async (inputId) => {
        SetinputText(inputText)
        if(inputId.length > 3){
            const apiKey = process.env.REACT_APP_MAP;
            const response = await opencage.geocode({ q: inputId, key: apiKey });   
            if (response.status.code === 200) {
                setlocations(response.results.slice(0, 5));
            }
        else{
            setlocations([])
        }
    }
    };

    return(
        <Box
        m={1}
        bgcolor="white"
        width="75%"
        >
            <TextField
            label='Pesquise uma localizaçao'
            placeholder='Localizaçao'
            onChange={(value) => {initializeAutocomplete(value.target.value)}}
            defaultValue={inputText}
            fullWidth
            slotProps={{
                input:{
                    endAdornment:
                        <SearchIcon/>
                    }
                }}
            />
            {
                locations.map((location,index) => {
                    return(
                        <Box
                        key={index}
                        >
                            <ButtonComponent
                            action={() => {
                                setposition([location.geometry.lat,location.geometry.lng]);
                                setlocations([]);
                                SetinputText("")
                                }
                            }
                            text={location.formatted}
                            variant='link'
                            />
                        </Box>
                    )
                })
            }
        </Box>
    )

}