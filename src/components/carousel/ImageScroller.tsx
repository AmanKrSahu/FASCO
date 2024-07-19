"use client";

import Image from 'next/image';

const images = [
  "/Images/deals/img-1.png",
  "/Images/deals/img-2.png",
  "/Images/deals/img-3.png",
  "/Images/gallery/img-1.png",
  "/Images/gallery/img-2.png",
  "/Images/gallery/img-3.png",
  "/Images/gallery/img-4.png",
  "/Images/gallery/img-5.png",
  "/Images/gallery/img-6.png",
  "/Images/gallery/img-7.png",
];

const ImageScroller = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-72 h-72 m-2 rounded-lg shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="Top"
              className="rounded-lg"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
