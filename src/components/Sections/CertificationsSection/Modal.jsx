import React, { useRef } from "react";

const Modal = ({ imageUrl, onClose }) => {
  const modalRef = useRef(null);

  const handleCloseOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };

  React.useEffect(
    () => document.addEventListener("mousedown", handleCloseOutsideClick),
    []
  );

  return (
    // overlay
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black 
      bg-opacity-50 z-20 backdrop-blur-sm shadow-2xl shadow-black"
    >
      {/* modal card */}
      <div
        ref={modalRef}
        className="flex flex-col bg-[var(--background)] rounded-xl p-4 w-11/12 sm:w-3/4 xl:w-2/5 sm:aspect-[12/10]"
      >
        {/* certificate image */}
        <img
          loading="lazy"
          src={imageUrl}
          alt="Certificate"
          className="xxxxlg:h-96 xxxxw-fit h-full mx-auto rounded-lg"
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
