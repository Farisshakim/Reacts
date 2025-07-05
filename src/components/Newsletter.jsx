import React, { useState } from 'react'; // Impor useState
import Button from './Button';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  // Fungsi untuk menangani perubahan pada input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fungsi untuk menangani saat form di-submit
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (email) {
      alert(`Terima kasih! Email "${email}" telah didaftarkan.`);
      setEmail(''); 
    } else {
      alert('Silakan masukkan alamat email Anda.');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container newsletter-container">
        <h2>Get Updates & Offers</h2>
        <p>Subscribe to our newsletter to get the latest news about our products and special offers.</p>
        {/* Hubungkan fungsi dan state ke elemen form */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <Button type="primary">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;