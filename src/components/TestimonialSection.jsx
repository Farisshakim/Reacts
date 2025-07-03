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
              The quality of the vegetables is outstanding! I've never tasted tomatoes so fresh. The delivery is always on time. Highly recommended for everyone who values real, healthy food.
            </blockquote>
            <cite>
              <h4>Justin Mason</h4>
              <p>Regular Customer</p>
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
