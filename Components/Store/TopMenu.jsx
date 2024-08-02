import React, { useState } from 'react'
import ReactIcon from '../Icon'
import classNames from 'classnames'

function TopMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = "text-neutral-500 hover:text-neutral-200 transition-all"

  return (
    <div className='w-full flex flex-col items-start gap-4'>

      <div className='w-full flex items-center justify-between'>

        <h3 className='text-lg tracking-wider text-neutral-200 font-medium'>Product Header</h3>

        <div className='relative'>
          <input type="text" placeholder='Search' className='focus:outline-none pl-8 py-2 placeholder:text-neutral-500 placeholder:tracking-wide placeholder:font-medium text-neutral-300 bg-neutral-900 opacity-50 border border-neutral-500 rounded-md' />
          <span className='absolute top-3 left-2'><ReactIcon iconType="fa" iconName="FaSearch" iconColor="text-neutral-500 text-base" /></span>
        </div>

      </div>

      <div className='w-full h-[1px] bg-neutral-600'></div>

      <div className='w-full flex items-center justify-between'>
        <span className='text-sm text-neutral-500'>XXX Ürün</span>

        <div className='relative z-40'>
          <button onClick={() => setIsOpen(!isOpen)} className='py-1 px-6 text-sm flex items-center gap-1 text-neutral-200 bg-neutral-900 opacity-50 border border-neutral-500 rounded-md'>
            <span>Recommended Sort</span>
            <ReactIcon iconType="ai" iconName="AiOutlineArrowRight" iconColor="text-neutral-200" classname={classNames({
              "text-sm transition-all": true,
              "rotate-0": !isOpen,
              "rotate-90": isOpen,
            })} />
          </button>
          {isOpen ? (
            <ul className='absolute bg-neutral-900 rounded py-4 px-4 inline-flex flex-col items-start gap-2 text-xs animate-card w-full'>
              <li className={linkStyle}>
                <button>Recommended Sort</button>
              </li>

              <li className={linkStyle}>
                <button>Most Reviewed</button>
              </li>

              <li className={linkStyle}>
                <button>Lowest price</button>
              </li>

              <li className={linkStyle}>
                <button>Highest Price</button>
              </li>

              <li className={linkStyle}>
                <button>The Newests</button>
              </li>

              <li className={linkStyle}>
                <button>Best sellers</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>

    </div>

  )
}

export default TopMenu