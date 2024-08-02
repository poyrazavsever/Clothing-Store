import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function Banner() {
  const imageStyle = "w-36 lg:w-44 xl:w-52 opacity-50"

  return (
    <div className='h-screen relative bg-neutral-300 pt-24 w-'>

      <div>

        <h1 className='text-7xl font-extrabold tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 to-neutral-600 pt-24 px-24 z-20 relative'>The Elegance of <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-700 to-orange-500'>Orange</span>: Luxe Threads Collection</h1>

        <p className='relative uppercase font-semibold text-center tracking-wider z-20 pt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vero.</p>

        <div className='w-32 h-32 rounded-full blur-3xl bg-orange-700 absolute right-24 top-36 z-10'></div>

      </div>

      <Parallax speed={-50} className='flex items-center justify-center gap-4'>

        <img src="/Collection/1.png" alt="1 banner sc" className={imageStyle}/>
        <img src="/Collection/2.png" alt="2 banner sc" className={imageStyle}/>
        <img src="/Collection/3.png" alt="3 banner sc" className={imageStyle}/>
        <img src="/Collection/4.png" alt="4 banner sc" className={imageStyle}/>
        <img src="/Collection/5.png" alt="5 banner sc" className={imageStyle}/>

      </Parallax>

    </div>
  )
}

export default Banner