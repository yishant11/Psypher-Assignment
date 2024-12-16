import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';
import React, { useState, useContext } from 'react'
import axios from 'axios';
import { DataContext } from '../../context/DataProvider';
import Error from './Error';



const Wrapper = styled(Box)`
    height:70vh;
    width:90vh;
`

const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:81.5%;
    width:35%;
    padding: 45px 25px;
`

const ChildWrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding: 25px 35px;
    flex:1;
    & > div, & > button, & > p{
        margin-top:20px;
        font-weight: 600;
    }
`

const LoginBtn = styled(Button)`
    text-transform:none;
    background: #FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
    &:hover{
        background: #FB641B;
    }
`
const RequestBtn = styled(Button)`
    text-transform:none;
    background: #fff;
    color:#2874f0;
    height:48px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    border-radius:2px;
`


const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align:center;
    color:#2874f0;
    cursor:pointer;
    font-weight:600;
`

const accountInitialValue = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Order, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Look like you are new here!",
        subheading: "Signup up with your mobile nuber to get started"
    }
}

const SignupInitialValues = {
    name:'',
    mobile: '',
    password:''
}

const LoginInitialValues = {
    username:'',
    password:''
}



const Login = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup] = useState(SignupInitialValues);
    const [login, setLogin] = useState(LoginInitialValues);
    const [error,setError] = useState(false);

    const { setAccount } = useContext(DataContext);


    const Handleclose = () => {
        setOpen(false);
        setError(false);
        toggleAccount(accountInitialValue.login);
    }

    const togglesignup = () => {
        toggleAccount(accountInitialValue.signup);
    }

    
    const togglelogin = () => {
        toggleAccount(accountInitialValue.login);
    }

    
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    

    const onValueChange = (e) => {
        e.preventDefault();
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const URL = 'http://localhost:8000';

    
    
    const authenticateSignup = async (data) =>{
        try{
            return await axios.post(`${URL}/signup`,data);
        }
        catch(error){
            console.log("Error in Authentication",error);
        }
    }
    
    
    const authenticateLogin = async (data) =>{
        try{
            return await axios.post(`${URL}/login`,data);
        }
        catch(error){
            console.log("Error in Calling Login Api");
        }
    }

    const SignUpUser = async () =>{
        let response = await authenticateSignup(signup);
        console.log(response);
        Handleclose();
        setAccount(signup.name);
    }
    
    const LogInUser = async () =>{
        let response = await authenticateLogin(login);
        if(response){
            Handleclose();
            setAccount(response.data.data.name);
        }
        else{
            setError(true);
        }
    }

    
    return (
        <div>
            <Dialog open={open} onClose={() => Handleclose()} PaperProps={{ sx: { maxWidth: "unset" } }}>
                <Wrapper>
                    <Box style={{ display: "flex", height: "100%" }}>
                        <Image>
                            <Typography variant="h5" style={{ color: "#fff", fontWeight: 600 }}>{account.heading}</Typography>
                            <Typography style={{ marginTop: 20, color: "#fff", fontWeight: 600 }}>{account.subheading}</Typography>
                        </Image>
                        {
                            account.view === 'login' ?
                                <ChildWrapper>
                                    <TextField variant="standard" onChange={(e) => { onValueChange(e) }} name='username' type="tel" label="Enter Username" />
                                    {error && <Error/>}
                                    <TextField variant="standard" onChange={(e) => { onValueChange(e) }} name='password' type="password" label="PassWord" />
                                    <Text>By Continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                    <LoginBtn onClick={() =>{LogInUser()}}>Login</LoginBtn>
                                    <Typography style={{ textAlign: "center" }}>OR</Typography>
                                    <RequestBtn>Request Otp</RequestBtn>
                                    <CreateAccount onClick={() => togglesignup()}>New to Flipkart? Create an account</CreateAccount>
                                </ChildWrapper>
                                :
                                <ChildWrapper>
                                    <TextField variant="standard" onChange={(e) => { onInputChange(e) }} name='name' type="value" label="Enter UserName" />
                                    <TextField variant="standard" onChange={(e) => { onInputChange(e) }} name='mobile' type="tel" label="Enter Mobile Number" />
                                    <TextField variant="standard" onChange={(e) => { onInputChange(e) }} name='password' type="password" label="Enter Pasword" />
                                    <LoginBtn onClick={() =>{SignUpUser()}}>Continue</LoginBtn>
                                    <RequestBtn onClick={() => { togglelogin() }}>Existing User?Login</RequestBtn>
                                </ChildWrapper>
                        }
                    </Box>
                </Wrapper>
            </Dialog>
        </div>
    )
}

export default Login;
