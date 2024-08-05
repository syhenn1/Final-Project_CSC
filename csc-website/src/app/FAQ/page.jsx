import Banner from "../components/Fragment/Banner";
import Image from "next/image";
import dropdown from '@/app/components/images/caret-down.png';

const FaqPage = ()=>{
    return(
        <div>
            <div>
                <Banner title= "Frequently Asked Question">
                    Hal-hal yang sering ditanyakan terkait CSC!
                </Banner>
                <div className="flex flex-col bg-white w-full px-[240px] pb-10">
                        <h1 className="self-center font-black text-[35px] text-black w-full py-10">Tentang CSC</h1>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl">
                                <h3 className="text-black">
                                    Apa perbedaan CSC dengan Sahabat PNJ? / lebih cocok masuk CSC atau SPNJ ya?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl mt-5">
                                <h3 className="text-black">
                                    Pertemuan KSM CSC setiap hari apa?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl mt-5">
                                <h3 className="text-black">
                                    Apakah pertemuan kelas CSC nantinya bersifat Offline? atau Online?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <h1 className="self-center font-black text-[35px] text-black w-full py-10">Pendaftaran CSC</h1>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl">
                                <h3 className="text-black">
                                    Kapan registrasi member baru dibuka?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl mt-5">
                                <h3 className="text-black">
                                    Apa persyaratan masuk CSC?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl mt-5">
                                <h3 className="text-black">
                                    Apa mahasiswa jurusan selain TIK boleh mendaftar sebagai anggota CSC?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                        <div className="w-full self-center">
                            <div className="flex justify-between text-2xl mt-5">
                                <h3 className="text-black">
                                    Apa boleh join lebih dari satu divisi?
                                </h3>
                                <Image
                                src={dropdown}
                                height={30}
                                />
                            </div>
                            <hr className="w-full border-black h-[7px]" />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FaqPage;