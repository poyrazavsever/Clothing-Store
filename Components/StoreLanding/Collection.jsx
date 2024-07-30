import React from 'react'
import ProductCard from '../ProductCard'
import ReactIcon from '../Icon'

function Collection() {
    return (
        <div className='!overflow-hidden bg-zinc-200 flex justify-between relative -z-50'>

            <div className='w-1/2 flex flex-col items-start gap-24 px-24'>
                <h1 className='text-3xl lg:text-5xl  text-zinc-500 font-bold tracking-widest  pt-32'>Our Collection</h1>


                <p className='text-sm font-medium tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur maxime doloribus excepturi quam, qui corporis illum eos asperiores, eum ea quis laudantium ut modi quas dolor placeat, iusto commodi culpa unde atque? Soluta rem hic quae asperiores temporibus magnam, fuga repellat consectetur laboriosam, provident ipsa mollitia inventore id, facere eos? Unde, cumque maiores! Sequi doloribus ex ut architecto corrupti distinctio nam vero quibusdam dolor officiis, ab necessitatibus, id labore similique saepe eos ea dolorem! Amet deleniti porro autem nemo enim sequi assumenda ea eligendi quia corporis obcaecati, accusamus libero est quis odio commodi? Voluptates qui quaerat optio fugiat cumque! Est, libero obcaecati suscipit facilis nihil eum aperiam nam cumque doloremque nisi odio harum mollitia sint assumenda ea! Blanditiis, quia.</p>


                <button className='flex items-center font-medium gap-1 text-neutral-700 text-base hover:gap-2 transition-all !z-50'>
                    <a href='/'>See All Product</a>
                    <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-700" /></span>
                </button>

            </div>

            <div className='w-1/2 h-screen z-20'>
                <img src="/Images/collection.png" alt="collection left side" className='w-full h-screen object-cover' />
            </div>

            <div className='w-1/3 h-1/2 bg-zinc-300 absolute top-32 -z-40 opacity-100'></div>

        </div>
    )
}

export default Collection