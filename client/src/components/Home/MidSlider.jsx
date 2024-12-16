import { Box, styled } from '@mui/material';
import React from 'react'
import Slide from './Slide';

const Component = styled(Box)`
    display:flex;
`

const LeftComponent = styled(Box)(({theme}) =>({
    width:"83%",
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}));
const RightComponent = styled(Box)(({theme}) =>({
    width:"17%",
    textAlign:"center",
    marginTop:10,
    background:"#fff",
    marginLeft:10,
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}));

const MidSlider = ({ products, title, timer }) => {
    const adURL = 'https://rukminim2.flixcart.com/fk-p-flap/530/810/image/a8488e64f1f70434.jpeg?q=20';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="add" style={{width:230,height:350}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlider;
