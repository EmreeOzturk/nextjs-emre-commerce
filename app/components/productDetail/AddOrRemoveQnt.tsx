"use client"

import { useCart } from "@/store/useCart"

const AddOrRemoveQnt = ({ productId }: { productId: string }) => {

    const quantity = useCart((state) => state.items.find((item) => item.id === productId)?.quantity)
    const removeItem = useCart((state) => state.removeItem)
    const updateItem = useCart((state) => state.updateItem)
    if (quantity === undefined) return null
    return (
        <div className="flex justify-center items-center gap-4">
            <div
                onClick={() => {
                    if (quantity === 1) {
                        removeItem(productId)
                    } else {
                        updateItem(productId, quantity - 1)
                    }
                }
                }
                className='flex select-none justify-center items-center hover:scale-110 transition-all border border-black shadow-md w-10 h-10 rounded-full text-3xl font-extrabold'>
                -
            </div>
            <div>
                <p className='text-xl select-none text-slate-500 font-semibold'>
                    {quantity}
                </p>
            </div>
            <div
                onClick={() => {
                    updateItem(productId, quantity + 1)
                }}
                className='flex select-none justify-center items-center hover:scale-110 border-black transition-all w-10 h-10 border shadow-md rounded-full text-3xl font-extrabold'>
                +
            </div>
        </div>
    )
}

export default AddOrRemoveQnt