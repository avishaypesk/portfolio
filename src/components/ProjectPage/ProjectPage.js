import React, { useState, useEffect } from 'react';
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

    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1280);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div >
            <img src={project.imageSrc} alt={project.title} className='xl:mb-[115px]'/>

            <div className='xl:flex xl:justify-between xl:max-w-[1400px] xl:mx-auto'>
                <div className='border-y border-grayishdarkblue border-opacity-20 mt-10 mb-12 md:flex md:mb-10 md:space-x-3 xl:flex-row xl:space-x-0 xl:h-fit xl:mt-0'>
                    <div className='md:w-1/2 md:space-y-4 xl:max-w-[400px] xl:w-fit'>
                        <h1 className='text-grayishdarkblue font-ibarra-real-nova text-h2 font-bold leading-42px tracking-tighter mt-6 md:mt-8'>{project.title}</h1>
                        {!isMediumScreen ? (<p className='my-6 text-grayishdarkblue font-public-sans leading-30px text-body2'>{project.projectSummary}</p>) : ''}
                        <p className='text-cyan font-public-sans text-body2 font-bold leading-30px'>{project.technologies}</p>
                        <Link to={project.projectSite} target='_blank'>
                            <Button text='visit website' className='my-6 md:mt-4 md:mb-8' />
                        </Link>
                    </div>
                    {isMediumScreen ? (<p className='mt-8 text-grayishdarkblue font-public-sans leading-30px text-body2 w-1/2 h-fit'>{project.projectSummary}</p>) : ''}
                </div>

                <div className='xl:w-fit xl:max-w-[650px] xl:ml-[80px]'>
                    <h2 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-42px tracking-tighter'>Project Background</h2>
                    <p className='mt-6 md:mt-8 mb-10 text-grayishdarkblue font-public-sans leading-30px text-body2 '>{project.projectBackground}</p>
                    <h3 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-42px tracking-tighter mb-10'>Static Previews</h3>

                    <div className='space-y-8'>
                        {project.staticPreviews &&
                            project.staticPreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index + 1}`} className='m-auto w-auto h-auto max-h-[550px]' />
                            ))}
                    </div>
                    </div>
                    </div>

                    <div className='flex justify-between border-y border-lightgrey mt-16 min-h-[132px] w-full'>
                        <Link to={`/projects/${getPreviousProjectId()}`} className='w-1/2 flex items-start justify-center flex-col border-r text-left md:flex-row md:items-center md:justify-start'>
                            <img src={leftArrow} alt="Previous" className='h-4 w-2 mt-6 md:mt-0 md:mr-8' />
                            <div>
                                <h4 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-36px'>{previousProject.title}</h4>
                                <span className='text-public-sans text-body1 leading-30px text-grayishdarkblue text-opacity-50'>Previous Project</span>
                            </div>
                        </Link>
                        <Link to={`/projects/${getNextProjectId()}`} className='w-1/2 flex items-end justify-center flex-col text-right md:flex-row-reverse md:items-center md:justify-start'>
                            <img src={rightArrow} alt="Next" className='h-4 w-2 mt-6 md:mt-0 md:ml-8' />
                            <div>
                                <h4 className='text-grayishdarkblue font-ibarra-real-nova text-h3 leading-36px'>{nextProject.title}</h4>
                                <span className='text-public-sans text-body1 leading-30px text-grayishdarkblue text-opacity-50'>Next Project</span>
                            </div>
                        </Link>
                    </div>
                </div>
    );
};

export default ProjectPage;