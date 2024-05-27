import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import lantern from '../images/lantern.png';

function Navbar({ setShowLanterns }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="full-container">
      <div className="navbar">
        <div className="title-bar">Aimee's Sushi</div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={lantern} alt="Menu" height={40} />
        </div>
      </div>
      <div className={`nav-lanterns ${menuOpen ? 'hidden' : ''}`}>
        <Link to="/">
          <div className="lanternandtext">
            <img src={lantern} alt="About me" height={80} className="lantern" />
            <span> About me </span>
          </div>
        </Link>
        <Link to="/aboutpage">
          <div className="lanternandtext">
            <img src={lantern} alt="About site" height={80} className="lantern" />
            <span> About site </span>
          </div>
        </Link>
        <Link to="/landing">
          <div className="lanternandtext">
            <img src={lantern} alt="Projects" height={80} className="lantern" />
            <span> Projects </span>
          </div>
        </Link>
        <Link to="/contact">
          <div className="lanternandtext">
            <img src={lantern} alt="Contact" height={80} className="lantern" />
            <span> Contact </span>
          </div>
        </Link>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>About me</Link>
          <Link to="/aboutpage" onClick={() => setMenuOpen(false)}>About site</Link>
          <Link to="/landing" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
