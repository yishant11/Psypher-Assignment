import { Box, Button, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Container = styled(Grid)`
  padding:50px;
  width:80%;
  display:flex;
  gap:80;
`

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`

const ButtonWrapper = styled(Box)`
  padding: 15px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
`

const Buttn = styled(Button)`
  display:flex;
  margin-left:auto;
  background:#FB641B;
  color:white;
  height: 51px;
  width:250px;
  border-radius:2px;
  &:hover{
    background:#FB641B;
  }
`

const ShopBtn = styled(Button)`
  background:#2874f0;
  width:250px;
  border-radius:2px;
  color:white;
  &:hover{
    background:#2874f0;
  }
`

const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);


  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';


  return (
    <div>
      {
        cartItems.length ?
          <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
              </Header>
              {
                cartItems.map(item => (
                  <CartItem item={item} />
                ))
              }
              <ButtonWrapper>
                <Buttn>Place Order</Buttn>
              </ButtonWrapper>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <TotalBalance cartItems={cartItems} />
            </Grid>
          </Container>
          :
          <Box style={{ marginTop:90, marginLeft:40, height:200,widht:280, background:"#ffffff", fontSize: 25, fontWeight: 600, display: "flex", flexDirection:"column", gap:15, justifyContent: "center", alignItems: "center", width: 1450, height: 560 }}>
            <img src={imgurl} alt='emptyimage' style={{background:"transparent" , height:200, width:280}}/>
              <Typography>Your Cart Is Empty</Typography>
              <Link to={`/`}><ShopBtn>Shop Now</ShopBtn></Link>
          </Box>
      }
      <Footer/>
    </div>
  )
}

export default Cart;