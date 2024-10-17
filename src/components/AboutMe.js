import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturn.png';
import '../styles/aboutMe.css';
// import Timeline from './Timeline';
import PhotoGrid from './PhotoGrid';
import resume from '../images/Co_Aimee_Resume.pdf';

function AboutMe() {
  const [showLanterns, setShowLanterns] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log('Scroll Y:', scrollTop);

      if (scrollTop > 50) {
        setShowLanterns(false);
      } else {
        setShowLanterns(true);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 640);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen && (
        <div id="overlay">
          <div className="overlay-content">
            <h1>SCREEN TOO SMALL!</h1>
            <p>please don't open my website on your phone! (yet)</p>
            <p>working on it...</p>
          </div>
        </div>
      )}
      <div className={`content-container ${showLanterns ? '' : 'reduced-margin'}`}>
        <div className="aboutme-container">
          <div className="minime">
            <img src={minimeturn} alt="Aimee" />
          </div>
          <div className="hello">
            <h1 >Hi! I'm Aimee</h1>
            <h3>Junior at Harvey Mudd College studying CS + Math</h3>
            <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </div>
        </div>
        <div className="panels-container">
          {/* <Parallax className="panel">
            <div className="panel-content">
              <Timeline />
            </div>
          </Parallax> */}
          <Parallax className="panel">
            <div className="panel-content">
              <PhotoGrid />
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
