import Image from "next/image";
import Link from "next/link";
import Navbar from '@/app/components/Fragment/navbar';
import Footer from '@/app/components/Fragment/Footer';
import cyberlogo from '@/app/components/images/cyber-security.png';
import mentor1 from '@/app/components/images/cyber-security.png';
import mentor2 from '@/app/components/images/cyber-security.png';
import mentor3 from '@/app/components/images/cyber-security.png';
import syllabusIcon from '@/app/components/images/glass.png';
import background from "@/app/components/images/2302035.jpg"; // Importing the background image

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Image
          src={background}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="background"
        />
        <div className="relative flex items-center justify-center pt-36 pb-24 bg-opacity-70 bg-blue-900">
          <div className="relative z-10 flex items-center text-white">
            <div className="mr-8">
              <Image
                src={cyberlogo}
                alt="Cyber Security"
                width={200}
                height={200}
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold">Cyber Security</h1>
              <p className="mt-4">
              Divisi yang mempelajari dasar-dasar ethical hacking dan penetration testing. Para member akan diajari teknik-teknik peretasan yang umum digunakan serta syarat-syarat peretasan yang dianggap sah atau legal. Selain itu, para member di-support untuk aktif mengikuti kompetisi seperti Capture The Flag (CTF) dan lain-lain. Komunitas yang sehat dan terus belajar diharapkan terbentuk dari divisi ini.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Focus Area</h2>
        <ul className="list-disc ml-5">
          <li>Intro to ethical hacking</li>
          <li>Intro to kali Linux</li>
          <li>5 steps of hacking</li>
          <li>Web exploitation</li>
          <li>Intro to CTF</li>
        </ul>
      </div>

      <div className="px-10 py-20 bg-blue-600 text-black">
        <h2 className="text-2xl font-bold mb-4">Mentor</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <Image src={mentor1} alt="Bang Syarif" width={100} height={100} />
            <h3 className="mt-2">Bang Wahyu</h3>
          </div>
          <div className="text-center">
            <Image src={mentor2} alt="Bang Syarif" width={100} height={100} />
            <h3 className="mt-2">Bang Syarif</h3>
          </div>
          <div className="text-center">
            <Image src={mentor3} alt="Bang Cornelius" width={100} height={100} />
            <h3 className="mt-2">Bang Cornelius</h3>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Files</h2>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus1" className="ml-2">Silabus Cyber Security</Link>
          </li>
          <li className="flex items-center">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus2" className="ml-2">Silabus Cyber Security</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
