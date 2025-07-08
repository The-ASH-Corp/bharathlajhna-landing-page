"use client";
import { GALLERY_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import { IoPlayCircleOutline } from "react-icons/io5";
import ImageModal from "./ImageModal";
import ProjectTabs from "./ProjectTabs";

const GalleryTabs = () => {
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "photo_gallery"
  );
  const [photoGallery, setPhotoGallery] = useState([]);
  const [videoGallery, setVideoGallery] = useState([]);
  const [celebrations, setCelebrations] = useState([]);
  const [csrActivities, setCsrActivities] = useState([]);
  const [blmNews, setBlmNews] = useState([]);
  const [blmProjects, setBlmProjects] = useState([]);
  const [celebrationFilter, setCelebrationFilter] = useState("photos");
  const [csrFilter, setCsrFilter] = useState("photos");
  const [modalData, setModalData] = useState({
    videoUrl: "",
    isOpen: false,
  });
  const [imageModal, setImageModal] = useState({
    imageUrl: "",
    isOpen: false,
  });

  const { loading, error, data } = useStrapi(
    "/api/gallery-page",
    GALLERY_QUERY
  );

  useEffect(() => {
    console.log("BLM News:", data?.data?.galleryTabs?.[4]?.images);
    setPhotoGallery(data?.data?.galleryTabs[0]?.images);
    setVideoGallery(data?.data?.galleryTabs[1]?.images);
    setCelebrations(data?.data?.galleryTabs[2]?.images);
    setCsrActivities(data?.data?.galleryTabs[3]?.images);
    setBlmNews(data?.data?.galleryTabs[4]?.images);
    setBlmProjects(data?.data?.galleryTabs[5]?.images);
  }, [data]);

  const handleVideoClick = (url) => {
    setModalData({
      videoUrl: url,
      isOpen: true,
    });
  };

  // const galleryData = [
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-2.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-3.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-4.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-5.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-6.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-7.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-8.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-9.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-10.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-11.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-12.png",
  //     },
  //     {
  //         description: "Respected Chairman R Premkumar Honouring Mr. B L Verma, Minister of State in the Ministry of Co-operation, Government of India",
  //         image: "/assets/images/gallery/gallery-img-13.png",
  //     }
  // ]

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
          <button
            onClick={() => setActiveTab("photo_gallery")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "photo_gallery"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Photo Gallery
          </button>
          <button
            onClick={() => setActiveTab("video_gallery")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "video_gallery"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Video Gallery
          </button>
          <button
            onClick={() => setActiveTab("celebrations")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "celebrations"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            Celebrations
          </button>
          <button
            onClick={() => setActiveTab("csr_activities")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "csr_activities"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            CSR Activities
          </button>
          <button
            onClick={() => setActiveTab("blm_news")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "blm_news"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            BLM In News
          </button>
          <button
            onClick={() => setActiveTab("blm_projects")}
            className={`text-[10px] sm:text-[20px] lg:text-[22px] font-poppins ${
              activeTab === "blm_projects"
                ? " text-black border-b-[1px] border-accent_color"
                : "text-para_color"
            }`}
          >
            BLM Projects
          </button>
        </div>
      </section>
      <section className="flex sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:place-items-center flex-col gap-3 w-full items-start gap-y-12 justify-start p-6 xl:max-w-[1290px]">
        {/* {activeTab === "photo_gallery" &&
          photoGallery?.map((item, index) => (
            <div key={index} className="relative w-full sm:w-full h-60">
              <p className="font-allenoire max-w-[250px] absolute z-10 bottom-3 left-3 text-white tracking-wider text-sm">
                {item.description}
              </p>
              <div className=" z-[5] absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>
              <div className="relative w-full h-full">
                <Image
                  alt="Gallery"
                  src={`https://blm-cms.appii.space${item.file.url}`}
                  fill
                  quality={85}
                  className="w-full h-full object-cover object-center"
                  priority={true}
                />
              </div>
            </div>
          ))} */}

        {activeTab === "photo_gallery" &&
          photoGallery?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg h-[400px]"
            >
               <div
                onClick={() =>
                  setImageModal({
                    isOpen: true,
                    imageUrl: `https://blm-cms.appii.space${item.file.url}`,
                  })
                }
                className="relative w-full h-60"
              >
                <Image
                  alt="Gallery"
                  src={`https://blm-cms.appii.space${item.file.url}`}
                  fill
                  quality={85}
                  className="w-full h-full object-cover object-center rounded-t"
                  priority={true}
                />
              </div>

               {item.description?.trim() && (
                <div className="p-4 bg-white max-h-[120px] overflow-y-auto ">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider  whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

        {/* {activeTab === "video_gallery" &&
          videoGallery?.map((item, index) => (
            <div key={index} className="relative w-full sm:w-full h-60">
              <p className="font-allenoire max-w-[250px] absolute z-10 bottom-3 left-3 text-white tracking-wider text-sm">
                {item.description}
              </p>
               <div className="relative w-full h-full">
                <div
                  onClick={() =>
                    handleVideoClick(
                      `https://blm-cms.appii.space${item.file.url}`
                    )
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                </div>
                <video muted className="w-full h-full object-cover">
                  <source
                    src={`https://blm-cms.appii.space${item.file.url}`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          ))} */}
        {activeTab === "video_gallery" &&
          videoGallery?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg h-[400px]"
            >
               <div className="relative w-full h-60">
                <div
                  onClick={() =>
                    handleVideoClick(
                      `https://blm-cms.appii.space${item.file.url}`
                    )
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                </div>
                <video muted className="w-full h-full object-cover">
                  <source
                    src={`https://blm-cms.appii.space${item.file.url}`}
                    type="video/mp4"
                  />
                </video>
              </div>

               {item.description?.trim() && (
                <div className="p-4 bg-white max-h-[120px] overflow-y-auto">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px] whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}



        {activeTab === "blm_news" &&
          blmNews?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-[400px] rounded overflow-hidden shadow-lg"
            >
               <div className="relative w-full h-60">
                <div
                  onClick={() =>
                    handleVideoClick(
                      `https://blm-cms.appii.space${item.file.url}`
                    )
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                </div>
                <video muted className="w-full h-full object-cover">
                  <source
                    src={`https://blm-cms.appii.space${item.file.url}`}
                    type="video/mp4"
                  />
                </video>
              </div>

               {item.description?.trim() && (
                <div className="p-4 bg-white max-h-[120px] overflow-y-auto">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px] whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
      </section>
         {activeTab === "csr_activities" && (
          <div className="flex gap-4 mt-[-60px] px-14  w-full">
            {["photos", "videos"].map((type) => (
              <button
                key={type}
                onClick={() => setCsrFilter(type)}
                className={`text-[12px] sm:text-[14px] lg:text-[16px]  rounded-md h-11 px-2 py-2  font-poppins capitalize ${
                  csrFilter === type
                    ? "text-white bg-green-700 border-b-[1px]   border-accent_color"
                    : "text-para_color border border-black hover:bg-gray-300"
                }`}
              >
               CSR {type}
              </button>
            ))}
          </div>
        )}

        {/* Heading */}
        {/* {activeTab === "csr_activities" && (
          <h2 className="text-lg font-semibold capitalize px-4">
            {csrFilter === "images" ? "Images" : "Videos"}
          </h2>
        )} */}

        {/* Grid */}
        {activeTab === "csr_activities" && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full py-6 gap-y-12 px-14">
            {csrActivities
              ?.filter((item) => {
                if (csrFilter === "photos")
                  return item.file?.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i);
                if (csrFilter === "videos")
                  return item.file?.url?.match(/\.(mp4|mov|avi|webm)$/i);
                return false;
              })
              .map((item, index) => {
                const isImage = item.file?.url?.match(
                  /\.(jpg|jpeg|png|gif|webp)$/i
                );
                const isVideo = item.file?.url?.match(/\.(mp4|mov|avi|webm)$/i);

                return (
                  <div
                    key={index}
                    className="w-full max-w-xs mx-auto h-[350px] rounded overflow-hidden shadow-lg "
                  >
                     {isImage && (
                      <div
                        onClick={() =>
                          setImageModal({
                            isOpen: true,
                            imageUrl: `https://blm-cms.appii.space${item.file.url}`,
                          })
                        }
                        className="relative w-full h-60 cursor-pointer"
                      >
                        <Image
                          alt="Gallery"
                          src={`https://blm-cms.appii.space${item.file.url}`}
                          fill
                          priority={true}
                          quality={85}
                          className="w-full h-full object-cover object-center rounded-t"
                        />
                      </div>
                    )}

                     {isVideo && (
                      <div className="relative w-full h-60">
                        <div
                          onClick={() =>
                            handleVideoClick(
                              `https://blm-cms.appii.space${item.file.url}`
                            )
                          }
                          className="absolute inset-0 flex items-center justify-center z-10"
                        >
                          <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                        </div>
                        <video muted className="w-full h-full object-cover">
                          <source
                            src={`https://blm-cms.appii.space${item.file.url}`}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    )}

                     {item.description?.trim() && (
                      <div className="p-4 bg-white max-h-[120px] overflow-y-auto">
                        <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px] whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      {/* {activeTab === "celebrations" &&
          celebrations?.map((item, index) => (
            <div key={index} className="relative w-full sm:w-full h-60">
              <p className="font-allenoire max-w-[250px] absolute z-10 bottom-3 left-3 text-white tracking-wider text-sm">
                {item.description}
              </p>
              <div className=" z-[5] absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>
              <div className="relative w-full h-full">
                <Image
                  alt="Gallery"
                  src={`https://blm-cms.appii.space${item.file.url}`}
                  fill
                  quality={85}
                  priority={true}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))} */}
      <div className="flex flex-col gap-6 w-full items-start justify-start">
         {activeTab === "celebrations" && (
          <div className="flex gap-4 px-14 w-full">
            {["photos", "videos"].map((type) => (
              <button
                key={type}
                onClick={() => setCelebrationFilter(type)}
                className={`text-[12px] sm:text-[14px] lg:text-[16px] mt-[-60px]  h-12 rounded-md px-2 py-1 font-poppins capitalize ${
                  celebrationFilter === type
                    ? "text-white bg-green-700 border-b-[1px]   border-accent_color"
                    : "text-para_color border border-black hover:bg-gray-300"
                }`}
              >
                Celebration {type}
              </button>
            ))}
          </div>
        )}

         {/* {activeTab === "celebrations" && (
          <h2 className="text-lg font-semibold capitalize">
            {celebrationFilter === "images" ? "Images" : "Videos"}
          </h2>
        )} */}

         <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-12 px-14  mt-[-10px] w-full">
          {activeTab === "celebrations" &&
            celebrations
              ?.filter((item) => {
                if (celebrationFilter === "photos")
                  return item.file?.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i);
                if (celebrationFilter === "videos")
                  return item.file?.url?.match(/\.(mp4|mov|avi|webm)$/i);
                return false;
              })
              .map((item, index) => {
                const isImage = item.file?.url?.match(
                  /\.(jpg|jpeg|png|gif|webp)$/i
                );
                const isVideo = item.file?.url?.match(/\.(mp4|mov|avi|webm)$/i);

                return (
                  <div
                    key={index}
                    className="w-full max-w-xs mx-auto h-[350px] rounded overflow-hidden shadow-lg  "
                  >
                    {isImage && (
                      <div
                        onClick={() =>
                          setImageModal({
                            isOpen: true,
                            imageUrl: `https://blm-cms.appii.space${item.file.url}`,
                          })
                        }
                        className="relative w-full h-60 cursor-pointer"
                      >
                        <Image
                          alt="Gallery"
                          src={`https://blm-cms.appii.space${item.file.url}`}
                          fill
                          quality={85}
                          priority={true}
                          className="w-full h-full object-cover object-center rounded-t"
                        />
                      </div>
                    )}

                    {isVideo && (
                      <div className="relative w-full h-60">
                        <div
                          onClick={() =>
                            handleVideoClick(
                              `https://blm-cms.appii.space${item.file.url}`
                            )
                          }
                          className="absolute inset-0 flex items-center justify-center z-10"
                        >
                          <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                        </div>
                        <video muted className="w-full h-full object-cover">
                          <source
                            src={`https://blm-cms.appii.space${item.file.url}`}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    )}

                    {item.description?.trim() && (
                      <div className="p-4 bg-white max-h-[120px] overflow-y-auto">
                        <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px] whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
      </div>

      {/* {activeTab === "blm_news" &&
        blmNews?.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-full max-w-xs mx-auto h-[400px] rounded overflow-hidden shadow-lg"
          >
             <div className="relative w-full h-60">
              <div
                onClick={() =>
                  handleVideoClick(
                    `https://blm-cms.appii.space${item.file.url}`
                  )
                }
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
              </div>
              <video muted className="w-full h-full object-cover">
                <source
                  src={`https://blm-cms.appii.space${item.file.url}`}
                  type="video/mp4"
                />
              </video>
            </div>

             {item.description?.trim() && (
              <div className="p-4 bg-white overflow-y-auto">
                <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))} */}

      {/* {activeTab === "blm_projects" &&
          blmProjects?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            > */}
      {/* Image */}
      {/* <div
                onClick={() =>
                  setImageModal({
                    isOpen: true,
                    imageUrl: `https://blm-cms.appii.space${item.file.url}`,
                  })
                }
                className="relative w-full h-60"
              >
                <Image
                  alt="Gallery"
                  src={`https://blm-cms.appii.space${item.file.url}`}
                  fill
                  priority={true}
                  quality={85}
                  className="w-full h-full object-cover object-center rounded-t"
                />
              </div> */}
      {/* <ProjectTabs/> */}

      {/* Description below the image */}
      {/* {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))} */}

      {activeTab === "blm_projects" && (
        <div className="w-full px-8 mt-[-70px]">
          <ProjectTabs />
        </div>
      )}
    </>
  );
};

export default GalleryTabs;
