'use client'; // Menandai file ini sebagai Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import csc from '@/app/components/images/media.png';
import dropdown from '@/app/components/images/caret-down.png';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className='z-50 w-full bg-white bg-opacity-95 text-black flex justify-between left-0 right-0 fixed px-[225px] py-6'>
            <Link href="/.." className='flex text-[25px]'>
                <Image src={csc} width={50} alt="CSC Logo" />
                Computer Student Club
            </Link>

            <div className='relative flex justify-between gap-[40px] text-center text-[20px]'>
                <div className='relative'>
                    <button onClick={toggleDropdown} className='flex items-center'>
                        Divisi
                        <Image src={dropdown} width={25} className={`ml-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} alt="Dropdown Icon" />
                    </button>
                    <div className={`absolute top-[100%] left-0 mt-2 w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg transition-transform transition-opacity duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <Link href='../Divisi/Softdev' className='block px-4 py-2 text-black hover:bg-gray-100'>Software Development</Link>
                        <Link href='../Divisi/Explore' className='block px-4 py-2 text-black hover:bg-gray-100'>Explore</Link>
                        <Link href='../Divisi/Cyber' className='block px-4 py-2 text-black hover:bg-gray-100'>Cyber Security</Link>
                    </div>
                </div>
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Events</Link>
                <Link href={'#'}>FAQ</Link>
            </div>
            <Link href={'/..'} className='right-0 mt-[-15px] mr-[45px] px-[30px] py-[20px] bg-blue-400 absolute rounded-[15px] text-[20px]'>Daftar</Link>
        </nav>
    );
}
