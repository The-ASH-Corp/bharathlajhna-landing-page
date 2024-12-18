'use client'


const NewsCard = ({ imageUrl, newsParagraph }) => {
  return (
    <>
      <div className="group relative transition-all duration-300 hoverw-[190px] w-[120px] sm:w-[219px] lg:w-[360px] sm:hoverw-[468px] h-[173px] sm:h-[365px] lg:h-[600px] lg:hoverw-[700px] flex justify-start items-end p-2 overflow-hidden hover:z-50"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <p className="text-white font-poppins opacity-0 text-[9px] sm:text-[15px] lg:text-[20px] w-[150px] sm:w-[270px] lg:w-[300px] absolute bottom-3 lg:bottom-8 left-0 lg:left-8 group-hover:opacity-[1] group-hover:left-2 sm:group-hover:left-6 z-10 transition-all duration-300">
          {
            newsParagraph
          }
        </p>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[black] to-[transparent] opacity-[0] group-hover:opacity-[.7] transition-all duration-300 z-0"></div> 
      </div>
    </>
  );
}

export default NewsCard