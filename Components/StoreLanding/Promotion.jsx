import React from 'react'
import ProductCard from '../ProductCard'
import ReactIcon from '../Icon'

function Promotion() {
  return (
    <div className='relative h-screen !overflow-hidden flex flex-col items-start justify-center gap-16 pt-16'>

      <div className='container mx-auto'>
        <h2 className='text-lg font-medium tracking-widest text-zinc-200'>Best of sale: shop our editor's picks</h2>
      </div>

      <div className="flex items-center justify-center gap-12 w-[4000px] animate-sliderAnimation">

        {/* First 7 */}

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        {/* Repeat */}

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

        <ProductCard />

      </div>

      <div className='container mx-auto pt-8'>
        <button className='flex items-center gap-1 text-neutral-200 text-base hover:gap-2 transition-all'>
          <a href='/'>See All Product</a>
          <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-400" /></span>
        </button>
      </div>

      {/* BG */}

      <div className='w-1/2 h-1/2 bg-neutral-900 top-64 absolute -z-50 opacity-100'></div>
      <div className='w-36 h-36 bg-neutral-900 top-16 right-32 absolute -z-50 opacity-100'></div>
    </div>
  )
}

export default Promotion