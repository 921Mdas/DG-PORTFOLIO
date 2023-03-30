// Internal imports
import "./skills.scss";
import Skill from "./Skill.tsx";
import { ICON } from "../../Helper/Icons";
import { Slide } from "react-awesome-reveal";
const {
  FaReact,
  SiRedux,
  SiMongodb,
  TbBrandJavascript,
  DiSass,
  AiFillApi,
  BiGitBranch,
  AiOutlineConsoleSql,
  AiOutlineHtml5,
  TbBrandPython,
  HiOutlineDeviceMobile,
  SiDjango,
  SiJest,
  FiPlay,
  SiTypescript,
} = ICON;

const Skills = () => {
  return (
    <div className="my_skills_intro">
      <div className="skills_container">
        <h1 className="intro_skills_titleOne OutlineX">FULL</h1>
        <h1 className="intro_skills_titleTwo OutlineX">STACK</h1>

        <div className="stacks">
          <div className={`stacks_list`}>
            <Slide direction="up" cascade={true} triggerOnce damping={0.2}>
              <div className="stack_list1 stack_skill">
                <Skill Icon={AiOutlineHtml5} skilltitle={"HTML5"} />
                <Skill Icon={DiSass} skilltitle={"Css, Sass"} />
                <Skill Icon={TbBrandJavascript} skilltitle={"Javascript"} />
                <Skill Icon={SiTypescript} skilltitle={"Typescript"} />
              </div>
              <div className="stack_list2 stack_skill">
                <Skill Icon={SiJest} skilltitle={"Jest"} />
                <Skill Icon={FaReact} skilltitle={"ReactJs"} />
                <Skill
                  Icon={HiOutlineDeviceMobile}
                  skilltitle={"React Native"}
                />
                <Skill Icon={SiRedux} skilltitle={"Redux"} />
                <Skill Icon={FiPlay} skilltitle={"React-Three-Fiber"} />
              </div>
              <div className="stack_list2 stack_skill">
                <Skill Icon={SiMongodb} skilltitle={"MongoDB"} />
                <Skill Icon={AiOutlineConsoleSql} skilltitle={"PostgreSQL"} />
                <Skill Icon={SiDjango} skilltitle={"Django"} />
                <Skill Icon={BiGitBranch} skilltitle={"Git"} />
                <Skill Icon={AiFillApi} skilltitle={"Rest Apis"} />
                <Skill Icon={TbBrandPython} skilltitle={"Python"} />
              </div>
            </Slide>
            <div className="stack_list2 stack_skill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
