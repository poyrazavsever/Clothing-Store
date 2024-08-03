import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import ReactIcon from '../Icon'

import CardItem from '../CardItem'

function Post() {
  return (

    <div className='mt-12 container mx-auto flex items-start justify-between gap-12'>

      <Parallax>
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />

      </Parallax>


      <div className='dark flex flex-wrap gap-4'>

        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />
        <CardItem img_link="/Blog/post.png" pp_foto="/Blog/pp.jpg" name="Poyraz" title="#SummerInVogue: Aslı İlkbahar ile Bir Yaz Rüyası" descr="Blinq markasının kurucularından Aslı İlkbahar, sımsıcak mevsime dair tüm tercihlerini Vogue Türkiye için listeledi." time="18 min" views="3994" like="400" />

        <div className='flex items-center gap-5 pt-8'>
          <div className="text-xl">
            <ReactIcon iconType="fa" iconName="FaRegArrowAltCircleLeft" iconColor="text-orange-600" />
          </div>
          <span className='text-sm font-medium tracking-wider text-neutral-200'>Sayfa 1 / 312</span>
          <div className="text-xl">
            <ReactIcon iconType="fa" iconName="FaRegArrowAltCircleRight" iconColor="text-orange-600" />
          </div>
        </div>

      </div>


    </div>

  )
}

export default Post