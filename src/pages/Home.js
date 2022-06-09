import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

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
    <div onMouseMove={(ev) => handleMouseMove(ev)} className='Header'>
      <div
        className='cursor'
        style={{
          position: 'absolute',
          left: `${MousePosition.left}px`,
          top: `${MousePosition.top}px`,
        }}
      ></div>
      <Header />
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
}
