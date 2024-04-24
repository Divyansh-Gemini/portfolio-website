import React from "react";
import LazyImage from "../../components/LazyImage";

const CertificationCard = ({ title, issuer, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-2 md:gap-5 items-center cursor-[var(--cursor-pointer)] border rounded-xl border-[var(--gray)]
        duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-gray-900"
    >
      <div className="max-md:w-1/4 aspect-square h-full">
        {/* issuer logo */}
        <LazyImage
          src={image}
          alt={title}
          className="md:w-24 h-full rounded-xl"
        />
      </div>

      {/* certification info */}
      <div className="flex flex-col md:max-lg:gap-2 max-md:w-3/4">
        <span className="text-xs above-fold:text-sm sm:text-xl text-wrap">
          {title}
        </span>
        <span className="text-[0.6rem] above-fold:text-xs sm:text-base">{`${issuer}`}</span>
      </div>
    </div>
  );
};

export default CertificationCard;
