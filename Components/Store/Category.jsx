import React from 'react'

// Categorys
import TypeCategory from './TypeCategory'
import ColorCategory from './ColorCategory'
import SizeCategory from './SizeCatogry'

function Category() {
  return (
    <div className='pr-4 h-full flex flex-col items-start gap-4 fixed left-12 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-white'>
      <TypeCategory />
      <ColorCategory />
      <SizeCategory />
    </div>
  )
}

export default Category