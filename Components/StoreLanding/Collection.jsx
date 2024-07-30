import React from 'react'
import ProductCard from '../ProductCard'

function Collection() {
    return (
        <div className='h-screen !overflow-hidden bg-zinc-200 flex items-center justify-between relative -z-50'>

            <div className='flex flex-col items-start justify-center gap-12'>
                <div>
                    <h1 className='text-6xl text-zinc-400 font-bold tracking-widest pl-24'>Our Collection</h1>
                </div>

                <div className="flex justify-center items-center gap-2 container mx-auto">
                    <ProductCard windowType={false}/>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <div className='absolute right-0 w-1/2 h-screen z-20'>
                <img src="/Images/collection.png" alt="collection left side" className='w-full h-screen object-cover' />
            </div>

            <div className='w-1/3 h-1/2 bg-zinc-300 absolute -z-40 opacity-100'></div>

        </div>
    )
}

export default Collection