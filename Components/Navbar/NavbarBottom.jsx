import classNames from 'classnames'
import React, {useState} from 'react'

function NavbarBottom({hoverLink, setHoverLink}) {

    const leftLinkStyle = "font-medium tracking-widest text-zinc-100 before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative cursor-pointer"

    const rightLinkStyle = "text-sm font-medium tracking-widest text-zinc-400 before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative cursor-pointer"

    const [linkName, setLinkName] = useState("suits")
    

    return (

        <div className={classNames({
            'bg-neutral-950 bg-opacity-90 backdrop-blur-3xl py-8 !z-50' : true,
            'hidden' : hoverLink === "", 
        })} onMouseEnter={() => {setHoverLink(hoverLink)}} onMouseLeave={() => {setHoverLink("")}}>
            <div className='h-full container mx-auto flex items-start gap-24'>

                <div className='h-full flex items-start gap-16'>
                    <ul className='flex flex-col items-start gap-6'>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("suits")} >Suits</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("shirts")}>Shirts</li> 
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("outerwear")}>Outerwear</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("trousers")}>Trousers</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("knitwear")}>Knitwear</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("accessories")}>Accessories</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("footwear")}>Footwear</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("activewear")}>Activewear</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("occasion wear")}>Occasionwear</li>
                        <li className={leftLinkStyle} onMouseEnter={() => setLinkName("sale")}>Sale</li>
                    </ul>

                    <div className='h-96 w-[1px] bg-neutral-600'></div>

                </div>


                <div className='flex flex-col items-start gap-8 w-full'>

                    <div className='flex items-center justify-start gap-4'>

                        <h5 className='text-xs font-semibold text-neutral-300 uppercase tracking-wider'>Popuplar</h5>

                        <div className='h-[1px] w-96 bg-neutral-600'></div>

                    </div>

                    <div className='flex w-full items-start justify-between'>
                        <ul className='flex flex-col items-start gap-4'>
                            <li className={rightLinkStyle}>Suits</li>
                            <li className={rightLinkStyle}>Shirts</li>
                            <li className={rightLinkStyle}>Outerwear</li>
                            <li className={rightLinkStyle}>Trousers</li>
                            <li className={rightLinkStyle}>Knitwear</li>
                            <li className={rightLinkStyle}>Accessories</li>
                            <li className={rightLinkStyle}>Footwear</li>
                            <li className={rightLinkStyle}>Activewear</li>
                            <li className="text-sm font-medium tracking-widest text-green-400">{linkName}</li>
                        </ul>

                        <div className='flex items-start justify-center gap-12'>

                            <img src="/Images/navbar1.png" alt="navbar1 right side" className="w-48" />

                            <img src="/Images/navbar2.png" alt="navbar2 right side" className="w-48" />

                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default NavbarBottom