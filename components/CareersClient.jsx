import React from 'react'
import Title from './ui/Title'
import Image from 'next/image'

function CareersClient() {
  return (
    <div className=' w-full flex flex-col items-start justify-start lg:max-w-[1290px] gap-6 lg:gap-20 lg:my-20 font-poppins '>
    
    <div className='flex gap-10 flex-col justify-between md:flex-row  w-full'>
        <div>
            <Title element='p'>
                Meet Our HR
            </Title>
            <p className='text-sm md:text-[16px] lg:text-[20px]  text-para_color mt-2 max-w-[700px] leading-6 lg:leading-7'>
            At BLM, we are committed to fostering a diverse, inclusive, and empowering work environment. Our Human Resources (HR) manager plays a vital role in ensuring that every employee feels valued and supported in their professional journey. Led by a team of seasoned professionals, our department is dedicated to recruiting top talent and nurturing a culture that promotes equality, justice, and opportunity for all. We strive to create an environment where individual voices are heard and everyone can thrive. Get to know our HR team and discover the passionate individuals working behind the scenes to make BLM an organisation that stands for change and progress. Together, we are building a brighter future for all.
            </p>
        </div>
        <div className=' w-[200px] h-[300px] lg:w-[350px] lg:h-[520px] bg-slate-50'>
            <div className='relative h-[85%]'>
            <Image 
            // priority={true}
            src={"/assets/images/hr.png"}
            alt="text decoration pattern"
            fill
            className='w-full object-contain'
            />
            </div>
            <div className='text-center mt-2'>
                <Title icon={false} className="md:text-lg">
                Mr Padhmaraj
                </Title>
                <p  className='text-sm text-para_color mt-1 '>
                    Senior HR Manager at BLM 
                </p>
            </div>
        </div>



    </div>
    </div>

  )
}

export default CareersClient