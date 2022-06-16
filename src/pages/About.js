import React from 'react';
import { Button } from '@mui/material';
import NavButton from '../components/NavButton';
import { useState } from 'react';
import FadeIn from '../components/animation/FadeIn';

export default function About() {
   const [MousePosition, setMousePosition] = useState({
     left: -100,
     top: -100,
   });

   const handleMouseMove = (ev) => {
     setMousePosition({ left: ev.pageX, top: ev.pageY });
     console.log(MousePosition.left, MousePosition.top);
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

      <div className='about-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </div>

      <div className='navbar'>
        <NavButton name={'Home'} destination={'/'} />
        <NavButton name={'Works'} destination={'/'} />
        <NavButton name={'About'} destination={'/'} active={true} />
      </div>
    </div>
  );
}
