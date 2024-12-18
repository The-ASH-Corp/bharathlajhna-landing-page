"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/autoplay";

const HeroCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };


  return (
    <>
      <main className="relative w-full flex flex-col items-center justify-center h-screen">
        <div className="absolute w-full h-full flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={handleSlideChange}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-screen relative">
                  <motion.div
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    variants={textVariants}
                    className="absolute text-white z-10 w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-black/60 to-transparent"
                  >
                    <motion.h1
                      variants={textVariants}
                      className="text-center font-allenoire text-[20px] w-[90%] sm:text-[30px] sm:px-14 lg:text-[58px] lg:max-w-[1100px]"
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                    variants={textVariants}
                    className="text-lg max-w-60 text-center">
                      {item.subtitle}
                    </motion.p>
                  </motion.div>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent w-full h-full">
                  </div> */}

                  {item.file.name.includes(".mp4") ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover z-3"
                    >
                      <source
                        src={`https://blm-cms.appii.space${item.file.url}`}
                      />
                    </video>
                  ) : (
                    <div className="relative w-full h-full z-3">
                     <img
                        src={`https://blm-cms.appii.space${item.file.url}`}
                        alt="hero-img"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        className="w-full h-full object-center"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default HeroCarousel;
