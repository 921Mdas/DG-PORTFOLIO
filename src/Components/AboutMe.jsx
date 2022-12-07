import React from "react";
import { Slide } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <Slide direction="up">
      <div className="intro_text">
        <h3 className="intro_text_title">Who Am I?</h3>
        <p className="intro_text_paragrah">
          I'm a software developer based out of Toronto. I enjoy learning,
          combining creative processes and logic to achieve unique results. My
          background in bilingual client-facing roles allowed me to develop
          communication proficiency and client-focused skills that I can use to
          support any industry.
          <br /> <br /> I can work to contribute to front-end and back-end
          processes and believe in treating testing code as good as development
          code for better results. <br /> <br /> Outside of work, I love taking
          nature walks and spending time with friends and family.
        </p>
      </div>
    </Slide>
  );
};

export default AboutMe;
