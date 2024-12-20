'use client'

import Image from "next/image"

const AboutCard = ({title, description, icon}) => {
  return (
    <>
      <main className="relative w-full sm:w-[300px] md:w-2/5 xl:w-full h-[200px] p-6 bg-[#95959517]">
        <Image
          className="absolute top-0 right-0 mb-4"
          src={"/assets/icons/pattern-footer.svg"}
          alt="about icon"
          width={100}
          height={100}
          priority={true}
        />
        <Image
          className="mb-4"
          src={icon}
          alt="about icon"
          width={40}
          priority={true}
          height={40}
        />
        <h1 className="font-allenoire text-base mb-1">{title}</h1>
        <p className="font-poppins text-para_color">{description}</p>
      </main>
    </>
  );
}

export default AboutCard