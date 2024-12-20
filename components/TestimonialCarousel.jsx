"use client";

import { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./ui/TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/styles/customSwiper.css";

const TestimonialCarousel = ({ data }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [ slidesPerView, setSlidesPerView ] = useState(0);

  const colors = [
    "#E3F4EB",
    "#edd3d3",
    "#ede6d3",
    "#d3d7ed",
    "#edd3e5",
    "#edd3e5",
  ];

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
        slidesPerView={ slidesPerView }
        spaceBetween={ 10 }
        loop={true}
        autoplay={{
          delay:2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".testimonial-custom-prev-button",
          nextEl: ".testimonial-custom-next-button",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: Math.min(2,data?.length || 1),
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: Math.min(3,data?.length || 1),
            spaceBetween: 10,
          },
        }}
      >
        {data.length === 0 ? (
          <div className="w-full h-[300px] flex items-center justify-center">
            <div className="text-red-500 font-medium text-sm text-center text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
              No Data Found
            </div>
          </div>
        ) : (
          data.map((item, index) => {
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            return (
              <SwiperSlide key={index}>
                <TestimonialCard
                  bgColor={randomColor}
                  clientReview={item.comments}
                  clientName={item.name}
                  clientDesignation={item.position}
                  profileImg={`https://blm-cms.appii.space${item.avatar.url}`}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>

      <div className="w-auto swiper-pagination hidden sm:inline absolute bottom-[-35px] left-[0px]"></div>
    </div>
  );
};

export default TestimonialCarousel;
