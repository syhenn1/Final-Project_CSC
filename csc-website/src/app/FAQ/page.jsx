'use client'

import React, { useState, useRef, useEffect } from "react";
import BannerFaq from "../components/Fragment/Banner/BannerFaq";
import Image from "next/image";
import dropdown from '@/app/components/images/caret-down.png';

// CollapsibleItem Component
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
        <div className="border-t border-gray-300 mt-5">
            <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="text-2xl text-black">{title}</h3>
                <Image src={dropdown} height={30} alt="dropdown icon" className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div ref={contentRef} className="overflow-hidden transition-height duration-500 ease-in-out">
                {isOpen && <div className="px-8 pb-4 text-lg text-black" dangerouslySetInnerHTML={{ __html: description }} />}
            </div>
        </div>
    );
};

// FAQ Page Component
const FaqPage = () => {
    // Sample questions and answers
    const faqs = [
        {
            category: "Tentang CSC",
            items: [
                {
                    question: "Apa perbedaan CSC dengan Sahabat PNJ? / lebih cocok masuk CSC atau SPNJ ya?",
                    answer: `Perbedaan kami terletak pada divisi dan materi yang diajarkan. Secara garis besar kami sama sama KSM yang bertujuan untuk menjadi ruang diskusi dan meningkatkan kemampuan mahasiswa yang memiliki minat di bagian komputer. Divisi SPNJ meliputi Web Design, Motion Graphic, Android Developer. Untuk penjelasan lebih lanjut, kalian bisa mampir ke <a href="https://spnj.neocities.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">website SPNJ</a>.`
                },
                {
                    question: "Pertemuan KSM CSC setiap hari apa?",
                    answer: "Normalnya, kelas diadakan tiap hari Sabtu jam 9 sampai selesai (Sesi kelas biasanya 2-4 Jam tergantung materi). Namun, apabila ada kuliah tambahan/pengganti dari mayoritas member ataupun mentor, waktu kelas bisa disesuaikan lagi."
                },
                {
                    question: "Apakah pertemuan kelas CSC nantinya bersifat Offline? atau Online?",
                    answer: "Rencana kami untuk angkatan tahun ini semua divisi dilaksanakan secara Offline, Namun masih dalam proses negosiasi dengan pihak jurusan. Akan kami beri informasi ter-update saat proposal kegiatan angkatan baru CSC sudah di approve oleh jurusan."
                },
            ]
        },
        {
            category: "Pendaftaran CSC",
            items: [
                {
                    question: "Kapan registrasi member baru dibuka?",
                    answer: 'Pendaftaran KSM biasanya dimulai pada semester 2, Pantau terus <a href="https://instagram.com/cscpnj" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Instagram CSC</a> untuk informasi lebih lanjut'
                },
                {
                    question: "Apa persyaratan masuk CSC?",
                    answer: `
                        <ul>
                            <li class="list-disc list-inside">Memiliki kemauan untuk belajar dan mengikuti kegiatan CSC secara aktif</li>
                            <li>Memiliki laptop dengan spesifikasi minimum:</li>
                            <ul>
                                <li><strong>Cyber Security</strong></li>
                                <ul class="list-disc list-inside">
                                    <li>Prosesor 64-bit dengan dukungan virtualisasi (Intel VT-x atau AMD-V).</li>
                                    <li>Minimal 4 GB RAM (disarankan 8 GB atau lebih).</li>
                                    <li>Hard disk 128 GB (disarankan SSD).</li>
                                </ul>
                                <li><strong>SoftDev</strong></li>
                                <ul class="list-disc list-inside">
                                    <li>Prosesor dual-core (e.g. Intel Core i3 gen 8 or later).</li>
                                    <li>Minimal 4 GB RAM (disarankan 8 GB atau lebih).</li>
                                    <li>Hard disk 128 GB (disarankan SSD).</li>
                                </ul>
                                <li><strong>Explore</strong></li>
                                <ul class="list-disc list-inside">
                                    <li>Prosesor dual-core (e.g. Intel Core i3 gen 8 or later).</li>
                                    <li>Minimal 4 GB RAM (disarankan 8 GB atau lebih).</li>
                                    <li>Hard disk 128 GB (disarankan SSD).</li>
                                </ul>
                            </ul>
                            <li class="list-disc list-inside">Memiliki USB port</li>
                        </ul>
                        <p>Spesifikasi ini hanya gambaran aja ya, kalau hardware kalian kurang memadai, nantinya akan ada keringanan dan bantuan tambahan bagi kalian supaya bisa tetep ngikutin rangkaian acara, jadi jangan takut join karna perangkat kurang memadai ya!</p>
                    `
                },
                {
                    question: "Apa mahasiswa jurusan selain TIK boleh mendaftar sebagai anggota CSC?",
                    answer: "Boleh banget! soalnya CSC akan mengajarkan konsep dasar tiap divisi secara langsung, dan mentor akan memantau progress tiap member supaya tidak tertinggal. Jadi walau kamu tidak memiliki dasar sama sekali di divisi-divisi kami, tetap bisa mengikuti kegiatan CSC"
                },
                {
                    question: "Apa boleh join lebih dari satu divisi?",
                    answer: "Tiap member cuman boleh join 1 divisi ya, Kalo kamu masih bimbang pengen join divisi mana, boleh konsultasi dengan kami via grup WA diskusi untuk nemuin divisi mana yang paling cocok sama kamu!"
                },
            ]
        }
    ];

    return (
        <div>
            <BannerFaq />
            <div className="flex flex-col bg-white w-full px-4 sm:px-6 md:px-[240px] pb-10 mt-10">
                {faqs.map((section, index) => (
                    <div key={index}>
                        <h1 className="font-black text-[24px] sm:text-[28px] md:text-[35px] text-black w-full py-5 text-center mt-5 sm:mt-10">
                            {section.category}
                        </h1>
                        {section.items.map((faq, index) => (
                            <CollapsibleItem key={index} title={faq.question} description={faq.answer} />
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex flex-col bg-white w-full px-4 sm:px-6 md:px-[240px] pb-10 text-black text-[16px] sm:text-[18px] md:text-[20px] mt-5">
                Kami tidak meminta uang kas dari member baru. Jika kamu dikirimi pesan oleh member pengurus yang meminta uang dengan alasan yang tidak jelas, mohon kirimkan laporan ke admin kami via DM Instagram atau Whatsapp yang tertera pada Kontak Kami.
                Kami hanya meminta uang saat akan mengadakan acara seperti first gathering, makrab, dll, atau saat membuat merchandise KSM. Dan itu tidak wajib bagi member baru. Hanya yang berminat saja.
            </div>
        </div>
    );
};

export default FaqPage;