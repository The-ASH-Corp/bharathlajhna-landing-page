'use client'

import DownloadAndSubmit from "@/components/DownloadAndSubmit";
import FillOnline from "@/components/FillOnline";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";



const Membership = () => {
  const [ tab, setTab ] = useState("downloadAndSubmit")

  const eligibilityCrieterias = [
    "An individual competent to contract under Section 11 of the Indian Contract Act, 1872;",
    "Any multi-State co-operative society or any co-operative society (applicable in the case of federal and national societies)",
    "The Central Government;",
    "A State Government;",
    "The National Co-operative Development Corporation, established under the National Cooperative Development Corporation Act, 1962;",
    "Any other corporation owned or controlled by the Government",
    "Any Government company as defined in Section 617 of the Companies Act, 1956;",
    "Such class or classes of persons or associations of persons may be permitted by the Central Registrar, having regard to the nature and activities of a multi-State cooperative society."
  ]

  const ceasationPoints = [
    "Resignation of a member duly approved by the board or death of the member",
    "Cancellation of registration with the member society",
    "Transfer all the shares to another member of the society.",
    "Expulsion by the general body",
    "Incurring any of the disqualifications of membership."
  ]

  const nominalAssocoationMemberPoints = {
    subTitle:"An Applicant Will Be Enrolled As a regular member upon fulfilling the following conditions:",
    description:"Provided that such members will not be entitled to subscribe to the share capital of the society. They will not be allowed to have any interest in the management of the society, including the right to vote, contest elections as directors of the board, or participate in the general body meetings of the society."
  }


  return (
    <>
     

     <main className="relative w-full h-[100vh]">
  {/* Desktop Image */}
  <Image
    alt="Membership Hero Desktop"
    src="/assets/images/memberbanner.jpg"
    fill
    priority
    sizes="100vw"
    quality={85}
    className="hidden sm:block w-full absolute top-0 left-0 object-cover object-center"
  />

  {/* Mobile Image */}
  <Image
    alt="Membership Hero Mobile"
    src="/assets/images/mob_2.jpg" // <- Add a mobile-optimized image
    fill
    priority
    sizes="100vw"
    quality={85}
    className="block sm:hidden w-full absolute top-0 left-0 object-cover object-center"
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
        {/* <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
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
        </section> */}

        <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
          {tab === "downloadAndSubmit" && <DownloadAndSubmit />}
          {tab === "fillOnline" && <FillOnline />}
        </section>

<section className="px-7 sm:px-12 max-w-[1400px]">
      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <p className="font-allenoire text-xl lg:text-2xl">
            Eligibility Criteria to Become a Member
          </p>
          <p className="font-poppins text-sm text-para_color lg:text-base">
            Any person who resides within the area of operation of the society,
            who genuinely needs the services provided by the society, and whose
            interests do not conflict with the interests of the society No
            person shall be admitted as a member of a multi-State cooperative
            society except the following, namely:
          </p>
          <div className="w-full ml-4 flex flex-col sm:flex-row sm:gap-8 gap-2 lg:gap-12 lg:mt-8">
            <ul className="list-disc font-poppins text-sm lg:text-base grid md:grid-cols-2 gap-4 w-full ">
             {
              eligibilityCrieterias.map((it,i) => (
                <li key={i} className="pr-4" >
                  {it}
                </li>
              ))
             }
            </ul>
          </div>
        </div>
      </main>

      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <p className="font-allenoire text-xl lg:text-2xl">Application</p>
          <p className="font-poppins text-sm text-para_color lg:text-base mb-2">
            The application for membership of the society shall be submitted by
            the applicant to the Manager of the society in the prescribed form,
            accompanied by the admission fee of Rs.115 as per the bylaws, and at
            least one fully paid share shall be subscribed by the applicant at
            the time of submission of the application. The applications for
            membership in the society found complete in all respects shall be
            disposed of within a period of four months from the date of receipt
            of the application by the society. The same shall be communicated to
            the applicant within fifteen days of the decision by registered
            mail.
          </p>
          <p className="font-poppins text-sm text-para_color lg:text-base">
          A member may, with the approval of the Board of Directors, transfer its shares to another member of the multi-State cooperative society. A fee, as per the Bye-laws, shall be payable to the society for each such transfer.
          </p>

          <div className="w-full grid md:grid-cols-2 gap-3 mt-7">
            <div className="bg-[#F0F0F0] p-3 lg:p-6">
              <p className="font-allenoire text-xl lg:text-2xl mb-2">
                Cessation of Membership
              </p>
              <p className="font-poppins text-sm text-para_color lg:text-base">
                The Membership Of The Cooperative Society May Cease In Case Of:
              </p>
              <ol className="list-decimal font-poppins text-sm lg:text-base ml-3 mt-3  leading-8">
               {
                ceasationPoints.map(it => (
                  <li key={it}>
                    {it}
                  </li>
                ))
               }
              </ol>
            </div>

            <div className="bg-[#F0F0F0] p-3 lg:p-6 ">
              <p className="font-allenoire text-xl lg:text-2xl mb-2">
              Nominal/Associate Members
              </p>
              <p className="font-poppins text-sm text-para_color lg:text-base mb-4">
                {nominalAssocoationMemberPoints.subTitle}
              </p>
             <p className="font-poppins text-sm text-para_color lg:text-base leading-8">
              {nominalAssocoationMemberPoints.description}
             </p>
            </div>
          </div>
        </div>
      </main>
</section>
      </main>

  
    </>
  );
}

export default Membership