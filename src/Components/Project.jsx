import React from "react";
import { ICON } from "../Helper/Icons";
const { BsCodeSlash, BsArrowDownRightSquare } = ICON;

const Project = ({
  project_number,
  project_description,
  project_title,
  giturl,
  weburl,
  tools,
}) => {
  return (
    <div className={`section_project_${project_number} section_project`}>
      <div className={`project project${project_number}`}></div>

      <div className={`controls control_${project_number}`}>
        <a href={giturl} target={"_blank"} className="git" rel="noreferrer">
          <BsCodeSlash className="giticon" />
        </a>
        <a href={weburl} target={"_blank"} className="arrow" rel="noreferrer">
          <BsArrowDownRightSquare className="arrowicon" />
        </a>
      </div>
      <div className="section_description">
        <h3>{project_title}</h3>
        {project_description}
      </div>
      <div className="tools_used">
        <ul className={`list_of_tools_${project_number}`}>
          {tools.map((tool, idx) => {
            return <li key={idx}>{tool}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
