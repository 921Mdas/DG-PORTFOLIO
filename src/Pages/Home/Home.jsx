import "./home.scss";
import "../sass/about.scss";
import "../sass/contact.scss";
import "../sass/navbar.scss";
import "../sass/network.scss";
import "../sass/project.scss";
import "../sass/sdx.scss";

// external imports
import React, { Suspense } from "react";
import ThreeJS from "../ThreeJS/three";
import { Slide } from "react-awesome-reveal";

// components
import Skills from "../../Components/Skills";
import Nav from "../../Components/Nav";
import Projects from "../../Components/Projects";
import Contact from "../../Components/Contact";
import Achievement from "../../Components/Achievement";
import SocialLink from "../../Components/SocialLinks";
import Intro from "../../Components/Intro";
import AboutMe from "../../Components/AboutMe";
import Loader from "../ThreeJS/Loader";

const Main = () => {
  return (
    <div className="portfolio">
      <div className="header_section">
        <Nav />
      </div>

      <div className="welcome_section">
        <div className="headline_text">
          <Intro />
          <SocialLink />
        </div>
        {/* <div className="filler_circle">
          <div className="IAM">I'M</div>
        </div> */}
      </div>

      <div className="about_me">
        <div className="introducing_me">
          <AboutMe />

          <Slide direction="left" cascade={true}>
            <Achievement text={"Bootcamp graduate 3.8 GPA"} />
            <Achievement text={"5 Full-stack projects"} />
            <Achievement text={"Freelancer"} />
          </Slide>
        </div>
      </div>

      <div className="skills_section">
        <Skills />
      </div>

      <div className="project_section">
        <Projects />
        {/* <Contact /> */}
      </div>

      <Loader />
      <div className="canvas">
        <Suspense fallback={<Loader />}>
          <ThreeJS />
        </Suspense>
      </div>
    </div>
  );
};

export default Main;
