'use client'

import Image from "next/image";

const TestimonialCard = ({
  bgColor,
  clientReview,
  clientName,
  clientDesignation,
  profileImg
}) => {
  return (
    <>
      <div
        className="relative w-[230px] sm:w-[306px] lg:w-[350px] h-[200px] sm:h-[305px] lg:h-[400px] flex flex-col justify-end p-5 sm:p-12 m-auto"
        style={{
          backgroundColor: bgColor ,
        }}
      >
        <div className="absolute top-[10px] lg:top-[40px] left-[20px] lg:left-[50px] w-[74px] lg:w-[130px] h-[74px] lg:h-[130px] z-0">
          <Image
            src={"/assets/icons/left-quets.svg"}
            alt="left-quote"
            fill
            className="w-full object-contain object-center"
          />
        </div>
        <div className="w-[180px] sm:w-[230px] lg:w-[260px] flex flex-col items-start justify-end gap-4 lg:gap-7 z-[5]">
          <p className="font-poppins text-start text-[10px] sm:text-[12px] lg:text-[15px]">{clientReview}</p>
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] rounded-full overflow-hidden">
              <Image
                src={ profileImg }
                alt="Profile-picture"
                fill
                className="w-full object-cover object-center"
              />
            </div>
            <div>
              <h1 className="text-[12px] lg:text-[14px] font-poppins font-[600] text-black">
                {clientName}
              </h1>
              <p className="text-[10px] lg:text-[12px] font-poppins text-[#717171]">
                {clientDesignation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard