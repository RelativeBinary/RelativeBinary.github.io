import { Button } from '@mui/material';
import React from 'react';
import Typist from 'react-typist';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function Header() {
  return (
    <div className="Header">
      <Typist className="HeaderContent">
        Hi, I'm Patrick Bornay. <br/>
        <Typist.Delay ms={2000} />A web dev & cyber security enthusiast 😄
      </Typist>
    </div>
  );
}
