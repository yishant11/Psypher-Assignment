import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/ProductAction.js'
import { Box, Grid, styled } from '@mui/material';
import ActionItem from './ActionItem.jsx';
import ProductDetails from './ProductDetails.jsx';

const Component = styled(Box)`
  background: #F2F2F2;
  padding: 0 50px 0 90px;
`

const Container = styled(Grid)(({theme}) =>({
  background:"#FFF",
  display:"flex",
  marginTop:"10px",
  marginLeft:"-20px",
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}));

const RightContainer = styled(Grid)`
  margin-top:50px;
  flex: 1;
`




const Productitem = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);


  

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, loading, product]);

  console.log(product);
  return (
    <Component>
      {
        loading && product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails product={product}/>
          </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default Productitem;
