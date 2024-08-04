import React from 'react'

// Pages 
import Banner from '@/Components/About/Banner'
import Collection from '@/Components/About/Collection'
import Story from '@/Components/About/Story'

function about() {
  return (
    <div className='hidden lg:block'>
      <Banner />
      <Story />
      <Collection />
    </div>
  )
}

export default about