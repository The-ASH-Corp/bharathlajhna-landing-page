"use client";
import { GALLERY_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import { IoPlayCircleOutline } from "react-icons/io5";
import ImageModal from "./ImageModal";

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
        </div>
      </section>
      <section className="flex sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:place-items-center flex-col gap-3 w-full items-start justify-start p-6 xl:max-w-[1290px]">
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
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            >
              {/* Image */}
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

              {/* Description below image */}
              {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
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
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            >
              {/* Video */}
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

              {/* Description below video */}
              {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

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
        {activeTab === "celebrations" &&
          celebrations?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            >
              {/* Image */}
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
                  priority={true}
                  className="w-full h-full object-cover object-center rounded-t"
                />
              </div>

              {/* Description below image */}
              {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

        {activeTab === "csr_activities" &&
          csrActivities?.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            >
              {/* Image */}
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
                  priority={true}
                  quality={85}
                  className="w-full h-full object-cover object-center rounded-t"
                />
              </div>

              {/* Description below the image */}
              {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
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
              className="w-full sm:w-full max-w-xs mx-auto h-auto rounded overflow-hidden shadow-lg"
            >
              {/* Video */}
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

              {/* Description below video */}
              {item.description?.trim() && (
                <div className="p-4 bg-white">
                  <p className="font-allenoire text-sm text-gray-800 tracking-wider max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
      </section>
    </>
  );
};

export default GalleryTabs;
