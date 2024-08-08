"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import csc from '@/app/components/images/media.png';
import dropdown from '@/app/components/images/caret-down.png';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname();

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        setDropdownOpen(false);
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
        <nav className={`z-50 w-full fixed left-0 right-0 px-[225px] py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <Link href="/" className={`flex items-center text-[25px] transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <Image src={csc} width={50} alt="CSC Logo" />
                    <span className="ml-3">Computer Student Club</span>
                </Link>

                <div className={`relative flex items-center gap-[40px] text-[20px] transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <div className='relative' ref={dropdownRef}>
                        <button onClick={toggleDropdown} className='flex items-center'>
                            Divisi
                            <Image src={dropdown} width={25} className={`ml-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} alt="Dropdown Icon" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg">
                                <Link href='/Divisi/Softdev' className='block px-4 py-2 text-black hover:bg-gray-100'>Software Development</Link>
                                <Link href='/Divisi/Explore' className='block px-4 py-2 text-black hover:bg-gray-100'>Explore</Link>
                                <Link href='/Divisi/Cyber' className='block px-4 py-2 text-black hover:bg-gray-100'>Cyber Security</Link>
                            </div>
                        )}
                    </div>
                    <Link href='/About'>About Us</Link>
                    <Link href='/Events'>Events</Link>
                    <Link href='/FAQ'>FAQ</Link>
                    <Link href='/Contact'>Contact</Link>
                    <Link href='/Register' className='px-[30px] py-[10px] bg-blue-400 rounded-[15px] text-[20px] text-white'>Daftar</Link>
                </div>
            </div>
        </nav>
    );
}
