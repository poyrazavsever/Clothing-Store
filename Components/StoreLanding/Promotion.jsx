import React from 'react'
import ProductCard from '../ProductCard'
import ReactIcon from '../Icon'
import { Parallax } from 'react-scroll-parallax'

function Promotion() {
  return (
    <div className='relative h-full !overflow-hidden flex flex-col items-start justify-center gap-16 py-32 dark'>

      <div className='container mx-auto flex flex-col items-start gap-24'>

        <div>
          <h2 className='text-lg font-medium tracking-widest text-zinc-200'>Best of sale: shop our <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-zinc-300 to-orange-400'>editor's</span> picks</h2>
          <span className='text-xs font-medium text-zinc-400'>The best products for you.</span>
        </div>


        <Parallax speed={-5} className='flex items-cente justify-center gap-12 pt-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Parallax>


        <button className='flex items-center gap-1 text-neutral-200 text-base hover:gap-2 transition-all'>
          <a href='/'>See All Product</a>
          <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-200" /></span>
        </button>


      </div>


      {/* BG */}

      <div className='w-36 h-36 rounded-full bg-gradient-to-r from-zinc-900 to-orange-500 top-32 left-32 absolute -z-50 opacity-30 blur-3xl'></div>
    </div>
  )
}

export default Promotion