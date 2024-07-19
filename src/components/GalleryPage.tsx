import Image from "next/image";
import React from "react";

type Props = {};

const GalleryPage = (props: Props) => {
  const images = [
    "/Images/gallery/img-1.png",
    "/Images/gallery/img-2.png",
    "/Images/gallery/img-3.png",
    "/Images/gallery/img-4.png",
    "/Images/gallery/img-5.png",
    "/Images/gallery/img-6.png",
    "/Images/gallery/img-7.png",
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-5xl font-volkhov font-bold">
          Follow Us On Instagram
        </span>
        <span className="text-zinc-400 text-sm w-100 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
      </div>
      <div className="flex mt-5 py-5 items-center">
        {images.map((imageUrl, index) => (
          <div key={index}>
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              width={index % 2 !== 0 ? 400 : 400}
              height={index % 2 !== 0 ? 300 : 600}
              className="shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
