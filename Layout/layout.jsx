import React, { useState } from 'react'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import LoginModal from '@/Components/Auth/LoginModal'
import RegisterModal from '@/Components/Auth/RegisterModal'
import classNames from 'classnames';

function Layout({ children }) {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <div>
      <div className={classNames({
        "h-screen !overflow-x-hidden": true,
        "overflow-hidden ": isLoginVisible || isRegisterVisible,
        "": !isLoginVisible || !isRegisterVisible
      })}>

        <Navbar setIsRegisterVisible={setIsRegisterVisible} />

        <div>
          <LoginModal isLoginVisible={isLoginVisible} setIsRegisterVisible={setIsRegisterVisible} setIsLoginVisible={setIsLoginVisible} />
          <RegisterModal isRegisterVisible={isRegisterVisible} setIsLoginVisible={setIsLoginVisible} setIsRegisterVisible={setIsRegisterVisible} />
        </div>


        <div>
          {children}
        </div>


        <div className='relative pt-36 bg-neutral-950 z-20'>
          <Footer />
        </div>


      </div>
    </div>
  )
}

export default Layout