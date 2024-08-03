import React from 'react'

//Components 
import Post from '@/Components/Blog/Post'
import TopMenu from '@/Components/Blog/TopMenu'

function blog() {
  return (
    <div className='mt-24 mb-12'>

        <div>
            <TopMenu />
        </div>


        <div>
            <Post />
        </div>
    </div>
  )
}

export default blog