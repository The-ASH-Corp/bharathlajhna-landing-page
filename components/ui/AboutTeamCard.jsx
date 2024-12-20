'use client'

import Image from "next/image"



const AboutTeamCard = ({image,title,designation}) => {
  return (
    <>
        <div className="flex flex-col gap-2">
            <div className="w-42 h-48 sm:h-96 relative overflow-hidden bg-slate-300"> 
            <Image
            className="w-full object-center object-cover"
            src={image}
            fill
            alt={title}
            priority={true}
            />
            </div>
            <h1 className="font-allenoire text-sm sm:text-base">
                {title}
            </h1>
            <p className="font-poppins text-xs text-accent_color">
                {designation}
            </p>
        </div>
    </>
  )
}

export default AboutTeamCard