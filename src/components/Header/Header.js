import React from 'react'
import logo from '../../assets/images/logo.svg'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <div className='px-8 md:px-10 pt-8 md:pt-16 pb-10 md:pb-12 flex justify-between fixed top-0 left-0 right-0 bg-white z-30 xl:px-[165px]'>
      <img src={logo} alt='logo' />
      <Nav />
    </div>
  )
}

export default Header