import React, { useEffect, useRef } from "react";
import LazyImage from "../../components/LazyImage";

const Modal = ({ imageUrl, height, width, onClose }) => {
  const modalRef = useRef(null);

  const closeModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
    if (event.key === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    document.addEventListener("keydown", closeModal);
  }, []);

  return (
    // overlay
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black 
      bg-opacity-50 z-20 backdrop-blur-sm shadow-2xl shadow-black"
    >
      {/* modal card */}
      <div
        ref={modalRef}
        className="flex flex-col bg-[var(--background)] rounded-xl p-4 w-11/12 sm:w-3/4 lg:w-2/3 xl:w-2/5 sm:aspect-[12/10]"
      >
        <LazyImage
          src={imageUrl}
          alt="Certificate"
          height={height}
          width={width}
          className={`mx-auto rounded-lg ${
            height > width ? "max-sm:w-full sm:h-full" : "w-full"
          }`}
        />

        {/* close btn */}
        <button
          onClick={onClose}
          className="bg-[var(--primary)] text-[var(--background)] font-bold mx-auto py-2 px-4 rounded-md mt-4 cursor-[var(--cursor-pointer)] text-sm above-fold:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
