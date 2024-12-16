import { Box, Typography, styled } from '@mui/material';
import React from 'react'

const Component = styled(Box)`
    display:flex;
    flex-direction:row;
    gap:225px;
    background: #f2f2f2;
    justify-content:space-around;
    position:fixed;
    height:50px;
    width:99.9%;
    top:660px;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
`

const Footer = () => {
  return (
    <Component>
      <Box>
        <Typography style = {{fontSize:14, color:"#878787"}}>&nbsp;&nbsp;&nbsp; Policies: Returns Policy | Terms of use | Security | Privacy | Infringement</Typography>
      </Box>
      <Box>
        <Typography style = {{fontSize:14, color:"#878787"}}>© 2007-2024 Flipkart.com</Typography>
      </Box>
      <Box>
        <Typography style = {{fontSize:14, color:"#878787"}}>Need help? Visit the Help Center or Contact Us</Typography>
      </Box>
    </Component>
  )
}

export default Footer;
