import CareerForm from "@/components/CareerForm";
import CareersClient from "@/components/CareersClient";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React, { Suspense } from "react";

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

      <main className="flex flex-col items-center justify-center w-full mb-10 lg:mb-20">
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
          <Title>Careers at BLM</Title>
          <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
            Build Your Future. Make a Difference. Grow With Us.{" "}
          </p>
          <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
            At BLM Society, we believe that impactful change begins with
            passionate people. We’re not just building a team—we’re nurturing a
            community of visionaries, problem-solvers, and leaders who are
            driven by purpose.{" "}
          </p>
          <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
            Whether you’re a seasoned professional looking to elevate your
            career or a fresh talent ready to take your first step, BLM offers
            an environment where innovation is encouraged, growth is continuous,
            and contributions are celebrated. We provide the tools, mentorship,
            and opportunities needed to help you thrive—personally and
            professionally.
          </p>
          <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
            Join us, and be part of a mission that goes beyond work. At BLM,
            every role matters, every idea counts, and every person can make a
            difference.
          </p>
          <p className="font-poppins text-sm mdmd:text-[16px] lg:text-[20px] leading-6 lg:leading-7 text-para_color mt-2">
            Your journey to a fulfilling career starts here.
          </p>
        </section>

        <SectionDivision />

        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
          <CareersClient />
        </section>

        <SectionDivision />

        <section className="mt-7 p-6 font-poppins">
          <CareerForm />
        </section>
      </main>
    </Suspense>
  );
}
