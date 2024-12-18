'use client'

import Image from "next/image";
import { GrStatusGood } from "react-icons/gr";
import { BsDownload } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { useRef, useState } from "react";

const DownloadAndSubmit = () => {
  const [ fileName, setFileName ] = useState("")
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // file handling logic
      setFileName(file.name)
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };


  return (
    <>
      <main className="w-full">
        <div>
          <h1 className="font-poppins text-black text-xl">
            Download Application Form for Admission as a Member
          </h1>
          <p className="font-poppins text-sm text-para_color mt-2">
            It&apos;s Easy with 3 Simple Steps
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-8">
          <div className="flex flex-col items-start justify-end w-full bg-[#F6F6F6] h-48 sm:h-40 lg:h-48 p-6 gap-3 relative">
            <GrStatusGood className="text-2xl lg:text-2xl sm:text-xl" />
            <h1 className="font-poppins text-black text-md lg:text-base sm:text-xs">
              Click Submit
            </h1>
            <button className="font-poppins bg-primary_color text-white text-base lg:text-base sm:text-xs px-4 py-2">
              Submit
            </button>

            <div className="absolute top-0 right-0 rotate-90 w-28 h-28">
              <Image
                src={"/assets/icons/pattern.svg"}
                alt="paattern"
                fill
                quality={85}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-end w-full bg-[#F6F6F6] h-48 sm:h-40 lg:h-48 p-6 gap-3 relative">
            <BsDownload className="text-2xl sm:text-xl lg:text-2xl" />
            <h1 className="font-poppins text-black text-md sm:text-xs lg:text-base w-2/3">
              Download Your Membership Form
            </h1>
            <a href="/assets/files/pdf-test.pdf" download={"form.pdf"}>
              <button className="font-poppins bg-primary_color text-white text-base sm:text-xs lg:text-base px-4 py-2">
                Download
              </button>
            </a>

            <div className="absolute top-0 right-0 rotate-90 w-28 h-28">
              <Image
                src={"/assets/icons/pattern.svg"}
                alt="paattern"
                fill
                quality={85}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-end w-full bg-[#F6F6F6] h-48 sm:h-40 lg:h-48 p-6 gap-3 relative">
            <BsUpload className="text-2xl sm:text-xl lg:text-2xl" />
            <h1 className="font-poppins text-black text-md sm:text-xs lg:text-base w-2/3">
              Fill in the details and upload here.
            </h1>
            <div className="relative flex gap-2 items-center justify-center">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileSelect}
              />
              <button
                onClick={triggerFileInput}
                className="font-poppins bg-primary_color text-white text-base sm:text-xs lg:text-base px-4 py-2"
              >
                Choose File
              </button>
              {
                fileName &&
                <p className="text-ellipsis overflow-hidden max-w-[120px] whitespace-nowrap">{fileName}</p>
              }
            </div>

            <div className="absolute top-0 right-0 rotate-90 w-28 h-28">
              <Image
                src={"/assets/icons/pattern.svg"}
                alt="paattern"
                fill
                quality={85}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>

      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="font-allenoire text-xl lg:text-2xl">
            Eligibility Criteria to Become a Member
          </h1>
          <p className="font-poppins text-sm text-para_color lg:text-base">
            Any person who resides within the area of operation of the society,
            who genuinely needs the services provided by the society, and whose
            interests do not conflict with the interests of the society No
            person shall be admitted as a member of a multi-State cooperative
            society except the following, namely:
          </p>
          <div className="w-full ml-4 flex flex-col sm:flex-row sm:gap-8 gap-2 lg:gap-12 lg:mt-8">
            <ul className="list-disc font-poppins text-sm w-10/12 lg:w-7/12 flex flex-col gap-2 lg:text-base">
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
            </ul>
            <ul className="list-disc font-poppins text-sm w-10/12 lg:w-7/12 flex flex-col gap-2 lg:text-base">
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
              <li>
                An individual competent to contract under Section 11 of the
                Indian Contract Act, 1872;
              </li>
            </ul>
          </div>
        </div>
      </main>

      <main className="w-full mt-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="font-allenoire text-xl lg:text-2xl">Application</h1>
          <p className="font-poppins text-sm text-para_color lg:text-base">
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
          <div className="w-full flex flex-col gap-4 sm:flex-row mt-7">
            <div className="bg-[#F0F0F0] p-3 lg:p-6">
              <h1 className="font-allenoire text-xl lg:text-2xl">
                Cessation of Membership
              </h1>
              <p className="font-poppins text-sm text-para_color lg:text-base">
                The Membership Of The Cooperative Society May Cease In Case Of:
              </p>
              <ol className="list-decimal font-poppins text-sm ml-3 mt-3 lg:w-7/12">
                <li>
                  Resignation of a member duly approved by the board or death of
                  the member
                </li>
                <li>Cancellation of registration with the member society</li>
                <li>Cancellation of registration with the member society</li>
              </ol>
            </div>

            <div className="bg-[#F0F0F0] p-3 lg:p-6">
              <h1 className="font-allenoire text-xl lg:text-2xl">
                Cessation of Membership
              </h1>
              <p className="font-poppins text-sm text-para_color lg:text-base">
                The Membership Of The Cooperative Society May Cease In Case Of:
              </p>
              <ol className="list-decimal font-poppins text-sm ml-3 mt-3 lg:w-7/12">
                <li>
                  Resignation of a member duly approved by the board or death of
                  the member
                </li>
                <li>Cancellation of registration with the member society</li>
                <li>Cancellation of registration with the member society</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DownloadAndSubmit;
