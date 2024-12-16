import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react'
import { addEllipsis } from '../../Utils/common-utils';
import ButtonGroup from './ButtonGroup';
import { removeFromCart } from '../../redux/actions/CartActions';
import { useDispatch } from 'react-redux';

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display:flex;
  background:#fff;
  magin-left:40px;
`
const LeftComponent = styled(Box)`
  margin:20px;
  display:flex;
  flex-direction:column;
`

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  magin-top:10px;
`
const RemoveBtn = styled(Button)`
  color:black;
  font-weight:600;
  &:hover{
    background:transparent;
    color:#649bf6;
  }
`

const CartItem = ({ item }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch = useDispatch();
  const removeItemFromCart = (id) =>{
    dispatch(removeFromCart(id));
  }
  return (
      <Component>
        <LeftComponent>
          <img src={item.url} alt='itemimage' style={{ height: 110, width: 110 }} />
          <ButtonGroup />
        </LeftComponent>
        <Box style={{ margin: 20 }}>
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText>Seller: RetailNet
            <Box component="span">
              <img src={fassured} alt="flipkart" style={{ width: 60, marginLeft: 10 }} />
            </Box>
          </SmallText>
          <Typography style={{ margin: "20px 0" }}>
            <Box component="span" style={{ fontWeight: 600 }}>₹{item.price.cost}</Box>
            <Box component="span" style={{ marginLeft: 10, color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>
            <Box component="span" style={{ marginLeft: 10, color: "#388E3C" }}>{item.price.discount} off</Box>
          </Typography>
          <RemoveBtn onClick={()=> removeItemFromCart(item.id)} style={{width:250}}>Remove</RemoveBtn>
        </Box>
      </Component>
  )
}

export default CartItem;
