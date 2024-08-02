import React from 'react'
import ProductCard from '../ProductCard'
function Products() {
  return (
    <div className='dark grid md:grid-cols-2 xlarge:grid-cols-3 gap-8'>
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