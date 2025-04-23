'use client'

import { ABOUT_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import TeamAbout from "./TeamAbout";
import AboutCard from "./ui/AboutCard";
import AboutCard2 from "./ui/AboutCard2";
import Title from "./ui/Title";


const AboutMain = () => {

    const { data, loading, error } = useStrapi("/api/about-page", ABOUT_QUERY)

  const aboutCardData = [
    {
      title: "Delivering The Best",
      description: "We commit to providing top-notch services.",
      icon: "/assets/icons/about-card-icon-1.svg",
    },
    {
      title: "Affordable Price",
      description: "Ensuring cost-effectiveness is key to our approach.",
      icon: "/assets/icons/about-card-icon-2.svg",
    },
    {
      title: "Trust Transparency",
      description:
        "We maintain open and honest communication with our members.",
      icon: "/assets/icons/about-card-icon-3.svg",
    },
    {
      title: "Time Bound",
      description: "Adhering to schedules is essential for our success.",
      icon: "/assets/icons/about-card-icon-4.svg",
    },
  ];

  const howWeDifferData = [
    'Extending our hands in connecting "hearts" and making homes instead of houses',
    "Once a BLM member, always a lifetime member",
    "We Wholeheartedly Welcome You To Our BLM Family. Join Us And Become A BLM Member Now",
  ];

  const whyCooseData = [
    "Fully focused on member welfare",
    "Sophisticated facilities (or) Cosy amenities",
    "Serene living conditions",
    "Expert management and administration",
    "Financial assistance",
  ];

  return (
    <>
     
      <section className="p-6 py-10 flex flex-col justify-center items-center gap-10">
        <main className="flex flex-col items-start justify-center gap-2 w-full lg:max-w-[1290px]">
          <Title>About BLM Society</Title>
          <p className="font-poppins text-[20px] font-semibold text-gray-700">A Legacy of 21 Years. A Future of Possibilities.</p>
          {/* <p className="font-poppins text-para_color text-sm text-justify">
            {data?.data?.description !== null &&
            data?.data?.description.length > 0
              ? data?.data?.description
              : "We are a self-governing group of individuals who work together as members of a jointly owned business in South India to achieve our common social and cultural needs and objectives. Our primary goal is to raise the members of our BLM family by offering services, jobs, and other opportunities."}
          </p> */}
          <p className="font-poppins text-para_color text-sm ">Founded on 24th February 2006, BLM Society has grown into one of India’s largest and most trusted multistate cooperative societies, completing a remarkable 20 years of service and stepping proudly into its 21st year of operations. What began as a modest vision to uplift lives through collective growth has today blossomed into a dynamic movement that touches thousands of lives across South India.

          <span className="hidden sm:inline-block pt-4 text-justify">BLM’s journey is one of resilience, vision, and unwavering commitment to community development. Over the past two decades, we have consistently set benchmarks in sectors like land and housing development, transport, education, civil supplies, jewellery retail, and even sustainable energy with South India’s first compressed biogas plant.</span>

          <span className="hidden sm:inline-block pt-4 text-justify">Our excellence and integrity have been recognized nationally. BLM is a proud recipient of the ‘Swadesh Samman’ Award—honouring us as one of the best multistate cooperative societies in India, among several other prestigious accolades that underscore our dedication and impact.</span>

          <span className="hidden sm:inline-block pt-4 text-justify">At the heart of our success stands our visionary Chairman, Mr. R. Premkumar—a respected leader whose dynamic leadership, deep-rooted values, and compassionate approach continue to guide the Society’s growth. His foresight has transformed BLM from a grassroots initiative into a socio-economic powerhouse.</span>

          <span className="hidden sm:inline-block pt-4 text-justify">We believe in people over profit, values over valuation. As a self-governing collective, we aim to create opportunities, provide meaningful employment, and build a better tomorrow for all our members. BLM is more than an organization—it is a family, a movement, and a shared dream in motion.</span></p>
        </main>
        <div className="w-full flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row items-center justify-center gap-4 lg:max-w-[1290px]">
          {aboutCardData.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
        <main className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1000px]">
          <div className="mt-6 flex flex-col w-full justify-start items-start">
            <Title>How We Differ From Others</Title>
            <ul className="font-poppins text-black text-base flex flex-col gap-3 mt-4 lg:text-base">
              {howWeDifferData.map((data, index) => (
                <li
                  className="flex gap-3 justify-start items-start text-sm lg:text-base"
                  key={index}
                >
                  <Image
                    src={"/assets/icons/about-star.svg"}
                    alt="icons"
                    width={15}
                    height={15}
                    priority={true}
                  />
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col w-full justify-end items-end">
            <div>
              <Title>Why Choose US</Title>
              <ul className="font-poppins text-black text-base flex flex-col gap-3 mt-4 lg:text-base">
                {whyCooseData.map((data, index) => (
                  <li
                    className="flex gap-3 justify-start items-start text-sm lg:text-base"
                    key={index}
                  >
                    <Image
                      src={"/assets/icons/about-star.svg"}
                      alt="icons"
                      width={15}
                      height={15}
                      priority={true}
                    />
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <main className="flex flex-col sm:flex-row items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <AboutCard2
            bgColor={"#CADFDA"}
            icon={"/assets/icons/about-card2-icon-1.svg"}
            title={"Our Vision"}
            description={
              '"Home For All" empowers performance and unlocks potential, creating an environment where everyone thrives and achieves their best. Join us in fostering growth and maximizing success.'
            }
            textColor={"#287E6A"}
          />

          <AboutCard2
            bgColor={"#CA943A33"}
            icon={"/assets/icons/about-card2-icon-2.svg"}
            title={"Our Mission"}
            description={
              'Eradicate poverty and provide food and shelter for all by drawing strength from ability.'
            }
            textColor={"#CA943A"}
          />
        </main>

        <TeamAbout />
      </section>
    </>
  );
};

export default AboutMain;
