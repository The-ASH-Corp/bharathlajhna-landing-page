// 'use client'

// import Image from "next/image";

// const TestimonialCard = ({
//   bgColor,
//   clientReview,
//   clientName,
//   clientDesignation,
//   profileImg
// }) => {
//   return (
//     <>
//       <div
//         className="relative w-[230px] sm:w-[306px] lg:w-[350px] h-[250px] sm:h-[305px] lg:h-[350px] flex flex-col  justify-center p-5 sm:p-18 m-auto "
//         style={{
//           backgroundColor: bgColor ,
//         }}
//       >
//         <div className="absolute top-[10px] lg:top-[40px] left-[20px] lg:left-[50px] w-[74px] lg:w-[130px] h-[74px] lg:h-[130px] z-0">
//           <Image
//           priority={true}
//             src={"/assets/icons/left-quets.svg"}
//             alt="left-quote"
//             fill
//             className="w-full object-contain object-center"
//           />
//         </div>
//         <div className="w-[200px] sm:w-[230px] lg:w-[310px] flex flex-col items-end justify-start gap-4 lg:gap-7 z-[5]  ">
//           <p className="font-poppins text-start  text-[10px] sm:text-[12px] lg:text-[15px]">{clientReview}</p>
//           <div className="flex items-center justify-center gap-2 ">
//             <div className="relative w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] rounded-full overflow-hidden">
//               <Image
//               priority={true}
//                 src={ profileImg }
//                 alt="Profile-picture"
//                 fill
//                 className="w-full object-cover object-center"
//               />
//             </div>
//             <div>
//               <p className="text-[12px] lg:text-[14px] font-poppins font-[600] text-black">
//                 {clientName}
//               </p>
//               <p className="text-[10px] lg:text-[12px] font-poppins text-[#717171]">
//                 {clientDesignation}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TestimonialCard





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
    <div
      className="relative w-[230px] sm:w-[306px] lg:w-[350px] h-[250px] sm:h-[305px] lg:h-[350px] flex flex-col p-6 sm:p-8 m-auto"
      style={{ backgroundColor: bgColor }}
    >
      {/* Quote Icon */}
      <div className="absolute top-[10px] lg:top-[40px] left-[20px] lg:left-[50px] w-[74px] lg:w-[130px] h-[74px] lg:h-[130px] z-0">
        <Image
          priority={true}
          src={"/assets/icons/left-quets.svg"}
          alt="left-quote"
          fill
          className="w-full object-contain object-center"
        />
      </div>

      {/* Spacer for vertical centering */}
      <div className="flex-grow flex items-center justify-start z-[5]">
        <p className="font-poppins text-start text-[10px] sm:text-[12px] lg:text-[14px]">
          {clientReview}
        </p>
      </div>

      {/* Client Info - always at bottom */}
      <div className="flex items-center justify-end gap-2 z-[5] mt-auto">
        <div className="relative w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] rounded-full overflow-hidden">
          <Image
            priority={true}
            src={profileImg}
            alt="Profile-picture"
            fill
            className="w-full object-cover object-center"
          />
        </div>
        <div>
          <p className="text-[12px] lg:text-[14px] font-poppins font-[600] text-black">
            {clientName}
          </p>
          <p className="text-[10px] lg:text-[12px] font-poppins text-[#717171]">
            {clientDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
