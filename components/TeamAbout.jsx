'use client'

import { ABOUT_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import AboutTeamCarousel from "./AboutTeamCarousel";
import AboutTeamCard from "./ui/AboutTeamCard";
import Button from "./ui/Button";
import Title from "./ui/Title";


const TeamAbout = () => {
    const { loading, error, data } = useStrapi("/api/about-page", ABOUT_QUERY)

    const [ teamDatas, setTeamDatas ] = useState([])


    useEffect(()=>{
        data?.data?.teamData?.map((item)=>{
            setTeamDatas((prev)=>([
                ...prev,
                {
                    title:item.title,
                    designation:item.description,
                    image:`https://blm-cms.appii.space${item.image.url}`
                }
            ]))
        })
    },[data])

    const teamData = [
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-1.png"
        },
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-2.png"
        },
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-3.png"
        }
        ,
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-2.png"
        }
        ,
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-3.png"
        },
        {
          title: "Mr. N. Karunamoorthy",
          designation: "Vice President",
          image: "/assets/images/team-img-1.png"
        }
      ]

  return (
    <>
      {/* <main className="flex sm:hidden flex-col sm:flex-row items-start justify-center gap-7 w-full lg:max-w-[1290px]">
        <div>
          <Title>Meet Our Team</Title>
          <p className="font-poppins text-sm text-para_color">
            We Have The Best Team To Give You The Best Services Ever.
          </p>
        </div>

        <div className="w-full flex-wrap gap-3 flex items-center justify-center">
          {teamDatas.map((data, index) => (
            <AboutTeamCard
              key={index}
              image={data.image}
              title={data.title}
              designation={data.designation}
            />
          ))}
        </div>
      </main> */}

      <main className="flex w-full items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="flex items-center justify-between sm:w-full">
            <div>
              <Title>Meet Our Team</Title>
              <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px] sm:w-[95%] lg:w[70%]">
                We Have The Best Team To Give You The Best Services Ever.
              </p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          {
            loading ? (
                <main className="flex items-center justify-center w-full h-[300px]">
                    <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
                </main>
            ):(
                <AboutTeamCarousel teamData={teamDatas} />
            )
          }
        </section>
      </main>
    </>
  );
};

export default TeamAbout;
