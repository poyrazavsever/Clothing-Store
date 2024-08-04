import React from 'react'
import classNames from 'classnames';

function Body({ isBody, setIsBody }) {
  return (
    <div className='flex items-start gap-3'>
      <button onClick={() => setIsBody("XS")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border': true,
        'border-neutral-500 text-neutral-300': isBody !== "XS",
        'border-orange-600 text-orange-600': isBody === "XS",
      })}>XS</button>

      <button onClick={() => setIsBody("S")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border border-neutral-500 text-neutral-300': true,
        'border-neutral-500 text-neutral-300': isBody !== "S",
        'border-orange-600 text-orange-600': isBody === "S",
      })}>S</button>

      <button onClick={() => setIsBody("M")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border border-neutral-500 text-neutral-300': true,
        'border-neutral-500 text-neutral-300': isBody !== "M",
        'border-orange-600 text-orange-600': isBody === "M",
      })}>M</button>

      <button onClick={() => setIsBody("L")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border border-neutral-500 text-neutral-300': true,
        'border-neutral-500 text-neutral-300': isBody !== "L",
        'border-orange-600 text-orange-600': isBody === "L",
      })}>L</button>

      <button onClick={() => setIsBody("XL")} className={classNames({
        'w-8 h-8 text-sm flex items-center justify-center rounded border border-neutral-500 text-neutral-300': true,
        'border-neutral-500 text-neutral-300': isBody !== "XL",
        'border-orange-600 text-orange-600': isBody === "XL",
      })}>XL</button>
    </div>
  )
}



export default Body