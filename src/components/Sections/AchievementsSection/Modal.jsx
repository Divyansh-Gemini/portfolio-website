import Icon from "@mdi/react";
import React, { useRef, useState } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const Modal = ({ images, onClose }) => {
  const modalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCloseOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };

  React.useEffect(
    () => document.addEventListener("mousedown", handleCloseOutsideClick),
    []
  );

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    // overlay
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-20 backdrop-blur-sm shadow-2xl shadow-black">
      {/* modal card */}
      <div
        ref={modalRef}
        className="fixed m-auto flex flex-col max-md:gap-2 justify-between items-center bg-[var(--background)] rounded-xl p-4 w-11/12 sm:w-3/4 xl:h-3/4 sm:aspect-[12/10] lg:w-3/4 lg:aspect-square"
      >
        {/* image & prev-next btn */}
        <div className="flex h-[90%] w-full justify-center items-center">
          <Icon
            path={mdiChevronLeft}
            color="white"
            title="Previous"
            className="absolute left-0 lg:left-1 top-1/2 transform -translate-y-1/2 cursor-[var(--cursor-pointer)] h-5 above-fold:h-8 lg:h-10"
            onClick={handlePrev}
          />
          <div className="h-full above-fold:max-lg:w-11/12">
            <img
              loading="lazy"
              src={images[currentIndex]}
              alt="Certificate"
              className="mx-auto rounded-lg object-contain w-full sm:h-full"
            />
          </div>
          <Icon
            path={mdiChevronRight}
            color="white"
            title="Next"
            className="absolute right-0 lg:right-1 top-1/2 transform -translate-y-1/2 cursor-[var(--cursor-pointer)] h-5 above-fold:h-8 lg:h-10"
            onClick={handleNext}
          />
        </div>

        {/* close btn */}
        <button
          onClick={onClose}
          className="bg-[var(--primary)] text-[var(--background)] font-bold w-fit py-2 px-4 rounded-md cursor-[var(--cursor-pointer)] text-sm above-fold:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
