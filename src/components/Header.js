import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Typist from 'react-typist';
import Navbar from '../components/Navbar';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function Header() {
  const [MousePosition, setMousePosition] = useState({
    left: -100,
    top: -100
  })

  const handleMouseMove = (ev) => { 
    setMousePosition({left: ev.pageX, top: ev.pageY})
    // console.log(MousePosition.left, MousePosition.top)
  }

  return (
    <div onMouseMove={(ev) => handleMouseMove(ev)} className='Header'>
      <div
        className='cursor'
        style={{
          position: 'absolute',
          left: `${MousePosition.left}px`,
          top: `${MousePosition.top}px`,
        }}
      ></div>
      <Typist className='HeaderContent'>
        Hi, I'm Patrick Bornay. <br />
        <Typist.Delay ms={2000} />A web dev & digital art enthusiast.
      </Typist>

      <Navbar/>
    </div>
  );
}
