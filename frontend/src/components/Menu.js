import React from 'react';
import { Box } from '@material-ui/core';
import './Menu.css';
import User from './User';
// import Img from './default.jpg';

function Menu(){
    return (
        <Box component='div' className='menu'>
            {/* profile={Img} */}
            <User className='user' nick='nick'></User>
            <Box component='div' className='title'>Menu</Box>
            <Box component='lu' className='lu'>
                <Box component='li' className='list'>menu</Box>
            </Box>
        </Box>
    );
}

export default Menu;