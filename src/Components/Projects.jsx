import React from "react";
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

const Projects = () => {
  return (
    <div className="landing_page project_page" id="nav">
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
                publish content. It incorporates a dashboard, a favorite article
                section and a chat room using web socket.
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
                <h3>PendArt</h3>A press release tool to create, edit and publish
                content. It incorporates a dashboard, a favorite article section
                and a chat room using web socket.
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
  );
};

export default Projects;
