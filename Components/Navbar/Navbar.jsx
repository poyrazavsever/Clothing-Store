import React from 'react'
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'

function Navbar() {
  return (
    <div className='w-full fixed top-0 !z-50'>
        <NavbarTop />
        <NavbarBottom />
    </div>
  )
}

export default Navbar