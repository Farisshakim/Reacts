// src/components/Navbar.jsx
import React from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">ORGANIC</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <Button>Shop Now</Button>
      </div>
    </header>
  );
};

export default Navbar;