import InquiryCard from "@/components/InquiryCard";
import SectionDivision from "@/components/ui/SectionDivision";
import Title from "@/components/ui/Title";
import Image from "next/image";



export const metadata = {
  title: "BLM - Loans",
};


const Loans = () => {
  return (
    <>
    

      <main className="relative w-full h-[80vh]">
        <Image
          alt="Service hero"
          src={"/assets/images/loan-img.jpeg"}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="w-full absolute top-0 left-0 object-cover object-center"
        />
      </main>

      <main className="flex flex-col  justify-center w-full mb-10 lg:mb-20">
        <section className=" p-6 ">
          <Title>Loans</Title>
          <p className="font-poppins text-sm text-para_color mt-2">
            &quot;Browse through our curated gallery of moments and milestones.
            Discover the essence of what we do.&quot;
          </p>
        </section>

        <SectionDivision/>

        <section className=" flex flex-col  justify-center p-6 lg:max-w-[1290px] lg:flex-row lg:gap-5 lg:my-16 mx-auto">
          <div className="relative w-full h-48 lg:h-96 lg:w-1/2">
            <Image
            alt="loans"
            src={"/assets/images/loans-img.png"}
            fill
            quality={85}
            className="w-full h-full object-cover object-center"/>
          </div>
          <div className=" lg:w-1/2">
            <Title>Property Loans</Title>
            <p className="font-poppins text-xl text-para_color mt-2 pb-6">
              Now you can meet your property needs with BLM’s property loan.
              With our property loan, you may finally buy the property of your
              dreams. Property loan is a mortgage loan provided by BLM that
              offers a loan amount to buy a property. We offer property loan to
              all of our members who meet the necessary requirements in order to
              purchase the property of their choice. So what are you waiting
              for? Become a BLM member and fulfil your dream of buying a
              property.
            </p>
          </div>
        </section>

        <SectionDivision/>
        <section className="w-full flex flex-col items-start justify-start p-6 lg:max-w-[1290px] mt-20 mb-10 mx-auto">
          <InquiryCard />
        </section>

      </main>


     
    </>
  );
}

export default Loans