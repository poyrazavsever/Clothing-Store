import React from 'react'
import ReactIcon from '../ReactIcon'

function NavbarTop({ setHoverLink, setIsRegisterVisible }) {

    const linkStyle = "text-zinc-100 uppercase text-xs font-medium tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative"


    return (
        <div className='w-full py-4 left-0 !z-30 bg-zinc-950 overflow-hidden'>
            <div className='flex items-center justify-between container mx-auto'>

                <div className='flex items-center justify-center gap-8'>

                    {/* Logo  */}
                    <img src="/logo.png" alt="navbar logo" />

                    <ul className='flex items-center justify-center gap-5'>
                        <li><a href="/" className={linkStyle}>Home</a></li>
                        <li><a href="/about" className={linkStyle}>About</a></li>
                        <li><a href="/shop" className={linkStyle} onMouseEnter={() => setHoverLink("man")}>Man</a></li>
                        <li><a href="/shop" className={linkStyle} onMouseEnter={() => setHoverLink("woman")} >Woman</a></li>
                        <li><a href="/shop" className={linkStyle} onMouseEnter={() => setHoverLink("kids")} >Kids</a></li>
                        <li><a href="/collection" className={linkStyle}>Collection</a></li>
                        <li><a href="/shop" className={linkStyle}>Shop</a></li>
                        <li><a href="/blog" className={linkStyle}>Blog</a></li>
                    </ul>

                </div>

                <div className='flex items-center justify-center gap-8'>

                    <button onClick={() => setIsRegisterVisible(true)}>
                    <ReactIcon iconType="fa" iconName="FaUser" iconColor="text-zinc-300"/>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default NavbarTop