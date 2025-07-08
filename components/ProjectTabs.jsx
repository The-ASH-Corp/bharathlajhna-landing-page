 

// "use client";

// import { PROJECT_QUERY } from "@/constants/strapiQueries";
// import useStrapi from "@/hooks/useStrapi";
// import { useEffect, useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { FaBuilding } from "react-icons/fa6";
// import { MdLocationOn } from "react-icons/md";

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState("kerala");
//   const [projectsData, setProjectsData] = useState([]);
//   const [filter, setFilter] = useState("upcoming");

//   const { loading, error, data } = useStrapi(
//     "/api/project-page",
//     PROJECT_QUERY
//   );

//   useEffect(() => {
//     setProjectsData(data?.data?.projects?.tabs);
//   }, [data]);

//   const projectData = [
//     {
//       image: "/assets/images/project-img-1.png",
//       title: "BLM Orchid 1",
//       squareFeet: "1500 SQFT X6",
//       place: "Mannarkkad",
//       category: "Kerala",
//     },
//     {
//       image: "/assets/images/project-img-2.png",
//       title: "BLM Orchid 2",
//       squareFeet: "1500 SQFT X6",
//       place: "Mannarkkad",
//       category: "Kerala",
//     },
//     {
//       image: "/assets/images/project-img-3.png",
//       title: "BLM Orchid 3",
//       squareFeet: "1500 SQFT X6",
//       place: "Mannarkkad",
//       category: "Kerala",
//     },
//   ];

//   return (
//     <>
//       <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
//         <div className="flex gap-4 w-full items-start justify-start">
//           <button
//             onClick={() => setActiveTab("kerala")}
//             className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
//               activeTab === "kerala"
//                 ? " text-black border-b-[1px] border-accent_color"
//                 : "text-para_color"
//             }`}
//           >
//             Kerala
//           </button>
//           <button
//             onClick={() => setActiveTab("tamil")}
//             className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
//               activeTab === "tamil"
//                 ? " text-black border-b-[1px] border-accent_color"
//                 : "text-para_color"
//             }`}
//           >
//             Tamil Nadu
//           </button>
//           <button
//             onClick={() => setActiveTab("pondi")}
//             className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
//               activeTab === "pondi"
//                 ? " text-black border-b-[1px] border-accent_color"
//                 : "text-para_color"
//             }`}
//           >
//             Pondicherry
//           </button>
//         </div>
//         {activeTab && (
//           <div className="flex gap-4 mt-6">
//             {["upcoming", "ongoing", "completed"].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setFilter(status)}
//                 className={`text-[11px] sm:text-[13px] lg:text-[14px]  px-2 py-2 rounded-md font-poppins capitalize ${
//                   filter === status
//                     ? " bg-green-700 text-white  border-accent_color"
//                     : "text-para_color border border-black hover:bg-gray-100"
//                 }`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         )}
//       </section>
//       {loading ? (
//         <main className="relative w-full flex flex-col items-center justify-center h-[200px]">
//           <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
//         </main>
//       ) : (
//         projectsData
//           ?.filter((projects) => {
//             if (activeTab === "kerala") return projects.label === "Kerala";
//             if (activeTab === "tamil") return projects.label === "Tamilnadu";
//             if (activeTab === "pondi") return projects.label === "Pondichery";
//             return false;
//           })
//           .map((projects, projIndex) =>
//             projects.slider.length === 0 ? (
//               <div
//                 key={projIndex}
//                 className="w-full h-[300px] flex items-center justify-center"
//               >
//                 <div className="text-red-500 font-medium text-sm text-center text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
//                   No Data Found
//                 </div>
//               </div>
//             ) : (
//               <div
//                 key={projIndex}
//                 className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg h-[400px]"
//               >
//                 {/* Image */}
//                 <div
//                   onClick={() =>
//                     setImageModal({
//                       isOpen: true,
//                       imageUrl: `https://blm-cms.appii.space${projects.file.url}`,
//                     })
//                   }
//                   className="relative w-full h-60"
//                 >
//                   <Image
//                     alt="Gallery"
//                     src={`https://blm-cms.appii.space${projects.file.url}`}
//                     fill
//                     quality={85}
//                     className="w-full h-full object-cover object-center rounded-t"
//                     priority={true}
//                   />
//                 </div>

//                 {/* Description below image */}
//                 {item.description?.trim() && (
//                   <div className="p-4 bg-white max-h-[120px] overflow-y-auto ">
//                     <p className="font-allenoire text-sm text-gray-800 tracking-wider  whitespace-pre-line">
//                       {item.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//               // <section
//               //   key={projIndex}
//               //   className="flex flex-wrap sm:grid sm:grid-cols-2 px-6 gap-4 lg:gap-10 lg:max-w-[1290px] w-full mb-20"
//               // >
//               //   {projects.slider
//               //     ?.filter((project) => project.subtitle === filter)
//               //     .map((project, index) => (
//               //       <div
//               //         key={index}
//               //         className="relative m-auto w-full h-[240px] sm:h-[410px] lg:h-[585px] flex flex-col items-start justify-end p-[12px] lg:p-[32px] bg-slate-300 bg-no-repeat bg-cover bg-center"
//               //         style={{
//               //           backgroundImage: `url('https://blm-cms.appii.space${project.file.url}')`,
//               //         }}
//               //       >
//               //         <p className="z-10 font-allenoire text-[14px] sm:text-[21px] lg:text-[32px] text-white">
//               //           {project.title}
//               //         </p>
//               //         {/* <div className="mb-2 mt-1 z-10">
//               //         <p className="flex gap-[3px] text-[10px] sm:text-[11px] text-[16px] font-poppins items-center justify-center text-[#828282]">
//               //           <MdLocationOn size={12} /> {project.subtitle}{" "}
//               //           <i className="w-[1px] h-[10px] bg-[#828282]"></i>{" "}
//               //           <FaBuilding size={12} /> {"squareFeet"}{" "}
//               //         </p>
//               //       </div> */}
//               //         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>
//               //       </div>
//               //     ))}
//               // </section>
//             )
//           )
//       )}
//     </>
//   );
// };

// export default ProjectTabs;

"use client";

import { PROJECT_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import { useEffect, useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ImageModal from "./ImageModal";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("kerala");
  const [projectsData, setProjectsData] = useState([]);
  const [filter, setFilter] = useState("upcoming");
  const [mediaFilter, setMediaFilter] = useState("photos");
  const [imageModal, setImageModal] = useState({ isOpen: false, imageUrl: "" });
  const [modalData, setModalData] = useState({
    videoUrl: "",
    isOpen: false,
  });

  const { loading, data } = useStrapi("/api/project-page", PROJECT_QUERY);

  useEffect(() => {
    setProjectsData(data?.data?.projects?.tabs || []);
  }, [data]);

  const getFileType = (url) => {
    if (!url) return "";
    const extension = url.split(".").pop().toLowerCase();
    const photoExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
    const videoExtensions = ["mp4", "mov", "avi", "webm", "mkv"];
    if (photoExtensions.includes(extension)) return "photos";
    if (videoExtensions.includes(extension)) return "videos";
    return "";
  };

  return (
    <>
      <VideoModal
        videoUrl={modalData.videoUrl}
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />

      <ImageModal
        isOpen={imageModal.isOpen}
        imageUrl={imageModal.imageUrl}
        onClose={() => setImageModal({ ...imageModal, isOpen: false })}
      />

      <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px] w-full">
         <div className="flex gap-4 w-full items-start justify-start">
          {[
            { key: "kerala", label: "Kerala" },
            { key: "tamil", label: "Tamil Nadu" },
            { key: "pondi", label: "Pondicherry" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
                activeTab === tab.key
                  ? "text-black border-b-[1px] border-accent_color"
                  : "text-para_color"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

         <div className="flex  gap-4 mt-6 items-center">
          {["upcoming", "ongoing", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`text-[11px] sm:text-[13px] lg:text-[14px] px-3 py-2 rounded-md font-poppins capitalize ${
                filter === status
                  ? "bg-green-700 text-white"
                  : "text-para_color border border-black hover:bg-gray-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <select
          value={mediaFilter}
          onChange={(e) => setMediaFilter(e.target.value)}
          className="border border-gray-400 rounded-md px-3 py-2 text-[11px] sm:text-[13px] lg:text-[14px] font-poppins capitalize mt-2 md:mt-14 md:absolute md:right-[90px]"
        >
          <option value="photos">Photos</option>
          <option value="videos">Videos</option>
        </select>
      </section>

      {loading ? (
        <main className="w-full flex flex-col items-center justify-center h-[200px]">
          <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
        </main>
      ) : (
        <>
          {projectsData
            ?.filter((projects) => {
              if (activeTab === "kerala") return projects.label === "Kerala";
              if (activeTab === "tamil") return projects.label === "Tamilnadu";
              if (activeTab === "pondi") return projects.label === "Pondichery";
              return false;
            })
            .map((projects, projIndex) => {
              const filteredProjects = projects.slider?.filter(
                (project) =>
                  project.subtitle === filter &&
                  getFileType(project.file.url) === mediaFilter
              );

              return filteredProjects.length === 0 ? (
                <div
                  key={projIndex}
                  className="w-full h-[200px] flex items-center justify-center"
                >
                  <p className="text-red-500 font-poppins text-center text-[14px] sm:text-[16px]">
                    No Projects Found
                  </p>
                </div>
              ) : (
                <section
                  key={projIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 px-6 lg:max-w-[1290px] w-full mb-12"
                >
                  {filteredProjects.map((project, index) => {
                    const fileUrl = `https://blm-cms.appii.space${project.file.url}`;
                    const fileType = getFileType(project.file.url);

                    return (
                      <div
                        key={index}
                        className="w-full h-auto max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-white"
                      >
                        <div
                          onClick={() => {
                            if (fileType === "photos") {
                              setImageModal({
                                isOpen: true,
                                imageUrl: fileUrl,
                              });
                            } else if (fileType === "videos") {
                              setModalData({
                                isOpen: true,
                                videoUrl: fileUrl,
                              });
                            }
                          }}
                          className="relative w-full h-60 cursor-pointer"
                        >
                          {fileType === "photos" ? (
                            <Image
                              alt={project.title || "Gallery"}
                              src={fileUrl}
                              fill
                              quality={85}
                              className="object-cover object-center rounded-t"
                              priority={true}
                            />
                          ) : (
                            <video
                              src={fileUrl}
                              muted
                              playsInline
                              className="object-cover object-center w-full h-full rounded-t"
                            />
                          )}
                        </div>

                        {project.title?.trim() && (
                          <div className="p-4 bg-white max-h-[120px] overflow-y-auto">
                            <p className="font-allenoire text-sm text-gray-800 tracking-wider whitespace-pre-line">
                              {project.title}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </section>
              );
            })}
        </>
      )}
    </>
  );
};

export default ProjectTabs;
