import React, { useState } from 'react'

function NavbarTop({ setHoverLink }) {

    const linkStyle = "text-zinc-100 uppercase text-xs font-medium tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative"


    return (
        <div className='w-full py-4 left-0 !z-30 bg-zinc-950 overflow-hidden'>
            <div className='flex items-center justify-between container mx-auto'>

                <div className='flex items-center justify-center gap-8'>

                    {/* Logo  */}
                    <img src="/logo.png" alt="navbar logo" />

                    <ul className='flex items-center justify-center gap-5'>
                        <li><a href="/" className={linkStyle}>Home</a></li>
                        <li><a href="/" className={linkStyle}>Discover</a></li>
                        <li><a href="/" className={linkStyle} onMouseEnter={() => setHoverLink("man")}>Man</a></li>
                        <li><a href="/" className={linkStyle} onMouseEnter={() => setHoverLink("woman")} >Woman</a></li>
                        <li><a href="/" className={linkStyle} onMouseEnter={() => setHoverLink("kids")} >Kids</a></li>
                        <li><a href="/" className={linkStyle}>Collection</a></li>
                        <li><a href="/" className={linkStyle}>Shop</a></li>
                        <li><a href="/" className={linkStyle}>Blog</a></li>
                    </ul>

                </div>

                <div>

                    <a href="/" className={linkStyle}>Sign Up</a>

                </div>

            </div>
        </div>
    )
}

export default NavbarTop