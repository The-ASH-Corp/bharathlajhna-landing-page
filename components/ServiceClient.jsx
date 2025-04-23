// "use client";

// import { SERVICE_QUERY } from "@/constants/strapiQueries";
// import useStrapi from "@/hooks/useStrapi";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import Title from "./ui/Title";

// const ServiceClient = () => {
//   const [serviceData, setServiceData] = useState([]);
//   const { loading, error, data } = useStrapi(
//     "/api/service-page",
//     SERVICE_QUERY
//   );
//   console.log("service data : ", data);

//   useEffect(() => {
//     data?.data?.services.map((item) => {
//       setServiceData((prev) => [
//         ...prev,
//         {
//           title: item.title,
//           description: item.description,
//           image: item?.file?.url,
//         },
//       ]);
//     });
//   }, [data]);

//   // const serviceData = [
//   //     {
//   //       title: "Land Development",
//   //       description:"Land development under BLM renders wholesome economic development to the members of thesociety and improves their standard of living. BLM transforms unused land in strategic locations intoprofitable ventures after launching commercial projects such as shopping malls, malls, warehouses, farms, etc. based on the feasibility studies and the burgeoning demand for the proposed projects.",
//   //       image:"/assets/images/services/service-img-1.png"
//   //     },
//   //     {
//   //       title: "Housing Development",
//   //       description:"Having a roof over the head is a dream for many. BLM helps members to fulfill this dream by providing affordable homes. It identifies suitable residential locations, acquire them and develops houses, villas, apartments, or individual bungalows according to the requirements and needs. It has experienced personnel to take care of the planning, designing, and execution of the projects as envisioned and to deliver them on time",
//   //       image:"/assets/images/services/service-img-2.png"
//   //     },
//   //     {
//   //       title: "BLM Transports",
//   //       description:"This is a comprehensive passenger bus service connecting major cities in South India assuring improved safety, reliable schedules, and peaceful journey. In order to ensure a comfortable travel experience, BLM will introduce the latest intelligent vehicle management system and reliable technology options to track and ensure easy mobility with increased passenger safety",
//   //       image:"/assets/images/services/service-img-3.png"
//   //     },
//   //     {
//   //       title: "Civil Supplies",
//   //       description:"Civil Supplies Service is an important service segment under BLM which supplies essential commodities to the various state governments for public distribution. BLM makes sure to procure essential items from the producers directly eliminating the middlemen so that it can supply the necessary items at a much-reduced price on time at places required by the clients",
//   //       image:"/assets/images/services/service-img-4.jpeg"
//   //     },
//   //     {
//   //       title: "BLM Jewellery",
//   //       description:"There is hardly anyone who doesn’t like gold, silver, platinum, or diamond either as fine jewellery  or as an investment. The fine jewellery  business is a lucrative business option as the demand for jewelry is ever-increasing and the industry growth is always steady.BLM plans to open two jewelry outlets in the first stage, the first one in Thrissur, Kerala, and the second one in Chennai,Tamilnadu. BLM members will be able to enjoy great benefits with the opening of these outlets since they can buy the ornaments with zero making charges under the applicable schemes",
//   //       image:"/assets/images/services/service-img-5.png"
//   //     },
//   //     {
//   //       title: "BLM College",
//   //       description:"BLM is very much keen on developing educational institutions which pursue the purest and scientific form of learning, at all levels. In tune with this earnest mission, BLM has decided to establish schools, colleges and other educational institutions across South India, either building its own infrastructure or taking over the existing ones.BLM wishes to establish educational institutions with global infrastructural facilities and inspiring learning environment, and impart value-based education that mould empowered and responsible future generation. Rooted in strong discipline learning at BLM institution will sure to give every learner outstanding experience.",
//   //       image:"/assets/images/services/service-img-6.png"
//   //     },
//   //     {
//   //       title: "Cement Factory",
//   //       description:"The increasing cost of construction materials, especially cement, is a major obstacle in the entire construction industry. The cement industry has had a skyrocketing price increase for the past few years and as per the industry insight the trend is set to remain the same in the future also. BLM, being in the housing and land development, took it as a positive cue to invest in thecement industry, so that, it can utilize the cement manufactured at its own plants for its own construction without depending on outside markets.As BLM is manufacturing cement sufficiently for its own projects it can enjoy the benefit of overall cost reduction in the construction. Today BLM owns 2 cement brands- Euro-Tech and Vishnu Chakra Cements- of Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC) and theplants are located in Uthukottai (Andhra Pradesh) and Kanjikode (Kerala)",
//   //       image:"/assets/images/services/service-img-7.png"
//   //     },
//   //     {
//   //       title: "South India’s first compressed biogas plant",
//   //       description:"Biogas plants are  the best method for producing eco friendly gases.BLM society is putting up a domestic fuel for the future.",
//   //       image:"/assets/images/services/service-img-8.png"
//   //     },

//   //   ]

//   return (
//     <>
//       {loading ? (
//         <main className="relative w-full h-[70vh] flex items-center justify-center">
//           <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
//         </main>
//       ) : (
//         <section className="w-full flex flex-col items-start justify-start p-6 lg:max-w-[1290px] gap-6 lg:gap-20 my-20">
//           {serviceData.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:gap-12"
//             >
//               <div
//                 className={`hidden lg:flex flex-col gap-2 items-start justify-start lg:w-1/2 ${
//                   index % 2 === 1 ? "order-1" : ""
//                 } `}
//               >
//                 <Title>{item.title}</Title>
//                 <p>Turning Land into Opportunity</p>
//                 <p className="font-poppins text-para_color leading-relaxed text-base">
//                   {item.description}
//                 </p>
//               </div>
//               <div className="relative w-full h-[200px] lg:w-1/2 lg:h-[400px]">
//                 <p className="text-white text-xl absolute bottom-4 left-4 font-allenoire z-30 lg:hidden">
//                   {item.title}
//                 </p>
//                 <Image
//                   src={`https://blm-cms.appii.space${item.image}`}
//                   alt="Services"
//                   fill
//                   priority
//                   sizes="100vw"
//                   quality={90}
//                   className="w-full object-cover object-center"
//                 />
//               </div>
//             </div>
//           ))}
//         </section>
//       )}
//     </>
//   );
// };

// export default ServiceClient;






"use client";

import { SERVICE_QUERY } from "@/constants/strapiQueries";
import useStrapi from "@/hooks/useStrapi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Title from "./ui/Title";

const ServiceClient = () => {
  const [serviceData, setServiceData] = useState([]);
  const { loading, error, data } = useStrapi(
    "/api/service-page",
    SERVICE_QUERY
  );
  console.log("service data : ", data);

  // useEffect(() => {
  //   data?.data?.services.map((item) => {
  //     setServiceData((prev) => [
  //       ...prev,
  //       {
  //         title: item.title,
  //         description: item.description,
  //         image: item?.file?.url,
  //       },
  //     ]);
  //   });
  // }, [data]);
  useEffect(() => {
    const updatedData =
      data?.data?.services?.map((item, index) => {
        const subtitleMap = {
          "Land Development": "Transforming land into profit",
          "Housing Development": "Affordable Homes. Unshakable Trust",
          "BLM Transports": "Your Journey, Our Commitment",
          "Civil Supplies": "Delivering Essentials with Purpose and Precision",
          "BLM Jewellery": "Elegance. Investment. Trust.",
          "BLM College": "Moulding Minds. Building Leaders",
          "Cement Factory": "Building the Future, One Block at a Time",
          "Biogas Plant": "Green Energy for a Greener Tomorrow",
        };
  
        return {
          title: item.title,
          description: item.description,
          image: item?.file?.url,
          subtitle: subtitleMap[item.title] || "Turning Land into Opportunity", // default fallback
        };
      }) || [];
  
    setServiceData(updatedData);
  }, [data]);
  

  // const serviceData = [
  //     {
  //       title: "Land Development",
  //       description:"Land development under BLM renders wholesome economic development to the members of thesociety and improves their standard of living. BLM transforms unused land in strategic locations intoprofitable ventures after launching commercial projects such as shopping malls, malls, warehouses, farms, etc. based on the feasibility studies and the burgeoning demand for the proposed projects.",
  //       image:"/assets/images/services/service-img-1.png"
  //     },
  //     {
  //       title: "Housing Development",
  //       description:"Having a roof over the head is a dream for many. BLM helps members to fulfill this dream by providing affordable homes. It identifies suitable residential locations, acquire them and develops houses, villas, apartments, or individual bungalows according to the requirements and needs. It has experienced personnel to take care of the planning, designing, and execution of the projects as envisioned and to deliver them on time",
  //       image:"/assets/images/services/service-img-2.png"
  //     },
  //     {
  //       title: "BLM Transports",
  //       description:"This is a comprehensive passenger bus service connecting major cities in South India assuring improved safety, reliable schedules, and peaceful journey. In order to ensure a comfortable travel experience, BLM will introduce the latest intelligent vehicle management system and reliable technology options to track and ensure easy mobility with increased passenger safety",
  //       image:"/assets/images/services/service-img-3.png"
  //     },
  //     {
  //       title: "Civil Supplies",
  //       description:"Civil Supplies Service is an important service segment under BLM which supplies essential commodities to the various state governments for public distribution. BLM makes sure to procure essential items from the producers directly eliminating the middlemen so that it can supply the necessary items at a much-reduced price on time at places required by the clients",
  //       image:"/assets/images/services/service-img-4.jpeg"
  //     },
  //     {
  //       title: "BLM Jewellery",
  //       description:"There is hardly anyone who doesn’t like gold, silver, platinum, or diamond either as fine jewellery  or as an investment. The fine jewellery  business is a lucrative business option as the demand for jewelry is ever-increasing and the industry growth is always steady.BLM plans to open two jewelry outlets in the first stage, the first one in Thrissur, Kerala, and the second one in Chennai,Tamilnadu. BLM members will be able to enjoy great benefits with the opening of these outlets since they can buy the ornaments with zero making charges under the applicable schemes",
  //       image:"/assets/images/services/service-img-5.png"
  //     },
  //     {
  //       title: "BLM College",
  //       description:"BLM is very much keen on developing educational institutions which pursue the purest and scientific form of learning, at all levels. In tune with this earnest mission, BLM has decided to establish schools, colleges and other educational institutions across South India, either building its own infrastructure or taking over the existing ones.BLM wishes to establish educational institutions with global infrastructural facilities and inspiring learning environment, and impart value-based education that mould empowered and responsible future generation. Rooted in strong discipline learning at BLM institution will sure to give every learner outstanding experience.",
  //       image:"/assets/images/services/service-img-6.png"
  //     },
  //     {
  //       title: "Cement Factory",
  //       description:"The increasing cost of construction materials, especially cement, is a major obstacle in the entire construction industry. The cement industry has had a skyrocketing price increase for the past few years and as per the industry insight the trend is set to remain the same in the future also. BLM, being in the housing and land development, took it as a positive cue to invest in thecement industry, so that, it can utilize the cement manufactured at its own plants for its own construction without depending on outside markets.As BLM is manufacturing cement sufficiently for its own projects it can enjoy the benefit of overall cost reduction in the construction. Today BLM owns 2 cement brands- Euro-Tech and Vishnu Chakra Cements- of Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC) and theplants are located in Uthukottai (Andhra Pradesh) and Kanjikode (Kerala)",
  //       image:"/assets/images/services/service-img-7.png"
  //     },
  //     {
  //       title: "South India’s first compressed biogas plant",
  //       description:"Biogas plants are  the best method for producing eco friendly gases.BLM society is putting up a domestic fuel for the future.",
  //       image:"/assets/images/services/service-img-8.png"
  //     },

  //   ]

  return (
    <>
      {loading ? (
        <main className="relative w-full h-[70vh] flex items-center justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-gray-500 text-7xl" />
        </main>
      ) : (
        <section className="w-full flex flex-col items-start justify-start p-6 lg:max-w-[1290px] gap-6 lg:gap-20 my-20">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:gap-12"
            >
              <div
                className={`hidden lg:flex flex-col gap-2 items-start justify-start lg:w-1/2 ${
                  index % 2 === 1 ? "order-1" : ""
                } `}
              >
                <Title>{item.title}</Title>
                <p className="font-poppins font-semibold">{item.subtitle}</p>
                 <p className="font-poppins text-para_color leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
              <div className="relative w-full h-[200px] lg:w-1/2 lg:h-[400px]">
                <p className="text-white text-xl absolute bottom-4 left-4 font-allenoire z-30 lg:hidden">
                  {item.title}
                </p>
                <Image
                  src={`https://blm-cms.appii.space${item.image}`}
                  alt="Services"
                  fill
                  priority
                  sizes="100vw"
                  quality={90}
                  className="w-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ServiceClient;
