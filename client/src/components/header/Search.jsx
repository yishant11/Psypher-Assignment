import { Box, styled, InputBase, List, ListItem } from '@mui/material';
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/ProductAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width:38%;
    border-radius:2px;
    margin-left: 10px;
`

const InputContainer = styled(InputBase)`
    padding-left:20px; {/*Here you over write the padding of placeholder.*/}
    width: 550px;
    font-size:unset;
`

const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
    margin-left:-20px;
`
const ListWrapper = styled(List)`
    background:#FFFFFF;
    position:absolute;
    color:#000;
    margin-top:36px;
`
const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    const getText = (text) => {
        setText(text);
    }
    return (
        <SearchContainer style={{ display: 'flex' }}>
            <InputContainer
                placeholder='Search for Products, Brand and More'
                onChange={(event) => { getText(event.target.value) }}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link
                                    to={`/product/${product.id}`}
                                    onclick = {() => { setText('') }}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;
