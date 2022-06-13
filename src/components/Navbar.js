import React from 'react';
import { AppBar, Box, Grow, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import { Button } from '@mui/material';
import '../App.css';
import BasicGrow from './animation/BasicGrow';

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className='navbar'>
      {/* 
        As a memory refresher what were doing here is creating a context consumer
        which will access a function 'changeTheme' inside context. This component
        also is able to access the context's theme.
      */}
      {/* <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <BasicGrow delay={10000}>
            <Button
              className='button'
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              Toggle
            </Button>
          </BasicGrow>
        )}
      </ThemeContext.Consumer> */}
      <BasicGrow delay={10500}>
        <Typography>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </Typography>
      </BasicGrow>
      <BasicGrow delay={11000}>
        <Typography>
          <Link to='/about'>About</Link>
        </Typography>
      </BasicGrow>
    </div>
  );
}
