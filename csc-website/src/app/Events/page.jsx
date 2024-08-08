import Link from "next/link";
import BannerEvents from "../components/Fragment/Banner/BannerEvents";
import potoospf from '@/app/components/images/kolase ospf 2023.png';
import Image from "next/image";
import potogtp from '@/app/components/images/gtpr.png';
import potolparc from '@/app/components/images/cscxpl.png';

export default function eventPage() {
    return (
        <div>
            <BannerEvents />
            <div className="flex flex-col items-center bg-gray-200 w-full px-[240px] pb-10">
                <h2 className="text-2xl font-bold mb-10 mt-10 text-center text-black text-[40px]">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <Image src={potoospf}></Image>
                        <h3 className="text-xl font-semibold mb-2 text-black text-left">OSPF</h3>
                        <p className="text-gray-600 text-left">Open Sharing Presenting and First Gathering adalah acara yang diselenggarakan bagi seluruh member CSC. Kami berkumpul, sharing pengalaman dan ilmu, serta menjalin relasi dengan member dan alumni CSC.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <Image src={potogtp}></Image>
                        <h3 className="text-xl font-semibold mb-2 text-black text-left">Goes To Pesantren</h3>
                        <p className="text-gray-600 text-left">Adalah kegiatan sosialisasi kami kepada anak-anak pesantren atau panti asuhan di wilayah Depok dan sekitarnya. Kegiatan ini bertujuan untuk mengenalkan teknologi kepada anak-anak serta sebagai bentuk kebermanfaatan CSC kepada masyarakat. </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <Image src={potolparc}></Image>
                        <h3 className="text-xl font-semibold mb-2 text-black text-left">Seminar CSC X Lion Parcel</h3>
                        <p className="text-gray-600 text-left">CSC dengan Lion Parcel bekerja sama untuk melaksanakan Seminar tentang Web Development dan UI/UX Design di PNJ. Disini ada narasumber dari Lion Parcel yang membagikan ilmunya tentang Web Development dan UI/UX Design serta tips untuk survive saat kita sudah lulus nanti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
