import React from 'react'

function Contact() {
    return (
        <div className='h-screen bg-neutral-200 relative flex items-start justify-between'>

            <div>
                <img src="/Collection/contact.png" alt="leftsidebg" className='h-screen absolute left-0 z-10 opacity-50 xl:opacity-70' />
            </div>

            <div className='w-1/2 relative pt-12 flex flex-col items-start gap-8 pl-12 xl:pl-0 z-30'>

                <h2 className='text-4xl font-bold tracking-wider text-neutral-600 w-96'>Are you looking to purchase a <span className='text-transparent bg-clip-text bg-gradient-to-tr from-neutral-600 to-orange-600'>collectible</span> item?</h2>

                <div className='flex flex-col items-start gap-8'>

                    <div className="w-80 flex flex-col gap-3">
                        <label htmlFor="name" className="text-neutral-800 text-sm font-medium tracking-wide">Product Number</label>

                        <input id="name" type="text" placeholder='123456' className='w-full px-4 py-2 rounded-sm bg-neutral-200  focus:outline-none border border-neutral-600 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black' />
                    </div>

                    <div className="w-80 flex flex-col gap-3">
                        <label htmlFor="name" className="text-neutral-800 text-sm font-medium tracking-wide">Your Message</label>

                        <textarea id="name" placeholder='Explain why you would like to purchase this collectible' className='w-full h-72 px-4 py-2 rounded-sm bg-neutral-200 focus:outline-none border border-neutral-600 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-black' />
                    </div>

                    <button className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center w-full px-4 py-3 rounded-sm bg-amber-600 text-white hover:bg-orange-700 transition-all">Send</button>

                </div>
            </div>

            {/* BG  */}

            <div className='absolute w-1/2 h-1/2 bg-neutral-300 bottom-0 right-0'></div>

        </div>
    )
}

export default Contact