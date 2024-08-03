import React from 'react'

function TopMenu() {


  const linkStyle = "text-zinc-100 uppercase text-xs font-medium tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-100 before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative"

  return (
    <div className='container mx-auto flex flex-col items-start gap-12'>

      <div className='flex items-center justify-between'>

        <h1 className='text-6xl font-black tracking-wider text-neutral-200 font-serif'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-neutral-200'>Luxe</span> Threads</h1>

        <button className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center px-4 py-3 rounded-sm bg-amber-600 text-neutral-950 hover:bg-orange-700 transition-all">Subscribe</button>

      </div>

      <ul className='flex items-center gap-5'>
        <li><a href="/blog" className={linkStyle}>news</a></li>
        <li><a href="/blog" className={linkStyle}>trends</a></li>
        <li><a href="/blog" className={linkStyle}>fashion show</a></li>
        <li><a href="/blog" className={linkStyle}>BACKSTAGE</a></li>
        <li><a href="/blog" className={linkStyle}>GEMs</a></li>
        <li><a href="/blog" className={linkStyle}>WHAT I WORE TODAY</a></li>
        <li><a href="/blog" className={linkStyle}>CELEBRITY STYLE</a></li>
        <li><a href="/blog" className={linkStyle}>STREET STYLE</a></li>
      </ul>

    </div>
  )
}

export default TopMenu