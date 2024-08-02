"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from '@/app/components/Fragment/navbar';
import Footer from '@/app/components/Fragment/Footer';
import explorelogo from '@/app/components/images/explorerlogo.png';
import mentor1 from '@/app/components/images/alfarizki.png';
import mentor2 from '@/app/components/images/abian.png';
import mentor3 from '@/app/components/images/armelia.png';
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
        <div className="relative flex items-center justify-center pt-40 pb-16 bg-opacity-70">
          <div className="relative z-10 flex items-center text-white">
            <div className="mr-8">
              <Image
                src={explorelogo}
                alt="Explore"
                width={450}
                height={450}
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold">Explore</h1>
              <p className="mt-4">
              Divisi yang memperkenalkan dunia dari Internet of Things (IoT) dan teknologi fisik. Kami mengeksplorasi konsep dasar IoT dan memberikan kesempatan bagi Anda untuk terlibat dalam praktik perakitan perangkat keras, eksperimen IoT, serta pengenalan komponen-komponen komputer. Di sini, kami mengundang Anda untuk menjelajahi kreativitas Anda dalam menciptakan solusi yang inovatif, yang dapat menghubungkan dunia fisik dengan dunia digital. 
              Bergabunglah dengan kami dan temukan bagaimana teknologi dapat mengubah cara kita berinteraksi dengan lingkungan sekitar. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-16 bg-white text-black flex items-center justify-center">
        <div className="flex items-center space-x-24">
          <div>
            <Image
              src={syllabusIcon}
              alt="Magnifying Glass"
              width={300} 
              height={300} 
              className="transition-transform duration-300"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-5xl font-bold mb-4">Focus Area</h2>
            <div className="text-xl">
              <CollapsibleItem
                title="Pengenalan Internet of Things (IoT)."
                description="Memahami dasar-dasar IoT, termasuk cara kerja, aplikasi, dan tantangan seperti keamanan dan privasi."
              />
              <CollapsibleItem
                title="Praktik Perakitan Perangkat Keras."
                description="Keterampilan praktis dalam merakit, mengkonfigurasi, dan memelihara perangkat keras komputer dan elektronik."
              />
              <CollapsibleItem
                title="Eksperimen IoT."
                description="Pengembangan dan pengujian prototipe IoT dengan sensor, aktuator, dan platform IoT melalui eksperimen hands-on."
              />
              <CollapsibleItem
                title="Pengenalan Komponen-Komponen Komputer."
                description="Pengenalan komponen dasar komputer seperti CPU, RAM, dan motherboard, serta fungsinya dalam sistem."
              />
              <CollapsibleItem
                title="Inovasi dalam Pengembangan Produk Fisik."
                description="Proses inovasi dalam merancang dan mengembangkan produk fisik, termasuk teknik terbaru dan integrasi teknologi."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-36 pb-20 pt-4 bg-blue-600">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Mentor</h2>
        <hr className="border-t-2 border-gray-300 mb-8 mx-auto w-1/2" />
        <div className="grid grid-cols-3 gap-12">
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor1} alt="Bang Fadil" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Alfarizki Nurrochman</h3>
          </div>
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor2} alt="Bang Aimar" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Muhammad Abian Pratama</h3>
          </div>
          <div className="bg-white border p-4 py-10 text-center text-black flex flex-col items-center relative">
            <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-gray-300">
              <Image src={mentor3} alt="Bang Rayhan" width={192} height={192} className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Reishafa Armelia A</h3>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Files</h2>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus1" className="ml-2">Silabus Explore</Link>
          </li>
          <li className="flex items-center">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus2" className="ml-2">Silabus Explore</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
