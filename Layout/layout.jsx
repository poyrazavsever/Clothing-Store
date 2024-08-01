import React, {useState} from 'react'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import LoginModal from '@/components/Auth/LoginModal'
import RegisterModal from '@/components/Auth/RegisterModal'
import classNames from 'classnames';

function Layout({ children }) {

  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <div className={classNames({
      "h-screen !overflow-x-hidden": true,
      "overflow-hidden ": isLoginVisible || isRegisterVisible,
      "": !isLoginVisible || !isRegisterVisible
    })}>

      <Navbar />

      <div>
        <LoginModal isLoginVisible={isLoginVisible} setIsLoginVisible={setIsLoginVisible} />
        <RegisterModal isRegisterVisible={isRegisterVisible} setIsRegisterVisible={setIsRegisterVisible} />
      </div>


      {children}


      <Footer />


    </div>
  )
}

export default Layout