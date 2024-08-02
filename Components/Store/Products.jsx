import React from 'react'
import ProductCard from '../ProductCard'
function Products() {
  return (
    <div className='dark grid grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
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