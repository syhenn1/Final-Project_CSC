"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/app/components/Fragment/navbar';
import Footer from '@/app/components/Fragment/Footer';
import cyberlogo from '@/app/components/images/cyber-security.png';
import mentor1 from '@/app/components/images/wahyu.png';
import mentor2 from '@/app/components/images/sarip.png';
import mentor3 from '@/app/components/images/cornelius.png';
import syllabusIcon from '@/app/components/images/glass.png';
import background from "@/app/components/images/2302035.jpg"; 

const CollapsibleItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-t border-gray-300">
      <div className="flex flex-col">
        <div className="flex items-center p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl font-semibold focus:outline-none mr-2"
          >
            {isOpen ? '-' : '+'}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-lg font-semibold text-left focus:outline-none"
          >
            {title}
          </button>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-height duration-500 ease-in-out"
        >
          <div className="px-8 pb-4">
            {isOpen && <p className="text-lg">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative min-h-screen">
        <Image
          src={background}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="background"
        />
        <div className="relative flex flex-col md:flex-row items-center justify-center pt-44 pb-24 bg-opacity-70">
          <div className="relative z-10 flex flex-col md:flex-row items-center text-white">
            <div className="flex justify-center mb-4 md:mb-0 mx-auto md:mx-0 text-center">
              <Image
                src={cyberlogo}
                alt="Cyber Security"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl text-center font-bold px-4">Cyber Security</h1>
              <p className="mt-4 px-4 text-left">
                Divisi yang mempelajari dasar-dasar ethical hacking dan penetration testing. Para member akan diajari teknik-teknik peretasan yang umum digunakan serta syarat-syarat peretasan yang dianggap sah atau legal. 
                Selain itu, para member di-support untuk aktif mengikuti kompetisi seperti Capture The Flag (CTF) dan lain-lain. Komunitas yang sehat dan terus belajar diharapkan terbentuk dari divisi ini.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 py-16 bg-white text-black flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-24 md:space-y-0">
          <div className="mb-4 md:mb-0">
            <Image
              src={syllabusIcon}
              alt="Magnifying Glass"
              width={200} 
              height={200} 
              className="transition-transform duration-300 w-full h-auto"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Focus Area</h2>
            <div className="text-base md:text-lg lg:text-xl text-left">
              <CollapsibleItem
                title="Intro to ethical hacking"
                description="Memahami dasar ethical hacking, yaitu metode untuk menemukan dan memperbaiki kerentanan sistem komputer secara legal untuk meningkatkan keamanan."
              />
              <CollapsibleItem
                title="Intro to kali Linux"
                description="Pengenalan Kali Linux, distribusi Linux untuk pengujian keamanan, termasuk alat-alat seperti Metasploit dan Nmap yang digunakan dalam ethical hacking."
              />
              <CollapsibleItem
                title="5 steps of hacking"
                description="Lima langkah dalam hacking: Pengintaian, Pemindaian, Mendapatkan Akses, Mempertahankan Akses, dan Menutupi Jejak."
              />
              <CollapsibleItem
                title="Web exploitation"
                description="Teknik untuk mengeksploitasi kerentanan dalam aplikasi web, termasuk serangan seperti SQL Injection dan XSS, serta cara melindungi aplikasi dari serangan ini."
              />
              <CollapsibleItem
                title="Intro to CTF"
                description="Pengantar Capture The Flag (CTF), kompetisi keamanan komputer yang melibatkan menyelesaikan tantangan untuk mendapatkan flag atau bendera."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-36 pb-20 pt-4 bg-blue-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">Mentor</h2>
        <hr className="border-t-2 border-gray-300 mb-8 mx-auto w-1/2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor1} alt="Wahyu Priambodo" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Wahyu Priambodo</h3>
          </div>
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor2} alt="Sep Sarip Hidayattuloh" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Sep Sarip Hidayattuloh</h3>
          </div>
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor3} alt="Cornelius Yuli Rusdianto" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Cornelius Yuli Rusdianto</h3>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 py-20 bg-white text-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Files</h2>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="https://drive.google.com/file/d/1VU7ZppllIVihHJnFXuN7hQW9PjWuiWLy/view" target='_blank' className="ml-2 text-sm md:text-base">Silabus Cyber Security</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
