import React from 'react';
import { AppBar, Box, Grow, Toolbar, Typography } from '@material-ui/core';

export default function BasicGrow({children, delay}) {
  return (
   <Grow
    in={true}
    style={{ transformOrigin: '0 0 0'}}
    {...({timeout: delay ? delay : 1000})}
   >
   {children}
   </Grow>
  );
}
