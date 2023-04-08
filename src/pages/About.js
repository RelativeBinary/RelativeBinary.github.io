import React, { useState } from "react";
import Typist from "react-typist";
import NavButton from "../components/NavButton";
import FadeIn from "../components/animation/FadeIn";
import moon from '../images/moon.jpg';
import Marquee from 'react-fast-marquee';
import FiberManualRecordIcon from "react-fast-marquee";

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
    <div onMouseMove={(ev) => handleMouseMove(ev)} className="body">
      <FadeIn>
        <div
          className="cursor"
          style={{
            position: "absolute",
            left: `${MousePosition.left}px`,
            top: `${MousePosition.top}px`,
          }}
        ></div>
      </FadeIn>
      <Typist className="about-text" avgTypingDelay={40}>
        The primary intention of this site was more to explore the art style of a 
        particular playstation 2 video game, hope you can guess it.
        <Typist.Delay ms={500} />
        <br />
        <br />
        Feel free to check out my  
        <a href="https://github.com/RelativeBinary" target="_blank" className="about-link">
          &nbsp; Github &nbsp;
        </a> 
        / 
        <a href="https://www.linkedin.com/in/patrick-bornay-2ab4b013b/" target="_blank" className="about-link">
          &nbsp; Linkedin &nbsp;
        </a> 
        for all the things,
        <Typist.Delay ms={1000} /> professionally speaking...
        <br />
        <br />
        <Typist.Delay ms={1500} />
        Thanks for stopping by ❤️
      </Typist>

      <FadeIn>
        <img className='about-image' src={moon} alt='birds'/>
      </FadeIn>

      <div className="navbar">
        <NavButton name={"Home"} destination={"/"} />
        <NavButton name={"About"} destination={"/"} active={true} />
      </div>
    </div>
  );
}
