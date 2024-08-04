import React from 'react'

function Mobile() {
  return (
    <div className='h-screen w-screen flex items-center justify-center p-24'>
      <div className='flex flex-col items-start gap-4'>

        <h1 className='text-5xl tracking-widest font-black font-serif text-neutral-200'><span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-neutral-300'>Luxe</span> Threads</h1>
        
        <p className='text-lg tracking-wider font-medium text-neutral-300'>Currently, access to this website from mobile and tablet devices is not available. For the best experience, please visit the site using a desktop computer. Thank you for your understanding!</p>

      </div>
    </div>
  )
}

export default Mobile