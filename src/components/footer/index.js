import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialComponent(){

  return(
    <Box
    m={2}
    display='flex'
    alignItems='center'
    justifyContent='center'
    >
      <LinkedInIcon
      sx={{
        color:"#fff"
      }}
      />
      <InstagramIcon
      sx={{
        color:"#fff"
      }}
      />
    </Box>
  )
}

export default function FooterComponent(){

    const Footer = styled('footer')(({ theme }) => ({
      position: 'relative',
      bottom: 0,
      width: '100%',
      backgroundColor: "#400112",
      padding: theme.spacing(2),
      textAlign: 'center',
    }));


    return (
      <>
        <Footer>
          <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          >
            <Typography
            sx={{
              color:"#fff"
            }}
            >
              SoinPass
            </Typography>
            <SocialComponent/>
          </Box>
        </Footer>
      </>
    );
}