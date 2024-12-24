import CareerForm from '@/components/CareerForm';
import CareersClient from '@/components/CareersClient';
import SectionDivision from '@/components/ui/SectionDivision';
import Title from '@/components/ui/Title';
import Image from 'next/image';
import React, { Suspense } from 'react'

export const metadata = {
    title: "BLM - Careers",
  };
  

export default function Careers() {
  return (
    <Suspense>
         <main className="relative w-full h-[80vh]">
                <Image
                  alt="BLM"
                  src="/assets/images/careers-banner.jpg"
                  fill
                  priority={true}
                  sizes="100vw"
                  quality={85}
                  className="w-full absolute top-0 left-0 object-cover object-center"
                />
              </main>

              <main className='flex flex-col items-center justify-center w-full mb-10 lg:mb-20'>
              <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
                <Title>Careers</Title>
                <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
                At BLM, we believe that great achievements stem from the collaboration of talented, passionate individuals. We’re committed to fostering an environment where innovation thrives, ideas are valued, and careers are built. Whether you’re a seasoned professional or just starting out, you’ll find opportunities to grow, learn, and make a meaningful impact. Explore exciting roles and become a part of a team that’s dedicated to excellence and making a difference. Your journey with us starts here.
                </p>
              </section>

              <SectionDivision />

              <section  className='flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6'>
                <CareersClient />
              </section>

              <SectionDivision />

              <section className='mt-7 p-6 font-poppins'>
                <CareerForm />
              </section>
              </main>
    </Suspense>
  )
}
