import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import minime from '../images/minimeturn.png';
import '../styles/aboutMe.css';
import ScrollIndicator from './ScrollIndicator';

function AboutMe() {
    return (
        <div>
            <div className="aboutme-container">
                <div className="minime">
                    <img src={minime} alt="Aimee" />
                </div>
                <div className="hello">
                    <h1>Hi! I'm Aimee</h1>
                </div>
            </div>
            <ScrollIndicator />
            <div className="panels-container">
                <Parallax className="panel" y={[-20, 20]}>
                    <div className="panel-content">
                        <p>Fun Fact 1</p>
                    </div>
                </Parallax>
                <Parallax className="panel" y={[-20, 20]}>
                    <div className="panel-content">
                        <p>Fun Fact 2</p>
                    </div>
                </Parallax>
                <Parallax className="panel" y={[-20, 20]}>
                    <div className="panel-content">
                        <p>Fun Fact 3</p>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}

export default AboutMe;
