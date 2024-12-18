'use client'

import Button from "./Button"
import { MdLocationOn } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

const ProjectCard = ({ title,image,place,squareFeet }) => {
  return (
    <>
        <div className="relative m-auto w-[200px] sm:w-[340px] lg:w-[355px] h-[240px] sm:h-[410px] lg:h-[585px] flex flex-col items-start justify-end p-[12px] lg:p-[32px] bg-slate-300 bg-no-repeat bg-cover bg-center"
        style={{
            backgroundImage:`url('${ image }')`,
        }}>
            <h1 className="z-10 font-allenoire text-[14px] sm:text-[21px] lg:text-[32px] text-white">{ title }</h1>
            <div className="mb-2 mt-1 z-10">
                <p className="flex gap-[3px] text-[10px] sm:text-[11px] lg:text-[16px] font-poppins items-center justify-center text-[#828282]"><MdLocationOn size={ 12 }/> { place } <i className="w-[1px] h-[10px] bg-[#828282]"></i> <FaBuilding size={ 12 }/> { squareFeet } </p>
            </div>
            <Button
            width="100%"
            height="40px"
            bgColor="white"
            textColor="black"
            className="z-10 sm:text-[12px] lg:text-[16px]">
                See More
            </Button>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>
        </div>
    </>
  )
}

export default ProjectCard