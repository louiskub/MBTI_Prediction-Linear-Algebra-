import { useState } from 'react';
import HamburgerIcon from '../assets/Hamburger_icon.png';
import HamburgerIconClose from '../assets/Hamburger_icon_close.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed bg-et-yellow h-16 w-full flex min-[600px]:justify-center items-center justify-end z-50">
            <div className="hidden min-[600px]:flex text-white gap-12 font-semibold">
                <a href="/">Home</a>
                <a href="/mbti-test">MBTI Test</a>
                <a href="/mbti-types">MBTI Types</a>
                <a href="/theorem">Theorem</a>
                <a href="/about-us">About Us</a>
            </div> 
            <div className="min-[600px]:hidden p-4 transition ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white"
                >
                    <img 
                        src={isOpen ? HamburgerIconClose : HamburgerIcon}
                        alt={isOpen ? "Close Menu" : "Open Menu"}
                        className="h-8 w-8 filter-white" 
                    />
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-et-yellow min-[600px]:hidden">
                    <div className="flex flex-col text-white font-semibold">
                        <a href="/" className="py-2 px-4">Home</a>
                        <a href="/mbti-test" className="py-2 px-4">MBTI Test</a>
                        <a href="/mbti-types" className="py-2 px-4">MBTI Types</a>
                        <a href="/theorem" className="py-2 px-4">Theorem</a>
                        <a href="/about-us" className="py-2 px-4">About Us</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;