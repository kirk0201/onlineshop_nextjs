"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";
import {
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

// import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/react";
import "swiper/css";
// import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
SwiperCore.use([Navigation, Scrollbar, Autoplay]);

export default function SwiperView() {
  const slideData = [
    {
      id: 1,
      text: "1번",
    },
    {
      id: 2,
      text: "2번",
    },
    {
      id: 3,
      text: "3번",
    },
    {
      id: 4,
      text: "4번",
    },
    {
      id: 5,
      text: "5번",
    },
  ];
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <div>{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
