import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import projectsData from '../../data/ProjectsData';
import leftArrow from '../../assets/images/icons/arrow-left.svg'
import rightArrow from '../../assets/images/icons/arrow-right.svg'

const ProjectPage = () => {
    const { id } = useParams();
    const project = projectsData[parseInt(id)];
    const totalProjects = projectsData.length;
    const projectId = parseInt(id);

    const getPreviousProjectId = () => {
        return projectId === 0 ? totalProjects - 1 : projectId - 1;
    };

    const getNextProjectId = () => {
        return projectId === totalProjects - 1 ? 0 : projectId + 1;
    };

    const previousProjectId = getPreviousProjectId(); 
    const previousProject = projectsData[previousProjectId];

    const nextProjectId = getNextProjectId(); 
    const nextProject = projectsData[nextProjectId];

    return (
        <div>
            <div>
                <img src={project.imageSrc} alt={project.title} />
                <h1>{project.title}</h1>
                <p>{project.projectSummary}</p>
                <span>{project.technologies}</span>
                <Link to={project.projectSite}>
                    <Button text='visit website' />
                </Link>
            </div>

            <div>
                <h2>Project Background</h2>
                <p>{project.projectBackground}</p>
                <h3>Static Previews</h3>
                {project.staticPreviews &&
                    project.staticPreviews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Preview +${index + 1}`} />
                    ))}

                <div className='flex justify-between border-y border-lightgrey '>
                    <Link to={`/projects/${getPreviousProjectId()}`}>
                        <img src={leftArrow} alt="Previous" />
                        <h4>{previousProject.title}</h4>
                        <span>Previous Project</span>
                    </Link>
                    <div className='border border-lightgrey'></div>
                    <Link to={`/projects/${getNextProjectId()}`}>
                        <img src={rightArrow} alt="Next" />
                        <h4>{nextProject.title}</h4>
                        <span>Next Project</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;