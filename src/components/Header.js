import React from 'react';
import Typist from 'react-typist';

export default function Header() {

  return (
    <div className='header'>
      <Typist className='header-content'>
        Hi! I'm Patrick. <br />
        <Typist.Delay ms={1000} />A web design & development <br /> 
        enthusiast.
      </Typist>

      
      <div id="canvas-container"></div>
      <script src='js/useThreeJS'></script>
    </div>
  );
}
