import React, { useState } from 'react';
import './ContactForm.css'; 

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
    <div className="contact-form">
      <h2>Contact Us</h2>
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
  );
};

export default ContactForm;
        
