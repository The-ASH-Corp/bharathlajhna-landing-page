import CareerForm from "@/components/CareerForm";
import CareersClient from "@/components/CareersClient";
import LegalPdf from "@/components/LegalPdf";
import LegalSection from "@/components/LegalSection";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React, { Suspense } from "react";

// export const metadata = {
//   title: "BLM - Careers",
// };

export default function Careers() {
  return (
    <Suspense>
      <main className="relative w-full  h-[80vh]">
        <Image
          alt="BLM"
          src="/assets/images/legal3.avif"
          fill
          priority={true}
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col items-center justify-center w-full mb-10 lg:mb-20">
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
          <Title>Legal Documents</Title>
           
          <p className="font-poppins text-sm  lg:text-[17px] leading-6 lg:leading-7 text-para_color mt-2">
           This section provides access to important legal and compliance-related documents of Bharath Lajhna Multi State Housing Cooperative Society Ltd. (BLM). As a registered Multi-State Housing Cooperative Society under the Ministry of Cooperation, Government of India, we are committed to transparency, accountability, and regulatory compliance.
          </p>
          
        </section>

        <SectionDivision />

        <section className="flex flex-col items-start justify-start w-full px-6 xl:max-w-[1290px] ">
          <LegalSection/>
         </section>

        <SectionDivision />

        <section className="mt-7 p-6 font-poppins">
          <LegalPdf/>
        </section>
      </main>
    </Suspense>
  );
}
