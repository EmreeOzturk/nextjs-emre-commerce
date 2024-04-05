"use client"
import { useCart } from "@/store/useCart"
import { CartProduct, Product } from "@/types"
const AddCart = ({ product }: { product: Product }) => {
    const addItem = useCart((state) => state.addItem)
    const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        brand: product.brand,
        category: product.category,
        inStock: product.inStock,
        quantity: 1
    } as CartProduct
    return (
        <div className='flex-1'>
            <button
                onClick={() => {
                    addItem(cartProduct)
                }}
                className='bg-slate-500 text-white w-full px-5 py-2 transition-all rounded-lg hover:bg-transparent border hover:border hover:border-slate-500 hover:text-slate-500'>Add to Cart</button>
        </div>
    )
}

export default AddCart