import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import hero from '../../assets/images/hero.svg';
import './Hero.css';
import buttonArrow from '../../assets/images/icons/down-arrows.svg';
import buttonArrowWhite from '../../assets/images/icons/down-arrows-hover.svg';

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='mt-12'>
      <img className="scale-x-[-1]" src={hero} alt='hero' />
      <h1 className='font-ibarra-real-nova font-bold text-h2 text-grayishdarkblue tracking-tighter leading-42px pt-6 relative'>Hey, I’m <span className='name'>Avishay Peskin</span> and I love building beautiful websites</h1>

      <ScrollLink to='about' smooth={true} duration={600}>
        <button
          className='text-white uppercase font-public-sans bg-darkblue hover:bg-cyan flex items-center w-[200px] h-12 tracking-[2px] text-xs group mt-8'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={isHovered ? buttonArrowWhite : buttonArrow} alt='button arrows' className='bg-darkerblue group-hover:bg-cyan' />
          <span className="flex-grow text-center">About me</span>
        </button>
      </ScrollLink>
    </div>
  )
}

export default Hero;