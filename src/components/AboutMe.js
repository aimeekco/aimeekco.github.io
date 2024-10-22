import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturn.png';
import '../styles/aboutMe.css';
import PhotoGrid from './PhotoGrid';
import resume from '../images/Co_Aimee_Resume.pdf';

function AboutMe() {
  const [showLanterns, setShowLanterns] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typedGreeting, setTypedGreeting] = useState('');

  const fullText = `Hello! I'm Aimee, a Junior at Harvey Mudd College with a passion for computer science and mathematics. 
                    When I'm not coding or solving problems, I enjoy exploring new technologies, working on cool projects, 
                    and contributing to open-source platforms. I love learning new things and collaborating with like-minded people!`;

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

  useEffect(() => {
    if (showInfo) {
      let currentIndex = 0;
      setTypedText('');

      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [showInfo, fullText]);

  const handleClick = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };

  return (
    <div>
      <div className={`content-container ${showLanterns ? '' : 'reduced-margin'}`}>
        <div className="aboutme-container">
          <div className="minime" onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
            <img src={minimeturn} alt="Aimee" className="hover-effect" />
            <div className="speech-bubble">
              <p>Click me :)</p>
            </div>
          </div>
          <div className="hello">
            <h1>{typedGreeting}</h1>
            <h3>Junior at Harvey Mudd College studying CS + Math</h3>
            <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </div>
        </div>

        {showInfo && (
          <div className="additional-info">
            <p>{typedText}</p>
          </div>
        )}

        <div className="panels-container">
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
