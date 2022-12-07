import Project from "./Project";
import { projectData } from "../Helper/data";
import { Bounce } from "react-awesome-reveal";

const Projects = () => {
  // nav
  return (
    <>
      <h3 className="intro_projects_title">What I've Built</h3>
      <div className="landing_page project_page">
        <div className="My_Projects">
          <Bounce cascade={true}>
            {projectData.map((project, idx) => {
              return <Project key={idx} {...project} />;
            })}
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default Projects;
