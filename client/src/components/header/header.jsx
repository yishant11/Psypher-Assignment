import React from 'react'
import Search from './Search';
import CustomButtons from './CustomButtons';
import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
{/* You can use styled fuction with material ui tags but if you want to use in html tag see below */ }

const StyleHeader = styled(AppBar)` {/*styled is a function in material ui throug which you can style a tag in this way.*/}
    background: #2874f0;
    height: 55px;
`
const CssOnlogo = styled(Box)`
    margin-left:12%;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: Italic;
`

{/* This ths the right way to use styled tag in html tags, you have to make Objects of the styling you done. Camel case convention is done.*/ }
const Plusimg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomBtn = styled(Box)`
    margin: 0 0 0 4%;
`

const header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <Box style={{boxShadow:'none'}}>
            <StyleHeader>
                <Toolbar style={{ minHeight: 55, marginLeft: -12 }}>
                    <CssOnlogo>
                        <Link to={`/`}><img src={logoURL} alt="logo" style={{ width: 75 }} /></Link>
                        <Box style={{ display: 'flex' }}> {/* same as div tag.*/}
                            <SubHeading>Explore &nbsp;
                                <Box component="span" style={{ color: '#FFE500' }}>Plus</Box> {/* componet = span makes this para tag a span tag you can change this tag into any tag with this feature*/}
                            </SubHeading> {/*same as Para tag in html here we use materialui.*/}
                            <Plusimg src={subURL} alt="sublogo" />
                        </Box>
                    </CssOnlogo>
                    <Search />
                    <CustomBtn>
                        <CustomButtons />
                    </CustomBtn>
                </Toolbar>
            </StyleHeader>
        </Box>
    )
}

export default header;
