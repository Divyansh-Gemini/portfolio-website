import React, { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import imageHashes from "../data/imageHashes.json";

const LazyImage = ({
  src,
  alt = "image",
  height = 100,
  width = 100,
  className = "",
}) => {
  const hash = imageHashes[src];
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);

    const image = new Image();
    image.src = `/assets/images/${src}`;
    image.onload = () => setImageLoaded(true);
    image.onerror = (error) => console.log("Error loading image: ", error);
  }, [src]);

  return (
    <>
      <div
        className={`${
          imageLoaded ? "hidden" : "inline"
        } transition-opacity duration-1000`}
      >
        <BlurhashCanvas
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={`${className}`}
        />
      </div>

      <img
        src={`/assets/images/${src}`}
        alt={alt}
        className={`${
          !imageLoaded ? "hidden" : "inline"
        } transition-opacity duration-1000 ${className}`}
      />
    </>
  );
};

export default LazyImage;
