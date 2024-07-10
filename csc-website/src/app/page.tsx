import Image from "next/image";
import Navbar from "../app/components/navbar"
import background from "@/app/components/images/2302035.jpg"
import qmark from "@/app/components/images/Question-mark-blackandwhite.png"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Image src={background} className="fixed -z-20" alt="background"></Image>
      <div className="w-full h-[1000px] mt-[800px] px-[225px] py-[110px] bg-white absolute">
        <div className="absolute z-5 mt-[-580px] pr-[225px]">
          <h1 className="font-black text-white text-[50px] mb-[-10px]">Computer Science Club</h1>
          <div className="flex text-[30px]"><h3 className="text-blue-400">#Unlimited</h3><h3 className="text-yellow-300">Connection </h3></div>
          <h3 className="text-[25px]">Kami adalah kelompok studi mahasiswa di bawah naungan jurusan TIK Politeknik Negeri Jakarta.
              Berfokus pada pengembangan minat dan bakat mahasiswa serta meningkatkan capaian prestasi mahasiswa. </h3>
          <Link href='#' className='flex mt-[190px] justify-center transition ease-in-out delay-100 rounded-lg border-blue-400 border-2 bg-blue-400 p-[10px] font-black text-white text-[25px] hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2'>Learn More</Link>
        </div> 
        <div className="flex gap-[50px]">
          <Image src={qmark} alt="qmark" width={300} className=""></Image>
          <div>
            <h1 className="text-black text-[40px] font-black">Ngapain aja sih di CSC?</h1>
            <p className="text-black text-[25px] mb-[30px]">Di Computer Student Club (CSC), kami aktif membimbing mahasiswa setiap pekan melalui kelas 
              interaktif dan praktek secara langsung yang membahas berbagai aspek teknologi. 
              Kelas yang kami adakan bertujuan untuk membantu memperluas pemahaman mahasiswa 
              tentang keamanan siber, pengembangan perangkat lunak, dan perangkat IoT. </p>
              <Link href='#' className='transition ease-in-out delay-100 rounded-lg border-blue-400 border-2 bg-blue-400 p-[10px] font-black text-white text-[25px] hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2'>Halaman FAQ</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
