import { useState } from 'react';
import HamburgerIcon from '../assets/Hamburger_icon.png';
import HamburgerIconClose from '../assets/Hamburger_icon_close.png';
import Logo from '../assets/Logo.jpg';

interface NavbarProps {
    bgColor?: string;
}

function Navbar({ bgColor }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav 
            className={`fixed h-16 w-full flex items-center justify-between z-50 ${bgColor || 'bg-et-light-orange'}`} // Use custom color or default
        >
            <a href="/">
                <div className="flex items-center hover:pb-2 duration-300 ease-in-out">
                    <img src={Logo} alt="Logo" className="h-10 w-auto rounded-sm ml-4" />
                    <h1 className="ml-2 text-white font-bold">MBTI Prediction</h1>
                </div>
            </a>
            <div className="hidden min-[770px]:flex text-white gap-12 font-semibold justify-end mr-4 items-center">
                <a href="/" className='hover:pb-2 duration-300 ease-in-out'>Home</a>
                <a href="/mbti-test" className='hover:pb-2 duration-300 ease-in-out'>MBTI Test</a>
                <a href="/mbti-types" className='hover:pb-2 duration-300 ease-in-out'>MBTI Types</a>
                <a href="/theorem" className='hover:pb-2 duration-300 ease-in-out'>Theorem</a>
                <a href="/about-us" className='hover:pb-2 duration-300 ease-in-out'>About Us</a>
            </div> 
            <div className="min-[770px]:hidden p-4 transition justify-end">
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
                <div className="absolute top-16 left-0 w-full bg-et-light-orange min-[770px]:hidden bg-opacity-80">
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
    );
}

export default Navbar;
