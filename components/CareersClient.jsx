import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

function CareersClient() {
  return (
    <div className=" w-full flex flex-col items-start justify-start lg:max-w-[1290px] gap-6 lg:gap-20 lg:my-20 font-poppins ">
      <div className="flex gap-10 flex-col justify-between md:flex-row  w-full">
        <div>
          <Title element="p">Meet Our HR Team</Title>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
            People First. Always.
          </p>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
            At the heart of BLM Society’s dynamic work culture is our Human
            Resources team—a group of dedicated professionals committed to
            shaping an inclusive, empowering, and inspiring workplace.
          </p>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
            Led by experienced leaders who value equality, transparency, and
            empathy, our HR department is focused on attracting the best talent
            and fostering a culture where every employee feels seen, supported,
            and motivated. We believe that diversity drives innovation, and that
            a workplace should reflect the society we strive to uplift.
          </p>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
            From onboarding to career development, from performance support to
            employee wellness, our HR team is with you every step of the way.
            Their mission is simple: to help every team member grow with
            dignity, purpose, and pride.
          </p>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
            Get to know the people behind BLM’s employee-first philosophy—and
            discover how they’re helping shape not just a better organization,
            but a brighter future for all.
          </p>
          <p className="text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7">
          As a dedicated HR professional with over 14 years of experience in teaching HR principles and implementing effective HR strategies, N Arunagiri is committed to fostering a positive and impactful workplace. His leadership style is rooted in empowerment, inclusion, and continuous improvement, making him a trusted mentor and resource for both students and professionals.
          </p>
        </div>
        <div className=" w-[200px] h-[300px] lg:w-[450px] lg:h-[620px] bg-slate-50">
          <div className="relative h-[85%]">
            <Image
              // priority={true}
              src={"/assets/images/blmhr.jpeg"}
              alt="blm-hr-image"
              fill
              className="w-full object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <Title icon={false} className="md:text-lg">
            N ARUNAGIRI
            </Title>
            <p className="text-sm text-para_color mt-1 ">
            HR HEAD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersClient;
