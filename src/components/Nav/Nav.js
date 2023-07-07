import React, { useState } from 'react';
import hamburger from '../../assets/images/icons/hamburger.svg';
import close from '../../assets/images/icons/close.svg';
import NavItem from '../NavItem/NavItem';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='font-public-sans text-xs text-white uppercase text-center tracking-[2px] flex justify-center'>
            <button
                className="block md:hidden"
                onClick={toggleMenu}
            >
                <img
                    src={isOpen ? close : hamburger}
                    alt="Hamburger Icon"
                    className=""
                />
            </button>
            <div className="hidden md:flex text-grayishdarkblue">
                <ul className="flex space-x-8 items-center">
                    <NavItem href="#home" text="Home" />
                    <NavItem href="#portfolio" text="Portfolio" />
                    <NavItem href="#contact" text="Contact Me" />
                </ul>
            </div>
            {isOpen && (
                <div
                    className="md:hidden absolute right-8 top-20 bg-grayishdarkblue w-56 h-48  z-10"
                >
                    <ul className="flex flex-col py-10 h-full justify-between">
                        <NavItem href="#home" text="Home" />
                        <NavItem href="#portfolio" text="Portfolio" />
                        <NavItem href="#contact" text="Contact Me" />
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;
