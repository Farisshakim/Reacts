// src/components/ProductShowcase.jsx
import React from 'react';
import ProductCard from './ProductCard.jsx';
import './ProductShowcase.css';

const ProductShowcase = ({ title, products }) => {
  return (
    <section className="product-showcase">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;