import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div
            className='rounded-lg '
        >
            <div className='h-[300px] relative rounded-lg '>
                <Image src='/banner.jpg' className='rounded-lg ' fill alt='banner' />
            </div>

        </div>
    )
}

export default Banner 