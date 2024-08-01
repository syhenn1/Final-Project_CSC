import Image from "next/image";
import Link from "next/link";
import Navbar from '@/app/components/Fragment/navbar';
import Footer from '@/app/components/Fragment/Footer';
import pythonlogo from '@/app/components/images/python.png';
import mentor1 from '@/app/components/images/python.png';
import mentor2 from '@/app/components/images/python.png';
import mentor3 from '@/app/components/images/python.png';
import syllabusIcon from '@/app/components/images/glass.png';
import background from "@/app/components/images/2302035.jpg"; 

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
                src={pythonlogo}
                alt="Software Developer"
                width={200}
                height={200}
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold">Software Developer</h1>
              <p className="mt-4">
                Divisi yang menjadi wadah pembelajaran, kajian, dan pengembangan software development
                dengan teknologi Python. Mempelajari konsep dasar pemrograman hingga teknologi terbaru
                dan memberikan kesempatan untuk mengerjakan proyek nyata.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Focus Area</h2>
        <ul className="list-disc ml-5">
          <li>Pengembangan Perangkat Lunak dengan Python</li>
          <li>Fundamental Pemrograman</li>
          <li>Web Development: HTML, CSS, Javascript, React</li>
        </ul>
      </div>

      <div className="px-10 py-20 bg-blue-600 text-black">
        <h2 className="text-2xl font-bold mb-4">Mentor</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <Image src={mentor1} alt="Bang Fadli" width={100} height={100} />
            <h3 className="mt-2">Bang Fadil</h3>
          </div>
          <div className="text-center">
            <Image src={mentor2} alt="Bang Ainur" width={100} height={100} />
            <h3 className="mt-2">Bang Aimar</h3>
          </div>
          <div className="text-center">
            <Image src={mentor3} alt="Bang Rayhan" width={100} height={100} />
            <h3 className="mt-2">Bang Rayhan</h3>
          </div>
        </div>
      </div>

      <div className="px-10 py-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Files</h2>
        <ul className="list-none">
          <li className="flex items-center mb-2">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus1" className="ml-2">Silabus Software Developer</Link>
          </li>
          <li className="flex items-center">
            <Image src={syllabusIcon} alt="Syllabus Icon" width={20} height={20} />
            <Link href="/path/to/syllabus2" className="ml-2">Silabus Software Developer</Link>
          </li>
        </ul>
      </div>

      <Footer />
    </main>
  );
}
