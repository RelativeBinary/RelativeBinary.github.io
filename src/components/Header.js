import { Button } from '@mui/material';
import React from 'react';
import Typist from 'react-typist';

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
        <Typist>
          Hi, I'm{' '}
          <Button style={{ fontSize: '100%' }}> Patrick Bornay. </Button>
        </Typist>
        <br />
        <span style={{ fontSize: '200%' }}>
          <Typist>
            <Typist.Delay ms={2000} />A web dev & cyber security enthusiast 😄
          </Typist>
        </span>
      </div>
    </div>
  );
}
