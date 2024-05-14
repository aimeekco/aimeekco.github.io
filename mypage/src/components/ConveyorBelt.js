import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import sushi from '../images/sushi.png';
import '../styles/conveyorBelt.css';

const ConveyorBelt = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

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

  const projects = [
    sushi, 
    sushi, 
    sushi, 
    sushi,
    sushi,
    sushi,
    sushi
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
      navigation={true}
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      loop={true}
      autoplay={{ 
        delay: 1000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: false 
      }}
      speed={4000}
      coverflowEffect={{
        rotate: 50,
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
          <img src={project} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ConveyorBelt;
