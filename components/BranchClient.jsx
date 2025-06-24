// 'use client';

// import { BRANCH_QUERY } from '@/constants/strapiQueries';
// import useStrapi from '@/hooks/useStrapi';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { ImPhone } from 'react-icons/im';
// import { IoLocationOutline } from 'react-icons/io5';
// import SectionDivision from './ui/SectionDivision';

// const BranchClient = () => {
//   const searchParams = useSearchParams();
//   const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'kerala');
//   const [branchData, setBranchData] = useState({ kerala: [], tamil: [], pondi: [] });
//   const [operationalHubs, setOperationalHubs] = useState([]);

//   const { loading, error, data } = useStrapi('/api/branches-page', BRANCH_QUERY);

//   useEffect(() => {
//     if (data?.data?.branchTab) {
//       const tabs = { kerala: [], tamil: [], pondi: [] };

//       data.data.branchTab.forEach((item) => {
//         item.officeCards.forEach((card) => {
//           const formattedData = {
//             district: card.district,
//             city: card.name,
//             address: card.address,
//             phone: card.contactNo,
//             location: card.location,
//           };

//           if (item.label === 'Kerala') tabs.kerala.push(formattedData);
//           if (item.label === 'Tamilnadu') tabs.tamil.push(formattedData);
//           if (item.label === 'Pondichery') tabs.pondi.push(formattedData);
//         });
//       });

//       setBranchData(tabs);
//       setOperationalHubs(data.data.operationalHubs || []);
//     }
//   }, [data]);

//   const BranchCard = ({ branch }) => (
//     <div className="w-full flex flex-col p-6 gap-5 relative bg-slate-50">
//       <div>
//         <p className="font-poppins text-sm font-semibold">{branch.district}</p>
//         <p className="font-poppins text-xs text-para_color mb-3">{branch.city}</p>
//         <p className="font-poppins text-xs text-para_color max-w-[90%]">{branch.address}</p>
//       </div>
//       <div className="w-full flex gap-2">
//         <a
//           href={`tel:+91${branch.phone}`}
//           className="text-xs flex items-center justify-center w-full font-poppins text-[#000000CC] bg-[#00664E14] p-2"
//         >
//           <ImPhone className="mr-2" /> {branch.phone}
//         </a>
//         <a
//           href={branch.location}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-primary_color text-white flex items-center justify-center p-1 px-2"
//         >
//           <IoLocationOutline />
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
//         <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
//           <main className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
//             {operationalHubs.map((hub, index) => (
//               <div key={index} className="w-full flex flex-col p-6 gap-5 relative bg-slate-50">
//                 <div>
//                   <p className="font-allenoire text-xl tracking-wider">{hub.name}</p>
//                   <p className="font-poppins text-sm text-para_color">{hub.state}</p>
//                 </div>
//                 <div>
//                   <p className="font-poppins text-sm font-semibold mb-1">{hub.district}</p>
//                   <p className="font-poppins text-sm text-para_color max-w-[90%]">{hub.address}</p>
//                 </div>
//                 <div className="w-full flex gap-2">
//                   <a
//                     href={`tel:+91${hub.contactNo}`}
//                     className="flex items-center justify-center w-full text-sm font-poppins text-[#000000CC] bg-[#00664E14] p-2"
//                   >
//                     <ImPhone className="mr-2" /> {hub.contactNo}
//                   </a>
//                   <a
//                     href={hub.location}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-primary_color text-white flex items-center justify-center p-2 px-3"
//                   >
//                     <IoLocationOutline />
//                   </a>
//                 </div>
//                 <Image
//                   src="/assets/icons/pattern-footer.svg"
//                   alt="patterns"
//                   width={130}
//                   height={130}
//                   className="absolute top-0 right-0"
//                 />
//               </div>
//             ))}
//           </main>
//         </section>

//         <div className="flex gap-4 w-full items-start justify-start">
//           {['kerala', 'tamil nadu', 'pondichery'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab.split(" ")[0])}
//               className={`capitalize text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
//                 activeTab === tab.split(' ')[0] ? 'text-black border-b-[1px] border-accent_color' : 'text-para_color'
//               }`}
//             >
//               {tab.split(0)}
//             </button>
//           ))}
//         </div>
//       </section>

//       <SectionDivision />
//       <section className="grid sm:grid-cols-3 lg:grid-cols-4 items-start justify-start w-full xl:max-w-[1290px] my-6 lg:my-10 gap-3">
//         {branchData[activeTab]?.map((branch, index) => (
//           <BranchCard key={index} branch={branch} />
//         ))}
//       </section>
//     </>
//   );
// };

// export default BranchClient;

"use client";

import { BRANCH_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ImPhone } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import SectionDivision from "./ui/SectionDivision";

const BranchClient = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "kerala"
  );
  const [branchData, setBranchData] = useState({
    kerala: [],
    tamil: [],
    pondicherry: [],
  });
  const [operationalHubs, setOperationalHubs] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const { loading, error, data } = useStrapi(
    "/api/branches-page",
    BRANCH_QUERY
  );

  useEffect(() => {
    if (data?.data?.branchTab) {
      const tabs = { kerala: [], tamil: [], pondicherry: [] };

      data.data.branchTab.forEach((item) => {
        item.officeCards.forEach((card) => {
          const formattedData = {
            district: card.district,
            city: card.name,
            address: card.address,
            phone: card.contactNo,
            location: card.location,
          };

          if (item.label === "Kerala") tabs.kerala.push(formattedData);
          if (item.label === "Tamilnadu") tabs.tamil.push(formattedData);
          if (item.label === "Pondicherry")
            tabs.pondicherry.push(formattedData);
        });
      });

      setBranchData(tabs);
      setOperationalHubs(data.data.operationalHubs || []);
    }
  }, [data]);

  const keralaDistrictOrder = [
    "Kasargod",
    "Kannur",
    "Wayanad",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Thrissur",
    "Ernamkulam",
    "Idukki",
    "Kottayam",
    "Pathanamthitta",
    "Alappuzha",
    "Kollam",
    "Trivandrum",
  ];

  // const normalize = (str) => str.trim().toLowerCase().replace(/(^\w)/, (m) => m.toUpperCase());
  // const keralaDistricts = [...new Set(branchData.kerala.map((branch) => normalize(branch.district)))].sort(
  //   (a, b) => {
  //     const aIndex = keralaDistrictOrder.indexOf(a);
  //     const bIndex = keralaDistrictOrder.indexOf(b);
  //     return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  //   }
  // );

  const keralaDistricts = keralaDistrictOrder;

  // const keralaDistricts = [...new Set(branchData.kerala.map((branch) => branch.city))];
  // const keralaDistricts = [
  //   ...new Set(branchData.kerala.map((branch) => branch.district)),
  // ].sort((a, b) => {
  //   const aIndex = keralaDistrictOrder.indexOf(a.trim());
  //   const bIndex = keralaDistrictOrder.indexOf(b.trim());
  //   return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  // });

  const filteredBranches =
    activeTab === "kerala"
      ? branchData.kerala.filter((branch) =>
          selectedDistrict ? branch.district === selectedDistrict : true
        )
      : branchData[activeTab] || [];

  const BranchCard = ({ branch }) => (
    <div className="w-full flex flex-col p-6 gap-5 relative bg-slate-50">
      <div>
        <p className="font-poppins text-sm font-semibold">{branch.city}</p>
        <p className="font-poppins text-xs mb-3 ">{branch.district}</p>

        <p className="font-poppins text-xs text-para_color max-w-[90%]">
          {branch.address}
        </p>
      </div>
      <div className="w-full flex gap-2">
        <a
          href={`tel:+91 ${branch.phone}`}
          className="text-xs flex items-center justify-center w-full font-poppins text-[#000000CC] bg-[#00664E14] p-2"
        >
          <ImPhone className="mr-2" /> +91 {branch.phone}
        </a>
        <a
          href={branch.location}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary_color text-white flex items-center justify-center p-1 px-2"
        >
          <IoLocationOutline />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
        <section className="flex flex-col items-start justify-start w-full p-6 xl:max-w-[1290px] my-6">
          <main className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {operationalHubs.map((hub, index) => (
              <div
                key={index}
                className="w-full flex flex-col p-6 gap-5 relative bg-slate-50"
              >
                <div>
                  <p className="font-allenoire text-xl tracking-wider">
                    {hub.name}
                  </p>
                  <p className="font-poppins text-sm text-para_color">
                    {hub.state}
                  </p>
                </div>
                <div>
                  <p className="font-poppins text-sm font-semibold mb-1">
                    {hub.district}
                  </p>
                  <p className="font-poppins text-sm text-para_color max-w-[90%]">
                    {hub.address}
                  </p>
                </div>
                <div className="w-full flex gap-2">
                  <a
                    href={`tel:+91${hub.contactNo}`}
                    className="flex items-center justify-center w-full text-sm font-poppins text-[#000000CC] bg-[#00664E14] p-2"
                  >
                    <ImPhone className="mr-2" /> {hub.contactNo}
                  </a>
                  <a
                    href={hub.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary_color text-white flex items-center justify-center p-2 px-3"
                  >
                    <IoLocationOutline />
                  </a>
                </div>
                <Image
                  src="/assets/icons/pattern-footer.svg"
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
          {["kerala", "tamil nadu", "pondicherry"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab.split(" ")[0]);
                setSelectedDistrict("");
              }}
              className={`capitalize text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
                activeTab === tab.split(" ")[0]
                  ? "text-black border-b-[1px] border-accent_color"
                  : "text-para_color"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* District filter dropdown for Kerala */}
        {activeTab === "kerala" && (
          <div className="my-4">
            <label className="block mb-2 font-poppins text-sm">
              Filter by District
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="border p-2 rounded font-poppins text-sm"
            >
              <option value="">All Districts</option>
              {keralaDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      <SectionDivision />

      {/* <section className="grid sm:grid-cols-3 lg:grid-cols-4 items-start justify-start w-full xl:max-w-[1290px] my-6 lg:my-10 gap-3">
        {filteredBranches.map((branch, index) => (
         
          <BranchCard key={index} branch={branch} />
        ))}
      </section> */}
      <section className="grid sm:grid-cols-3 lg:grid-cols-4 items-start justify-start w-full xl:max-w-[1290px] my-6 lg:my-10 gap-3">
        {filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 font-poppins text-sm">
            No branches available in this district.
          </div>
        )}
      </section>
    </>
  );
};

export default BranchClient;
