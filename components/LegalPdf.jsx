"use client";
import Image from "next/image";
import React, { useState } from "react";
import Title from "./ui/Title";
import RenderInput from "./ui/RenderInput";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Swal from "sweetalert2";
import { submitResume } from "@/app/actions";

const { Dragger } = Upload;

function LegalPdf() {
  return (
    <div>
      <Image
        alt="BLM"
        src="/assets/images/legal2.jpg"
        width={100}
        height={100}
        priority={true}
        sizes="100vw"
        quality={85}
        className="w-full object-cover object-center"
      />

     <div className="mt-10">
  <Title icon={false}>Details of FIRs Dismissed:</Title>

  {[
    {
      station: "Nedumkandam Police Station",
      crime: "Crime No. 233/2023, Crl.MC No. 2775/2023",
      file: "/assets/files/nedumkandam_fir_blm.pdf",
    },
    {
      station: "Kanjar Police Station",
      crime: "Crime No. 183/2023, Crl.MC No. 4197/2024",
      file: "/assets/files/kanjar_fir_blmm.pdf",
    },
    {
      station: "Adimaly Police Station",
      crime: "Crime No. 305/2023, Crl.MC No. 4208/2024",
      file: "/assets/files/blm_adimali_fir.pdf",
    },
    {
      station: "Thodupuzha Police Station",
      crime: "Crime No. 382/2023, Crl.MC No. 2808/2023",
      file: "/assets/files/thodupuzha_fir_blmm.pdf",
    },
    {
      station: "Nadakkavu Police Station, Kozhikode",
      crime: "Crime No. 1040/2024, Crl.MC No. 10162/2024",
      file: "/assets/files/blm_nadakkavu_fir.pdf",
    },
  ].map((item, index) => (
    <ul className="text-lg my-4" key={index}>
      <li className="flex flex-wrap items-center gap-3">
        <span className="flex-1 text-sm md:text-lg font-poppins">
          {item.station} ({item.crime}) 
        </span>
        <a
          className="bg-red-800 text-white px-3 py-1 rounded-md"
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
        >
          View PDF
        </a>
      </li>
    </ul>
  ))}
</div>

    </div>
  );
}

export default LegalPdf;
