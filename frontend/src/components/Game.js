import React from "react";
import axios from "axios";
import "./Game.css";
import LoginError from "./LoginError";
import GameContent from "./GameContent";
import { Grid, Box } from "@material-ui/core";

function Game() {
    const fetchUser = async (e) => {
        const a = await axios.get("http://localhost:4242/login/success", {
            withCredentials: true,
        });
        if (a) console.log(a);
    };

    fetchUser();
    return (
        <div className="main" align="left">
            <h1 className="header">Game</h1>
            <button onClick={fetchUser}>hi</button>
            <Grid className="grid">
                <Box component="div" className="menu">
                    Menu
                </Box>
                <GameContent className="content" />
            </Grid>
        </div>
    );
}

export default Game;
