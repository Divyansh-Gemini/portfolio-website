import React from "react";

const AchievementCard = ({
  title = "",
  subtitle = "",
  issuer = "",
  image = "",
  monthYear = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-2 items-center cursor-[var(--cursor-pointer)] border rounded-xl border-[var(--gray)]
        duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-gray-900 p-2"
    >
      <div className="max-md:w-1/4 aspect-square h-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="md:w-24 h-full rounded-xl"
        />
      </div>

      {/* achievement info */}
      <div className="flex flex-col  max-md:w-3/4">
        <span className="font-bold text-xs above-fold:text-sm sm:text-xl text-wrap">
          {title}
        </span>
        {subtitle && (
          <span className="text-xs above-fold:text-xs sm:text-lg text-wrap">
            {subtitle}
          </span>
        )}
        <span className="text-[0.6rem] above-fold:text-xs sm:text-base text-[var(--gray)]">{`${issuer}`}</span>
        <span className="text-[0.6rem] above-fold:text-xs sm:text-base text-[var(--gray)]">{`${monthYear}`}</span>
      </div>
    </div>
  );
};

export default AchievementCard;
