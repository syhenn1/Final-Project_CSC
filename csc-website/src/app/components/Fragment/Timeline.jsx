export default function Timeline() {
    return (
        <>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2012</time>
                <div className="text-lg font-black">Awal Terbentuk </div>
                    <ul>
                        <li>CSC didirikan pada tahun 2012 oleh sekelompok mahasiswa yang bersemangat di Politeknik Negeri Jakarta.</li>
                        <li>Klub ini awalnya berfokus pada teknologi secara umum, tetapi dengan waktu, berkembang menjadi wadah yang lebih luas untuk pengembangan minat dan bakat mahasiswa TIK.</li>
                    </ul>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
                </div>
                <div className="timeline-end mb-10">
                <time className="font-mono italic">2012/2013</time>
                <div className="text-lg font-black">Momen Resmi Sebagai Kelompok Studi Mahasiswa</div>
                    <ul>
                            <li>Pada tahun 2012/2013, CSC secara resmi diakui sebagai Kelompok Studi Mahasiswa (KSM) di bawah naungan Jurusan Teknik Informatika dan Komputer.</li>
                            <li>Ini menjadi tonggak bersejarah yang menegaskan peran penting CSC dalam pengembangan pemahaman teknologi mahasiswa.</li>
                    </ul>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2014</time>
                <div className="text-lg font-black">Fokus Divis</div>
                    <ul>
                            <li>Seiring berjalannya waktu, CSC membagi diri menjadi tiga divisi utama: Divisi Cyber Security, Divisi Soft Dev, dan Divisi Explore.</li>
                            <li>Setiap divisi mengkhususkan diri dalam bidang tertentu seperti keamanan jaringan, pengembangan perangkat lunak, dan Internet of Things (IoT).
                            </li>
                    </ul>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
                </div>
                <div className="timeline-end mb-10 md:text-start">
                <div className="text-lg font-black">Harapan CSC Untuk Masa Depan</div>
                    <ul>
                            <li>CSC terus memberikan dukungan berharga bagi mahasiswa yang ingin mendalami teknologi dan mengasah keahlian mereka.</li>
                            <li>Menjadi wadah untuk eksplorasi teknologi, pembelajaran yang mendalam, dan kolaborasi inovatif.
                            </li>
                    </ul>
                </div>
            </li>
        </ul>
        </>
        );
}