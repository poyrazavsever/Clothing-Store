import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import ProductCard from '../ProductCard'
function Complete() {
    return (
        <div className='relative h-full !overflow-hidden flex flex-col items-start justify-center gap-16 py-32 dark'>

            <div className='container mx-auto flex flex-col items-start justify-center gap-12'>

                <div>
                    <h2 className='text-lg font-medium tracking-widest text-zinc-200'><span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-zinc-300 to-orange-400'>Complete</span> the look</h2>
                    <span className='text-xs font-medium text-zinc-400'>The best products for you.</span>
                </div>


                <Parallax speed={-5} className='flex flex-wrap items-center justify-start gap-12 pt-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Parallax>


            </div>


            {/* BG */}

            <div className='w-36 h-36 rounded-full bg-gradient-to-r from-zinc-900 to-orange-500 top-32 left-32 absolute -z-50 opacity-60 blur-3xl'></div>
            <div className='w-1/2 h-full bg-neutral-900 opacity-75 absolute right-0 bottom-0 -z-20'></div>
        </div>
    )
}

export default Complete