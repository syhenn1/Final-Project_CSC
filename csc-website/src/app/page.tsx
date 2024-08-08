import Image from "next/image";
import background from "@/app/components/images/2302035.jpg";
import qmark from "@/app/components/images/Question-mark-blackandwhite.png";
import Link from "next/link";
import contactlogo from "@/app/components/images/contactuslogo.png";
import pythonlogo from '@/app/components/images/python.png';
import cybersecuritylogo from '@/app/components/images/cyber-security.png';
import explorelogo from '@/app/components/images/explorerlogo.png';

export default function Home() {
  return (
    <main>
      <div>
      <div className="relative">
        <Image
          src={background}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="background"
        />
        <div className="relative px-[225px] py-[200px]">
          <div className="p-8 rounded-lg z-10">
            <h1 className="font-black text-white text-[50px] mb-[50px] text-shadow-lg">
              Computer Science Club
            </h1>
            <div className="flex text-[30px] text-shadow-lg">
              <h3 className="text-blue-400">#Unlimited</h3>
              <h3 className="text-yellow-300 ml-2">Connection</h3>
            </div>
            <h3 className="text-[25px] text-white text-shadow-lg">
              Kami adalah kelompok studi mahasiswa di bawah naungan jurusan TIK Politeknik Negeri Jakarta. Berfokus pada pengembangan minat dan bakat mahasiswa serta meningkatkan capaian prestasi mahasiswa.
            </h3>
            <Link
              href="/About"
              className="flex mt-[190px] justify-center transition ease-in-out delay-100 rounded-lg border-white border-2 bg-white-0 p-[10px] font-black text-white text-[25px] hover:bg-white hover:text-black hover:border-black hover:border-2 hover:opacity-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
        <div className=" px-[100px] py-[110px] bg-white">
          <div className="flex gap-[50px] mb-[120px]">
            <Image src={qmark} alt="qmark" width={300}></Image>
            <div>
              <h1 className="text-black text-[40px] font-black">Ngapain aja sih di CSC?</h1>
              <p className="text-black text-[25px] mb-[30px]">Di Computer Student Club (CSC), kami aktif membimbing mahasiswa setiap pekan melalui kelas 
                interaktif dan praktek secara langsung yang membahas berbagai aspek teknologi. 
                Kelas yang kami adakan bertujuan untuk membantu memperluas pemahaman mahasiswa 
                tentang keamanan siber, pengembangan perangkat lunak, dan perangkat IoT. </p>
                <Link href='/FAQ' className='transition ease-in-out delay-100 rounded-lg border-blue-400 border-2 bg-blue-400 p-[10px] font-black text-white text-[25px] hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2'>Halaman FAQ</Link>
            </div>
          </div>
          <div className="flex gap-[50px]">
          <Image src={contactlogo} alt="contactlogo" width={300}></Image>
            <div>
              <h1 className="text-black text-[40px] font-black">Boleh tanya-tanya dulu?</h1>
              <p className="text-black text-[25px] mb-[30px]">Boleh banget! Kami selalu siap untuk menjawab pertanyaan dari anggota, non-anggota, atau siapa pun yang tertarik. 
                Anda dapat menghubungi kami melalui Whatsapp atau Instagram kami. Kami berkomitmen untuk memberikan jawaban informatif dan membantu menjawab apapun pertanyaan yang anda miliki. 
                Jangan ragu untuk bertanya atau berdiskusi dengan kami!  </p>
                <Link href='/Contact' className='transition ease-in-out delay-100 rounded-lg border-blue-400 border-2 bg-blue-400 p-[10px] font-black text-white text-[25px] hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2'>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="px-[225px] bg-blue-500 h-[900px]">
          <h1 className="w-full text-center py-[30px] font-black text-[40px] text-white">
            Divisi
            <div className="flex justify-center mt-2">
              <hr className="bg-white h-1 w-[100px]"/>
            </div>
          </h1>
          <div className="flex justify-center pb-[110px] space-x-4">
            <div className="bg-white w-[400px] h-[600px] flex flex-col justify-between items-center p-4 shadow-lg mx-2 rounded-lg">
              <Image src={pythonlogo} alt="pythonlogo" width={300} className=""/>
              <div className="text-black text-[30px] mt-4 px-5">Software Development</div>
              <Link href='../Divisi/Softdev' className="bg-black text-white px-10 py-4 mt-2 rounded-lg hover:bg-gray-200 hover:text-black transition ease-in-out delay-100">Learn More</Link>
            </div>
            <div className="bg-white w-[400px] h-[600px] flex flex-col justify-between items-center p-4 shadow-lg mx-2 rounded-lg">
              <Image src={cybersecuritylogo} alt="cybersecuritylogo" width={300} className=""/>
              <div className="text-black text-[30px] mt-4">Cyber Security</div>
              <Link href='../Divisi/Cyber' className="bg-black text-white px-10 py-4 mt-2 rounded-lg hover:bg-gray-200 hover:text-black transition ease-in-out delay-100">Learn More</Link>
            </div>
            <div className="bg-white w-[400px] h-[600px] flex flex-col justify-between items-center p-4 shadow-lg mx-2 rounded-lg">
              <Image src={explorelogo} alt="explorerlogo" width={300} className=""/>
              <div className="text-black text-[30px] mt-4">Explore</div>
              <Link href='../Divisi/Explore' className="bg-black text-white px-10 py-4 mt-2 rounded-lg hover:bg-gray-200 hover:text-black transition ease-in-out delay-100">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
