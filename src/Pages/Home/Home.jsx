import React, { useEffect, useRef, Component, useState } from "react";
import ThreeJS from "../ThreeJS/three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import {
  DirectionalLight,
  DirectionalLightHelper,
  Mesh,
  PointLight,
  PointLightHelper,
  RectAreaLight,
  SpotLight,
  SpotLightHelper,
} from "three";
import "./home.scss";
import "../sass/about.scss";
import "../sass/contact.scss";
import "../sass/navbar.scss";
import "../sass/network.scss";
import "../sass/project.scss";
import "../sass/sdx.scss";

import { BsArrowDownRightSquare } from "react-icons/bs";

import { AiFillTrophy, AiOutlineTrophy } from "react-icons/ai";

import { BiRightArrow } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { GrHeroku } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { AiFillApi, AiFillFolderOpen } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { DiNodejsSmall } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { TbBrandPython } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { SiDjango } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineArrowUp } from "react-icons/ai";
import { GiSwordSpade } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";
import Skill from "../../Components/Skill";
import { GiSwordSmithing } from "react-icons/gi";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";

// components

import Skills from "../../Components/Skills";
import Nav from "../../Components/Nav";
import IntroMenu from "../../Components/IntroMenu";
import Projects from "../../Components/Projects";
import Contact from "../../Components/Contact";

// helper functions
import { MovePagePos, MovePageNeg } from "../../Helper/helper";

const Main = () => {
  const [showMenu, setShowMenu] = useState(true);

  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);

  const handleAbout = () => {
    MovePagePos(page1, 10);
    MovePagePos(page2, 110);
    MovePagePos(page3, 210);
  };

  const handleMyWork = () => {
    MovePageNeg(page1, 110);
    MovePagePos(page2, 10);
    MovePagePos(page3, 110);
  };

  const handleContact = () => {
    MovePageNeg(page1, 210);
    MovePageNeg(page2, 110);
    MovePagePos(page3, 0);
  };

  const navigateHome = () => {
    handleAbout();
    setShowMenu(true);
  };

  const navigateProject = () => {
    handleMyWork();
    setShowMenu(false);
  };

  const navigateContact = () => {
    handleContact();
  };

  return (
    <div className="portfolio">
      <Nav
        navigateHome={navigateHome}
        navigateProject={navigateProject}
        navigateContact={navigateContact}
      />
      <div className="page1" style={{ left: `10%` }} ref={page1}>
        <IntroMenu />
      </div>

      <div
        className="landing_page page2"
        style={{ left: "110%" }}
        ref={page2}
        id="nav"
      >
        <Projects />
      </div>

      <div className="canvas">
        <ThreeJS
          handleWork={handleMyWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
        />{" "}
      </div>

      {showMenu ? (
        <div className="hovering">
          <GiHamburgerMenu className="hovering_class" />
        </div>
      ) : null}

      <div className="About_me_description">
        <p>
          I'm excited to continue refining my skills with the right company and
          to have an opportunity to contribute toward more inclusivity and
          diversity in tech. I'm looking forward to meeting over coffee or via
          my social links{" "}
        </p>
        <Skills />
      </div>

      <div
        className="landing_page page3"
        style={{ left: "210%" }}
        ref={page3}
        id="nav"
      >
        <Contact />
      </div>
    </div>
  );
};

export default Main;
