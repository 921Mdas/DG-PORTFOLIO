import Project from "./Project";
import { projectData } from "../Helper/data";

const Projects = () => {
  // nav
  return (
    <>
      <h3 className="intro_projects_title">What I've Built</h3>
      <div className="landing_page project_page">
        <div className="My_Projects">
          {projectData.map((project, idx) => {
            return <Project key={idx} {...project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
