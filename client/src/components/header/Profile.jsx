import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Face6Icon from '@mui/icons-material/Face6';

const Component = styled(Menu)`
    cursor:pointer;
    margin-top:5px;
`
const Account = styled(Box)`
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-left: 14px;
    width:165px;
    font-weight:600;
`


const Logout = styled(Typography)`
    font-size:14px;
    margin-left:20px;
`


const Profile = ({ account,setAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }


    const handleClose = () => {
        setOpen(false);
    }

    const LogOut = () =>{
        setAccount('');
    }
    return (
        <>

            <Account onClick={handleClick} >
                <Face6Icon />
                <Box style={{ fontSize: 15, width: 104 }}> {account} </Box>
            </Account>

            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() =>{handleClose(); LogOut();}} style={{ gap: 10 }}>
                    <PowerSettingsNewIcon style={{ marginLeft: -10 }} />
                    <Logout> Log out</Logout>
                </MenuItem>

            </Component>
        </>
    )
}

export default Profile;
