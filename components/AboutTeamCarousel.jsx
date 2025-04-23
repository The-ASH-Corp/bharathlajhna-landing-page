// "use client";

// import { useEffect, useState } from "react";
// import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "../public/styles/customSwiper.css";
// import AboutTeamCard from "./ui/AboutTeamCard";

// const AboutTeamCarousel = ({ teamData }) => {
//   const [domLoaded, setDomLoaded] = useState(false);
//   const [ slidesPerView, setSlidesPerView ] = useState(0);

//   useEffect(() => {
//     setDomLoaded(true);

//     const slideCount = teamData?.length || 0;
//     if (slideCount <= 1) setSlidesPerView(1);
//     else if (slideCount === 2) setSlidesPerView(2);
//     else setSlidesPerView(3);
//   }, [teamData]);

//   if (!domLoaded) {
//     return null;
//   }

//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={slidesPerView}
//         loop={true}
//         autoplay={{
//           delay:2500,
//           disableOnInteraction: true,
//         }}
//         navigation={{
//           prevEl: ".custom-prev-button",
//           nextEl: ".custom-next-button",
//         }}
//         pagination={{
//           clickable: true,
//           el: ".swiper-pagination",
//           type: "bullets",
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: Math.min(2, teamData?.length || 1),
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: Math.min(3, teamData?.length || 1),
//             spaceBetween: 10,
//           },
//         }}
//       >
//         {teamData.map((data, index) => (
//           <SwiperSlide key={index}>
//             <AboutTeamCard
//               image={data.image}
//               title={data.title}
//               designation={data.designation}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="swiper-pagination w-auto hidden sm:inline-block absolute  left-0 bottom-[-30px]"></div>
//     </div>
//   );
// };

// export default AboutTeamCarousel;




"use client";

import { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../public/styles/customSwiper.css";
import AboutTeamCard from "./ui/AboutTeamCard";

const AboutTeamCarousel = ({ teamData }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded || !teamData || teamData.length === 0) return null;

  const [firstSlide, ...carouselSlides] = teamData;

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-start justify-center">
      {/* Static Card */}
      <div className="w-full md:w-1/3">
        <AboutTeamCard
          image={firstSlide.image}
          title={firstSlide.title}
          designation={firstSlide.designation}
        />
      </div>

      {/* Swiper Carousel */}
      <div className="w-full md:w-2/3 relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {carouselSlides.map((data, index) => (
            <SwiperSlide key={index}>
              <AboutTeamCard
                image={data.image}
                title={data.title}
                designation={data.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination w-auto hidden sm:inline-block absolute left-0 bottom-[-30px]"></div>
      </div>
    </div>
  );
};

export default AboutTeamCarousel;
