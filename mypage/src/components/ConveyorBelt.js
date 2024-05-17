import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import sushi from '../images/sushi.png';
import ikura from '../images/ikura.png';
import salmon from '../images/salmon.png';
import tuna from '../images/tuna.png';
import roll from '../images/roll.png';
import tamago from '../images/tamago.png';
import uni from '../images/uni.png';
import '../styles/conveyorBelt.css';
import geolocation from '../images/p-geolocation demo.mp4';
import newspaper from '../images/pnewsdemo.mp4';
import roomdraw from '../images/roomdrawdemo.mp4';
import lungcancer from '../images/cnndemo.mov';
import mazegame from '../images/mazegamedemo.mp4';
import datathon from '../images/datathondemo.mov';

const projects = [
  { image: ikura, demo: newspaper, title: 'P-Newspaper', description: 'An AI-powered web app that delivers a personalized news feed sourced from a wide range of reputable sources based on selected and inputted interests.',
    longdescription: 'P-Newspaper is an AI-powered web app that delivers a personalized news feed sourced from a wide range of reputable sources based on selected and inputted interests. The app uses a combination of natural language processing and machine learning algorithms to analyze and categorize articles, ensuring that users receive the most relevant and up-to-date news content. P-Newspaper also provides users with the ability to save articles, create custom news feeds, and receive real-time notifications for breaking news stories. With its intuitive user interface and advanced features, P-Newspaper offers a unique and personalized news reading experience for users of all backgrounds and interests.'},
  { image: salmon, demo: geolocation, title: 'P-Geolocation', description: 'A web app that returns a user\'s location on Google Maps given two timestamped images of the sun.',
    longdescription: 'P-Geolocation is a web app that returns a user\'s location on Google Maps given two timestamped images of the sun. The app uses computer vision algorithms to analyze the position of the sun in each image and calculate the user\'s latitude and longitude based on the angle of the sun. By comparing the timestamps of the images, P-Geolocation can determine the user\'s location at the time the photos were taken. This innovative technology allows users to geolocate themselves without the need for GPS or other location-based services, making it an ideal solution for remote or off-grid locations.'},
  { image: tuna, demo: roomdraw, title: 'Pomona College Room Draw - 2024 5C Hackathon', description: 'A user-centric revamp of the Pomona Room Draw website with real-time user interactions.',
    longdescription: 'Pomona College Room Draw is a web application that simplifies the room selection process for students at Pomona College. The app allows students to view available rooms, select their preferences, and receive real-time updates on the status of their room draw. By providing a user-friendly interface and intuitive features, Pomona College Room Draw streamlines the room selection process and enhances the overall experience for students. With its innovative design and functionality, the app offers a modern and efficient solution for managing room draw at Pomona College.'},
  { image: roll, demo: lungcancer, title: 'Lung Cancer Detection CNN', description: 'A convolutional neural network to detect lung cancer from histopathology images.',
    longdescription: 'Lung Cancer Detection CNN is a convolutional neural network (CNN) that can accurately detect lung cancer from histopathology images. The CNN uses a deep learning algorithm to analyze the features of lung tissue samples and identify cancerous cells with high precision. By training the CNN on a large dataset of annotated images, the model can learn to distinguish between healthy and cancerous tissue and provide accurate diagnoses in real-time. This innovative technology has the potential to revolutionize the field of cancer detection and improve patient outcomes by enabling early diagnosis and treatment of lung cancer.'},
  { image: tamago, demo: mazegame, title: 'Maze Game', description: 'Random maze generation using depth-first-search and game playable on resulting maze.',
    longdescription: 'Maze Game is a web-based game that generates random mazes using a depth-first search algorithm and allows players to navigate through the maze to reach the end goal. The game features an intuitive user interface, responsive controls, and challenging levels that test players\' problem-solving skills and spatial awareness. With its dynamic maze generation and interactive gameplay, Maze Game offers a fun and engaging experience for players of all ages. Whether you\'re a casual gamer or a maze enthusiast, Maze Game provides hours of entertainment and excitement.'},
  { image: uni, demo: geolocation, title: 'Duolingo Half-Life Regression', description: 'Brief description of Project 6',
    longdescription: 'hellooo' },
  { image: sushi, demo: datathon, title: 'Flight Delay Prediction - 2023 5C Datathon', description: 'Brief description of Project 6',
    longdescription: 'helloooo' }
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
        <>
          <div className="overlay" onClick={handleCloseClick}></div>
          <div className="enlarged-card">
            <div className="enlarged-content">
              <button className="close-button" onClick={handleCloseClick}>✖</button>
              <video controls>
                <source src={enlargedProject.demo} type="video/mp4" />
                <source src={enlargedProject.demo} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              <div className='description-container'>
                <h3>{enlargedProject.title}</h3>
                <p>{enlargedProject.longdescription}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ConveyorBelt;
