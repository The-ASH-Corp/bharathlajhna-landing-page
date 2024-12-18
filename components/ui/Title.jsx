import Image from "next/image"



const Title = ({ children,className }) => {
  return (
    <>
        <h1 className={`relative inline-block font-allenoire text-[18px] sm:text-[24px] lg:text-[28px] ${ className }`}>
              { children }
              <Image
                src={"/assets/icons/text-decoration-pattern.svg"}
                alt="text decoration pattern"
                width={100}
                height={100}
                className="absolute top-[-10px] right-[-13px] w-[20px] lg:w-[30px] lg:top-[-13px] lg:right-[-18px]"
              />
            </h1>
    </>
  )
}

export default Title