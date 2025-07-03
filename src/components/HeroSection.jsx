// src/components/HeroSection.jsx
import React from 'react';
import Button from './Button';
import './HeroSection.css';
import HeroImage from '../assets/hero-image.jpg'; // Assuming you have a hero image in your assets

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Fresh. Organic. Sustainable.</h1>
          <p>We deliver fresh, locally grown organic produce right to your doorstep. Taste the difference of real food.</p>
          <Button>Shop Our Produce</Button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Fresh vegetables" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;