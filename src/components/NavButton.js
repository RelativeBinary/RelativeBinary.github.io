import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavButton.css';
import FadeIn from './animation/FadeIn';

export default function NavButton({ name, destination, active }) {
  return (
    <div className='wrapper'> 
      <FadeIn>
        <div className={active ? 'light' : ''}></div>
      </FadeIn>
      <div className={active ? 'selected' : ''}>
       
        <Link to={destination} className='link'>
          {name}
        </Link>
      </div>
    </div>
  );
}
