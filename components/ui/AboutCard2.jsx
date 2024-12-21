'use client'

import Image from "next/image"


const AboutCard2 = ({icon,title,description,bgColor,textColor}) => {
  return (
    <>
        <div className="relative w-full h-56 xl:h-64 flex flex-col items-start justify-end p-4 " style={{backgroundColor:bgColor}}>
            <Image
            className="absolute top-0 right-0 z-0 xl:w-[180px] xl:h-[180px]"
            src={icon}
            alt="icon"
            priority={true}
            width={160}
            height={160}/>
            <p className="font-allenoire text-lg z-10 xl:text-2xl xl:mb-3" style={{color:textColor}}>{title}</p>
            <p className="font-poppins text-para_color text-sm sm:text-xs z-10 xl:text-sm">{description}</p>
        </div>
    </>
  )
}

export default AboutCard2