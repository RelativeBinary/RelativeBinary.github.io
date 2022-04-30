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
    <AppBar position='static' className='navbar'>
      <Toolbar>
        {/* 
        As a memory refresher what were doing here is creating a context consumer
        which will access a function 'changeTheme' inside context. This component
        also is able to access the context's theme.
      */}
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <BasicGrow delay={3000}>
            <Button
              className="Button"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              Toggle Theme
            </Button>
          </BasicGrow>
        )}
      </ThemeContext.Consumer>
        <Box sx={{ flexGrow: 1 }} />
        <BasicGrow delay={500}>
          <Typography>
          <Link to='/' className='nav-link'>
            Work
          </Link>
        </Typography>
        </BasicGrow>
        <BasicGrow>
          <Typography>
            <Link to='/about'>About</Link>
          </Typography>
        </BasicGrow>
        
      </Toolbar>
    </AppBar>
  );
}
