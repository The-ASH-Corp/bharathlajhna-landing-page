import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

function CareerForm() {
  return (
    <div >
        <Image
            alt="BLM"
            src="/assets/images/image84.png"
            width={100}
            height={100}
            priority={true}
            sizes="100vw"
            quality={85}
            className="w-full object-cover object-center"
        />

        <div className='my-2'>
            <Title element='p' icon={false}>
            Explore Exciting Career Opportunities with Us.
            </Title>
            <p>
            Are you passionate about making a difference? Do you thrive in a dynamic and collaborative environment? Join our exceptional team and embark on a rewarding journey that combines innovation, growth, and personal development.
            </p>
        </div>
        <div>

        </div>
    </div>
  )
}

export default CareerForm