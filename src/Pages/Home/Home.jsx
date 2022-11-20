import React, { useEffect, useRef, Component, useState, Suspense } from "react";
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
import Achievement from "../../Components/Achievement";
import SocialLink from "../../Components/SocialLink";
// helper functions
import { MovePagePos, MovePageNeg } from "../../Helper/helper";
import { Scrambler } from "../../Helper/helper";

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

  // start here

  return (
    <>
      <div className="portfolio">
        <div className="logo">
          <h3>deomadingu</h3>
          <h6>SOFTWARE DEVELOPER</h6>
        </div>

        <Nav
          navigateHome={navigateHome}
          navigateProject={navigateProject}
          navigateContact={navigateContact}
        />

        <div className="headline_text">
          <div className="headline_top subheadline">CREATIVE</div>

          <div className="headline subheadline">AGILE</div>

          <div className="headline_bottom subheadline">
            <em>CURIOUS</em> <br />
            FLEXIBLE
          </div>

          <SocialLink />
        </div>

        <div className="filler_circle"></div>

        <div className="introduction">
          <div className="intro_text">
            <h3 className="intro_text_title">Who Am I?</h3>
            <p className="intro_text_paragrah">
              I'm a software developer based out of Toronto. I enjoy learning
              and combining creative and well crafted logic to achieve unique
              results. <br /> <br /> I work and contribute to front-end and
              back-end processes and believe in treating testing code as good as
              development code for better results. <br /> <br /> My background
              in client-facing roles allowed me to develop bilingual
              communication proficiency and client-focused skills that i can use
              in any team setting.
            </p>
          </div>

          <Achievement text={"Bootcamp graduate 3.8 GPA"} />
          <Achievement text={"5 Full-stack projects"} />
          <Achievement text={"Freelancer"} />
        </div>

        <div className="skills_section">
          <Skills />
        </div>

        {/* <div className="page1" ref={page1}>
        <IntroMenu />
      </div> */}

        {/* <Projects /> */}

        {/* <Projects />

      <div className="landing_page page2" ref={page2} id="nav"></div> */}

        {/* <div className="points">
        <div className="point point-0">
          <div className="label">1</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            provident perferendis iste voluptates assumenda repellat libero
            blanditiis quaerat! Molestias facilis veritatis nemo minus mollitia
            a impedit, repellendus aperiam ipsum cumque.
          </div>
        </div>
      </div> */}

        {/* 
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

      <div className="page3" ref={page3} id="nav">
        <Contact />
      </div> */}
      </div>
      <div className="canvas">
        <Suspense>
          <ThreeJS
            handleWork={handleMyWork}
            handleAbout={handleAbout}
            handleContact={handleContact}
          />{" "}
        </Suspense>
      </div>
    </>
  );
};

export default Main;
