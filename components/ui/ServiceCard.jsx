'use client'

import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const ServiceCard = ({ title = "Title", image = "" }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className={`relative flex items-end justify-center w-[200px] sm:w-[331px] lg:w-[355px] h-[236px] sm:h-[401px] lg:h-[525px] bg-no-repeat bg-cover bg-center m-auto`}
      >
        <div className="mb-2 lg:mb-5 z-10">
          <p className="font-allenoire text-white text-[12px] sm:text-[21px] lg:text-[32px] text-center">
            {title}
          </p>
          <Link
            href={"/service"}
            className="flex items-center justify-center text-accent_color text-[10px] sm:text-[12px] lg:text-[16px] font-poppins"
          >
            Read More <RiArrowRightSLine />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </>
  );
};

export default ServiceCard;
