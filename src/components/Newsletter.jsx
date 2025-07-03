// src/components/Newsletter.jsx
import React from 'react';
import Button from './Button';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-container">
        <h2>Get Updates & Offers</h2>
        <p>Subscribe to our newsletter to get the latest news about our products and special offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <Button type="primary">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
