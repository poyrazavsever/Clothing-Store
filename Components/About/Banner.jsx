import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function Banner() {
    return (
        <div className='h-screen bg-neutral-950 mt-24 relative z-30'>

            <div className='container mx-auto flex flex-col items-start pt-48 gap-7'>

                <h1 className='text-7xl font-extrabold tracking-widest text-neutral-100 z-50'>Luxe <span className='text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-orange-600'>Threads</span></h1>

                <p className='text-white tracking-wide w-2/4 z-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam iusto ipsam. Fugiat a, quae vel possimus maiores ipsam officia temporibus laudantium optio earum, nulla at eligendi rerum eos suscipit sint accusantium cupiditate blanditiis, magni veniam pariatur beatae? Harum alias praesentium, consectetur excepturi ex accusantium hic dolor eos iure aliquid!</p>

                <button className='px-10 py-2 bg-amber-600 rounded-sm font-medium tracking-widest hover:bg-orange-300 transition duration-300 z-50'>More</button>

                <div className='flex items-center justify-center gap-16 !z-0 pt-24'>
                    <img src="/About/dior.svg" alt="dior" />
                    <img src="/About/Gucci.svg" alt="gucci" />
                    <img src="/About/hermes.svg" alt="hermes" />
                    <img src="/About/verseca.svg" alt="verseca" />
                </div>

            </div>



            <Parallax speed={-30} className='h-full absolute right-0 top-0 z-30'>
                <img src="/About/banner.png" alt="banner model h-full" />
            </Parallax>
        </div>

    )
}

export default Banner