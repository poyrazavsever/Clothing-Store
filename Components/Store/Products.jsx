import React from 'react'
import ProductCard from '../ProductCard'
function Products() {
  return (
    <div className='dark grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
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