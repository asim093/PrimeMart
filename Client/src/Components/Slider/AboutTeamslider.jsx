import React from "react";
import AboutTeamdata from "../../services/AboutTeamdata";
import AboutTeamCard from "../AboutTeamCard/AboutTeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import styles from './Slider.module.scss';

export default function AboutTeamSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className={`mySwiper bannerSlider ${styles.slider}`} 
      >
        {AboutTeamdata?.data.map((item, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center mb-5 ">
            <AboutTeamCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
