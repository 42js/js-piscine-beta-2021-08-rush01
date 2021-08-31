import React from 'react';
import './Game.css';
import LoginError from './LoginError';
import GameContent from './GameContent';
import { Grid, Box } from '@material-ui/core';
import Channel from './Channel';
import Menu from './Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function Game({token}){
    console.log(token);
    if (token === 'undefined'){ //undefined
        return (<LoginError />);
    }
    else{
        return (
            <BrowserRouter>
                <div className='main' align='left'>
                    <h1 className='header'>INDIAN POKER GAME</h1>
                    <Grid className='grid'>
                        <Menu className='menu' />
                        <Switch>
                            <Route exact path='/game'><GameContent className='content' /></Route>
                            <Route path='/game/0:order'><Channel /></Route>
                        </Switch>
                    </Grid>
                </div>
            </BrowserRouter>
        );
    }
}

export default Game;