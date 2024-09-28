import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturn.png';
import '../styles/aboutMe.css';
// import ScrollIndicator from './ScrollIndicator';
import Timeline from './Timeline';
import PhotoGrid from './PhotoGrid';

function AboutMe() {
  const [showLanterns, setShowLanterns] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log('Scroll Y:', scrollTop); // Debug log

      if (scrollTop > 50) {
        setShowLanterns(false);
      } else {
        setShowLanterns(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user is not at the top of the page on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`content-container ${showLanterns ? '' : 'reduced-margin'}`}>
      <div className="aboutme-container">
        <div className="minime">
          <img src={minimeturn} alt="Aimee" />
        </div>
        <div className="hello">
          <h1 >Hi! I'm Aimee</h1>
        </div>
      </div>
      <div className="panels-container">
        <Parallax className="panel">
          <div className="panel-content">
            <Timeline />
          </div>
        </Parallax>
        <Parallax className="panel">
          <div className="panel-content">
            <PhotoGrid />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default AboutMe;
