import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './Channel.css';
import CloseIcon from '@material-ui/icons/Close';

function Channel(){
    return (       
        <Grid className='channelgrid' container>
            <Grid className='exitgrid'>
                <Button className='exit' variant='outlined' href='/game'>
                    <CloseIcon ></CloseIcon>
                </Button>
            </Grid>
        </Grid>
    );
}

export default Channel;