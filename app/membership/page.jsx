'use client'

import DownloadAndSubmit from "@/components/DownloadAndSubmit";
import FillOnline from "@/components/FillOnline";
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image"
import { useState } from "react";



const Membership = () => {
  const [ tab, setTab ] = useState("downloadAndSubmit")


  return (
    <>
     

      <main className="relative w-full h-[80vh]">
        <Image
          alt="Membership hero"
          src={"/assets/images/loan-img.jpeg"}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col items-center justify-center w-full mb-10 lg:mb-20">
        <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
          <Title>Membership</Title>
          <p className="font-poppins text-sm text-para_color mt-2">
            &quot;Browse through our curated gallery of moments and milestones.
            Discover the essence of what we do.&quot;
          </p>
        </section>
        <SectionDivision />
        <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
          <div className="flex gap-4 w-full items-start justify-start">
            <button
              className={`font-poppins  ${
                tab === "downloadAndSubmit"
                  ? "text-black border-b-2 border-accent_color"
                  : "text-para_color"
              }`}
              onClick={() => setTab("downloadAndSubmit")}
            >
              Download and Submit
            </button>
            <button
              className={`font-poppins  ${
                tab === "fillOnline"
                  ? "text-black border-b-2 border-accent_color"
                  : "text-para_color"
              }`}
              onClick={() => setTab("fillOnline")}
            >
              Fill Online
            </button>
          </div>
        </section>

        <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
          {tab === "downloadAndSubmit" && <DownloadAndSubmit />}
          {tab === "fillOnline" && <FillOnline />}
        </section>
      </main>

  
    </>
  );
}

export default Membership