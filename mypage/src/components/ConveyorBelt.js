import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import ikura from '../images/ikura.png';
import salmon from '../images/salmon.png';
import tuna from '../images/tuna.png';
import roll from '../images/roll.png';
import tamago from '../images/tamago.png';
import uni from '../images/uni.png';
import onigiri from '../images/onigiri.png';
import '../styles/conveyorBelt.css';
import geolocation from '../images/p-geolocation demo.mp4';
import newspaper from '../images/pnewsdemo.mp4';
import roomdraw from '../images/roomdrawdemo.mp4';
import lungcancer from '../images/cnndemo.mov';
import mazegame from '../images/mazegamedemo.mp4';
import datathon from '../images/datathondemo.mov';
import halfliferegression from '../images/halfliferegression.pdf';

const projects = [
  { type: 'video', image: ikura, demo: newspaper, title: 'P-Newspaper', description: 'An AI-powered web app that delivers a personalized news feed sourced from a wide range of reputable sources based on selected and inputted interests.',
    longdescription: (
      <ul>
        <li><strong>Role:</strong> Project manager and lead developer</li>
        <li><strong>Goal:</strong> Increase availability of interesting news and reduce bias by:
          <ul>
            <li>Sourcing from a wide array of reputable news sites</li>
            <li>Displaying summaries without the news source name attached</li>
          </ul>
        </li>
        <li><strong>Technologies Used:</strong>
          <ul>
            <li>AWS Lambda function using Newspaper3K library to scrape news sites</li>
            <li>PostgreSQL database to store articles</li>
            <li>Monitored by Cloudwatch to execute every 12 hours</li>
            <li>User data and interests stored in a separate schema</li>
            <li>TSVector from article summaries in DB, matching user-selected interests</li>
          </ul>
        </li>
        <li><strong>Functionality:</strong>
          <ul>
            <li>User inputs topics in a freeform manner</li>
            <li>Inputs and remaining articles sent to OpenAI API for relevance sorting</li>
          </ul>
        </li>
      </ul>
    )
  },
  { type: 'video', image: salmon, demo: geolocation, title: 'P-Geolocation', description: 'A web app that returns a user\'s location on Google Maps given two timestamped images of the sun.',
    longdescription: 
      <ul>
        <li><strong>Role:</strong> Project member, lead frontend developer</li>
        <li><strong>Goal:</strong> Calculates latitude and longitude of user based on difference in angle with horizon and time of two images of the sun.</li>
        <li><strong>Features:</strong>
          <ul>
            <li>Embedded Google Maps feature with marker to show user's position with area of uncertainty.</li>
          </ul>
        </li>
      </ul>
  },
  { type: 'video', image: tuna, demo: roomdraw, title: 'Pomona College Room Draw - 2024 5C Hackathon', description: 'A user-centric revamp of the Pomona Room Draw website with real-time user interactions.',
    longdescription: 
      <ul>
        <li><strong>Role:</strong> Project member, lead frontend developer</li>
        <li><strong>Goal:</strong> Transform Pomona College’s room draw process into a less stressful and more interactive experience.</li>
        <li><strong>Features:</strong>
          <ul>
            <li>User authentication – checks if email address is attributed to Pomona College, and authenticates name and room draw time.</li>
            <li>Interactive map of all dorms → select dorm to view floor plan or select from navigation bar dropdown menu.</li>
            <li>Clickable rooms in floor plan. Color coding: Green for open room, blue for current user’s selection, red for taken.</li>
            <li>Priority system: students with lower graduation year or earlier draw time can replace another student's selection (interaction shown in video).</li>
          </ul>
        </li>
      </ul>
  },
  { type: 'video', image: roll, demo: lungcancer, title: 'Lung Cancer Detection CNN', description: 'A convolutional neural network to detect lung cancer from histopathology images.',
    longdescription: 
    <ul>
      <li><strong>Goal:</strong> Develop machine learning tool to automate and improve accuracy of lung cancer diagnoses; can also be used on other types of cancers.</li>
      <li><strong>Features:</strong>
        <ul>
          <li>TensorFlow Keras to implement standard CNN to detect lung cancer from set of histopathology images.</li>
          <li>80% accuracy rate, shown in confusion matrix graph.</li>
        </ul>
      </li>
    </ul>
  },
  { type: 'video', image: tamago, demo: mazegame, title: 'Maze Game', description: 'Random maze generation using depth-first-search and game playable on resulting maze.',
    longdescription: 
      <ul>
        <li><strong>Goal:</strong> Create visually interesting maze generation display and gameplay.</li>
        <li><strong>Features:</strong>
          <ul>
            <li>PyGame to create visually interesting maze generation display and gameplay.</li>
            <li>Depth-first-search to generate a new random maze for each game.</li>
          </ul>
        </li>
      </ul>
  },
  { type: 'pdf', image: uni, demo: halfliferegression, title: 'Duolingo Half-Life Regression', description: 'Predictive modeling using half-life regression and data analysis of the forgetting curve through the Duolingo app.',
    longdescription: 
    <ul>
      <li><strong>Goal:</strong> Analyze the relationship between exposure to words/phrases and the rate of forgetting through the Duolingo app and develop a predictive model for the forgetting curve.</li>
      <li><strong>Outcomes:</strong>
        <ul>
          <li>Preprocessed data to extract features (recall proportion, time since last review, language details, lexeme strings) from Settles and Meeder 2016 dataset.</li>
          <li>Compared 4 spaced repetition ML models - standard logistic regression, Leitner model, Pimsleur model, and half-life regression.</li>
          <li>Implemented stochastic gradient descent to find ideal model weights to minimize L2-regularized squared loss function with some modifications.</li>
          <li>Conducted statistical tests (MAE, Spearman's rank correlation, AUROC) to conclude that half-life regression is the most accurate model.</li>
        </ul>
      </li>
    </ul>
  },
  { type: 'video', image: onigiri, demo: datathon, title: 'Flight Delay Prediction', description: '1st Place - 2023 5C Datathon',
    longdescription: 
    <ul>
      <li><strong>Goal:</strong> Compete in an 8-hour datathon to create a predictive model for flight delays.</li>
      <li><strong>Outcomes:</strong>
        <ul>
          <li>Placed 1st out of 30 teams with the highest AUROC score.</li>
          <li>Implemented XGBoost on flight delay dataset.</li>
        </ul>
      </li>
    </ul>
  }
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
              {enlargedProject.type === 'video' ? (
                <video controls>
                  <source src={enlargedProject.demo} type="video/mp4" />
                  <source src={enlargedProject.demo} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe src={enlargedProject.demo} width="100%" height="500px" title={enlargedProject.title}></iframe>
              )}
              <div >
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
