"use client";
import * as React from "react";
import Image from "next/image";
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
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);

export default function SwiperView() {
  const slideData = [
    {
      id: 1,
      text: "1번",
      src: "/mainbanner/banner1.webp",
    },
    {
      id: 2,
      text: "2번",
      src: "/mainbanner/banner2.webp",
    },
    {
      id: 3,
      text: "3번",
      src: "/mainbanner/banner3.webp",
    },
    {
      id: 4,
      text: "4번",
      src: "/mainbanner/banner4.webp",
    },
    {
      id: 5,
      text: "5번",
      src: "/mainbanner/banner5.webp",
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
        pagination={true}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <Image
                src={slide.src}
                alt={slide.text}
                width={700}
                height={500}
                className="rounded-xl"
              />
              {/* <div>{slide.text}</div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
