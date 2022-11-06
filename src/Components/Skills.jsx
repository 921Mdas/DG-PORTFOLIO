import Skill from "./Skill";

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

export default Skills;
