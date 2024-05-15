import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import sushi from '../images/sushi.png';
import '../styles/conveyorBelt.css';
import geolocation from '../images/p-geolocation demo.mp4';
import newspaper from '../images/pnewsdemo.mp4';
import roomdraw from '../images/roomdrawdemo.mp4';
import lungcancer from '../images/cnndemo.mov';
import mazegame from '../images/mazegamedemo.mp4';

const projects = [
  { image: sushi, demo: newspaper, title: 'P-Newspaper', description: 'An AI-powered web app that delivers a personalized news feed sourced from a wide range of reputable sources based on selected and inputted interests.' },
  { image: sushi, demo: geolocation, title: 'P-Geolocation', description: 'A web app that returns a users location on Google Maps given two timestamped images of the sun.' },
  { image: sushi, demo: roomdraw, title: 'Pomona College Room Draw', description: 'A user-centric revamp of the Pomona Room Draw website with real-time user interactions. 2024 5C Hackathon.' },
  { image: sushi, demo: lungcancer, title: 'Lung Cancer Detection CNN', description: 'A convolutional neural network to detect lung cancer from histopatholgy images.' },
  { image: sushi, demo: mazegame, title: 'Maze Game', description: 'Random maze generation using depth-first-search and game playable on resulting maze.' },
  { image: sushi, demo: geolocation, title: 'Project 6', description: 'Brief description of Project 6' }
  ];

const ConveyorBelt = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [enlargedProject, setEnlargedProject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (project) => {
    setEnlargedProject(project);
  };

  const handleCloseClick = () => {
    setEnlargedProject(null);
  };

  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        navigation={true}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        // autoplay={{ 
        //   delay: 1000, 
        //   disableOnInteraction: true,
        //   pauseOnMouseEnter: true 
        // }}
        speed={1000}
        coverflowEffect={{
          rotate: -20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={{ clickable: true }}
        className='swiper-container'
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='card' onClick={() => handleCardClick(project)}> 
              <img src={project.image} alt={`Slide ${index + 1}`} />
              <div className='card-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {enlargedProject && (
        <div className="enlarged-card">
          <div className="enlarged-content">
            <button className="close-button" onClick={handleCloseClick}>✖</button>
            <video controls>
              <source src={enlargedProject.demo} type="video/mp4" />
              <source src={enlargedProject.demo} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            <h3>{enlargedProject.title}</h3>
            <p>{enlargedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConveyorBelt;
