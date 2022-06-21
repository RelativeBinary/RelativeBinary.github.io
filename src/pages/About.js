import React from "react";
import NavButton from "../components/NavButton";
import { useState } from "react";
import FadeIn from "../components/animation/FadeIn";
import aboutPrimary from "../images/cross-walk.png";
import aboutSecondary from "../images/sky.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Marquee from "react-fast-marquee";

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
      <div className="about-text-pic-wrapper">
        <div className="about-text-wrapper">
          <div className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </div>
        </div>

        <div className="about-pic-wrapper">
          <img
            className="about-primary-pic"
            src={aboutPrimary}
            alt="about primary"
          />
          <img
            className="about-secondary-pic"
            src={aboutSecondary}
            alt="about secondary"
          />
        </div>
      </div>

      <Marquee
        className="about-bar"
        gradient={false}
        pauseOnHover={true}
        speed={80}
      >
        <FiberManualRecordIcon />
        <a href="#123" className="about-bar-option">
          &nbsp; Linkedin &nbsp;
        </a>
        <FiberManualRecordIcon />
        <a href="#123" className="about-bar-option">
          &nbsp; Github &nbsp;
        </a>
        <FiberManualRecordIcon />
        <a href="#123" className="about-bar-option">
          &nbsp; Resume &nbsp;
        </a>
        <FiberManualRecordIcon />
        <a href="#123" className="about-bar-option">
          &nbsp; Twitter? &nbsp;
        </a>
      </Marquee>

      <div className="navbar">
        <NavButton name={"Home"} destination={"/"} />
        <NavButton name={"Works"} destination={"/"} />
        <NavButton name={"About"} destination={"/"} active={true} />
      </div>
    </div>
  );
}
