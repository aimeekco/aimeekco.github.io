import React from 'react';
import minime from '../images/minimeturn.png'; 
import '../styles/aboutMe.css';

function AboutMe() {

    return (
        <div className="aboutme-container">
            <div className="minime">
                <img src={minime} alt="Aimee" />
            </div>
            <div className="fun-facts">
                <h2> Hi! I'm Aimee </h2>
            </div>
        </div>
    );
}

export default AboutMe;
