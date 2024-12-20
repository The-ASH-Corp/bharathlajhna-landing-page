'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { ImPhone } from 'react-icons/im';
import SectionDivision from './ui/SectionDivision';
import { IoLocationOutline } from 'react-icons/io5';
import Image from 'next/image';
import useStrapi from '@/hooks/useStrapi';
import { BRANCH_QUERY } from '@/constants/strapiQueries';
import { useSearchParams } from 'next/navigation';

const BranchClient = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'kerala');
  const [branchData, setBranchData] = useState({ kerala: [], tamil: [], pondi: [] });
  const [operationalHubs, setOperationalHubs] = useState([]);

  const { loading, error, data } = useStrapi('/api/branches-page', BRANCH_QUERY);

  useEffect(() => {
    if (data?.data?.branchTab) {
      const tabs = { kerala: [], tamil: [], pondi: [] };

      data.data.branchTab.forEach((item) => {
        item.officeCards.forEach((card) => {
          const formattedData = {
            district: card.district,
            city: card.name,
            address: card.address,
            phone: card.contactNo,
            location: card.location,
          };

          if (item.label === 'Kerala') tabs.kerala.push(formattedData);
          if (item.label === 'Tamilnadu') tabs.tamil.push(formattedData);
          if (item.label === 'Pondichery') tabs.pondi.push(formattedData);
        });
      });

      setBranchData(tabs);
      setOperationalHubs(data.data.operationalHubs || []);
    }
  }, [data]);

  const BranchCard = ({ branch }) => (
    <div className="w-full flex flex-col p-6 gap-5 relative bg-slate-50">
      <div>
        <h1 className="font-poppins text-sm font-semibold">{branch.district}</h1>
        <h2 className="font-poppins text-xs text-para_color mb-3">{branch.city}</h2>
        <p className="font-poppins text-xs text-para_color max-w-[90%]">{branch.address}</p>
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
              <div key={index} className="w-full flex flex-col p-6 gap-5 relative bg-slate-50">
                <div>
                  <h1 className="font-allenoire text-xl tracking-wider">{hub.name}</h1>
                  <h2 className="font-poppins text-sm text-para_color">{hub.state}</h2>
                </div>
                <div>
                  <h1 className="font-poppins text-sm font-semibold mb-1">{hub.district}</h1>
                  <h2 className="font-poppins text-sm text-para_color max-w-[90%]">{hub.address}</h2>
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
          {['kerala', 'tamil', 'pondi'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
                activeTab === tab ? 'text-black border-b-[1px] border-accent_color' : 'text-para_color'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <SectionDivision />
      <section className="grid sm:grid-cols-3 lg:grid-cols-4 items-start justify-start w-full xl:max-w-[1290px] my-6 lg:my-10 gap-3">
        {branchData[activeTab]?.map((branch, index) => (
          <BranchCard key={index} branch={branch} />
        ))}
      </section>
    </>
  );
};

export default BranchClient;
