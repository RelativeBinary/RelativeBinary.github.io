import React from 'react';
import { useState } from 'react';
import FadeIn from '../components/animation/FadeIn';
import Header from '../components/Header';
import NavButton from '../components/NavButton';

export default function Home() {
  const [MousePosition, setMousePosition] = useState({
    left: -100,
    top: -100,
  });

  const handleMouseMove = (ev) => {
    setMousePosition({ left: ev.pageX, top: ev.pageY });
    console.log(MousePosition.left, MousePosition.top)
  };

  return (
    <div onMouseMove={(ev) => handleMouseMove(ev)} className='body'>
      <FadeIn>
        <div
          className='cursor'
          style={{
            position: 'absolute',
            left: `${MousePosition.left}px`,
            top: `${MousePosition.top}px`,
          }}
        ></div> 
      </FadeIn>
      <Header />
      <div className='navbar'>
       <NavButton name={'Home'} destination={'/'} active={true}/> 
       <NavButton name={'Works'} destination={'/works'}/> 
       <NavButton name={'About'} destination={'/about'}/> 
      </div>
    </div>
  );
}
