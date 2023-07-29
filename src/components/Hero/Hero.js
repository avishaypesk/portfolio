import React, { useState, useEffect } from 'react';
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

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='mt-12 relative cursor-pointer'>
      <div className='relative'>
        <img className='scale-x-[-1] md:h-full xl:w-full xl:max-h-[46rem] xl:m-auto rounded-2xl xl:bg-white' src={hero} alt='hero' />
        {!isLargeScreen && (
          <div>
            <h1 className='font-ibarra-real-nova font-bold text-h2 text-grayishdarkblue tracking-tighter leading-42px pt-6 md:pt-14 md:pr-14'>
              Hey, I’m <span className='name'>Avishay Peskin</span> and I love building beautiful websites
            </h1>
          </div>
        )}
        <div className={isLargeScreen ? 'absolute bottom-0 left-0 xl:left-20 w-3/5 xl:w-[650px] bg-white xl:rounded-t-2xl' : 'mt-4'}>
          {isLargeScreen && (
            <h1 className='font-ibarra-real-nova font-bold text-h2 xl:text-[64px] text-grayishdarkblue tracking-tighter leading-42px xl:leading-[65px] md:pt-14 md:pr-14'>
              Hey, I’m <span className='name'>Avishay Peskin</span> and I love building beautiful websites
            </h1>
          )}
          <ScrollLink to='about' smooth={true} duration={600} offset={-200}>
            <button
              className='text-white uppercase font-public-sans bg-darkblue hover:bg-cyan flex items-center w-[200px] h-12 tracking-[2px] text-xs group mt-8 md:mt-12'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? buttonArrowWhite : buttonArrow}
                alt='button arrows'
                className='bg-darkerblue group-hover:bg-cyan'
              />
              <span className='flex-grow text-center'>About me</span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;