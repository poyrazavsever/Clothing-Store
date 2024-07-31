import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'

function Layout({ children }) {
  return (
    <div>

      <Navbar />

      <div>
        {children}
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Layout