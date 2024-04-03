import React from 'react'
import Logo from '../common/Logo'
import SearchBar from './SearchBar'
import CardCount from './CardCount'
import User from './User'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    return (
        <header className='text-slate-300 flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-500'>
            <Logo />
            <SearchBar />
            <CardCount />
            <User />
            <HamburgerMenu />
        </header>
    )
}

export default Navbar