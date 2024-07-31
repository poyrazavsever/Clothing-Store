import React from 'react'
import ReactIcon from '../Icon'

function Banner() {
    return (
        <div className='h-screen relative'>

            <img src="/Images/store-landing.gif" alt="background banner" className='w-full h-full -z-40 absolute' />

            <div className='flex items-end justify-end gap-3 h-screen px-24 py-12 sticky'>
                <ReactIcon iconType="fa" iconName="FaMouse" iconColor="text-white" classname="text-lg md:text-xl lg:text-2xl" />
                <span className='text-base md:text-lg lg:text-xl text-white font-semibold'>Scroll</span>
            </div>
        </div>
    )
}

export default Banner