import React from 'react';
import Project from '../Project/Project';
import projectsData from '../../data/ProjectsData';


const Projects = () => {
  return (
    <div>
      <div className="flex flex-col space-y-[72px] md:space-y-[88px]">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            text={project.projectSummary}
            imageSrc={project.imageSrc}
            projectId={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;