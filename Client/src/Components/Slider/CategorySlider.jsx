import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Styles from './Slider.module.scss';
import { Pagination } from 'swiper/modules';
import c1 from "../../assets/Imgs/Category-Camera.png";
import c2 from "../../assets/Imgs/Category-CellPhone.png";
import c3 from "../../assets/Imgs/Category-Computer.png";
import c4 from "../../assets/Imgs/Category-Gamepad.png";
import c5 from "../../assets/Imgs/Category-Headphone.png";
import c6 from "../../assets/Imgs/Category-SmartWatch.png";
import Categorycard from '../Card/Categorycard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CategoriesDetail = [
    {
        icon: c1, Title: "Camera",
    },
    {
        icon: c2, Title: "CellPhone",
    },
    {
        icon: c3, Title: "Computer",
    },
    {
        icon: c4, Title: "Gamepad",
    },
    {
        icon: c5, Title: "Headphone",
    },
    {
        icon: c6, Title: "SmartWatch",
    },
    {
        icon: c3, Title: "Gamepad",
    },
];

export default function CategorySlider() {
    const swiperRef = useRef(null); 

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev(); 
    };

    const handleNext = () => {
        swiperRef.current.swiper.slideNext(); 
    };

    return (
        <>
            <div className={`${Styles.swiper_button_container} `}>
                <div className={Styles.nav_btn} onClick={handlePrev}>
                    <FaArrowLeft />
                </div>

                <div className={Styles.nav_btn} onClick={handleNext}>
                    <FaArrowRight />
                </div>
            </div>

            <Swiper
                ref={swiperRef} 
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    0:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    CategoriesDetail.map((item, index) => (
                        <SwiperSlide key={index} className='d-flex justify-content-center '>
                            <Categorycard icon={item.icon} title={item.Title} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
