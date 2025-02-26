import React from 'react'

//Pages
import Banner from '@/Components/Collection/Banner'
import CollectionProduct from '@/Components/Collection/CollectionProduct'
import Contact from '@/Components/Collection/Contact'

function collection() {
  return (
    <div className='hidden lg:block'>
        <Banner />
        <CollectionProduct />
        <Contact />
    </div>
  )
}

export default collection