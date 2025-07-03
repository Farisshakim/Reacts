// src/components/FeatureItem.jsx
import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;