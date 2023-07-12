import React from 'react';
import Project from '../Project/Project';
import projectsData from '../../data/ProjectsData';


const Projects = () => {
  return (
    <div>
      <div className="flex flex-col space-y-[72px]">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            text={project.text}
            imageSrc={project.imageSrc}
            projectId={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;