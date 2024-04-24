import Icon from "@mdi/react";
import React, { useEffect, useRef, useState } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const ProjectModal = ({
  viewContentType,
  viewContent,
  isMultipleViewContent,
  onClose,
}) => {
  const modalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") handleNext();
    if (event.key === "ArrowLeft") handlePrev();
    if (event.key === "Escape") onClose();
  };

  const closeModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    // overlay
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 z-20 backdrop-blur-sm shadow-2xl shadow-black">
      {/* modal card */}
      <div
        ref={modalRef}
        className="fixed m-auto flex flex-col max-md:gap-2 justify-between items-center bg-[var(--background)] rounded-xl p-4 w-11/12 sm:w-3/4 lg:w-2/3 xl:w-2/5 xl:h-3/4 sm:aspect-[12/10] lg:aspect-square"
      >
        {/* image & prev-next btn */}
        <div className="flex h-[90%] w-full justify-center items-center">
          {/* prev btn */}
          {isMultipleViewContent && (
            <Icon
              path={mdiChevronLeft}
              color="white"
              title="Previous"
              className="absolute left-0 lg:left-1 top-1/2 transform -translate-y-1/2 cursor-[var(--cursor-pointer)] h-5 above-fold:h-8 lg:h-10"
              onClick={handlePrev}
            />
          )}

          {/* content */}
          <div className="flex justify-center items-center h-full above-fold:max-lg:w-11/12">
            {/* for image */}
            {viewContentType === "Image" && (
              <img
                loading="lazy"
                src={content[currentIndex]}
                alt="Certificate"
                className="mx-auto rounded-lg object-contain w-full sm:h-full"
              />
            )}

            {/* for YouTube view */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${viewContent}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl max-md:w-full"
            />
          </div>

          {/* next btn */}
          {isMultipleViewContent && (
            <Icon
              path={mdiChevronRight}
              color="white"
              title="Next"
              className="absolute right-0 lg:right-1 top-1/2 transform -translate-y-1/2 cursor-[var(--cursor-pointer)] h-5 above-fold:h-8 lg:h-10"
              onClick={handleNext}
            />
          )}
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

export default ProjectModal;
