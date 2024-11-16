import React, { useState } from 'react'
import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function GaleriaComponent({galeria}){

    const[open,setopen] = useState(false)

    return(
        <Box
        // sx={{
        //     display:"flex",
        //     flexDirection:'column',
        //     flexWrap:'wrap'
        // }}
        >
            <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            onClick={()=>setopen(!open)}
            sx={{
                cursor: 'pointer'
            }}
            >
                <Box
                m={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h4"
                        : "h6"
                    }
                    >
                        Galeria de imagens
                    </Typography>
                </Box>
                <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                >
                    {
                        open
                        ? <KeyboardArrowUpIcon color='primary.main'/>
                        : <KeyboardArrowDownIcon color='primary.main'/>
                    }
                </Box>
            </Box>
            {
                open
                ?   <ImageList variant="masonry" cols={2} gap={8}>
                        {galeria.map((item) => (
                            <ImageListItem key={item.id}>
                                <img
                                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.image}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                : null 
            }
        </Box>
    )

}