import React from 'react';
import './LoginError.css';
import { Container, Button } from '@material-ui/core';

function LoginError(){
    return (
        <Container className='container' align='center'>
            <Button className='button' variant='outlined' color='secondary' href="/">
                Login Needed!
            </Button>
        </Container>
    );
}

export default LoginError;