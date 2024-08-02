import React, { useState } from 'react'
import ReactIcon from '../Icon'
import classNames from 'classnames'

function TopMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = "text-neutral-500 hover:text-neutral-200 transition-all"

  return (
    <div className='w-full flex flex-col items-start gap-4'>

      <div className='w-full flex items-center justify-between'>

        <h3 className='text-lg tracking-wider text-neutral-200 font-medium'>Collection Products</h3>

      </div>

      <div className='w-full h-[1px] bg-neutral-600'></div>

      <div className='w-full flex items-center justify-between'>
        <span className='text-sm text-neutral-500'>XXX Ürün</span>

      </div>

    </div>

  )
}

export default TopMenu