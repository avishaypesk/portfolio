import React from 'react'
import logo from '../../assets/images/logo.svg'
import Nav from '../Nav/Nav'

function Header() {
  return (
    <div className='pt-8 flex justify-between'>
      <img src={logo} alt='logo' />
      <Nav />
    </div>
  )
}

export default Header