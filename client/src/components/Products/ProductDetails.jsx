import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const Component = styled(Box)`
    margin-left:25px;
    
`

const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:center;    
    &> p{
        align-item:center;
        margin-top:10px;    
        font-size:14px;
    }
`

const Badge = styled(LocalOfferIcon)`
    font-size:15px;
    color:#00CC00;
    margin-right:10px;
`

const ColumnText = styled(TableRow)`
    font-size:14px;
    vertical-align:center;    
    & > td{
        font-size:14px;
        margin-top:10px;
    }
`
const ProductDetails = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+ (5*24*60*60*1000));
    return (
        <Component>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                8 rating and 5 review
                <Box component="span">
                    <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt='assuredImage' />
                </Box>
            </Typography>
            <Typography style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>
                <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><Badge />Bank Offer10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹1500 on orders of ₹5000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on IDFC FIRST Bank Credit Cards, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on Yes Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Bank Offer10% off on Yes Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Bank OfferExtra ₹750 off on Bank of Baroda Credit Card and EMI Txns on Net Cart Value of ₹24,990 and above T&C</Typography>
                <Typography><Badge />Bank OfferExtra ₹2,000 off on Citi-branded Credit EMI Transactions on a Net Cart Value of ₹49,999 and above T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                        <TableCell style={{fontWeight:600}}>1 year Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{color:"#2874f0"}}>SuperComNet</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View More Seller Starting From ₹{product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="coinimage" style={{width:390}}/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Component>
    )
}

export default ProductDetails;
