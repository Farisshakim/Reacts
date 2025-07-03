// src/components/ProductCard.jsx
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <button className="add-to-cart-btn">
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;