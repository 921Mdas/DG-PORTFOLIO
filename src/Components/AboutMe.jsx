import React from "react";
import { Slide } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <Slide direction="up">
      <div className="intro_text">
        <h3 className="intro_text_title">Who Am I?</h3>
        <p className="intro_text_paragrah">
          I'm a software developer based out of Toronto. I enjoy learning and
          combining creative and well crafted logic to achieve unique results.{" "}
          <br /> <br /> I work and contribute to front-end and back-end
          processes and believe in treating testing code as good as development
          code for better results. <br /> <br /> My background in client-facing
          roles allowed me to develop bilingual communication proficiency and
          client-focused skills that i can use in any team setting.
        </p>
      </div>
    </Slide>
  );
};

export default AboutMe;
