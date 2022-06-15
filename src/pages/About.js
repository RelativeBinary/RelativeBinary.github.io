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
      <h1>About me</h1>
      <p>
        Hello! I'm currently a web developer working for Finocomp. I received a
        Distinction Bachelor's degree in Computer Science at the University of
        Wollongong majoring in Cyber Security. In the Autumn of 2021 I interned
        at Finocomp 4 days a week while studying full-time and maintaining a
        weekend job. Currently I am holding a Comptia Security+ certification.
      </p>
      <h3>Skills</h3>
      would be cool if these were on some scolling LED ticker tape
      <li>ReactJS</li>
      <li>Typescript</li>
      <li>Javascript</li>
      <li>Jest Testing</li>
      <li>Spring</li>
      <li>Grails</li>
      <li>Java</li>
      <li>Groovy</li>
      <li>Spock Testing</li>
      <li>Kubernetes</li>
      <Button>Resume</Button>
      <div className='navbar'>
        <NavButton name={'Home'} destination={'/'} />
        <NavButton name={'Works'} destination={'/'} />
        <NavButton name={'About'} destination={'/'} active={true} />
      </div>
    </div>
  );
}
