import React from 'react';
import './Game.css';
import LoginError from './LoginError';
import GameContent from './GameContent';
import { Grid, Box } from '@material-ui/core';

function Game({token}){
    console.log(token);
    if (token === 'undefined'){ //undefined
        return (<LoginError />);
    }
    else{
        return (
            <div className='main' align='left'>
                <h1 className='header'>INDIAN POKER GAME</h1>
                <Grid className='grid'>
                    <Box component='div' className='menu'>Menu</Box>
                    <GameContent className='content' />
                </Grid>
            </div>
        );
    }
}

export default Game;