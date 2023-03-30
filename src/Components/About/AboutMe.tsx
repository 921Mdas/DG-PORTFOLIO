import React, { useEffect, useRef } from "react";
import Achievement from "./Achievement.tsx";
import { Slide } from "react-awesome-reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutme.scss";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  return (
    <div className="about_me_text">
      <div className="title_abtme OutlineX">
        <h1 className="title_who">WHO </h1>
        <h1 className="title_ami">AM I ?</h1>
      </div>

      <Slide direction="up" cascade={true} triggerOnce delay={0} damping={0.2}>
        <p>
          Hi there! I'm Deo and I am a software developer who is passionate
          about learning and building unique experiences.
        </p>
        <p>
          I thrive on the satisfaction of impressing myself and reaching for the
          unusual.
        </p>

        <p>So far:</p>
        <span>
          <Achievement text={"Bootcamp graduate 3.8 GPA"} />
          <Achievement text={"Open & Personal projects"} />
          <Achievement text={"Freelancing"} />
        </span>
      </Slide>
    </div>
  );
};

export default AboutMe;
