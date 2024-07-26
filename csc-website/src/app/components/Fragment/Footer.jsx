import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '@/app/components/images/instagram.png';
import EmailIcon from '@/app/components/images/Email.png';
import LinkedinIcon from '@/app/components/images/linkedin.png';

export default function Footer() {
  return (
    <footer className="bg-[#061D4B] text-white p-8 mt-auto">
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 m-4">
          <h3 className="mb-4">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link href="https://csclub.example.com" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                Gudang Ilmu TIK (GULTIK)
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://elearning.ac.id" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                Elearning PNJ
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://youtube.com" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
                SIMAK PNJ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 m-4">
          <h3 className="mb-4">Contact Info</h3>
          <p>Computer Student Club</p>
          <p>
            <Link href="mailto:csclubpnj@gmail.com" className="text-white no-underline hover:underline">
              csclubpnj@gmail.com
            </Link>
          </p>
          <p>
            <Link href="mailto:csclub@example.com" className="text-white no-underline hover:underline">
              csclub@example.com
            </Link>
          </p>
          <p>
            <Link href="https://instagram.com/csclubpnj" className="text-white no-underline hover:underline" target="_blank" rel="noopener noreferrer">
              @csclubpnj
            </Link>
          </p>
        </div>

        <div className="flex-1 m-4">
          <h3 className="mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://instagram.com/csclubpnj" target="_blank" rel="noopener noreferrer">
              <Image src={InstagramIcon} width={25} height={25} alt="Instagram" />
            </Link>
            <Link href="https://facebook.com/csclubpnj" target="_blank" rel="noopener noreferrer">
              <Image src={EmailIcon} width={25} height={25} alt="Email" />
            </Link>
            <Link href="https://twitter.com/csclubpnj" target="_blank" rel="noopener noreferrer">
              <Image src={LinkedinIcon} width={25} height={25} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full text-center mt-8">
        <p>© 2024 CSC PNJ</p>
      </div>
    </footer>
  );
}
