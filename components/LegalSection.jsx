import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

function LegalSection() {
  return (
    <div className=" w-full rt lg:max-w-[1290px] gap-6 lg:gap-20 lg:my-7 font-poppins ">
      <div className="flex gap-10 flex-col justify-between md:flex-row  w-full">
        <div>
          <p className="text-sm  lg:text-[17px]  text-para_color mt-2 leading-6 lg:leading-7">
            The Honourable High Court of Kerala has dismissed the FIRs filed
            against Bharath Lajhna Multistate Housing Cooperative Society Ltd
            (BLM Society Ltd), confirming the Society’s integrity and lawful
            conduct.
          </p>

          <p className="text-sm  lg:text-[17px]  text-para_color   leading-6 lg:leading-7">
            FIRs were dismissed after the{" "}
            <strong>Kerala Police themselves requested dismissal</strong>,
            acknowledging the allegations were fabricated.The High Court confirmed the allegations were baseless and the FIRs
            were fabricated. BLM Society Ltd has an{" "}
            <strong>unblemished record of 21 years</strong> with over 1 million
            satisfied members.
          </p>
         
          
        </div>
      </div>
    </div>
  );
}

export default LegalSection;
