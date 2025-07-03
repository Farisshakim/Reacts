// src/App.jsx
import React from 'react';

// Import semua komponen
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialSection from './components/TestimonialSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import tomatoesImage from './assets/tomatoes.jpg';
import leafyGreensImage from './assets/leafy-greens.jpg';
import carrotsImage from './assets/carrots.jpg';
import bellPeppersImage from './assets/bell-peppers.jpg';
import cucumbersImage from './assets/cucumbers.jpg';
import './App.css'; 

// Data statis untuk produk (nantinya bisa dari API)
const freshestPicksData = [
  { id: 1, name: 'Fresh Tomatoes', imageUrl: tomatoesImage },
  { id: 2, name: 'Leafy Greens', imageUrl: leafyGreensImage },
  { id: 3, name: 'Oranges Carrots', imageUrl: carrotsImage },
  { id: 4, name: 'Bell Peppers', imageUrl: bellPeppersImage },
  { id: 5, name: 'Organic Cucumbers', imageUrl: cucumbersImage },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase title="Our Freshest Picks" products={freshestPicksData} />
        <WhyChooseUs />
        <TestimonialSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;