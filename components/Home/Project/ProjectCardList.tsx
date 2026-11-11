import React from "react";
import { ProjectData } from "./Project.data";
import { ProjectCard } from "./ProjectCard";

const ProjectCardList: React.FC = () => {
  return (
    <React.Fragment>
      {ProjectData.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </React.Fragment>
  );
};

export default ProjectCardList;
