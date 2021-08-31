import React from 'react';
import axios from "axios";
import './Game.css';
import LoginError from './LoginError';
import GameContent from './GameContent';
import { Grid, Box } from '@material-ui/core';
import Channel from './Channel';
import Menu from './Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function Game(){
  function Game() {
    const fetchUser = async (e) => {
        const a = await axios.get("http://localhost:4242/login/success", {
            withCredentials: true,
        });
        if (a) console.log(a);
    };

    fetchUser();
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
