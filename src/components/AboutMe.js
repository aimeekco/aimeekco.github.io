import React, { useState, useEffect } from 'react';
// import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturn.png';
import '../styles/aboutMe.css';
// import PhotoGrid from './PhotoGrid';
import resume from '../images/Co_Aimee_Resume.pdf';

function AboutMe( {showLanterns}) {
  const [typedGreeting, setTypedGreeting] = useState('');
  const greetingText = "Hi! I'm Aimee";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < greetingText.length) {
        setTypedGreeting(greetingText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);


  return (
    <div>
      <div className={`content-container ${showLanterns ? '' : 'reduced-margin'}`}>
        <div className="aboutme-container">
          <div className="minime">
            <img src={minimeturn} alt="Aimee" className="hover-effect" />
          </div>
          <div className="hello">
            <h1>{typedGreeting}</h1>
            <h3>Junior at Harvey Mudd College studying CS + Math</h3>
            <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </div>
        </div>

        {/* <div className="panels-container">
          <Parallax className="panel">
            <div className="panel-content">
              <PhotoGrid />
            </div>
          </Parallax>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
