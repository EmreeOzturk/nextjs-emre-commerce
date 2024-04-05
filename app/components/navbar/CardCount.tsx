"use client"

import { MdShoppingBasket } from 'react-icons/md'
import { useCart } from '@/store/useCart'
import Link from 'next/link'
const CardCount = () => {
    const items = useCart((state) => state.items)
    return (
        <Link href='/cart'
            className='hidden md:flex relative justify-center items-center  rounded-full w-10 h-10'
        >
            <MdShoppingBasket size={25} />
            <div>
                <span className='absolute top-0 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs'>
                    {items.length}
                </span>
            </div>
        </Link>
    )
}

export default CardCount