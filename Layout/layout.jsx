import React from 'react'
import Footer from '@/Components/Footer/Footer'
function Layout({ children }) {
  return (
    <div>

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