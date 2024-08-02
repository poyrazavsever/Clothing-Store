import React from 'react'
import ReactIcon from './Icon'
import classNames from 'classnames'

function ProductCard() {



    return (
        <div>
            <div className='relative w-48 h-64'>
                <img src="/Product/product.png" alt="Product promotion" className='absolute w-full h-full rounded' />
                <div className='w-full h-full !-z-20 rounded dark:bg-zinc-200 bg-[#E5E0DA]'></div>

                <div className='z-20 absolute top-3 right-3'>
                    <div className='text-xs font-semibold text-black border border-zinc-900 w-9 h-9 rounded-full flex items-center justify-center'>
                        <ReactIcon iconType="ci" iconName="CiHeart" iconColor="text-black" classname="text-lg" />
                    </div>
                </div>

                <div className='z-20 absolute top-16 right-3'>
                    <div className='text-xs font-semibold text-black bg-red-400 w-9 h-9 rounded-full flex items-center justify-center'>
                        <span className='text-xs font-semibold text-black' >%18</span>
                    </div>
                </div>

            </div>
            <div className='pt-4 flex flex-col gap-3 items-start justify-center w-56'>
                <h4 className='font-semibold text-base dark:text-zinc-100 text-zinc-900 tracking-widest'>Brunello Cucinelli</h4>
                <p className='text-sm font-light dark:text-zinc-200 text-zinc-800 tracking-wide line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className='flex items-center justify-start gap-2'>
                    <span className='text-green-950 text-sm line-through font-semibold'>600$</span>
                    <span className='text-lime-600 font-semibold'>350$</span>
                </div>
            </div>
        </div>
    )

}

export default ProductCard