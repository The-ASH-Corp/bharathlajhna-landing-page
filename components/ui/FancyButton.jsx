'use client'


const FancyButton = ({ name, onClick }) => {
  return (
    <>
      <div className="relative w-[105px] sm:w-[177px] lg:w-[250px] h-[35px] sm:h-[59px] lg:h-[83px] bg-primary_color overflow-hidden flex items-center justify-center" onClick={onClick}>
        <h1 className="text-accent_color font-poppins text-[12px] sm:text-[17px] lg:text-[24px]">
            { name }
        </h1>
        <i className="bg-[#f1f1f1] absolute p-[6px] sm:p-[8px] lg:p-[10px] rounded-full top-[-8px] right-[-8px]"></i>
        <i className="bg-[#f1f1f1] absolute p-[6px] sm:p-[8px] lg:p-[10px] rounded-full top-[-8px] left-[-8px]"></i>
        <i className="bg-[#f1f1f1] absolute p-[6px] sm:p-[8px] lg:p-[10px] rounded-full bottom-[-8px] right-[-8px]"></i>
        <i className="bg-[#f1f1f1] absolute p-[6px] sm:p-[8px] lg:p-[10px] rounded-full bottom-[-8px] left-[-8px]"></i>
      </div>
    </>
  );
}

export default FancyButton