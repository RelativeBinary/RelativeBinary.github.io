import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position='static' className='navbar'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Typography>
          <Link to='/' className='nav-link'>
            Work
          </Link>
        </Typography>
        <Typography>
          <Link to='/about'>About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
