import AboutMain from "@/components/AboutMain";
import Image from "next/image";

export const metadata = {
  title: "BLM - About Us",
};

const AboutUs = () => {
  return (
    <>
     <div className="relative w-full h-[80vh]">
        <Image
          alt="BLM"
          src="/assets/images/about_banner.jpg"
          fill
          priority={true}
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </div>
      <AboutMain />
      
    </>
  );
};

export default AboutUs;
