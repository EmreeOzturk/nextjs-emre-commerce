"use client"
import { useCart } from "@/store/useCart"
import Image from "next/image"
const ListedProducts = () => {
    const items = useCart((state) => state.items)
    const updateItem = useCart((state) => state.updateItem)
    const removeItem = useCart((state) => state.removeItem)
    return (
        <div className="flex flex-col gap-4 items-center justify-between">
            {items.map((item) => (
                <div key={item.id} className='flex justify-between  w-full items-center gap-4 text-xl md:text-2xl '>
                    <div className="w-1/5">
                        <Image src={item.image} alt={item.name} width={100} height={100} />
                    </div>
                    <div className="w-1/5">{item.name}</div>
                    <div className="w-1/5">{item.quantity}</div>
                    <div className="w-1/5">{item.price} / {(item.price * item.quantity).toFixed(2)}</div>
                    <div className='w-1/5 flex justify-center items-center gap-4'>
                        <button

                            onClick={() => {
                                if (item.quantity === 1) {
                                    removeItem(item.id)
                                } else {
                                    updateItem(item.id, item.quantity - 1)
                                }
                            }}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded">
                            -
                        </button>
                        <p className='text-xl select-none text-slate-500 font-semibold'>
                            {item.quantity}
                        </p>
                        <button
                            onClick={() => {
                                updateItem(item.id, item.quantity + 1)
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded">
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListedProducts