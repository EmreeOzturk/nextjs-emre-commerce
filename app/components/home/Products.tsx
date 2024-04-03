import React from 'react'
import { products } from '@/data/Products'
import ProductCard from './ProductCard'


const Products = () => {
    return (
        <div className='flex items-center justify-center flex-wrap gap-3 md:gap-10'>
            {
                products.map((product: any) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }

        </div>
    )
}

export default Products