// File: src/components/Navbar.jsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">ORGANIC</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <Button>Shop Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;