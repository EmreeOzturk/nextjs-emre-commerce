"use client"

import { RxHamburgerMenu } from "react-icons/rx"

const HamburgerMenu = () => {
    return (
        <div className="relative flex md:hidden">
            <RxHamburgerMenu className='h-6 w-6' />
        </div>
    )
}

export default HamburgerMenu