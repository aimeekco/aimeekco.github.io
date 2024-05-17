import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import minimeturn from '../images/minimeturning.png';
import '../styles/aboutMe.css';
import ScrollIndicator from './ScrollIndicator';
import Timeline from './Timeline';

function AboutMe() {
    return (
        <div>
            <div className="aboutme-container">
                <div className="minime">
                    <img src={minimeturn} alt="Aimee" />
                </div>
                <div className="hello">
                    <h1>Hi! I'm Aimee</h1>
                </div>
            </div>
            <ScrollIndicator />
            <div className="panels-container">
                <Parallax className="panel" >
                    <div className="panel-content">
                        <Timeline />
                    </div>
                </Parallax>
                <Parallax className="panel" >
                    <div className="panel-content">
                        <p>Fun Fact 2</p>
                    </div>
                </Parallax>
                <Parallax className="panel" >
                    <div className="panel-content">
                        <h2>Some fun facts!</h2>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}

export default AboutMe;
