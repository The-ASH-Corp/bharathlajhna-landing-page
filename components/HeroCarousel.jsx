"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Video = ({ src, poster }) => {
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      preload="auto"
      poster={poster}
      className="w-full h-full object-cover"
      aria-label="Hero Video"
    >
      <source src={src} />
    </video>
  );
};

const HeroCarousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const renderMedia = (item) => {
    if (item.file.name.includes(".mp4")) {
      return (
        <Video
          src={`https://blm-cms.appii.space${item.file.url}`}
          poster={`https://blm-cms.appii.space${item.file.url}?placeholder=true`}
        />
      );
    }

    return (
      <Image
        src={`https://blm-cms.appii.space${item.file.url}`}
        alt={item.title || "Hero Image"}
        fill
        className="object-cover"
        priority={true}
      />
    );
  };

  return (
    <main className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        className="absolute w-full h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Overlay Text */}
              <motion.div
                initial="hidden"
                animate={currentSlide === index ? "visible" : "hidden"}
                variants={textVariants}
                className="absolute z-10 w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-t from-black/60 to-transparent"
              >
                <motion.h1
                  variants={textVariants}
                  className="text-center font-allenoire text-[20px] sm:text-[30px] lg:text-[58px] w-[90%] sm:px-14 lg:max-w-[1100px]"
                >
                  {item.title}
                </motion.h1>
                {item.subtitle && (
                  <motion.p
                    variants={textVariants}
                    className="text-lg max-w-60 text-center"
                  >
                    {item.subtitle}
                  </motion.p>
                )}
              </motion.div>
              {/* Media (Image/Video) */}
              {renderMedia(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default HeroCarousel;
