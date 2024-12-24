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
    </Suspense>
  )
}
