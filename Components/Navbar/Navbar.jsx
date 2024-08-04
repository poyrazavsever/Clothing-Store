import React, {useState} from 'react'
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'

function Navbar({setIsRegisterVisible}) {

  const [hoverLink, setHoverLink] = useState("")

  return (
    <div className='w-full fixed top-0 !z-50 hidden lg:block'>
        <NavbarTop setHoverLink={setHoverLink} setIsRegisterVisible={setIsRegisterVisible}/>
        <NavbarBottom hoverLink={hoverLink} setHoverLink={setHoverLink}/>
    </div>
  )
}

export default Navbar