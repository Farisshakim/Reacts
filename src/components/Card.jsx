// File: src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
  const cardClassName = `card ${className || ''}`;
  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
};

export default Card;