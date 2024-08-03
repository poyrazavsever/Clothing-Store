import React from 'react'
import CardItem from '../CardItem'
import ReactIcon from '../Icon'
function Popular() {
    return (
        <div className='w-full container mx-auto mt-12 relative'>

            <div className='w-full flex flex-col items-start gap-4'>
                <div className='w-full h-[1px] bg-neutral-800'></div>
                <span className='text-sm font-bold tracking-widest text-neutral-600 uppercase'>Popular</span>
                <div className='w-full h-[1px] bg-neutral-800'></div>
            </div>

            <div className='flex flex-wrap items-start gap-8 pt-12'>


                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
                <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />

            </div>

            <button className='flex items-center font-medium gap-1 text-neutral-400 text-base hover:gap-2 transition-all pt-24'>
                <a href='/collection'>Load More</a>
                <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-700" /></span>
            </button>


            {/* BG */}

            <div className='w-1/2 h-full bg-neutral-900 opacity-75 absolute right-0 bottom-0 -z-20'></div>

        </div>
    )
}

export default Popular