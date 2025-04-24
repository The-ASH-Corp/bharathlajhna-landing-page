"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import HeroCarousel from "@/components/HeroCarousel";
import InquiryCard from "@/components/InquiryCard";
import NewsCarousel from "@/components/NewsCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import ServiceCarousel from "@/components/ServiceCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Button from "@/components/ui/Button";
import SectionDivision from "@/components/ui/SectionDivision";
import { HOMEPAGE_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import VideoModal from "@/components/VideoModal";
import { IoPlayCircleOutline } from "react-icons/io5";

const Home = () => {
  const [projectTab, setProjectTab] = useState("kerala");
  const [newsTab, setNewsTab] = useState("news");
  const [herosliderData, setHeroSliderData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [modalData, setModalData] = useState({
    videoUrl: "",
    isOpen: false,
  });

  const { data, loading, error } = useStrapi("/api/home-page", HOMEPAGE_QUERY);
  const router = useRouter();

  useEffect(() => {
    if (data?.data?.blocks) {
      setHeroSliderData(data.data.blocks[0].heroslider);
      setServiceData(data.data.blocks[1].slider);
      setProjectData(data.data.blocks[2].tabs);
      setTestimonialData(data.data.blocks[3].testimonialcard);
      setNewsData(data.data.blocks[4].newstab);
      setVideoData(data.data.blocks[5].videos);
    }
  }, [data]);

  const handleVideoClick = (videoUrl) => {
    setModalData({
      videoUrl: videoUrl,
      isOpen: true,
    });
  };

  if (error) {
    return (
      <main className="flex items-center justify-center h-screen text-red-500">
        Error loading page: {error.message}
      </main>
    );
  }

  return (
    <>
      <VideoModal
        isOpen={modalData.isOpen}
        videoUrl={modalData.videoUrl}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />

      {loading ? (
        <main className="relative w-full flex flex-col items-center justify-center h-screen">
          <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
        </main>
      ) : (
        <HeroCarousel data={herosliderData} />
      )}

      {/* achievements section */}

      <section className="flex items-center justify-center w-full py-8 sm:py-24">
        <div className="flex flex-col items-center justify-center px-7 py-1 lg:px-20">
          <p className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={10} duration={1000} /> lakh+
          </p>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            Members
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-l-[1px] border-r-[1px] border-[#747474] px-7 py-1 lg:px-20">
          <p className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={3} duration={1000} />
          </p>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            States
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-7 py-1 lg:px-20">
          <p className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={125} duration={1000} />+
          </p>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            Branches
          </p>
        </div>
      </section>

      {/* Welcome section */}

      <main className="bg-primary_color text-white w-full">
        <section className="relative w-full flex flex-col items-center  justify-center p-7 py-32 sm:px-14 lg:py-35 ">
          <p className="font-allenoire text-[22px] sm:text-[38px] lg:text-[58px]">
            Welcome to BLM
          </p>
          <p className="font-poppins font-semibold   lg:text-[20px]">Empowering Lives. Building Futures.</p>

          <div>
            <Image
              src={"/assets/icons/underline-pattern.svg"}
              alt="text underline"
              width={100}
              height={100}
              style={{
                width: "auto",
                height: "auto",
              }}
              className="mix-blend-soft-light"
              priority={true}
            />
          </div>
          <p className="font-poppins text-center mt-[14px] text-[12px] font-[300] w-[320px] leading-5 sm:text-[19px] sm:leading-8 sm:w-[auto] lg:text-[20px] lg:leading-10 lg:max-w-[1100px]">
            Welcome to the official website of BLM Society – a pioneering force
            in cooperative development, financial inclusion, and community
            upliftment. Founded on strong ethical values and a commitment to
            people-first progress, BLM Society is more than an institution; it
            is a movement driven by purpose.From humble beginnings to a rapidly
            growing presence across regions, BLM Society has always placed
            people at the heart of everything we do. Whether it’s through our
            innovative savings and deposit schemes, housing initiatives,
            educational ventures, or grassroots empowerment programs, we strive
            to create meaningful change in the lives of our members and
            communities.We invite you to browse through, discover our vision,
            and join us in shaping a brighter, more inclusive tomorrow.<br></br> Welcome
            to BLM Society – where every step forward is a step together.
          </p>

          <div className="absolute top-0 left-0 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] lg:w-[270px] lg:h-[270px]">
            <Image
              src={"/assets/icons/pattern.svg"}
              alt=" pattern "
              fill
              className="absolute top-0 left-0 object-cover"
              priority={true}
            />
          </div>

          <div className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] lg:w-[270px] lg:h-[270px]">
            <Image
              src={"/assets/icons/pattern.svg"}
              alt=" pattern "
              fill
              className="absolute top-0 left-0 scale-x-[-1] object-cover"
              priority={true}
            />
          </div>
        </section>
      </main>

      {/* Why us section */}

      <main className="p-6 py-10 flex justify-center items-center">
        <section className="flex flex-col items-center justify-center gap-7 lg:max-w-[1400px]">
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
              Why Choose Us
            </p>
            <p className="font-poppins text-gray-700 font-semibold sm:text[15px] lg:text-[20px]">We’re Not Just a Society. We’re a Shared Journey.</p>

            <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px]">
            <span className="hidden sm:inline-block pt-4">  At BLM Society, we are more than a cooperative—we are a movement built on trust, togetherness, and transformation. As a self-governing community of dedicated individuals, we strive to empower our members socially, economically, and culturally.</span>

            <span className="hidden sm:inline-block pt-4">Rooted in South India and expanding with purpose, we offer a wide spectrum of services that uplift lives, generate employment, and create lasting opportunities. Every initiative we undertake—whether in housing, transport, education, or business—is designed with the goal of building a secure and prosperous future for our members.</span>

            <span className="hidden sm:inline-block pt-4">When you choose BLM, you choose shared growth, ethical values, and a legacy of 21 years built on service, solidarity, and success.</span>
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center w-full h-[140px] sm:h-[320px] lg:h-[520px]">
            <div className="w-[50%] h-full bg-[url('/assets/images/why-us-img-1.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="w-[30%] h-full bg-[url('/assets/images/why-us-3.jpg')] bg-no-repeat bg-cover bg-center"></div>
            <div className="w-[20%] h-full bg-[url('/assets/images/why-us-2.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
        </section>
      </main>

      {/* Chairman Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-7 w-full lg:max-w-[1400px]">
          <div className="sm:w-[50%] md:w-[50%] gap-2">
            <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
              Chairman’s Message
            </p>
            <p className="font-poppins font-semibold sm:text[15px] lg:text-[20px] text-gray-700">From the Heart of Our Leadership: A Message That Inspires</p>

            <p className="font-poppins mt-4 md:text-start text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px]">
              Dear Members and Well-wishers,
              <span className="  inline-block pt-4">
                It fills me with immense pride and gratitude to extend my
                heartfelt greetings to each of you. From our humble beginnings
                in 2006 to our present status as one of India’s most respected
                multistate cooperative societies, this journey has been nothing
                short of extraordinary.
              </span>
              <span className="  inline-block pt-4">
                Our progress has been possible only because of the tireless
                efforts of our leaders, staff, and members who placed their
                trust in the vision of collective growth. I thank each one of
                you for your continued support.
              </span>
              <span className="  inline-block pt-4">
                At BLM, we have always embraced change with courage and clarity.
                Our commitment to ethical practices and quality services has
                earned us trust in every household we serve. Whether through our
                housing projects, land development, education, transport, or
                welfare programs—we aim to make a difference, one life at a
                time.
              </span>
              <span className="  inline-block pt-4">
                As we move ahead, I assure you that our standards will only grow
                stronger, our mission more focused, and our impact deeper. Let
                us march forward together toward a future full of hope,
                opportunity, and shared prosperity.
              </span>
              <span className="block pt-4">With warm regards,</span>
              <span className="block pt-2">R. Premkumar</span>
              <span className="block pt-2">
                Chairman, BLM Society
              </span>
            </p>
          </div>
          <div className=" relative w-full h-[200px] sm:w-[50%] md:w-[40%] sm:h-[500px]">
            <Image
              src={"/assets/images/chairman-img.png"}
              alt="chairman"
              fill
              className="w-full object-cover sm:object-top"
              style={{
                objectPosition: "50% 16%",
              }}
              priority={true}
            />
          </div>
        </section>
      </main>

      {/* Chairman Section end */}

      <SectionDivision />

      {/* Service Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start sm:items-center justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
                Our Services
              </p>
              <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px] sm:w-[95%] lg:w[70%]">
                BLM Housing Cooperative Society is committed to providing
                quality housing services to our members. We strive to exceed our
                members&apos; expectations and provide an enjoyable and safe
                living experience
              </p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="service-custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="service-custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          <ServiceCarousel data={serviceData} />
        </section>
      </main>

      {/* Service Section end*/}

      <SectionDivision />

      {/* Our Projects Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
            Our Projects
          </p>
          <div className="flex w-full justify-between">
            <div className="flex gap-6">
              <button
                onClick={() => setProjectTab("kerala")}
                className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins  ${
                  projectTab === "kerala"
                    ? "border-b-[1px] border-accent_color text-black"
                    : "text-para_color"
                }`}
              >
                Kerala
              </button>
              <button
                onClick={() => setProjectTab("tamil")}
                className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins  ${
                  projectTab === "tamil"
                    ? "border-b-[1px] border-accent_color text-black"
                    : "text-para_color"
                }`}
              >
                Tamil Nadu
              </button>
              <button
                onClick={() => setProjectTab("pondi")}
                className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins  ${
                  projectTab === "pondi"
                    ? "border-b-[1px] border-accent_color text-black"
                    : "text-para_color"
                }`}
              >
                Pondicherry
              </button>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="project-custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="project-custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          {projectTab === "kerala" &&
            projectData.map((item, index) => {
              if (item.label === "Kerala") {
                return (
                  <ProjectCarousel
                    key={index}
                    data={projectData[index].slider}
                  />
                );
              }
            })}
          {projectTab === "tamil" &&
            projectData.map((item, index) => {
              if (item.label === "Tamilnadu") {
                return (
                  <ProjectCarousel
                    key={index}
                    data={projectData[index].slider}
                  />
                );
              }
            })}
          {projectTab === "pondi" &&
            projectData.map((item, index) => {
              if (item.label === "Pondichery") {
                return (
                  <ProjectCarousel
                    key={index}
                    data={projectData[index].slider}
                  />
                );
              }
            })}
        </section>
      </main>

      {/* Projects Section end */}

      <SectionDivision />

      {/* Loan Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="w-full flex flex-col gap-3">
            <div className="flex sm:flex-row flex-col gap-3 justify-start items-start">
              <div className="sm:w-[50%]">
                <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
                  Property Loans
                </p>
                <p className="text-[12px] sm:text-[14px] lg:text-[18px] font-poppins mt-3">
                  Now you can meet your property needs with BLM&apos;s property
                  loan. With our property loan, you may finally buy the property
                  of your dreams. Property loan is a mortgage loan provided by
                  BLM that offers a loan amount to buy a property. We offer
                  property loan to all of our members who meet the necessary
                  requirements in order to purchase the property of their
                  choice. So what are you waiting for? Become a BLM member and
                  fulfil your dream of buying a property.
                </p>
              </div>
              <div className="relative w-full h-[200px] sm:w-[50%] sm:h-[320px]">
                <Image
                  src="/assets/images/loan-img.jpeg"
                  alt=" pattern "
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <Link
                href={"/"}
                className="lg:text-[20px] flex items-center justify-center gap-2 text-accent_color font-poppins"
              >
                See more <BsArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Loan Section end */}

      <SectionDivision />

      {/* Testimonial Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="flex items-center justify-between sm:w-full">
            <div>
              <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
                What They Say
              </p>
              <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px] sm:w-[95%] lg:w[70%]">
                Hear the powerful voices and personal stories that highlight the
                impact of the BLM movement.
              </p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="testimonial-custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="testimonial-custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          <TestimonialCarousel data={testimonialData} />
        </section>
      </main>

      {/* Testimonial Section End*/}

      <SectionDivision />

      {/* News Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
            News
          </p>
          <div className="flex w-full justify-between">
            <div className="flex gap-6">
              <button
                onClick={() => setNewsTab("news")}
                className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
                  newsTab === "news"
                    ? " text-black border-b-[1px] border-accent_color"
                    : "text-para_color"
                }`}
              >
                News & Events
              </button>
              <button
                onClick={() => setNewsTab("award")}
                className={`text-[14px] sm:text-[20px] lg:text-[22px] font-poppins ${
                  newsTab === "award"
                    ? " text-black border-b-[1px] border-accent_color"
                    : "text-para_color"
                }`}
              >
                Awards & Rewards
              </button>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="news-custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="news-custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          {newsTab === "news" && <NewsCarousel data={newsData[0]} />}
          {newsTab === "award" && <NewsCarousel data={newsData[1]} />}
        </section>
      </main>

      {/* News Section End*/}

      <SectionDivision />

      {/* Videos section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div>
            <p className="relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px]">
              Videos
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="relative w-full h-[236px] sm:h-[372px] lg:h-[600px]">
              {videoData[0]?.url ? (
                <>
                  <div
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[0]?.url}`
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                  </div>
                  <video
                    loop
                    muted
                    className="w-full h-full object-cover z-3"
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[0]?.url}`
                      )
                    }
                  >
                    <source
                      src={`https://blm-cms.appii.space${videoData[0]?.url}`}
                      type="video/mp4"
                    />
                  </video>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-red-500 font-medium text-sm text-center text-[12px] sm:text-[14px] lg:text-[18px] font-poppins">
                  No Data Found ...
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-center gap-3">
              {videoData[1]?.url ? (
                <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                  <div
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[1]?.url}`
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                  </div>
                  <video
                    loop
                    muted
                    className="w-full h-full object-cover z-3"
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[1]?.url}`
                      )
                    }
                  >
                    <source
                      src={`https://blm-cms.appii.space${videoData[1]?.url}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
              {videoData[2]?.url ? (
                <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                  <div
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[2]?.url}`
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                  </div>
                  <video
                    loop
                    muted
                    className="w-full h-full object-cover z-3"
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[2]?.url}`
                      )
                    }
                  >
                    <source
                      src={`https://blm-cms.appii.space${videoData[2]?.url}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
              {videoData[3]?.url ? (
                <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                  <div
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[3]?.url}`
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                  </div>
                  <video
                    loop
                    muted
                    className="w-full h-full object-cover z-3"
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[3]?.url}`
                      )
                    }
                  >
                    <source
                      src={`https://blm-cms.appii.space${videoData[3]?.url}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
              {videoData[4]?.url ? (
                <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                  <div
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[4]?.url}`
                      )
                    }
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <IoPlayCircleOutline className="text-white text-7xl cursor-pointer" />
                  </div>
                  <video
                    loop
                    muted
                    className="w-full h-full object-cover z-3"
                    onClick={() =>
                      handleVideoClick(
                        `https://blm-cms.appii.space${videoData[4]?.url}`
                      )
                    }
                  >
                    <source
                      src={`https://blm-cms.appii.space${videoData[4]?.url}`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex justify-start sm:justify-center w-full">
            <Button
              border="1px solid #D7D7D7"
              bgColor="#F7F7F7"
              textColor="#CA943A"
              paddingX="20px"
              paddingY="12px"
              className="flex items-center justify-center gap-2"
              onClick={() => router.push("/gallery?tab=video_gallery")}
            >
              See more <BsArrowRight />
            </Button>
          </div>
        </section>
      </main>

      {/*  Inquiry Section */}

      <section className="w-full flex items-center justify-center p-6 py-10">
        <div className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <InquiryCard />
        </div>
      </section>

      {/* Footer Section */}
    </>
  );
};

export default Home;
