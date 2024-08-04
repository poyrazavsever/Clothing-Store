import React, { useState } from 'react'
import Link from 'next/link'
import Star from '../Star'
import Body from '../Body'

function ProductDetail() {

    const imageStyle = "w-48"
    const [isBody, setIsBody] = useState("XS")
    return (
        <div className='flex items-center justify-between relative'>
            <div className='flex'>

                <div>
                    <img src="/Product/1.png" alt="product detail" className={imageStyle} />
                    <img src="/Product/2.png" alt="product detail" className={imageStyle} />
                </div>

                <div>
                    <img src="/Product/3.png" alt="product detail" className={imageStyle} />
                    <img src="/Product/4.png" alt="product detail" className={imageStyle} />
                </div>

            </div>
            <div className='flex flex-col items-start'>

                <h4 className='font-medium'>Margherita MACCAPANI</h4>

                {/* Değerlendirme */}

                <div className='flex items-center gap-2 mt-4'>

                    <Star star="4" />

                    <span className='text-sm text-neutral-400'>1200 Değerlendirme</span>

                </div>

                {/* Fiyat */}

                <div className='flex flex-col items-start mt-4'>
                    <span className='text-xs text-neutral-400 line-through pr-2'>800$</span>
                    <span className='text-xl md:text-3xl font-semibold text-tert-200'>640$</span>
                </div>

                <div className='h-[1px] w-full bg-neutral-300 rounded-full my-3'></div>


                {/* Beden */}

                <div className='flex flex-col items-start gap-2 mt-5'>

                    <h6 className='text-sm text-neutral-800'>Beden: <span className='font-semibold'>{isBody}</span></h6>

                    <Body isBody={isBody} setIsBody={setIsBody} />

                </div>

                <button className='w-96 py-3 rounded-md bg-tert-200 text-white hover:bg-tert-100 transition-all mt-8'>Sepete Ekle</button>

                {/* Öne Çıkanlar  */}

                <div className='flex flex-col items-start gap-4 mt-8'>
                    <div className='flex flex-col items-start gap-2'>
                        <h6 className='text-sm text-neutral-800'>Öne Çıkan Bilgiler</h6>

                        <ul className='flex flex-col items-start gap-1'>

                            <li className='text-neutral-400 text-xs'>30 gün içersinde ücretsiz iade. <Link href='#' className='underline font-medium text-neutral-600'>Detaylı bilgi için tıklayın.</Link> </li>

                            <li className='text-neutral-400 text-xs'>Bu ürün sizlere <Link href='/about' className='underline font-medium text-neutral-600'>“Harika Butik”</Link> tarafından gönderilecektir.</li>

                            <li className='text-neutral-400 text-xs'>Mankenin üzrindeki ürün M bedendir.</li>

                            <li className='text-neutral-400 text-xs'>Modelin Ölçüleri: Boy: 1,80, Göğüs: 97 Bel: 80, Kalça: 94 </li>

                        </ul>
                    </div>


                    <button className='w-96 py-1 text-sm border uppercase border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-neutral-50 transition-all'>ürünün tüm özellikleri</button>

                </div>

            </div>

        </div>

    )
}

export default ProductDetail