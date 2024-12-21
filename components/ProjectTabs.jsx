"use client";

import { PROJECT_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("kerala");
  const [projectsData, setProjectsData] = useState([]);

  const { loading, error, data } = useStrapi(
    "/api/project-page",
    PROJECT_QUERY
  );

  useEffect(() => {
    setProjectsData(data?.data?.projects?.tabs);
  }, [data]);

  const projectData = [
    {
      image: "/assets/images/project-img-1.png",
      title: "BLM Orchid 1",
      squareFeet: "1500 SQFT X6",
      place: "Mannarkkad",
      category: "Kerala",
    },
    {
      image: "/assets/images/project-img-2.png",
      title: "BLM Orchid 2",
      squareFeet: "1500 SQFT X6",
      place: "Mannarkkad",
      category: "Kerala",
    },
    {
      image: "/assets/images/project-img-3.png",
      title: "BLM Orchid 3",
      squareFeet: "1500 SQFT X6",
      place: "Mannarkkad",
      category: "Kerala",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
        <div className="flex gap-4 w-full items-start justify-start">
          <button
            onClick={() => setActiveTab("kerala")}
            className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "kerala"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Kerala
          </button>
          <button
            onClick={() => setActiveTab("tamil")}
            className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "tamil"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Tamil Nadu
          </button>
          <button
            onClick={() => setActiveTab("pondi")}
            className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "pondi"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Pondicherry
          </button>
        </div>
      </section>
      {loading ? (
        <main className="relative w-full flex flex-col items-center justify-center h-[200px]">
          <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
        </main>
      ) : (
        projectsData
          ?.filter((projects) => {
            if (activeTab === "kerala") return projects.label === "Kerala";
            if (activeTab === "tamil") return projects.label === "Tamilnadu";
            if (activeTab === "pondi") return projects.label === "Pondichery";
            return false;
          })
          .map((projects, projIndex) =>
            projects.slider.length === 0 ? (
              <div
                key={projIndex}
                className="w-full h-[300px] flex items-center justify-center"
              >
                <div className="text-red-500 font-medium text-sm text-center text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
                  No Data Found
                </div>
              </div>
            ) : (
              <section key={projIndex} className="flex flex-wrap sm:grid sm:grid-cols-2 p-6 gap-4 lg:gap-10 lg:max-w-[1290px] w-full mb-20">
                {projects.slider.map((project, index) => (
                  <div
                    key={index}
                    className="relative m-auto w-full h-[240px] sm:h-[410px] lg:h-[585px] flex flex-col items-start justify-end p-[12px] lg:p-[32px] bg-slate-300 bg-no-repeat bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://blm-cms.appii.space${project.file.url}')`,
                    }}
                  >
                    <p className="z-10 font-allenoire text-[14px] sm:text-[21px] lg:text-[32px] text-white">
                      {project.title}
                    </p>
                    <div className="mb-2 mt-1 z-10">
                      <p className="flex gap-[3px] text-[10px] sm:text-[11pext-[16px] font-poppins items-center justify-center text-[#828282]">
                        <MdLocationOn size={12} /> {project.subtitle}{" "}
                        <i className="w-[1px] h-[10px] bg-[#828282]"></i>{" "}
                        <FaBuilding size={12} /> {"squareFeet"}{" "}
                      </p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>
                  </div>
                ))}
              </section>
            )
          )
      )}
    </>
  );
};

export default ProjectTabs;
