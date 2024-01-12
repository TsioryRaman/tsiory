import React from "react"
import { ProjectData } from "./Project.data"
import { ProjectCard } from "./ProjectCard"
const ProjectCardList:React.FC = () => {
    return (
        <React.Fragment>
            {ProjectData.map(project => <ProjectCard key={project.title} img={project.img} title={project.title} stack={project.stack} description={project.description}/>)}
        </React.Fragment>
    )
}
export default ProjectCardList