import React from 'react';
import Project from '../Project/Project';

const Projects = () => {
  const projects = [
    {
      title: 'News Explorer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/images/project1.jpg',
    },
    {
      title: 'Around the US',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/images/project2.jpg',
    },
    {
      title: 'Tech Landing Page',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/images/project3.jpg',
    }, {
      title: 'Another project',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/images/project4.jpg',
    },
  ];

  return (
    <div>
      <div className="flex flex-col space-y-[72px]">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            text={project.text}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;