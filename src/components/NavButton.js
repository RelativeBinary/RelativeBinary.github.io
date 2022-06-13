import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavButton.css';

export default function NavButton({ name }) {
  return (
    <div className='wrapper'>
      <div className='selected'>
        <div className='light'></div>
        <Link to='/' className='link'>
          {name}
        </Link>
      </div>
    </div>
  );
}
