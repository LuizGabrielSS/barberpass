import React, { useState } from 'react'
import { Box, MenuItem, Select } from '@mui/material'

export default function FilterComponent({setdataShow,originalData,categorias}){

    const[filterValue,setfilterValue] = useState("")

    const filterFunction = (text) => {
        const updatedData = originalData.filter((item) => {
            const text_data = text.toUpperCase()
            const item_data = `${item.categoria.toUpperCase()}`
        return item_data.indexOf(text_data) > -1
        });
        setdataShow(updatedData)
        setfilterValue(text)
    }

    return(
        <Box
        m={1}
        bgcolor="white"
        >
            <Select
            value={filterValue}
            onChange={(value) => {filterFunction(value.target.value)}}
            label="Categorias"
            placeholder='Categorias'
            autoWidth
            >
                <MenuItem value="">
                    <em>Todos</em>
                </MenuItem>
                {
                    categorias.map((item) => {
                        return(
                            <MenuItem
                            key={item.id}
                            value={item.nome}
                            >
                                {item.nome}
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </Box>
    )

}