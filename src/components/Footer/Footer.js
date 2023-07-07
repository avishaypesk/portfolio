import React from 'react'
import whiteLogo from '../../assets/images/logo-white.svg';
import NavItem from '../NavItem/NavItem';
import github from '../../assets/images/icons/github.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import './Footer.css';

const socialMedia = [
  { name: 'GitHub', url: 'https://github.com', icon: github },
  { name: 'Twitter', url: 'https://twitter.com', icon: twitter },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: linkedin },
];

function Footer() {
  return (
    <footer className='mt-[115px] '>
      <div className='flex flex-col items-center mb-20 px-8'>
        <h2 className='font-ibarra-real-nova font-bold text-grayishdarkblue text-h2 tracking-tighter leading-42px mb-10 text-center'>Interested in doing a project together?</h2>
        <button className='uppercase border-[1px] border-grayishdarkblue px-8 py-4 font-public-sans tracking-[2px] text-xs leading-none hover:text-white hover:bg-grayishdarkblue max-w-[162px]'>Contact me</button>
      </div>

      <div className="bg-grayishdarkblue">
        <div className='py-14 flex flex-col items-center'>
          <img src={whiteLogo} alt='logo' />
          <ul className='font-public-sans text-xs text-white uppercase text-center tracking-[2px] space-y-8 my-10'>
            <NavItem href="#home" text="Home" />
            <NavItem href="#portfolio" text="Portfolio" />
            <NavItem href="#contact" text="Contact Me" />
          </ul>
          <ul className='flex space-x-4'>
            {socialMedia.map((item) => (
              <li key={item.name}>
                <a href={item.url}>
                  <img src={item.icon} target="_blank" alt={item.name} className='white-svg'/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer