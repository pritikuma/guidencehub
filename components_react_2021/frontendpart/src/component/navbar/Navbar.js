// src/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#services" className="navbar-link">Services</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>
      <div className="navbar-search">
        <input type="text" className="search-input" placeholder="Search..."/>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="iconsize" />
      </div>
    </nav>
  );
};

export default Navbar;
