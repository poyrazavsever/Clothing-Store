import React from 'react'
import ReactIcon from '../Icon'
import { Parallax } from 'react-scroll-parallax'

function Collection() {
  return (
    <div className='h-screen bg-neutral-200 relative'>

      <div className='pt-36 container mx-auto flex flex-col items-start justify-center gap-6'>

        <h2 className='text-8xl font-bold tracking-widest text-neutral-500'>Our Collection</h2>

        <p className='text-lg font-medium tracking-wider'>Elegance Redefined, Style Perfected.</p>

        <p className='text-sm w-1/3'>At Luxe Threads, our collection is a celebration of timeless sophistication and modern elegance. Each piece is thoughtfully designed to blend contemporary trends with classic style, ensuring you always look and feel your best. From luxurious fabrics to exquisite detailing, our range offers something for every occasion – whether you're dressing for a special event or seeking everyday elegance. Explore Luxe Threads and find the perfect addition to your wardrobe, where each item tells a story of refined craftsmanship and unparalleled quality.</p>

        <button className='flex items-center font-medium gap-1 text-neutral-700 text-base hover:gap-2 transition-all pt-8'>
          <a href='/'>See Our Collection</a>
          <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-700" /></span>
        </button>

      </div>

      <div className='absolute right-0 bottom-0 z-10'>

        <img src="/About/collection.png" alt="collection" />

      </div>


      {/* Bg  */}

      <div className='w-1/2 h-1/2 bg-neutral-400 absolute right-0 bottom-0'></div>

    </div>
  )
}

export default Collection