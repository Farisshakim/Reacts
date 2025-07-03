// src/components/TestimonialSection.jsx
import React from 'react';
import './TestimonialSection.css';
import { FaQuoteLeft } from 'react-icons/fa';
import TestimoniImage from '../assets/customerreview.jpg';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-container">
        <div className="testimonial-content">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <blockquote>
              Nikel hasil bumi raja ampat enak banget loh ya.
            </blockquote>
            <cite>
              <h4>Lil Bahlil</h4>
              <p>Regular Customer From Yellow Fraction</p>
            </cite>
          </div>
        </div>
        <div className="testimonial-image">
            <img src={TestimoniImage} alt="Happy customer with vegetables" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
