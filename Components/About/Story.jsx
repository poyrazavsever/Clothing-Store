import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function Story() {
  return (
    <div className='h-screen bg-neutral-950 z-40'>

      <div className='h-full relative flex items-start justify-between'>



        <div className='w-1/4'>

          <img src="/About/collection.png" alt="collection" className='h-full absolute left-0 z-30' />

          <div className='h-1/2 w-4/6 bg-neutral-900 absolute bottom-0 z-10'></div>

        </div>



        <div className='h-full flex flex-col items-start justify-center gap-4 w-1/2 z-30  container mx-auto '>

          <h1 className='text-5xl font-extrabold tracking-widest text-neutral-100'>Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-orange-600'>Story</span></h1>

          <p className='text-neutral-200 text-sm tracking-wide'>
            Luxe Threads was born from a vision of elegance and a passion for fashion. The brainchild of Emily Davenport, Luxe Threads began with a dream to create a global brand that embodies sophistication and style. Emily's journey into the world of fashion started at a young age, spending countless hours in her mother's sewing room, captivated by the art of design and creation. Growing up, Emily pursued her passion, studying fashion design at a prestigious university. After graduating, she worked with some of the top names in the industry, gaining invaluable experience and honing her craft. Despite her success, Emily felt a deep desire to create something uniquely her own, something that would reflect her vision of luxury and timeless fashion. In 2020, Luxe Threads was launched. From its inception, the brand aimed to combine contemporary trends with classic elegance, offering a curated collection that speaks to modern sophistication. Each piece in the Luxe Threads collection is meticulously crafted, using the finest materials and paying attention to every detail. Luxe Threads quickly gained recognition for its exquisite designs and impeccable quality. The brand's commitment to sustainability and ethical fashion also set it apart in the industry. Luxe Threads collaborates with renowned designers and artisans worldwide.
          </p>

          <button className='px-10 py-2 bg-amber-600 rounded-sm font-medium tracking-widest hover:bg-orange-300 transition duration-300 '>More</button>

        </div>

      </div>

    </div>
  )
}

export default Story