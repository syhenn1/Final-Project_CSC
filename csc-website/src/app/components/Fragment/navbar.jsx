import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import csc from '@/app/components/images/media.png'
import dropdown from '@/app/components/images/caret-down.png'

export default function navbar() {
return (
    <nav className='z-50 w-full  bg-white bg-opacity-95 text-black flex justify-between left-0 right-0 fixed px-[225px] py-8'>
    <Link href="/.." className='flex text-[25px]'>
            <Image src={csc} width={50}></Image>
            Computer Student Club
    </Link>

    <div className='flex justify-between gap-[40px] text-center text-[20px]'>
        <Link href={'#'} className='flex'>
            
            <Image src={dropdown} width={25} className='ml-[10px]'></Image>
        </Link>
        <Link href={'#'}>About Us</Link>
        <Link href={'#'}>Events</Link>
        <Link href={'#'}>FAQ</Link>
    </div>
    <Link href={'/..'} className='right-0 mt-[-15px] mr-[45px] px-[30px] py-[20px] bg-blue-400 absolute rounded-[15px] text-[20px]'>Daftar</Link>
    </nav>
)
}
