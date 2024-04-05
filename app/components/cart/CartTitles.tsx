
const CartTitles = () => {
    return (
        <div className='flex justify-between items-center text-xl md:text-2xl font-bold'>
            <div className="w-1/5">Image</div>
            <div className="w-1/5">Name</div>
            <div className="w-1/5">Quantity</div>
            <div className="w-1/5">Unit Price / Total Price</div>
            <div className='w-1/5'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded">
                    Checkout
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded ml-4">
                    Clear Cart
                </button>
            </div>
        </div>
    )
}

export default CartTitles