// Internal imports
import Skill from "./Skill";
import { ICON } from "../Helper/Icons";
import { Zoom } from "react-awesome-reveal";
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
} = ICON;

const Skills = () => {
  return (
    <div className="my_skills_intro">
      <div className="skills_container">
        <h3 className="intro_skills_title">What I've Learned</h3>

        <div className="stacks">
          <div className={`stacks_list`}>
            <div className="stack_list1 stack_skill">
              <Zoom cascade={true}>
                <Skill Icon={AiOutlineHtml5} skilltitle={"HTML5"} />
                <Skill Icon={DiSass} skilltitle={"Css, Sass"} />
                <Skill Icon={TbBrandJavascript} skilltitle={"Javascript"} />
              </Zoom>
            </div>
            <div className="stack_list2 stack_skill">
              <Zoom cascade={true}>
                <Skill Icon={SiJest} skilltitle={"Jest"} />
                <Skill Icon={FaReact} skilltitle={"ReactJs"} />
                <Skill
                  Icon={HiOutlineDeviceMobile}
                  skilltitle={"React Native"}
                />
                <Skill Icon={SiRedux} skilltitle={"Redux"} />
                <Skill Icon={FiPlay} skilltitle={"React-Three-Fiber"} />
              </Zoom>
            </div>
            <div className="stack_list2 stack_skill">
              <Zoom cascade={true}>
                <Skill Icon={SiMongodb} skilltitle={"MongoDB"} />
                <Skill Icon={AiOutlineConsoleSql} skilltitle={"PostgreSQL"} />
                <Skill Icon={SiDjango} skilltitle={"Django"} />
                <Skill Icon={BiGitBranch} skilltitle={"Git"} />
                <Skill Icon={AiFillApi} skilltitle={"Rest Apis"} />
                <Skill Icon={TbBrandPython} skilltitle={"Python"} />
              </Zoom>
            </div>
            <div className="stack_list2 stack_skill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
