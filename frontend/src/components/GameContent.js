import React from 'react';
import { Button, Grid} from '@material-ui/core';
import './GameContent.css';
import AddIcon from '@material-ui/icons/Add';

function GameContent(){

    function handleClick(){
        console.log('make new channel!');
    }

    return (       
        <Grid className='fullgrid' container>
            <Button className='button' variant='outlined' href='/game/01'>Button1</Button>
            <Button className='button' variant='outlined' href='/game/02'>Button2</Button>
            <Button className='button' variant='outlined' href='/game/03'>Button3</Button>
            <Button className='button' variant='outlined' href='/game/04'>Button4</Button>
            <Button className='button' variant='sharp' onClink={handleClick}>
                <AddIcon></AddIcon>
            </Button>
        </Grid>
    );
}

export default GameContent;