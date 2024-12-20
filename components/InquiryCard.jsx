'use client'

import Image from "next/image"
import { useState } from "react"
import Button from "./ui/Button"


const InquiryCard = () => {

    const [ inquiry, setInquiry ] = useState({
        phone : "",
        service : ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInquiry((prev)=>({
            ...prev,
            [name] : value
        }))

    }

  return (
    <>
      <div className="relative w-full bg-primary_color h-[222px] lg:h-[300px] p-[15px] font-poppins text-white">
        <div className="relative overflow-hidden w-full h-full flex flex-col justify-center items-center gap-3">

          <i className="bg-primary_color z-[10] border border-accent_color absolute p-[15px] sm:p-[25px] lg:p-[35px] rounded-full top-[-8px] sm:top-[-13px] right-[-8px] sm:right-[-13px] lg:top-[-13px] lg:right-[-13px]"></i>
          <i className="bg-primary_color z-[10] border border-accent_color absolute p-[15px] sm:p-[25px] lg:p-[35px] rounded-full top-[-8px] sm:top-[-13px] left-[-8px] sm:left-[-13px] lg:top-[-13px] lg:left-[-13px]"></i>
          <i className="bg-primary_color z-[10] border border-accent_color absolute p-[15px] sm:p-[25px] lg:p-[35px] rounded-full bottom-[-8px] sm:bottom-[-13px] right-[-8px] sm:right-[-13px] lg:bottom-[-13px] lg:right-[-13px]"></i>
          <i className="bg-primary_color z-[10] border border-accent_color absolute p-[15px] sm:p-[25px] lg:p-[35px] rounded-full bottom-[-8px] sm:bottom-[-13px] left-[-8px] sm:left-[-13px] lg:bottom-[-13px] lg:left-[-13px]"></i>


          <div className="absolute top-0 left-0 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]">
            <Image
            src={" /assets/icons/pattern.svg"}
            alt="Ui Pattern"
            fill
            priority={true}
            className="object-contain w-full object-center"/>
          </div>

          <div className="absolute top-0 right-0 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]">
            <Image
            src={" /assets/icons/pattern.svg"}
            alt="Ui Pattern"
            fill
            priority={true}
            className="object-contain w-full object-center scale-x-[-1]"/>
          </div>

          <div className="relative z-[1] border border-accent_color w-full h-full flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col items-center justify-center w-[60%] sm:w-full">
              <h1 className="font-allenoire text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                Do you have any questions?
              </h1>
              <p className="text-center text-[10px] lg:text-[16px] font-[300]">
                We will provide detailed information about our services, types
                of work, and top projects.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
              <input
                type="text"
                name="phone"
                placeholder="Enter Mobile Number"
                onChange={handleChange}
                value={inquiry.phone}
                className="w-[250px] h-[33px] lg:h-[50px] bg-transparent border border-white placeholder:text-white placeholder:font-[300] px-3 text-[12px] placeholder:text-[12px]"
              />
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="service"
                  placeholder="Select Service"
                  onChange={handleChange}
                  value={inquiry.service}
                  className="w-[250px] lg:w-[500px] h-[33px] lg:h-[50px] bg-transparent border border-white placeholder:text-white placeholder:font-[300] px-3 text-[12px]  placeholder:text-[12px] z-[1]"
                />
                <Button
                  textColor="black"
                  bgColor="#ca943a"
                  paddingX="6px"
                  paddingY="6px"
                  fontSize="10px"
                  className="absolute right-1 lg:right-3 text-[8px] z-[4]"
                >
                  SEND REQUEST
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InquiryCard