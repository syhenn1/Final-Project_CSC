'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import whatsappIcon from "@/app/components/images/WAicon.png";
import instagramIcon from "@/app/components/images/Instagramikon.png";
import discordIcon from "@/app/components/images/Discordicon.png";
import twitterIcon from "@/app/components/images/Twitterikon.png";
import background from "@/app/components/images/2302035.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a11ad47-d6f0-4d17-ba43-72be0c1d377e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      alert("Pesan berhasil dikirim!");
    }
  };

  return (
    <main className='bg-white'>
    <div className="relative">
      <Image
        src={background}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="background"
      />
      <div className="relative px-5 py-[100px] md:px-[225px] md:py-[200px]">
        <div className="p-4 md:p-8 rounded-lg z-10">
          <div className='flex flex-col md:flex-row justify-between'>
            <h1 className="font-black text-white text-[50px] md:text-[100px] mb-[25px] md:mb-[50px] text-shadow-lg">
              CONTACT CSC
            </h1>
          </div>
          <h3 className="text-[18px] md:text-[25px] text-white text-shadow-lg w-full md:w-6/12">
            Ingin tau lebih banyak mengenai CSC? Kami akan senang mendengar hal tersebut. Hubungi kami pada kontak dibawah ini.
          </h3>
        </div>
      </div>
    </div>
    <div className="px-5 py-[60px] md:px-[100px] md:py-[110px] bg-white">
      <header className="text-center mb-5">
        <h1 className='text-[1.5em] md:text-[2em] mb-2.5 text-[#666]'>CONTACT CSC</h1>
        <p className='text-[0.875em] md:text-[1em] text-[#666]'>Ingin tahu lebih banyak mengenai CSC? Kami akan senang mendengar hal tersebut. Hubungi kami pada kontak dibawah ini.</p>
      </header>
      <div className="flex flex-col items-center md:flex-row justify-around mb-5">
        <div className="text-center mb-5 md:mb-0">
          <Link href={"https://wa.me/0123456789"} target="_blank" rel="noopener noreferrer">
            <Image src={whatsappIcon} alt='whatsapp' className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-2.5 mx-auto'/>
            <button className='bg-[#007BFF] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]'>Gabung Grup</button>
          </Link>
        </div>
        <div className="text-center mb-5 md:mb-0">
          <Link href={"https://instagram.com/cscpnj"} target="_blank" rel="noopener noreferrer">
            <Image src={instagramIcon} alt='instagram' className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-2.5 mx-auto'/>
            <button className='bg-[#007BFF] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]'>Follow Instagram Kami</button>
          </Link>
        </div>
        <div className="text-center mb-5 md:mb-0">
          <Link href={"https://discord.gg/7nxzwkMDfB"} target="_blank" rel="noopener noreferrer">
            <Image src={discordIcon} alt='Discord' className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-2.5 mx-auto'/>
            <button className='bg-[#007BFF] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]'>Join Server Discord</button>
          </Link>
        </div>
        <div className="text-center">
          <Link href={"https://twitter.com/csc_pnj"} target="_blank" rel="noopener noreferrer">
            <Image src={twitterIcon} alt='Twitter' className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-2.5 mx-auto'/>
            <button className='bg-[#007BFF] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]'>Follow Twitter Kami</button>
          </Link>
        </div>
      </div>
      <div className="bg-[#1f1e1e] shadow-[0_0_10px_rgba(253,249,249,0.892)] mb-5 p-4 md:p-5 rounded-[10px]">
        <h2 className='text-center mb-5'>Masih Ingin Bertanya Secara Detail?</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='w-full border mb-2.5 p-2.5 rounded-[5px] border-solid border-[#161616]'
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className='w-full border mb-2.5 p-2.5 rounded-[5px] border-solid border-[#161616]'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className='w-full border mb-2.5 p-2.5 rounded-[5px] border-solid border-[#161616]'
            name="message"
            placeholder="Tanggapan"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className='w-full bg-[#007BFF] text-[white] cursor-pointer p-2.5 rounded-[5px] border-[none]'>Kirim</button>
        </form>
      </div>
    </div>
  </main>
  
  );
};

export default ContactForm;

