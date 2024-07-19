import React from "react";
import Image from "next/image";

type Props = {};

const logos = [
  "/Images/logo/chanel.png",
  "/Images/logo/louis-vuitton.png",
  "/Images/logo/prada.png",
  "/Images/logo/calvin-klein.png",
  "/Images/logo/denim.png",
];

const LogoCarousel = (props: Props) => {
  return (
    <div className="container mx-auto px-5 py-5">
      <div className="relative h-[80px] overflow-hidden">
        <div className="absolute top-0 left-0 flex gap-x-10 animate-scroll">
          {logos.concat(logos).map((src, index) => (
            <div key={index} className="flex-none w-[200px] h-[80px]">
              <Image
                src={src}
                alt={`Image ${index}`}
                layout="responsive"
                width={180}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
