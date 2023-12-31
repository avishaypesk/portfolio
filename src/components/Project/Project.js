import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Project = ({ title, text, preview, projectId, reverse }) => {
  const projectUrl = `/projects/${projectId}`;


  return (
    <div className={`flex flex-col items-center text-grayishdarkblue md:justify-around ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <img src={preview} alt={title} className={`mb-8 md:mb-0 md:w-1/2 xl:w-1/3 ${reverse ? 'md:ml-[69px]' : 'md:mr-[69px]'}`} />
      <div className="border-y-[1px] border-grayishdarkblue border-opacity-20 md:w-1/2">
        <h2 className="font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold my-6">{title}</h2>
        <p className='font-public-sans leading-30px text-body2'>{text}</p>
        <Link to={projectUrl}>
          <Button className='my-6 md:mb-[50px]' text='view project' />
        </Link>
      </div>
    </div>
  );
};

export default Project;