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
          <Link to="/about"><span><img src={lantern} alt="About" height={80} /></span></Link>
          <Link to="/menu"><span><img src={lantern} alt="Menu" height={80} /></span></Link>
          <Link to="/gallery"><span><img src={lantern} alt="Gallery" height={80} /></span></Link>
          <Link to="/contact"><span><img src={lantern} alt="Contact" height={80}/></span></Link>
      </div>
    </nav>
  );
}

export default Navbar;


