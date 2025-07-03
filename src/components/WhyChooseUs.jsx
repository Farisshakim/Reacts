// src/components/WhyChooseUs.jsx
import React from 'react';
import FeatureItem from './FeatureItem';
import './WhyChooseUs.css';
import { FiFeather, FiPackage, FiAward, FiMapPin } from 'react-icons/fi';
import whyChooseUsImage from '../assets/why-choose-us.jpg';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FiAward />,
            title: '100% Organic',
            description: 'All our produce is grown using organic farming methods without pesticides.'
        },
        {
            icon: <FiPackage />,
            description: 'We ensure our packaging is eco-friendly and keeps your produce fresh.',
            title: 'Sustainable Packaging'
        },
        {
            icon: <FiFeather />,
            title: 'Freshness Guaranteed',
            description: 'Harvested daily to ensure you get the freshest items available.'
        },
        {
            icon: <FiMapPin />,
            title: 'Local & Trusted',
            description: 'Sourced from local farms to support the community and reduce carbon footprint.'
        }
    ];

  return (
    <section className="why-choose-us">
      <div className="container why-choose-us-container">
        <div className="why-choose-us-image">
             <img src={whyChooseUsImage} alt="Organic Farm" />
        </div>
        <div className="why-choose-us-content">
          <h2 className="section-title">Why Choose Our Organic Farm?</h2>
          <div className="features-list">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;