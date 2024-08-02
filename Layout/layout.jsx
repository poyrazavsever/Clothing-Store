import React, { useState } from 'react'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import LoginModal from '@/components/Auth/LoginModal'
import RegisterModal from '@/components/Auth/RegisterModal'
import classNames from 'classnames';

function Layout({ children }) {

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
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


      <div className='mt-16'>
        <Footer />
      </div>


    </div>
  )
}

export default Layout