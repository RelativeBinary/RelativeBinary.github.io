import React from 'react';
import NavButton from './NavButton';



export default function Testing() {
  return (
    <div
      style={{
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: 'red',
        height: '100vh',
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <NavButton name="Home"/>
    </div>
  );
}
