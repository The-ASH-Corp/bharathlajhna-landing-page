'use client'

import React, { useEffect, useState } from 'react'
import { ImPhone } from 'react-icons/im'
import SectionDivision from './ui/SectionDivision'
import{IoLocationOutline} from 'react-icons/io5'
import Image from 'next/image'
import useStrapi from '@/hooks/useStrapi'
import { BRANCH_QUERY } from '@/constants/strapiQueries'


const BranchClient = () => {
        const [ activeTab, setActiveTab ] = useState("kerala")
        const [ keralaData, setKeralaData ] = useState([])
        const [ tamilData, setTamilData ] = useState([])
        const [ pondiData, setPondiData ] = useState([])
        const [ operationalHubs, setOperationalHubs ] = useState([])

    const { loading, error, data } = useStrapi("/api/branches-page", BRANCH_QUERY)

    console.log("branch data : ",data)
    

      useEffect(()=>{
        data?.data?.branchTab?.map((item) => {
          if (item.label === "Kerala") {
            item.officeCards.map((card) => {
              setKeralaData((prev) => [
                ...prev,
                {
                  district: card.district,
                  city: card.name,
                  address: card.address,
                  phone: card.contactNo,
                  location: card.location,
                },
              ]);
            });
          }

          if (item.label === "Tamilnadu") {
            item.officeCards.map((card) => {
              setTamilData((prev) => [
                ...prev,
                {
                  district: card.district,
                  city: card.name,
                  address: card.address,
                  phone: card.contactNo,
                  location: card.location,
                },
              ]);
            });
          }

          if (item.label === "Pondichery") {
            item.officeCards.map((card) => {
              setPondiData((prev) => [
                ...prev,
                {
                  district: card.district,
                  city: card.name,
                  address: card.address,
                  phone: card.contactNo,
                  location: card.location,
                },
              ]);
            });
          }
        });

        setOperationalHubs(data?.data?.operationalHubs);
      },[data])


  return (
    <>
      <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
      <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
        <main className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {operationalHubs?.map((data, index) => (
            <div
              key={index}
              className="w-full flex flex-col p-6 gap-5 relative"
            >
              <div>
                <h1 className="font-allenoire text-xl tracking-wider">
                  {data.name}
                </h1>
                <h2 className="font-poppins text-sm text-para_color">
                  {data.state}
                </h2>
              </div>
              <div>
                <h1 className="font-poppins text-sm font-semibold mb-1">
                  {data.district}
                </h1>
                <h2 className="font-poppins text-sm text-para_color max-w-[90%]">
                  {data.address}
                </h2>
              </div>
              <div className="w-full flex gap-2">
                <a
                  href={`tel:+91${data.contactNo}`}
                  className="flex items-center justify-center w-full text-sm font-poppins text-[#000000CC] bg-[#00664E14] p-2"
                >
                  <ImPhone className="mr-2" /> {data.contactNo}
                </a>
                <a
                  href={data.location}
                  target='_blank'
                  className="bg-primary_color text-white flex items-center justify-center p-2 px-3"
                >
                  <IoLocationOutline />
                </a>
              </div>

              <Image
                src={"/assets/icons/pattern-footer.svg"}
                alt="patterns"
                width={130}
                height={130}
                className="absolute top-0 right-0"
              />
            </div>
          ))}
        </main>
      </section>
        <div className="flex gap-4 w-full items-start justify-start">
          <button
            onClick={() => setActiveTab("kerala")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "kerala"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Kerala
          </button>
          <button
            onClick={() => setActiveTab("tamil")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "tamil"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Tamil Nadu
          </button>
          <button
            onClick={() => setActiveTab("pondi")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "pondi"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Pondicharry
          </button>
        </div>
      </section>

      <SectionDivision />
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-start justify-start w-full xl:max-w-[1290px] my-6 lg:my-10">
        {activeTab === "kerala" &&
          keralaData.map((branch, index) => (
            <div
              key={index}
              className="w-full flex flex-col p-6 gap-5 relative"
            >
              <div>
                <h1 className="font-poppins text-sm font-semibold">
                  {branch.district}
                </h1>
                <h2 className="font-poppins text-xs text-para_color mb-3">
                  {branch.city}
                </h2>
                <p className="font-poppins text-xs text-para_color max-w-[90%]">
                  {branch.address}
                </p>
              </div>
              <div className="w-full flex gap-2">
                <a
                  href={`tel:+91${branch.phone}`}
                  className="text-xs flex items-center justify-center w-full font-poppins text-[#000000CC] bg-[#00664E14] p-2"
                >
                  <ImPhone className="mr-2" /> {branch.phone}
                </a>
                <a
                  href={branch.location}
                  target="_blank"
                  className="bg-primary_color text-white flex items-center justify-center p-1 px-2"
                >
                  <IoLocationOutline />
                </a>
              </div>
            </div>
          ))}

        {activeTab === "tamil" &&
          tamilData.map((branch, index) => (
              <div
                key={index}
                className="w-full flex flex-col p-6 gap-5 relative"
              >
                <div>
                  <h1 className="font-poppins text-sm font-semibold">
                    {branch.district}
                  </h1>
                  <h2 className="font-poppins text-xs text-para_color mb-3">
                    {branch.city}
                  </h2>
                  <p className="font-poppins text-xs text-para_color max-w-[90%]">
                    {branch.address}
                  </p>
                </div>
                <div className="w-full flex gap-2">
                  <a
                    href={`tel:+91${branch.phone}`}
                    className="text-xs flex items-center justify-center w-full font-poppins text-[#000000CC] bg-[#00664E14] p-2"
                  >
                    <ImPhone className="mr-2" /> {branch.phone}
                  </a>
                  <a
                    href={branch.location}
                    target="_blank"
                    className="bg-primary_color text-white flex items-center justify-center p-1 px-2"
                  >
                    <IoLocationOutline />
                  </a>
                </div>
              </div>
            ))}

        {activeTab === "pondi" &&
          pondiData.map((branch, index) => (
              <div
                key={index}
                className="w-full flex flex-col p-6 gap-5 relative"
              >
                <div>
                  <h1 className="font-poppins text-sm font-semibold">
                    {branch.district}
                  </h1>
                  <h2 className="font-poppins text-xs text-para_color mb-3">
                    {branch.city}
                  </h2>
                  <p className="font-poppins text-xs text-para_color max-w-[90%]">
                    {branch.address}
                  </p>
                </div>
                <div className="w-full flex gap-2">
                  <a
                    href={`tel:+91${branch.phone}`}
                    className="text-xs flex items-center justify-center w-full font-poppins text-[#000000CC] bg-[#00664E14] p-2"
                  >
                    <ImPhone className="mr-2" /> {branch.phone}
                  </a>
                  <a
                    href={branch.location}
                    target="_blank"
                    className="bg-primary_color text-white flex items-center justify-center p-1 px-2"
                  >
                    <IoLocationOutline />
                  </a>
                </div>
              </div>
            ))}
      </section>
    </>
  );
}

export default BranchClient