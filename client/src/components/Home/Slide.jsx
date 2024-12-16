import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, styled, Typography } from '@mui/material';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
    margin-top:10px;
    background:#fff;
    
`

const Deal = styled(Box)`
    padding: 15px 20px;
    display:flex;
`

const DealText = styled(Typography)`
    font-size:22px;
    font-weight:600;
    line-height:32px;
`


const Timer = styled(Box)`
    display:flex;
    gap:14px;
    margin-left:10px;
    color:#7f7f7f;
`

const ViewAllButton = styled(Button)`
    margin-left:auto;
    background:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600;
`

const Image = styled('img')({
    width: 'auto',
    height: 150,
})

const Text = styled(Typography)`
    font-size:14px;
    margin-top:10px;
`


const Pro = styled(Box)`
    text-align:center;
    width:82%;
    margin-bottom:14px;
    margin-top:10px;
    padding:25px 15px;
    border: 2px solid #e0e0e0;
    cursor:pointer;
`


const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box varient="span">{hours}:{minutes}:{seconds} Left</Box>
    }
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {timer
                    &&
                    <Timer style={{alignItems:"center"}}>
                        <img src={timerURL} alt="timeurl" width={24}  />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                    </Timer>
                }
                <ViewAllButton variant='contained' >View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                slidesToSlide={1}
                centerMode={true}
            >
                {
                    products.map(product => (
                        <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                        <Pro textAlign={"center"} >
                            <Image src={product.url} alt="productss" />
                            <Text style={{ fontWeight: 600, color: "#212121" }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: "green" }}>{product.discount}</Text>
                            <Text style={{ color: "#212121", opacity: ".6" }}>{product.tagline}</Text>
                        </Pro>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;