import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide';
import MidSlider from './MidSlider'
import MidSelection from './MidSelection'

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts ());
    },[dispatch])

    return (
            <>
                <NavBar />
                <Component>
                    <Banner />
                    <MidSlider products={products} title="Deal of the Day" timer={true}/>
                    <MidSelection/>
                    <Slide products={products} title="Discount for You" timer={false}/>
                    <Slide products={products} title="Suggesting Items" timer={false}/>
                    <Slide products={products} title="Top Selection" timer={false}/>
                    <Slide products={products} title="Recommended Items" timer={false}/>
                    <Slide products={products} title="Trending Offers" timer={false}/>
                    <Slide products={products} title="Seasons Top Pick" timer={false}/>
                    <Slide products={products} title="Top Deals on Accessories" timer={false}/>
                </Component>
            </>
    )
}

export default Home;