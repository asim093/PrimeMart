import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Styles from './Slider.module.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderBanner({ images }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}  
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper bannerSlider ${Styles.slider}`} 
      >
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={Styles.image_container}>
              <img src={item} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
