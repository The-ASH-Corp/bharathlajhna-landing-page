import Footer from "@/components/Footer"
import InquiryCard from "@/components/InquiryCard"
import NavBar from "@/components/NavBar"
import ServiceClient from "@/components/ServiceClient"
import SectionDivision from "@/components/ui/SectionDivision"
import Title from "@/components/ui/Title"
import Image from "next/image"


export const metadata = {
  title: "BLM - Services",
};

const Service = () => {


  return (
    <>
      

      <main className="relative w-full h-[80vh]">
        <Image
          alt="Service hero"
          src={"/assets/images/service-img-2.png"}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col items-center justify-center w-full">
        <section className="flex flex-col items-start justify-start p-6 lg:max-w-[1290px]">
          <Title>Our Services</Title>
          <p className="font-poppins text-sm text-para_color mt-2 border-b pb-6">
            We are a self-governing group of individuals who work together as
            members of a jointly owned business in South India to achieve our
            common social and cultural needs and objectives.
          </p>
        </section>

    <ServiceClient/>

      </main>
      <SectionDivision/>
      <main className="w-full flex items-center justify-center">

      <section className="w-full flex flex-col items-start justify-start p-6 lg:max-w-[1290px] my-6 mt-20">
        <InquiryCard />
      </section>
      </main>

     
    </>
  );
}

export default Service