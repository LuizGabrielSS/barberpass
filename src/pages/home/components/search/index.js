import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next'

import {Translator} from '../../../../components/translate'

export default function SearchComponent({data,setsearchdata}){

    const { t } = useTranslation()

    const [search,setsearch] = useState('')

    const searchFunction = (text) => {
        const updatedData = data.filter((item) => {
            const text_data = text.toUpperCase()
            const item_data = `${item.nome.toUpperCase()} and ${item.descricao.toUpperCase()} and ${item.categoria.toUpperCase()}  and ${item.endereco.toUpperCase()}`
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
            label={
                <Translator
                    path="home.search.label"
                    />
                }
            placeholder={(t("home.search.placeholder"))}
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