import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../App.css';
import BasicGrow from './animation/BasicGrow';

export default function Navbar() {
  // const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className='navbar'>
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
