import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavButton.css';

export default function NavButton({ name, destination, active }) {
  return (
    <div className='wrapper'>
      <div className={active ? 'selected' : ''}>
        <div className={active ? 'light' : ''}></div>
        <Link to={destination} className='link'>
          {name}
        </Link>
      </div>
    </div>
  );
}
