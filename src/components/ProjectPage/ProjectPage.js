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
        <div >
            <img src={project.imageSrc} alt={project.title} />

            <div className='border-y border-grayishdarkblue border-opacity-20 mt-10 mb-12'>
                <h1 className='text-grayishdarkblue font-ibarra-real-nova text-h2 font-bold leading-42px tracking-tighter mt-6'>{project.title}</h1>
                <p className='my-6 text-grayishdarkblue font-public-sans leading-30px text-body2'>{project.projectSummary}</p>
                <p className='text-cyan font-public-sans text-body2 font-bold leading-30px'>{project.technologies}</p>
                <Link to={project.projectSite}>
                    <Button text='visit website' className='my-6' />
                </Link>
            </div>

            <div>
                <h2 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-42px tracking-tighter mb-7'>Project Background</h2>
                <p className='my-6 text-grayishdarkblue font-public-sans leading-30px text-body2 mb10'>{project.projectBackground}</p>
                <h3 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-42px tracking-tighter mb-10'>Static Previews</h3>
                {project.staticPreviews &&
                    project.staticPreviews.map((preview, index) => (
                        <img key={index} src={preview} alt={`Preview ${index + 1}`} />
                    ))}

                <div className='flex justify-between border-y border-lightgrey mt-16 min-h-[132px]'>
                    <Link to={`/projects/${getPreviousProjectId()}`} className='w-1/2 flex items-start justify-center flex-col border-r text-left'>
                        <img src={leftArrow} alt="Previous" className='h-4 w-2 mt-6'/>
                        <h4 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-36px'>{previousProject.title}</h4>
                        <span className='text-public-sans text-body1 leading-30px text-grayishdarkblue text-opacity-50'>Previous Project</span>
                    </Link>
                    <Link to={`/projects/${getNextProjectId()}`} className='w-1/2 flex items-end justify-center flex-col text-right'>
                        <img src={rightArrow} alt="Next" className='h-4 w-2 mt-6'/>
                        <h4 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-36px'>{nextProject.title}</h4>
                        <span className='text-public-sans text-body1 leading-30px text-grayishdarkblue text-opacity-50'>Next Project</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;