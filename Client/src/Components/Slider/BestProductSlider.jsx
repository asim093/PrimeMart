import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Styles from './Slider.module.scss';
import { Pagination } from 'swiper/modules';
import Categorycard from '../Card/Categorycard';
import dummydata from '../../services/dummy-data.json'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '../Card/ProductCard';
console.log(dummydata.products)



export default function BestProductSlider() {
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
                <div className={Styles.nav_btn} onClick={handlePrev} >
                    <FaArrowLeft />
                </div>

                <div className={Styles.nav_btn} onClick={handleNext} >
                    <FaArrowRight />
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    dummydata?.products.map((item, index) => (
                        <SwiperSlide key={index} className='d-flex justify-content-center '>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
