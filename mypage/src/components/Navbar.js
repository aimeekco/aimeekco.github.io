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
          <Link to="/about"><span><img src={lantern} alt="About me" height={80} /> About me! </span></Link>
          <Link to="/menu"><span><img src={lantern} alt="About this page" height={80} /> About page </span></Link>
          <Link to="/gallery"><span><img src={lantern} alt="Gallery" height={80} /> Gallery </span></Link>
          <Link to="/contact"><span><img src={lantern} alt="Contact" height={80}/> Contact </span></Link>
      </div>
    </nav>
  );
}

export default Navbar;


