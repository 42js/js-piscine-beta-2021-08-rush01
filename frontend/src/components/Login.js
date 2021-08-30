import React from 'react';
import { Container, Button, Box } from '@material-ui/core';
import './Login.css';

function Login(){
    return (
        <Container className='container' align='center'>
            <Box className='box'>INDIAN POKER GAME</Box><br/>
            <Button className='button' variant='contained' href='http://localhost:4242/google'>
                LOGIN
            </Button>
        </Container>
    );
}

export default Login;