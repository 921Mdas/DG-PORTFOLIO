import React, { useState, useRef, useMemo, useEffect } from "react";
import muggshot from "../../assets/django.png";
import "./about.scss";

import { BiRightArrow } from "react-icons/bi";
import { GrHeroku } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { DiNodejsSmall } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandPython } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { SiDjango } from "react-icons/si";
import Skill from "./Skill";
import deo from "../../assets/Deo.jpeg";
// import { OBSERVERAPI } from "../../helper";

const About = () => {
  const [pos, setPos] = useState(0);
  window.addEventListener("scroll", () => {
    setPos(window.scrollY);
  });

  const target = useRef(null);
  const [isVisible, stateChange] = useState(false);

  // OBSERVERAPI(target, stateChange);

  const classChanger = isVisible ? "" : "observerAPI";

  return (
    <div className={`about `} id="about">
      <div className="title">
        <span>01.</span> <h1>About Me</h1>
        <div className="about_line"></div>
      </div>

      <div className={`about_brandstatement ${classChanger}`} ref={target}>
        <div className="avatar">
          <img src={deo} alt="" className="avatarprofileimg" />
        </div>
        <div className="brandstatement">
          <span>
            🧑🏾‍💻 My interest in web development started back in 2013. Freelancing
            as a graphic designer, a client in need asked if I could challenge
            myself and build a low-cost website — it turns out research and hard
            work can do anything! Please see my 2013 website{" "}
            <a href="http://chea-ar.org/Index.html">🖱 Here</a>
            <br />
            <br />
          </span>
          <span>
            I was proud that I had just discovered a new super power, which was
            motivation and passion for anything I genuinly wanted to do. I
            graduated with a Btech in Communication Science which led me to work
            for a SaaS company.
          </span>
          <span>
            <br />
            <br /> Working closely with clients and engineering help me better
            understand the needs and challenges from both sides. Researching how
            to solve my clients' problems, led me back to my passion for
            programming. Using my superpowers, I have since spent more than 300
            hours of self-study and an additional 480 hours attending a coding
            Bootcamp and acquired skills to develop, test, and deploy full-stack
            applications.
          </span>
        </div>
      </div>

      <div className="stacks">
        <h2 className="stacks_title">My Skills:</h2>

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
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={SiMongodb} skilltitle={"MongoDB"} />
            <Skill Icon={AiOutlineConsoleSql} skilltitle={"PostgreSQL"} />
            <Skill Icon={SiDjango} skilltitle={"Django"} />
          </div>
          <div className="stack_list2 stack_skill">
            <Skill Icon={BiGitBranch} skilltitle={"Git"} />
            <Skill Icon={AiFillApi} skilltitle={"Rest Apis"} />
            <Skill Icon={TbBrandPython} skilltitle={"Python"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
