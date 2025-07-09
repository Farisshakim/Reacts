// File: src/App.jsx

import React, { useState, useEffect } from 'react';
// Impor komponen layout dan sectiond
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialSection from './components/TestimonialSection';
import Newsletter from './components/Newsletter';

// Impor data
import { allProducts } from './data/products';

import './App.css'; 

function App() {
  // State untuk produk unggulan dan status loading
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect untuk judul dan simulasi loading
  useEffect(() => {
    // 1. Mengubah judul dokumen
    document.title = 'ORGANIC - Fresh & Sustainable';

    // 2. Mensimulasikan pengambilan data produk unggulan
    const timer = setTimeout(() => {
      setFeaturedProducts(allProducts.slice(0, 4));
      setIsLoading(false);
    }, 1500); // Delay 1.5 detik

    return () => clearTimeout(timer);
  }, []); // [] artinya hanya berjalan sekali

  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        {/* Tampilkan loading atau komponen showcase berdasarkan state */}
        {isLoading ? (
          <div className="container loading-text">Loading featured products...</div>
        ) : (
          <ProductShowcase title="Our Freshest Picks" products={featuredProducts} />
        )}
        <WhyChooseUs />
        <TestimonialSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;