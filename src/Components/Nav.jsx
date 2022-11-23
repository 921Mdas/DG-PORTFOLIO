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
import { GiSwordSmithing } from "react-icons/gi";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";

const Nav = ({ navigateHome, navigateProject, navigateContact }) => {
  return (
    <div id="navigation_bar">
      <div className="logo">
        <h3>deomadingu</h3>
        <h6>SOFTWARE DEVELOPER</h6>
      </div>

      <div className="navigation_btn">
        <button
          onClick={() => navigateHome()}
          class="navigation-index nav-index1"
          content-data="About Me"
        >
          <BsFillPersonFill />
        </button>
        <button
          onClick={() => navigateProject()}
          class="navigation-index nav-index2"
          content-data="Projects"
        >
          <AiFillFolderOpen />
        </button>
        <button
          onClick={() => navigateContact()}
          class="navigation-index nav-index3"
          content-data="Contact Me"
        >
          <MdOutlineContactMail />
        </button>
      </div>
    </div>
  );
};

export default Nav;
