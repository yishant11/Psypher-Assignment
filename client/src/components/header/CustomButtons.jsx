import React from 'react'
import { styled, Box, Button, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../Login/Login';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainWrapper = styled(Box)`
  display:flex;
  margin: 0 3% 0 auto;
  & > button, & > p, & > div{    {/* handling child elements for css*/}
      margin-right:20px;
      font-size: 14px;
      align-item:center;
  }
`

const CartCSS = styled(Box)`
  display:flex;
  gap:10px;
`

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: bold;
  height:32px;
  &:hover{
    cursor:pointer;
    background:white;
  }
`


const CustomButtons = () => {

  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);
  const HandleDialog = () => {
    setOpen(true);
  }


  return (
    <MainWrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} /> :
          <LoginButton variant="contained" onClick={() => HandleDialog()}> Login</LoginButton>
      }

      <Typography style={{ marginLeft: 14, marginTop: 5, width: 135, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Become a Seller</Typography>
      <Typography style={{ marginLeft: 15, marginTop: 5, width: 85, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>More</Typography>

      <CartCSS>
        <Link to={`/cart`}>
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon style={{ marginTop: 5, cursor: "pointer", marginLeft: -15, color: "white" }} />
          </Badge>
        </Link>
        <Link to={`/cart`}>
          <Typography style={{ marginTop: 5, cursor: "pointer", marginLeft: -1, color: "white", textDecoration: "none" }}>Cart</Typography>
        </Link>
      </CartCSS>
      <Login open={open} setOpen={setOpen} />
    </MainWrapper >
  )
}

export default CustomButtons;
