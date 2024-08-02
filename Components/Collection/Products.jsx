import React from 'react'
import ProductCard from '../ProductCard'
function Products() {
  return (
    <div className='dark grid grid-cols-2 md:grid-cols-3 gap-16'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default Products