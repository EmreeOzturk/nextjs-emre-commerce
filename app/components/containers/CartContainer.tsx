"use client"
import { useCart } from "@/store/useCart"
const CartContainer = (
    { children, col }: { children: React.ReactNode, col?: boolean }
) => {
    const items = useCart((state) => state.items)
    return (
        <div
            className={`flex flex-col md:flex-row gap-5 md:gap-10 md:px-10 px-3 py-5 md:py-10  w-full h-full ${col && 'md:flex-col'} `}
        >
            {
                items.length === 0 ?
                    <h1 className="text-center">
                        Your Cart is Empty
                    </h1>
                    :
                    <>
                        {children}
                    </>
            }
        </div>
    )
}

export default CartContainer