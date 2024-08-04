import React from 'react'

//Components 
import Category from '@/Components/Store/Category'
import TopMenu from '@/Components/Store/TopMenu'
import Products from '@/Components/Store/Products'

function store() {
  return (
    <div className='my-36 items-start justify-center gap-12 px-32 hidden lg:flex'>

      <div>
        <Category />
      </div>

      <div className='pl-4 lg:pl-16 xl:pl-48 w-full flex flex-col items-start gap-12'>
          <TopMenu />
          <Products />
      </div>

    </div>
  )
}

export default store