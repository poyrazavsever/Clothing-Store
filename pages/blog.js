import React from 'react'

//Components 
import Post from '@/Components/Blog/Post'
import TopMenu from '@/Components/Blog/TopMenu'
import Popular from '@/Components/Blog/Popular'

function blog() {
  return (
    <div className='mt-24 mb-12 hidden lg:block'>

        <div>
            <TopMenu />
        </div>


        <div>
            <Post />
            <Popular />
        </div>
    </div>
  )
}

export default blog