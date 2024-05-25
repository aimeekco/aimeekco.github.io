import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; 
import { Link } from 'react-router-dom';
import lantern from '../images/lantern.png';

function Navbar() {
  const [showLanterns, setShowLanterns] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      setShowLanterns(false);
    } else {
      setShowLanterns(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="full-container">
      <div className="navbar">
        <div className="title-bar">
            Aimee's Sushi
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={lantern} alt="Menu" height={40} />
        </div>
      </div>
      <div className={`nav-lanterns ${showLanterns ? '' : 'hidden'}`}>
          <Link to="/">
            <div className="lanternandtext">
              <img src={lantern} alt="About me" height={80} className="lantern"/> 
              <span> About me </span>
            </div>
          </Link>
          <Link to="/aboutpage">
            <div className="lanternandtext">
              <img src={lantern} alt="About this site" height={80} className="lantern"/>
              <span> About site </span>
            </div> 
          </Link>
          <Link to="/landing">
            <div className="lanternandtext">
              <img src={lantern} alt="Projects" height={80} className="lantern"/> 
              <span> Projects </span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="lanternandtext">
              <img src={lantern} alt="Contact" height={80} className="lantern"/>
              <span> Contact </span>
            </div>
          </Link>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>About me!</Link>
          <Link to="/aboutpage" onClick={() => setMenuOpen(false)}>About site</Link>
          <Link to="/landing" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;


