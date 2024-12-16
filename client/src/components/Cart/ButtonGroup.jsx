import { Box, Button, styled } from '@mui/material';
import React, {useState} from 'react'

const Component = styled(Box)`
    margin-top:10px;
`
const ButtonGroup = () => {
    const [count, setCount] = useState(0);
    function handleincr() {
        setCount(count + 1);
    }

    function handledncr() {
        if(count  === 0)
            return;
        setCount(count - 1);
    }
    return (
        <Box>
            <Button onClick={handledncr}>-</Button>
            <Button>{count}</Button>
            <Button onClick={handleincr}>+</Button>
        </Box>
    )
}

export default ButtonGroup;
