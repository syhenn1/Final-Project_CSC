"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import csc from '@/app/components/images/media.png';
import dropdown from '@/app/components/images/caret-down.png';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        setDropdownOpen(false);
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`z-50 w-full fixed left-0 right-0 px-4 sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[225px] py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <Link href="/" className={`flex items-center text-[20px] lg:text-[25px] transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'} lg:text-black`}>
                    <Image src={csc} width={40} height={40} alt="CSC Logo" />
                    <span className="ml-2 lg:ml-3">Computer Student Club</span>
                </Link>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black text-[25px]">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`fixed lg:static top-0 left-0 w-full lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent z-40 lg:z-auto transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:transform-none lg:flex items-center justify-between gap-[20px] lg:gap-[30px] xl:gap-[40px] text-[18px] md:text-[20px] ${isScrolled ? 'text-black' : 'text-white'} lg:text-black lg:relative`}>
                    <div className="flex items-center justify-between lg:hidden p-4">
                        <Link href="/" className="text-black text-[20px]">
                            Computer Student Club
                        </Link>
                        <button onClick={toggleMenu} className="text-black text-[25px]">
                            <FaTimes />
                        </button>
                    </div>

                    <div className="relative lg:flex items-center gap-[20px] lg:gap-[30px] xl:gap-[40px] text-black">
                        <div className='relative' ref={dropdownRef}>
                            <button onClick={toggleDropdown} className='flex items-center'>
                                Divisi
                                <Image src={dropdown} width={20} height={20} className={`ml-[5px] lg:ml-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} alt="Dropdown Icon" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-[180px] lg:w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg">
                                    <Link href='/Divisi/Softdev' className='block px-4 py-2 text-black hover:bg-gray-100'>Software Development</Link>
                                    <Link href='/Divisi/Explore' className='block px-4 py-2 text-black hover:bg-gray-100'>Explore</Link>
                                    <Link href='/Divisi/Cyber' className='block px-4 py-2 text-black hover:bg-gray-100'>Cyber Security</Link>
                                </div>
                            )}
                        </div>
                        <Link href='/About' className='block lg:inline-block mt-4 lg:mt-0'>About Us</Link>
                        <Link href='/Events' className='block lg:inline-block mt-4 lg:mt-0'>Events</Link>
                        <Link href='/FAQ' className='block lg:inline-block mt-4 lg:mt-0'>FAQ</Link>
                        <Link href='/Contact' className='block lg:inline-block mt-4 lg:mt-0'>Contact</Link>
                        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSd_2tVJvxCEvmyy1iK0oXVk3QbDf35D51QJSGyqxrBwCO1R9A/closedform' target='_blank' className='block lg:inline-block mt-4 lg:mt-0 px-[20px] lg:px-[30px] py-[8px] lg:py-[10px] bg-blue-400 rounded-[15px] text-[18px] lg:text-[20px] text-white'>Daftar</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
