import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'


const Heading = styled(Box)`
  padding: 15px 24px;
  background:#fff;
  width:350px;
  border-bottom: 1px solid #f0f0f0;
  `
  
  const Header = styled(Typography)`
  font-size: 18px;
  color:#878787;
`
const Container = styled(Box)`
  padding: 15px 24px;
  background:#ffffff;
  width:350px;
  & > p{
    margin-bottom: 20px;
    font-size:16px;
  }
`
const Price = styled(Box)`
  float: right;
`

const TotalBalance = ({ cartItems }) => {
  const [totalcost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    let costt = 0;
    let dis = 0;
    for (let i = 0; i < cartItems.length; i++) {
      costt += cartItems[i].price.mrp;
      dis += cartItems[i].price.cost;
    }
    setTotalCost(costt);
    setDiscount(dis);
  }, [cartItems]);


  return (
    <Box style={{marginLeft:15, paddingBottom:35}}>
      <Heading>
        <Header>Price Details</Header>
      </Heading>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component="span">₹{totalcost}</Price>
        </Typography>
        <Typography>Discount
          <Price component="span" style={{color:"#388e3c" , fontSize:18}}>₹{discount}</Price>
        </Typography>
        <Typography style={{borderBottom:"1px solid #f0f0f0"}}>Dilevery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography style={{borderBottom:"1px solid #f0f0f0"}}>Total Amount
          <Price component="span" >₹{totalcost-discount+40}</Price>
        </Typography>
        <Typography style={{color:"#388e3c", fontWeight:400 , fontSize:18}}>You will save 
          <Box component="span" >  ₹{discount} </Box>
           on this order
        </Typography>
      </Container>
    </Box>
  )
}

export default TotalBalance;
