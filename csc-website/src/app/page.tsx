import Image from "next/image";
import Navbar from "../app/components/navbar"
import background from "@/app/components/images/2302035.jpg"
import qmark from "@/app/components/images/Question-mark-blackandwhite.png"


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Image src={background} className="fixed" alt="background"></Image>
      <div className="w-full h-[1000px] mt-[800px] px-[225px] py-[110px] bg-white absolute">
        <div className="flex gap-[50px]">
          <Image src={qmark} alt="qmark" width={300} className=""></Image>
          <div>
            <h1 className="text-black text-[40px] font-black">Ngapain aja sih di CSC?</h1>
            <p className="text-black text-[25px]">Di Computer Student Club (CSC), kami aktif membimbing mahasiswa setiap pekan melalui kelas 
              interaktif dan praktek secara langsung yang membahas berbagai aspek teknologi. 
              Kelas yang kami adakan bertujuan untuk membantu memperluas pemahaman mahasiswa 
              tentang keamanan siber, pengembangan perangkat lunak, dan perangkat IoT. </p>
          </div>
        </div>
      </div>
    </main>
  );
}
