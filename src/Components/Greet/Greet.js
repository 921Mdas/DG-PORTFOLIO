import React, { useEffect, useRef, Component, useState } from "react";
import ThreeScene from "../ThreeJS/three";
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
import "./greet.scss";

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
import Skill from "../About/Skill";
import { GiSwordSmithing } from "react-icons/gi";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";

import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";
class Scrambler extends Component {
  render() {
    const phrases = ["LOADING...", "ME STACK", "DEO MADINGU"];
    return (
      <TextScrambler
        phrases={phrases}
        speed={50}
        pauseTime={800}
        chars={"▲△◀∅∏▒▢◁≈▶▣▭"}
        repetitions={2}
      />
    );
  }
}

const Greet = () => {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);

  const [showMenu, setShowMenu] = useState(true);

  const handleAbout = () => {
    page1.current.style.setProperty("left", `${10}%`);
    page2.current.style.setProperty("left", `${110}%`);
    page3.current.style.setProperty("left", `${210}%`);
  };

  const handleMyWork = () => {
    page1.current.style.setProperty("left", `-${110}%`);
    page2.current.style.setProperty("left", `${10}%`);
    page3.current.style.setProperty("left", `${110}%`);
    // selectMovement();
  };

  const handleContact = () => {
    page1.current.style.setProperty("left", `-${210}%`);
    page2.current.style.setProperty("left", `-${110}%`);
    page3.current.style.setProperty("left", `${0}%`);
  };

  return (
    <div className="portfolio">
      <div className="navigation_btn">
        <button
          onClick={() => {
            handleAbout();
            setShowMenu(true);
          }}
          class="navigation-index nav-index1"
          content-data="About Me"
        >
          <BsFillPersonFill />
        </button>
        <button
          onClick={() => {
            handleMyWork();
            setShowMenu(false);
          }}
          class="navigation-index nav-index2"
          content-data="Projects"
        >
          <AiFillFolderOpen />
        </button>
        <button
          onClick={() => {
            handleContact();
          }}
          class="navigation-index nav-index3"
          content-data="Contact Me"
        >
          <MdOutlineContactMail />
        </button>
      </div>

      <div className="canvas">
        <ThreeScene
          handleWork={handleMyWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
        />{" "}
      </div>

      <div className="Presentation " style={{ left: `10%` }} ref={page1}>
        <div className="presentation_name section1 section">
          <div className="presentation_title">
            <Scrambler>DEO MADINGU</Scrambler>
            <p>- Full-stack developer -</p>
          </div>
        </div>

        <div className="presentation_picture section2 section">
          <br /> Explorer of new technologies.
          <br />
          <br /> Creator, tester, lover of clean code.
          <div className="presentation_details">
            <p>
              {" "}
              <span>
                <AiFillTrophy />
              </span>{" "}
              5 Full-stack projects
            </p>
            <p>
              {" "}
              <span>
                <AiFillTrophy />
              </span>{" "}
              Freelancer
            </p>
            <p>
              {" "}
              <span>
                <AiFillTrophy />
              </span>{" "}
              Bootcamp graduate 3.8 GPA
            </p>
          </div>
        </div>

        <div className="presentation_message section3 section">
          LET'S CONNECT
        </div>

        <div className="presentation_social section4 section">
          <div className="presentation_social_icon">
            <div className="social">
              <a
                href="https://www.linkedin.com/in/deo-m-5b873253/"
                target="_blank"
                rel="noreferrer"
                data-content="Linkedin"
              >
                <GrLinkedinOption />
              </a>
            </div>
            <div className="social">
              <a
                href="https://github.com/921Mdas/"
                target="_blank"
                rel="noreferrer"
                data-content="Github"
              >
                <FaGithubSquare />
              </a>
            </div>
            <div className="social">
              <a
                className="soc_link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                data-content="Instagram"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
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

      {/* pages with info */}
      <div
        // className="landing_page page1"
        // style={{ left: `0%` }}
        // ref={page1}
        id="nav"
      >
        <div className="About_who_Iam">
          {/* <div className="intro">
            <Fade>
              <Scrambler>
                <div className="intro_title">DEO MADINGU</div>
              </Scrambler>
            </Fade>
            <Fade delay={1000}>
              <div className="intro_subtitle">Software Developer</div>
            </Fade>
          </div> */}
          {/* <Fade>
            <div className="my_name">
              <Scrambler />
            </div>
          </Fade> */}
          {/* <Fade delay={300}>
            <div className="intro">
              full-stack application development, testing, and deployment
              success. I'm inquisitive and enjoy combining creative and
              programming to create experiences.
            </div>
          </Fade>
          <Fade delay={600}>
            <Skills />
          </Fade> */}
        </div>
        {/* <div className="greetings">My name is</div>
        <div className="whoami">
          <div className="my_name">DEO GRATIAS</div>
          <div className="whatido">I build user-friendly apps</div>
        </div>
        <div className="statement">
          <div>
            Software developer with a proven track record of full-stack application development, testing, and deployment
success. I'm inquisitive and enjoy the creative process of turning user stories into performant and scalable
solutions. I am excited to work in a team setting to learn best practices and contribute to the development of
client-focused solutions.
          </div>
          <div>
            <br />
            I'm excited to continue refining my skills with the right company
            and to have an opportunity to contribute toward more inclusivity and
            diversity in tech. I'm looking forward to meeting over coffee ☕️ or
            via my social links 👋.
          </div>
        </div> */}
      </div>

      <div
        className="landing_page page2"
        style={{ left: "110%" }}
        ref={page2}
        id="nav"
      >
        <div className="work_projects">
          <div className="My_Projects">
            <Fade>
              <div className="section_project_01 section_project">
                <div className="project project01"></div>

                <div className="controls control_01">
                  <a href="www.google.com" target={"_blank"} className="git">
                    <BsCodeSlash className="giticon" />
                  </a>
                  <a href="google.com" target={"_blank"} className="arrow">
                    <BsArrowDownRightSquare className="arrowicon" />
                  </a>
                </div>
                <div className="section_description">
                  <h3>Banaleo</h3>
                  Banaleo is a community of jazz and rumba aficionados that
                  contributes musicians to our library, allowing us to compile a
                  collection of African Jazz.
                </div>
                <div className="tools_used">
                  <ul className="list_of_tools_01">
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>JWT</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </Fade>
            <Fade delay={300}>
              <div className="section_project_02 section_project ">
                <div className="controls control_02">
                  <a href="www.google.com" target={"_blank"} className="git">
                    <BsCodeSlash className="giticon" />
                  </a>
                  <a href="google.com" target={"_blank"} className="arrow">
                    <BsArrowDownRightSquare className="arrowicon" />
                  </a>
                </div>
                <div className="project project02"></div>
                <div className="section_description">
                  <h3>Daily News</h3>A press release tool to create, edit and
                  publish content. It incorporates a dashboard, a favorite
                  article section and a chat room using web socket.
                </div>
                <div className="tools_used">
                  <ul className="list_of_tools_02">
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>JWT</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </Fade>
            <Fade delay={600}>
              <div className="section_project_03 section_project">
                <div className="controls control_03">
                  <a href="www.google.com" target={"_blank"} className="git">
                    <BsCodeSlash className="giticon" />
                  </a>
                  <a href="google.com" target={"_blank"} className="arrow">
                    <BsArrowDownRightSquare className="arrowicon" />
                  </a>
                </div>
                <div className="project project03"></div>
                <div className="section_description">
                  <h3>PendArt</h3>A press release tool to create, edit and
                  publish content. It incorporates a dashboard, a favorite
                  article section and a chat room using web socket.
                </div>
                <div className="tools_used">
                  <ul className="list_of_tools_03">
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>JWT</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div
        className="landing_page page3"
        style={{ left: "210%" }}
        ref={page3}
        id="nav"
      >
        <div className="my_contact_section">
          <Fade delay={200}>
            <div className="contact_me">
              CONTACT
              <div className="message">
                My inbox is always open. Looking forward to hearing from you!{" "}
                <br /> <br /> Email: rodeomads@gmail.com
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Greet;

const Skills = () => {
  return (
    <div className="my_skills_intro">
      <div className="stacks">
        <div className={`stacks_list`}>
          <div className="stack_list1 stack_skill">
            <Skill Icon={AiOutlineHtml5} skilltitle={"HTML5"} />
            <Skill Icon={DiSass} skilltitle={"Css, Sass"} />
            <Skill Icon={TbBrandJavascript} skilltitle={"Javascript"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={FaReact} skilltitle={"ReactJs"} />
            <Skill Icon={HiOutlineDeviceMobile} skilltitle={"React Native"} />
            <Skill Icon={SiRedux} skilltitle={"Redux"} />
            <Skill Icon={SiMongodb} skilltitle={"MongoDB"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={AiOutlineConsoleSql} skilltitle={"PostgreSQL"} />
            <Skill Icon={SiDjango} skilltitle={"Django"} />
            <Skill Icon={BiGitBranch} skilltitle={"Git"} />
            <Skill Icon={AiFillApi} skilltitle={"Rest Apis"} />
            <Skill Icon={TbBrandPython} skilltitle={"Python"} />
          </div>
          <div className="stack_list2 stack_skill"></div>
        </div>
      </div>
    </div>
  );
};
