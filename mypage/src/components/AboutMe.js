import React, { useState, useEffect, useCallback } from 'react';
import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturning.png';
import '../styles/aboutMe.css';
import ScrollIndicator from './ScrollIndicator';
import Timeline from './Timeline';
import PhotoGrid from './PhotoGrid';

function AboutMe() {
  const [showLanterns, setShowLanterns] = useState(true);

  const handleScroll = useCallback(() => {
    console.log(window.scrollY); 
    if (window.scrollY > 50) {
      setShowLanterns(false);
    } else {
      setShowLanterns(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="content-container">
      <div className={`aboutme-container ${showLanterns ? '' : 'reduced-margin'}`}>
        <div className="minime">
          <img src={minimeturn} alt="Aimee" />
        </div>
        <div className="hello">
          <h1>Hi! I'm Aimee</h1>
        </div>
      </div>
      <ScrollIndicator />
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
