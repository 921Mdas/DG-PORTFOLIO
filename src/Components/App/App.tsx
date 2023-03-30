//css imports
import "./App.scss";
import "../About/aboutme.scss";

// external imports
import React, { Suspense, useEffect } from "react";
import ThreeJS from "../threejs/canvas";

// components
import Loader from "../threejs/Loader";
import Nav from "../Nav/Nav.tsx";
import Intro from "../Intro/Intro.tsx";
import SubIntro from "../Intro/SubIntro.tsx";
import AboutMe from "../About/AboutMe.tsx";
import Skills from "../Skills/Skills.tsx";
import Projects from "../Project/Projects.tsx";
import Footer from "../Footer/Footer.tsx";
import Animations from "../Animations/Animations";
import Cursor from "../util/Cursor.tsx";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio">
      {/* <div className="header_section">
        <Nav />
      </div>

      <div className="welcome_section">
        <Intro />
      </div>

      <div className="about_me" id="abtme">
        <AboutMe />
      </div>

      <div className="skills_section">
        <Skills />
      </div>

      <div className="project_section">
        <Projects />
      </div>

      <div className="footer_sec">
        <Footer />
      </div> */}
      <Cursor />

      <div className="canvas">
        <Suspense fallback={<Loader />}>
          <ThreeJS />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
