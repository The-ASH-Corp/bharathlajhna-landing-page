'use client'
import { GALLERY_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const GalleryTabs = () => {

  const searchParams = useSearchParams()

    const [ activeTab, setActiveTab ] = useState(searchParams.get("tab") || "photo_gallery")
    const [ photoGallery, setPhotoGallery ] = useState([])
    const [ videoGallery, setVideoGallery ] = useState([])
    const [ celebrations, setCelebrations ] = useState([])
    const [ csrActivities, setCsrActivities ] = useState([])

    const { loading, error, data } = useStrapi("/api/gallery-page", GALLERY_QUERY)


    useEffect(() => {
      setPhotoGallery(data?.data?.galleryTabs[0]?.images)
      setVideoGallery(data?.data?.galleryTabs[1]?.images)
      setCelebrations(data?.data?.galleryTabs[2]?.images)
      setCsrActivities(data?.data?.galleryTabs[3]?.images)
    }, [data])

    
    
    

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
        </div>
      </section>
      <section className="flex sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:place-items-center flex-col gap-3 w-full items-start justify-start p-6 xl:max-w-[1290px]">
        {activeTab === "photo_gallery" &&
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
          ))}

        {activeTab === "video_gallery" &&
          videoGallery?.map((item, index) => (
            <div key={index} className="relative w-full sm:w-full h-60">
              <p className="font-allenoire max-w-[250px] absolute z-10 bottom-3 left-3 text-white tracking-wider text-sm">
                {item.description}
              </p>
              {/*<div className=" z-[5] absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-[.7]"></div>*/}
              <div className="relative w-full h-full">
                <video controls muted className="w-full h-full object-cover">
                  <source
                    src={`https://blm-cms.appii.space${item.file.url}`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          ))}

        {activeTab === "celebrations" &&
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
          ))}
        {activeTab === "csr_activities" &&
          csrActivities?.map((item, index) => (
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
                  priority={true}
                  quality={85}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default GalleryTabs;
