import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import { Button } from '@mui/material';
import '../App.css';

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
          <Button
            className="Button"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            Toggle Theme
          </Button>
        )}
      </ThemeContext.Consumer>
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
