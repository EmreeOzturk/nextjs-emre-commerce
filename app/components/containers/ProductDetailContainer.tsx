import React from 'react'

const ProductDetailContainer = (
    { children, col }: { children: React.ReactNode, col?: boolean }
) => {
    return (
        <div
            className={`flex flex-col md:flex-row gap-5 md:gap-10 md:px-10 px-3 py-5 md:py-10 bg-slate-100 w-full h-full ${col && 'md:flex-col'} `}
        >
            {children}
        </div>
    )
}

export default ProductDetailContainer