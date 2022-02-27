import React from 'react';
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <div>
          <Link to='/'>Work</Link>
          <Link to='/about'>About</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
