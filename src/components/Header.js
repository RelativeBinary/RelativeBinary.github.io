import { Button } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px' }}
    >
      <div
        style={{
          marginRight: 'auto',
          marginLeft: '12%',
          fontSize: '200%',
          textAlign: 'left',
        }}
      >
        Hi, I'm <Button style={{ fontSize: '100%' }}> Patrick Bornay. </Button>
        <br />
        <span style={{ fontSize: '200%' }}>
          A web dev & cyber security enthusiast
        </span>
      </div>
    </div>
  );
}
