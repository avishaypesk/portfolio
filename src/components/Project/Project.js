import React from 'react';
import Button from '../Button/Button';

const Project = ({ title, text, imageSrc }) => {
  return (
    <div className="flex flex-col items-center text-grayishdarkblue">
      <img src={imageSrc} alt={title} className="mb-8" />
      <div className="border-y-[1px] border-grayishdarkblue border-opacity-20">
        <h2 className="font-ibarra-real-nova tracking-tighter leading-42px text-h2 font-bold my-6">{title}</h2>
        <p className='font-public-sans leading-30px text-body2'>{text}</p>
        <Button className='my-6' text='view project'/>
      </div>
    </div>
  );
};

export default Project;