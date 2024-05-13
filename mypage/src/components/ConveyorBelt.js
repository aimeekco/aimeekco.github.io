import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sushi from '../images/sushi.png';

SwiperCore.use({Navigation, Autoplay, EffectCoverflow, Pagination});

const ConveyorBelt = () => {
  const images = [
    sushi, 
    sushi, 
    sushi, 
    sushi, 
    sushi, 
    sushi, 
    sushi, 
  ];

  return (
    <Swiper
      navigation={true}
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={{ clickable: true }}
      className='swiper-slide'
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ConveyorBelt;
