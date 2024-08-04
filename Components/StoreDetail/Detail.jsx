import React from 'react'
import ProductDetail from './ProductDetail'
import Complete from './Complete'

function Detail() {
  return (
    <div className='mt-16'>
      <div className='py-12'>
        <ProductDetail />
      </div>
      <div>
        <Complete />
      </div>

    </div>
  )
}

export default Detail