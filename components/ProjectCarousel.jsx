'use client'


import React, { useEffect, useState } from 'react';
import ProjectCard from "./ui/ProjectCard"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../public/styles/customSwiper.css'

const ProjectCarousel = ({ data }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
    setDomLoaded(true);
    const slideCount = data?.length || 0;
    if (slideCount <= 1) setSlidesPerView(1);
    else if (slideCount === 2) setSlidesPerView(2);
    else setSlidesPerView(3);
  }, [data]);

  if (!domLoaded) {
    return null;
  }

  return (
    <div className="relative w-full flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={slidesPerView}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay:2500,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".project-custom-prev-button",
          nextEl: ".project-custom-next-button",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: Math.min(2, data?.length || 1),
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: Math.min(3, data?.length || 1),
            spaceBetween: 10,
          },
        }}
      >
        {
          data.length === 0 ? (
              <div className="w-full h-[300px] flex items-center justify-center">
                <div className="text-red-500 font-medium text-sm text-center text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
                  No Data Found
                </div>
              </div>
          ):(
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  title={item.title}
                  image={`https://blm-cms.appii.space${item.file.url}`}
                  place={item.subtitle}
                  // squareFeet={"1500 SQFT X6"}
                />
              </SwiperSlide>
            ))
          )
        }
      </Swiper>

      <div className="swiper-pagination hidden sm:inline absolute bottom-[-35px] left-0"></div>
    </div>
  );
}

export default ProjectCarousel;