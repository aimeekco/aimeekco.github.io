import React from 'react';
import '../styles/Navbar.css'; 
import { Link } from 'react-router-dom';
import lantern from '../images/lantern.png';
import roof from '../images/roof.png';

function Navbar() {
  return (
    <nav>
      <div style={{ backgroundImage: `url(${roof})`, backgroundSize: 'cover', width: '100%' }} className="navbar">
          <div className="title-bar">
              Aimee's Sushi
          </div>
      </div>
          <div className="nav-lanterns">
              <Link href="/about"><span><img src={lantern} alt="About" width={80} /></span></Link>
              <Link href="/menu"><span><img src={lantern} alt="Menu" width={80} /></span></Link>
              <Link href="/gallery"><span><img src={lantern} alt="Gallery" width={80} /></span></Link>
              <Link href="/contact"><span><img src={lantern} alt="Contact" width={80}/></span></Link>
          </div>
    </nav>
  );
}

export default Navbar;


