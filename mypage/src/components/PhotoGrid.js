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

const photos = [
    { src: violinportrait, description: 'Photo 1 description' },
    { src: violin, description: 'Photo 2 description' },
    { src: soccer, description: 'Photo 3 description' },
    { src: track, description: 'Photo 4 description' },
    { src: diving, description: 'Photo 5 description' },
    { src: googlemap, description: 'Photo 6 description' },
    { src: legoland, description: 'Photo 7 description' },
    { src: snowboard, description: 'Photo 7 description' }
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div className="photo-grid-item" key={index}>
                    <img src={photo.src} alt={`${index + 1}`} />
                    <div className="photo-description">{photo.description}</div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
