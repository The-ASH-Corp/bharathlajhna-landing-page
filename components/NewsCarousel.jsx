"use client";

import NewsCard from "./ui/NewsCard";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/styles/customSwiper.css";

const NewsCarousel = ({ data }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    setDomLoaded(true);
    
    const slideCount = data?.slider?.length || 0;
    if (slideCount <= 1) setSlidesPerView(1);
    else if (slideCount === 2) setSlidesPerView(2);
    else setSlidesPerView(3);
  }, [data]);

  if (!domLoaded) {
    return null;
  }

  if (!data?.slider?.length) {
    return null;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className={`w-full ${ slidesPerView === 2 ? 'lg:w-[70%] sm:w-[80%]': ''} max-w-[1200px] px-4`}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".news-custom-prev-button",
            nextEl: ".news-custom-next-button",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: Math.min(2, data?.slider?.length || 1),
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: Math.min(3, data?.slider?.length || 1),
              spaceBetween: 30,
            },
          }}
          className="news-carousel"
        >
          {data?.slider?.map((item, index) => (
            <SwiperSlide 
              key={index} 
              className="flex justify-center items-stretch"
            >
              <NewsCard
                newsParagraph={item.subtitle}
                imageUrl={`https://blm-cms.appii.space${item.file.url}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;