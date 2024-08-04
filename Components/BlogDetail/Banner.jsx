import React from 'react'
import Icon from "../Icon"

function Banner() {

  const linkStyle = "cursor-pointer text-xs md:text-sm text-neutral-300 relative before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-400 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"

  return (
    <div className='container mx-auto flex items-start justify-start gap-12'>

      <div className='w-72'>
        <img src="/Blog/post.png" alt="post detail left" />
      </div>

      <div className='flex flex-col items-start gap-12'>
        <div className='flex flex-col items-start gap-4'>
          <span className='upparcase text-xs font-semibold text-neutral-300 tracking-wider'>MODA</span>
          <h1 className='text-lg font-medium text-neutral-200 tracking-wide'>#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası</h1>
          <p className='tracking-wider text-neutral-400'>Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi.</p>
        </div>

        <div className='flex flex-col items-start gap-2'>
          <p className='uppercase text-sm font-semibold text-neutral-300'>Writer : <span>XXXX XXXXX</span></p>
          <p className='uppercase text-sm font-semibold text-neutral-300'>August 19, 2022</p>
        </div>

        <div>

          <ul className='flex flex-col gap-3 items-start text-neutral-700'>

            <div className={`flex items-center gap-1 ${linkStyle}`}>
              <Icon iconType="ai" iconName="AiFillInstagram" />
              <li>Instagram</li>
            </div>

            <div className={`flex items-center gap-1 ${linkStyle}`}>
              <Icon iconType="ai" iconName="AiFillFacebook" />
              <li>Facebook</li>
            </div>

            <div className={`flex items-center gap-1 ${linkStyle}`}>
              <Icon iconType="bi" iconName="BiLogoPinterest" />
              <li>Pinterest</li>
            </div>

            <div className={`flex items-center gap-1 ${linkStyle}`}>
              <Icon iconType="ai" iconName="AiFillYoutube" />
              <li>Youtube</li>
            </div>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Banner