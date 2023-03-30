import "./projects.scss";
import Project from "./Project.tsx";
import { projectData } from "../../Helper/data";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="the_projects">
      <h1 className="OutlineX project_title_1">PROJECTS</h1>
      <div className="project_page">
        <div className="My_Projects">
          <Slide
            direction="up"
            cascade={true}
            triggerOnce
            delay={0}
            damping={0.2}
          >
            {projectData.map((project, idx) => {
              return <Project key={idx} {...project} />;
            })}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Projects;
