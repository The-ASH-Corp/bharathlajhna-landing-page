'use client'

import { useState } from "react";

const VideoModal = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null;
 const handleOverlayClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); 
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70"  onClick={handleOverlayClick}  >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 max-w-3xl relative"   onClick={stopPropagation} >
        <button
          className="text-black bg-white px-3 py-2 shadow-md rounded-full hover:bg-gray-300 absolute top-2 right-2 z-10"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="relative w-full h-0 pb-[56.25%]">
          <video
            autoPlay={true}
            className="absolute inset-0 w-full h-full"
            controls
            src={videoUrl}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
