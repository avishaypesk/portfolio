import React from 'react';
import { useLocation } from 'react-router-dom';
import whiteLogo from '../../assets/images/logo-white.svg';
import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';
import './Footer.css';
import socialMedia from '../../data/socialMedia';

function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className='mt-20 '>
      {!isContactPage && (
        <div className='flex flex-col items-center mb-20 px-8'>
          <h2 className='font-ibarra-real-nova font-bold text-grayishdarkblue text-h2 tracking-tighter leading-42px mb-10 text-center'>Interested in doing a project together?</h2>
          <Button text='Contact me' />
        </div>
      )}

      <div className="bg-grayishdarkblue">
        <div className='py-14 flex flex-col items-center'>
          <img src={whiteLogo} alt='logo' />
          <ul className='font-public-sans text-xs text-white uppercase text-center tracking-[2px] space-y-8 my-10'>
            <NavItem to="/" text="Home" />
            <NavItem to="/projects" text="Portfolio" />
            <NavItem to="/contact" text="Contact Me" />
          </ul>
          <ul className='flex space-x-4'>
            {socialMedia.map((item) => (
              <li key={item.name}>
                <a href={item.url}>
                  <img src={item.icon} target="_blank" alt={item.name} className='white-svg w-6 h-6' />
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