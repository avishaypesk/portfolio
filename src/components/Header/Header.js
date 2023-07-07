import React from 'react'
import logo from '../../assets/images/logo.svg'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <div className='px-8 pt-8 pb-10 flex justify-between fixed top-0 left-0 right-0 bg-white z-30'>
      <img src={logo} alt='logo' />
      <Nav />
    </div>
  )
}

export default Header