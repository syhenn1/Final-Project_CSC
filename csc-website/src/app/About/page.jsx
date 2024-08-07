import BannerAbout from "../components/Fragment/Banner/BannerAbout";
import Image from "next/image";
import Glass from "../components/images/glass.png";
import Timeline from "../components/Fragment/Timeline";

const AboutUsPage = ()=>{
    return(
        <div>
            <div>
                <BannerAbout />
                <div className="my-[35px] flex flex-col items-center w-full">
                    <h1 className="font-black text-[30px] text-center">Profile CSC</h1>
                    <hr className="w-[900px] border-2 border-black self-center"/>
                    <div className="flex w-[900px]  gap-5 mt-10 self-center">
                        <Image 
                        src={Glass} 
                        className="object-cover w-[400px] h-[250px] self-center"
                        alt="Glass" />
                        <h3>
                        Computer Student Club (CSC) adalah kelompok studi mahasiswa di bawah naungan Jurusan Teknik Informatika dan Komputer, Politeknik Negeri Jakarta. Dengan fokus pada pengembangan minat dan bakat mahasiswa dalam bidang teknologi, CSC telah menjadi wadah untuk pemahaman yang lebih dalam tentang keamanan jaringan, pengembangan perangkat lunak, dan Internet of Things (IoT). Sejak berdiri pada tahun 2012, CSC telah berkomitmen untuk memberikan pengetahuan teknologi yang berharga, menginspirasi inovasi, dan mendukung prestasi mahasiswa dalam berbagai kegiatan dan proyek yang kami jalankan.
                        </h3>
                    </div>
                </div>
                <div className="relative my-[35px] lg:flex w-full bg-[rgb(37,96,150)] py-10 px-20 gap-5">
                    <div className="flex-1 text-center ">
                        <h2 className="text-2xl font-bold mb-4 pt-5">Visi</h2>
                        <p>
                            Menjadi wadah pengembangan minat dan bakat mahasiswa di bidang teknologi yang berfokus pada keamanan jaringan, pengembangan perangkat lunak, dan Internet of Things (IoT) yang menginspirasi inovasi dan menghasilkan pemimpin masa depan dalam dunia teknologi.
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-center  h-full">
                        <h2 className="text-2xl font-bold mb-4 pt-5">Misi</h2>
                        <ul className="list-disc ml-5 text-start">
                            <li>Memberikan pemahaman mendalam tentang teknologi dan mendukung perkembangan keahlian mahasiswa.</li>
                            <li>Menyediakan platform untuk eksplorasi dan penerapan konsep-konsep teknologi yang relevan.</li>
                            <li>Mendorong kolaborasi antara anggota, alumni, dan mitra industri untuk menciptakan solusi yang berdampak.</li>
                            <li>Menginspirasi kreativitas, penelitian, dan pengembangan proyek teknologi inovatif.</li>
                            <li>Memberikan dukungan dan peluang untuk meraih prestasi tinggi di bidang teknologi.</li>
                            <li>Mempromosikan etika dan keamanan dalam penggunaan teknologi untuk kesejahteraan bersama.</li>
                        </ul>
                    </div>
                    <div className="hidden lg:block absolute inset-y-8 left-1/2 transform -translate-x-1/2 w-px bg-white"></div>
                </div>

                <div className="mx-24">
                    <h2 className="text-2xl font-bold mb-4 text-center">History</h2>
                    <Timeline />

                </div>



            </div>

        </div>
        
    );
}

export default AboutUsPage;