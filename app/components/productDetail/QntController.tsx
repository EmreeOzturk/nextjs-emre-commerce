"use client"
import AddOrRemoveQnt from './AddOrRemoveQnt'
import AddCart from './AddCart'
import { useCart } from '@/store/useCart'
import { Product } from '@/types'
const QntController = ({ productId, product }: { productId: string, product: Product }) => {
    const quantity = useCart((state) => state.items.find((item) => item.id === productId)?.quantity)
    return (
        <>
            {quantity === undefined ? <AddCart product={product} /> : <AddOrRemoveQnt productId={productId} />}
        </>
    )
}

export default QntController