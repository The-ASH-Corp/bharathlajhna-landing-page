'use client'

import { submitMemberShipForm } from "@/app/actions";
import Image from "next/image";
import { useRef, useState } from "react";
import { BsDownload, BsUpload } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import Swal from 'sweetalert2';

const DownloadAndSubmit = () => {
  const [ file, setFile ] = useState("")
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // file handling logic
      setFile(file)
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    try {
      console.log(file);
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait while we process your submission.',
        icon: 'info',
        allowOutsideClick: false, // Prevent closing the modal on outside click
        showConfirmButton: false, // Hide the confirm button
        didOpen: () => {
          Swal.showLoading(); // Show loading spinner
        },
        customClass:{
          confirmButton:"swal-button-success",
          popup:"swal-container",
          
        }
      });

      await submitMemberShipForm({file})

        // Close the loading alert
      Swal.close();


      Swal.fire({
        title: 'Success!',
        text: 'Your membership form has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass:{
          confirmButton:"swal-button-success",
          popup:"swal-container",
          
        }
        
      });

      setFile("")
      
    } catch (error) {
      console.log({error});

       // Close the loading alert in case of an error
    Swal.close();

      Swal.fire({
        title: 'Error!',
        text: 'There was an issue submitting your form. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass:{
          confirmButton:"swal-button-success",
          popup:"swal-container",
          
        }
      });
    }
  }


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
            <h1 className="font-poppins text-black text-md lg:text-base sm:text-xs" >
              Click Submit
            </h1>
            <button className="font-poppins bg-primary_color text-white text-base lg:text-base sm:text-xs px-4 py-2" onClick={handleSubmit}>
              Submit
            </button>

            <div className="absolute top-0 right-0 rotate-90 w-28 h-28">
              <Image
                src={"/assets/icons/pattern.svg"}
                alt="paattern"
                fill
                quality={85}
                priority={true}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-end w-full bg-[#F6F6F6] h-48 sm:h-40 lg:h-48 p-6 gap-3 relative">
            <BsDownload className="text-2xl sm:text-xl lg:text-2xl" />
            <h1 className="font-poppins text-black text-md sm:text-xs lg:text-base w-2/3">
              Download Your Membership Form
            </h1>
            <a href="/assets/files/BLM-membership.pdf" download={"BLM-membership.pdf"}>
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
                priority={true}
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
                file &&
                <p className="text-ellipsis overflow-hidden max-w-[120px] whitespace-nowrap">{file.name}</p>
              }
            </div>

            <div className="absolute top-0 right-0 rotate-90 w-28 h-28">
              <Image
                src={"/assets/icons/pattern.svg"}
                alt="paattern"
                fill
                priority={true}
                quality={85}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default DownloadAndSubmit;
