import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";
import InquiryCard from "@/components/InquiryCard";
import BranchClient from "@/components/BranchClient";

export const metadata = {
  title: "BLM - Branch",
};

const Branch = () => {


  return (
    <>
      

      <main className="relative w-full h-[80vh]">
        <Image
          alt="BLM"
          src="/assets/images/branch-hero.png"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col items-center justify-center w-full mb-10 lg:mb-20">
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
          <Title>Find a Branch Near You</Title>
          <p className="font-poppins text-sm text-para_color mt-2">
            Our branches span across major cities and regions, providing easy
            access to our services. Visit us at a location near you for
            personalized support. We&apos;re here to assist you wherever you are
          </p>
        </section>

        <SectionDivision />
        
      <BranchClient />


        <SectionDivision />
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] mt-12">
          <InquiryCard />
        </section>
      </main>
     
    </>
  );
};

export default Branch;
