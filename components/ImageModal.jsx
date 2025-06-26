"use client";

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleOverlayClick}  
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-3xl relative"
        onClick={stopPropagation} 
      >
         <button
          className="text-black bg-white px-3 py-2 shadow-md rounded-full hover:bg-gray-300 absolute top-2 right-2 z-10"
          onClick={onClose}
        >
          ✖
        </button>

         <div className="relative w-full h-auto p-2">
          <img
            src={imageUrl}
            alt="Full View"
            className="w-full h-[520px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
