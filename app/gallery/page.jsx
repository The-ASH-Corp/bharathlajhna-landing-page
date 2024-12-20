import GalleryTabs from "@/components/GalleryTabs";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";
import { Suspense } from "react";

const Gallery = () => {

  return (
    <Suspense>
    
      <main className="relative w-full h-[80vh]">
        <Image
          alt="Gallery hero"
          src={"/assets/images/gallery/gallery-img-1.png"}
          fill
          priority={true}
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col items-center justify-center w-full mb-10 lg:mb-20">
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px]">
          <Title>A Visual Journey</Title>
          <p className="font-poppins text-sm text-para_color mt-2">
            &quot;Browse through our curated gallery of moments and milestones.
            Discover the essence of what we do.&quot;
          </p>
        </section>
        <SectionDivision />

<GalleryTabs/>

      </main>
     
    </Suspense>
  );
};

export default Gallery;
