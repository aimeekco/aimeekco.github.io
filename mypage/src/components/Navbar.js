import React from 'react';
import '../styles/Navbar.css'; 
import { Link } from 'react-router-dom';
import lantern from '../images/lantern.png';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
          <div className="title-bar">
              Aimee's Sushi
          </div>
      </div>
      <div className="nav-lanterns">
          <Link to="/">
            <div className="lanternandtext">
              <img src={lantern} alt="About me" height={80} className="lantern"/> 
              <span> About me! </span>
            </div>
          </Link>
          <Link to="/aboutpage">
            <div className="lanternandtext">
              <img src={lantern} alt="About this page" height={80} className="lantern"/>
              <span> About page </span>
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
    </nav>
  );
}

export default Navbar;


