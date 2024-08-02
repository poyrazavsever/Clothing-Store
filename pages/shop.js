import React from 'react'

//Components 
import Category from '@/Components/Store/Category'
import TopMenu from '@/Components/Store/TopMenu'
import Products from '@/Components/Store/Products'

function store() {
  return (
    <div className='mt-36 flex items-start justify-center px-32'>

      <div>
        <Category />
      </div>

      <div className=' pl-4 md:pl-16 lg:pl-48 w-full flex flex-col items-start gap-12'>
          <TopMenu />
          <Products />
      </div>

    </div>
  )
}

export default store