import React, { useState } from 'react';
import './ContactForm.css';
import whatsappIcon from '../components/images/WAicon.png';
import instagramIcon from '../components/images/Instagramicon.png';
import discordIcon from '../components/images/Discordicon.png';
import twitterIcon from '../components/images/Twittericon.png';
import linkedinIcon from '../components/images/linkedin.png';
import emailIcon from '../components/images/emailicon.png';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Semua bidang harus diisi!');
      return;
    }

    const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Simulate sending email
    console.log('Sending email with the following content:');
    console.log(emailContent);

    alert('Pesan telah dikirim!');

    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="header">
        <h1>CONTACT CSC</h1>
        <p>Ingin tahu lebih banyak mengenai CSC? Kami akan senang mendengar hal tersebut. Hubungi kami pada kontak dibawah ini.</p>
      </header>
      <div className="contact-methods">
        <div className="method">
          <a href="https://wa.me/0123456789" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
            <button>Gabung Grup</button>
          </a>
        </div>
        <div className="method">
          <a href="https://instagram.com/cscpnj" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
            <button>Follow Instagram Kami</button>
          </a>
        </div>
        <div className="method">
          <a href="https://discord.gg/your_discord_invite" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" />
            <button>Join Server Discord</button>
          </a>
        </div>
        <div className="method">
          <a href="https://twitter.com/csc_pnj" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
            <button>Follow Twitter Kami</button>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Masih Ingin Bertanya Secara Detail?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tanggapan"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <footer className="footer">
        <div className="quick-links">
          <a href="#">Gudang Ilmu TIK (GuTIK)</a>
          <a href="#">Elearning PNJ</a>
          <a href="#">SIAK PNJ</a>
        </div>
        <div className="contact-info">
          <p>0123456789</p>
          <p>csc.pnj@gmail.com</p>
          <p>@cscpnj</p>
        </div>
        <div className="social-media">
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="#"><img src={emailIcon} alt="Email" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;

