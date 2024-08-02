import React from 'react'

//Components 
import Category from '@/Components/Store/Category'
import TopMenu from '@/Components/Store/TopMenu'

function store() {
  return (
    <div className='mt-36 container mx-auto'>

      <div>
        <Category />
      </div>

      <div className='pl-48 w-full'>
          <TopMenu />
      </div>

    </div>
  )
}

export default store