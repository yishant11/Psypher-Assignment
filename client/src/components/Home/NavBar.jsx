import React from 'react'
import { Box, Typography } from '@mui/material'
import { navData } from '../../constants/data'
import styled from '@emotion/styled'


const Component = styled(Box)`
    display:flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
    text-align:center;
`

const Container = styled(Box)`
    padding: 12px 8px;
    font-weight:600;
    font-family:inherit;
    cursor:pointer
`

const Text = styled(Typography)`
    font-size:14px;
`

const NavBar = () => {
  return (
    <Box style={{background:"#fff"}}>
    <Component>
      {
        navData.map(data => (
          <Container>
            <img src={data.url} alt="" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))
      }
    </Component>
    </Box>
  )
}

export default NavBar
