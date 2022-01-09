import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: theme.spacing(20),
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to='/' className={classes.link}>
            Work
          </Link>
          <Link to='/about' className={classes.link}>
            About
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
