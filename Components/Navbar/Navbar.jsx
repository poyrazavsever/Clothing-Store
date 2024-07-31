import React, {useState} from 'react'
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'

function Navbar() {

  const [hoverLink, setHoverLink] = useState("")

  return (
    <div className='w-full fixed top-0 !z-50'>
        <NavbarTop setHoverLink={setHoverLink}/>
        <NavbarBottom hoverLink={hoverLink} setHoverLink={setHoverLink}/>
    </div>
  )
}

export default Navbar