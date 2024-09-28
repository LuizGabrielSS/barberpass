import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchComponent({data,setsearchdata,label,placeholder}){

    const [search,setsearch] = useState('')

    const searchFunction = (text) => {
        const updatedData = data.filter((item) => {
            const text_data = text.toUpperCase()
            const item_data = `${item.nome.toUpperCase()} and ${item.price.toUpperCase()}`
        return item_data.indexOf(text_data) > -1
        });
        setsearchdata(updatedData)
        setsearch(text)
    }

    return(
        <Box
        m={3}
        >
            <TextField
            label={label}
            placeholder={placeholder}
            onChange={(value) => {searchFunction(value.target.value)}}
            fullWidth
            defaultValue={search}
            slotProps={{
                input:{
                    endAdornment:
                        <SearchIcon/>
                    }
                }}
            />
        </Box>
    )

}