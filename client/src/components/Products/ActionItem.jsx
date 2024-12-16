import { Box, Button, styled } from '@mui/material';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/CartActions.js';
import { useState } from 'react';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  position: "sticky",
  top: 0,
  zIndex: 1,
  [theme.breakpoints.down('lg')]: {
    padding: "20px 40px"
  }
}));

const Image = styled('img')({
  width: "90%"
});


const StyleButton = styled(Button)(({ theme }) => ({
  width: "46%",
  height: "50",
  marginLeft: "13",
  marginTop: 6,
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: "44%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "46%",
  }
}));

const ActionItem = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    if(id in product){
      return;
    }
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }

  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0", }}>
        <Image src={product.url} alt='productImage' />
      </Box>
      <StyleButton style={{ background: "#ff9f00" }} onClick={() => addItemToCart()} variant="contained"><ShoppingCartIcon />Add to Cart</StyleButton>
      <StyleButton style={{ marginLeft: 10, background: "#fb641b" }} variant="contained"><BoltIcon />Buy Now</StyleButton>
    </LeftContainer>
  )
}

export default ActionItem;
