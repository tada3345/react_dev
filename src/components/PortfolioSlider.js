import React from 'react';

import example from '../assets/img/1video-bg.png';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination';
//import required modules
import { Pagination, Navigation } from 'swiper';
//import data
import { slider } from '../data';

const PortfolioSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        const { message, image, langs, link } = slide;
        return (
          <SwiperSlide
            key={index}
            className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2a1428] to-[#331a35]"
          >
            <p className="mb-8 text-[15px]">{message}</p>
            <a href={link}>
              <img
                className="w-100"
                src={example}
                alt="portfolio Example"
              ></img>
            </a>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div className="w-14">
                <img className="mb-3 md:mb-0" src={image} alt="" />
              </div>
              <div className="font-medium text-base">{langs}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlider;
