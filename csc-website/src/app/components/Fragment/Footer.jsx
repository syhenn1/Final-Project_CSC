import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '@/app/components/images/instagram.png';
import EmailIcon from '@/app/components/images/email.png';
import TwitterIcon from '@/app/components/images/twitter.png';
import csc from '@/app/components/images/media.png';
import telephone from '@/app/components/images/old-phone.png';

export default function Footer() {
  return (
    <footer className="bg-[#061D4B] text-white p-8 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="mb-8 font-bold">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-5">
                <Link href="https://sites.google.com/mhsw.pnj.ac.id/gultik/gultik?authuser=0" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                  Gudang Ilmu TIK (GULTIK)
                </Link>
              </li>
              <li className="mb-5">
                <Link href="https://elearning.pnj.ac.id" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                  Elearning PNJ
                </Link>
              </li>
              <li className="mb-5">
                <Link href="https://sim.pnj.ac.id/mahasiswa.pnj.ac.id/halaman_login.php" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                  SIAK PNJ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <Link href="/.." className='flex flex-row items-center justify-center text-[22px] mb-5 mt-5'>
                <Image src={csc} width={35} alt="CSC Logo" />
                Computer Student Club
            </Link>
            <div className="flex justify-center space-x-4">
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Link href="https://instagram.com/cscpnj" target="_blank" rel="noopener noreferrer">
                  <Image src={InstagramIcon} width={25} height={25} alt="Instagram" />
                </Link>
              </div>
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=csc.pnj@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Image src={EmailIcon} width={25} height={25} alt="Email" />
                </Link>
              </div>
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Link href="https://x.com/csc_pnj" target="_blank" rel="noopener noreferrer">
                  <Image src={TwitterIcon} width={25} height={25} alt="twitter" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/3 mb-4 sm:mb-0 space-y-4">
            <h3 className="mb-4 font-bold">Contact Info</h3>
            <div className='flex items-center space-x-2 px-32'>
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Image src={telephone} width={25} height={25} alt="telephone"/>
              </div>
              <div className='text-left'>
                0123456789
              </div>
            </div>
            <div className='flex items-center space-x-2 px-32'>
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Image src={EmailIcon} width={25} height={25} alt="Email"/>
              </div>
              <div className='text-left'>
                <Link href="mailto:csc.pnj@gmail.com" className="text-white no-underline hover:underline">
                  csc.pnj@gmail.com
                </Link>
              </div>
            </div>
            <div className='flex items-center space-x-2 px-32'>
              <div className='bg-white w-[40px] h-[40px] flex items-center justify-center p-2 shadow-lg rounded-lg'>
                <Image src={InstagramIcon} width={25} height={25} alt="Instagram"/>
              </div>
              <div className='text-left'>
                <Link href="https://instagram.com/cscpnj" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                  @cscpnj
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <p>Copyright © 2024 CSC PNJ</p>
        </div>
      </div>
    </footer>
  );
}
