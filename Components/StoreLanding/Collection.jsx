import React from 'react'
import ReactIcon from '../Icon'
import { Parallax } from 'react-scroll-parallax'
import ProductCard from '../ProductCard'

function Collection() {
    return (
        <div className='!overflow-hidden bg-zinc-200 flex justify-between relative !z-10'>


            <div className='w-1/2 flex flex-col items-start justify-center gap-24 px-24'>
                <h1 className='text-3xl lg:text-5xl  text-zinc-500 font-bold tracking-widest pt-32'>Our Collection</h1>


                <div className='flex items-center gap-12'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>


                <button className='flex items-center font-medium gap-1 text-neutral-700 text-base hover:gap-2 transition-all'>
                    <a href='/'>See Our Collection</a>
                    <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-700" /></span>
                </button>

            </div>


            <Parallax speed={-50} className='w-1/2 h-screen z-20'>
                <img src="/Images/collection.png" alt="collection left side" className='w-full h-screen object-cover' />
            </Parallax >

            <div className='w-1/3 h-1/2 absolute bg-zinc-300 -z-10'></div>

        </div>
    )
}

export default Collection