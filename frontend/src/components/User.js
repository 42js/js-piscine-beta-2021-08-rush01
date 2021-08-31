import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import './User.css';

function User({profile, nick}){
    console.log(profile);
    return (
        <Box className='box'>
            {profile ? <Avatar src={profile} className='img' align='center'/> : <Avatar alt={nick} className='img' align='center'/>}
            <div className='nick'>{nick}</div>
        </Box>
    );
}

export default User;