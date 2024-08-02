import React from 'react'

// Categorys
import TypeCategory from './TypeCategory'
import ColorCategory from './ColorCategory'
import SizeCategory from './SizeCatogry'

function Category() {
  return (
    <div className='w-fit px-4 py-8 flex flex-col items-start bg-neutral-950 border border-neutral-800 gap-4 rounded-md'>
      <TypeCategory />
      <ColorCategory />
      <SizeCategory />
    </div>
  )
}

export default Category