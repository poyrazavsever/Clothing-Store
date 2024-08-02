import React from 'react'
import ReactIcon from '../Icon'

//Components 
import TopMenu from './TopMenu'
import Products from './Products'

function CollectionProduct() {
    return (
        <div className='bg-neutral-950 relative flex items-start justify-center px-24 py-16 !z-20'>

            <div className='w-fit pl-4 lg:pl-16 xl:pl-48 flex flex-col items-start gap-12'>
                <TopMenu />
                <Products />

                <div>
                    <button className='flex items-center font-medium gap-1 text-neutral-400 text-base hover:gap-2 transition-all pt-12'>
                        <a href='/collection'>Load More</a>
                        <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-700" /></span>
                    </button>
                </div>
            </div>



        </div>
    )
}

export default CollectionProduct