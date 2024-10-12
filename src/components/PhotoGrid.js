import React from 'react';
import '../styles/photoGrid.css';
import googlemap from '../images/googlemap.png';
import soccer from '../images/soccer.jpg';
import track from '../images/track.jpg';
import diving from '../images/diving.jpg';
import violinportrait from '../images/violinportrait.JPEG';
import violin from '../images/violin.jpg';
import legoland from '../images/legoland.HEIC';
import snowboard from '../images/snowboard.jpg';

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            <div className="item">
                <img src={violinportrait} alt="Violin Portrait" />
                <div className="photo-description">Solo violin, chamber music, orchestra!</div>
            </div>
            <div className="item">
                <img src={violin} alt="Violin" />
                <div className="photo-description">Started violin since I was 4!</div>
            </div>
            <div className="item">
                <img src={soccer} alt="Soccer" />
                <div className="photo-description">Varsity soccer!</div>
            </div>
            <div className="item">
                <img src={track} alt="Track" />
                <div className="photo-description">Varsity track - jumps and sprints!</div>
            </div>
            <div className="item">
                <img src={diving} alt="Diving" />
                <div className="photo-description">PADI certified diver!</div>
            </div>
            <div className="item">
                <img src={googlemap} alt="Google Map" />
                <div className="photo-description">Appearance on Google Maps street view with my brother!</div>
            </div>
            <div className="item">
                <img src={legoland} alt="Legoland" />
                <div className="photo-description">Legoland lifetime ambassador!</div>
            </div>
            <div className="item">
                <img src={snowboard} alt="Snowboard" />
                <div className="photo-description">Snowboarding with friends!</div>
            </div>
        </div>
    );
};

export default PhotoGrid;
