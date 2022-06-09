import React from 'react';
import Typist from 'react-typist';

export default function Header() {

  return (
    <div className='Header'>
      <Typist className='HeaderContent'>
        Ahoy There! I'm Patrick. <br />
        <Typist.Delay ms={2000} />A web dev & digital art enthusiast.
      </Typist>

      
      <div id="canvas-container"></div>
      <script src='js/useThreeJS'></script>
    </div>
  );
}
