import React from 'react'
import { FaRegClock } from "react-icons/fa"
import { AiFillHeart, AiFillEye } from "react-icons/ai"

function CardItem({ img_link, pp_foto, name, title, descr, time, views, like }) {
    return (
        <a href="/blogDetail">
            <div className="inline-flex flex-co dark:w-64 w-80 duration-500 h-96 relative delay-500 rounded-lg cursor-pointer group
    after:absolute transition-all
    after:text-gray-200
    after:translate-y-5
    after:content-['OKUMAK_İÇİN_TIKLA']
    dark:after:top-20
    dark:after:left-7
    after:top-16
    after:left-14
    after:tracking-wider
    after:z-20
    after:text-lg
    after:opacity-0
    after:transition-all
    after:duration-500
    after:font-semibold
    hover:after:translate-y-0
    hover:after:opacity-100
    " id='card'>

                <div className="absolute dark:w-64 w-80 rounded-md">
                    <img src={img_link} alt="cardImg" className='w-full h-96 object-cover rounded-md transition group-hover:grayscale-50' />
                </div>


                <div className='bg-neutral-800 w-full group-hover:h-auto absolute bottom-0 transition duration-500 flex flex-col '>

                    <div className='relative'>
                        <div className='dark:group-hover:-translate-y-16 group-hover:-translate-y-20 h-32 transition-all duration-500  w-full pt-4 '>

                            <div className='flex items-center px-5 pb-2 pt-5 bg-neutral-800'>
                                <img src={pp_foto} alt="ppImg" className='w-6 h-6 rounded-full mr-2' />
                                <h5 className='text-neutral-200 text-sm'>{name}</h5>
                            </div>

                            <h2 className='dark:text-base text-lg font-bold px-5 delay-100 bg-neutral-800 text-neutral-50'>{title}</h2>

                        </div>


                        <p className='opacity-0 top-1/3 absolute text-sm text-neutral-100 transition-all duration-500 group-hover:line-clamp-3 group-hover:opacity-100 px-5'>{descr}
                        </p>



                        <div className="cıb-bottom flex w-full around text-xs text-neutral-300 font-semibold pl-5 pb-4 pt-3">

                            <span className='flex items-center gap-1'>
                                <FaRegClock />
                                {time} read
                            </span>

                            <span className=' flex px-3 items-center gap-1'>
                                <AiFillHeart />
                                {views}
                            </span>

                            <span className='flex items-center gap-1'>
                                <AiFillEye />
                                {like}
                            </span>
                        </div>
                    </div>






                    {/* pb-3 translate-y-4 h-0 text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-full */}

                </div>

            </div>
        </a>
    )
}

export default CardItem