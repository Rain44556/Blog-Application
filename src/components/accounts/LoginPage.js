import React, { useState } from 'react';
import {Box, TextField, Button, styled, Typography} from '@mui/material';


const Component = styled(Box)`
    width: 430px;
    margin: auto;
    box-shadow: 6px 3px 6px 3px rgb(0 0 0/ 0.6);
    `

const Img = styled('img')({
    width: 240,
    display: 'flex',
    margin: 'auto'
});

const Wrapper = styled(Box)`
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 1rem 2rem;
        & > div, & > button, & p {
            margin-top: 0.71rem;
        }
`

const ButtonLogin = styled(Button)`
        text-transform: none;
        height: 45px;
        background-color: #568203;
        color: black;
        border-redius: 3px;
        font-size: 0.8rem;
        font-weight: 600;
`

const ButtonSignUp = styled(Button)`
text-transform: none;
background-color: #6495ED;
color: black;
font-size: 0.8rem;
font-weight: 600;
border-redius: 3px;
height: 45px;
`

const Text = styled(Typography)`
font-size: 0.7rem;
font-weight: 600;
color: #2f4f4f;
`


const LoginPage = () => {
    const imgUrl = "https://img.freepik.com/free-vector/branding-identity-corporate-b-logo-vector-design-template_460848-13934.jpg?w=740&t=st=1701337465~exp=1701338065~hmac=8a90f2f36ead007411dcc61b911439d2c3d8f53def629d4fe0f813f05fb844d9";
    
    const [account, toggleAccount] = useState('login');
    const toggleSignUp = () =>{
        account === 'signup' ? toggleAccount('login'):toggleAccount('signup');
}

    return (
    <Component>
        <Box>
            <Img src={imgUrl} alt="blog" />

          {
          account === 'login' ?
          <Wrapper>
                <TextField variant='standard' label='Username'></TextField>
                <TextField variant='standard' label='Password'></TextField>
                <ButtonLogin variant="outlined">Login</ButtonLogin> 
                <Text style={{textAlign: 'center'}}>OR</Text>
                <ButtonSignUp variant="contained" onClick={() => toggleSignUp()}>Signup</ButtonSignUp>   
            </Wrapper>
            :
             <Wrapper>
                <TextField variant='standard' label='Name'></TextField>
                <TextField variant='standard' label='Username'></TextField>
                <TextField variant='standard' label='Password'></TextField>
                <ButtonSignUp variant="contained">Signup</ButtonSignUp> 
                <Text style={{textAlign: 'center'}}>OR</Text>
                <ButtonLogin variant="outlined" onClick={() => toggleSignUp()}>Already Have Account</ButtonLogin>   
            </Wrapper>  
            }

        </Box>
    </Component>

    );
};

export default LoginPage;