import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import lantern from '../images/lantern.png';
import hamburger from '../images/hamburger.png';

function Navbar({ setShowLanterns }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = {
    '/': 'About me',
    '/experience': 'Experience',
    '/projects': 'Projects',
    '/contact': 'Contact'
  };

  return (
    <div className="full-container">
      <div className="navbar">
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburger} alt="Menu" height={40} />
        </div>
        <div className="title-bar">Aimee's Sushi</div>
      </div>

      <div className={`nav-lanterns ${menuOpen ? 'hidden' : ''}`}>
        {Object.entries(navItems).map(([path, label]) => (
          <Link to={path} key={path}>
            <div className="lanternandtext">
              <img src={lantern} alt={label} height={80} className="lantern" />
              <span className="lanternlabel">{label}</span>
            </div>
          </Link>
        ))}
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {Object.entries(navItems).map(([path, label]) => (
            <Link to={path} key={path} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
