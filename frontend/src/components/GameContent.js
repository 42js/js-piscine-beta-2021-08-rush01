import React from 'react';
import { Button, Grid} from '@material-ui/core';
import './GameContent.css';
import Icon from '@material-ui/core/Icon';

function GameContent(){
    return (        
        <Grid className='fullgrid' container>
            <Button className='button' variant='outlined'>Button1</Button>
            <Button className='button' variant='outlined'>Button2</Button>
            <Button className='button' variant='outlined'>Button3</Button>
            <Button className='button' variant='outlined'>Button4</Button>
            <Button className='button' variant="outlined" startIcon={<Icon>+</Icon>} />
            {/* <Icon>+</Icon> */}
        </Grid>
    );
}

export default GameContent;