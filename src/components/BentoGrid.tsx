import React from "react";
import Image from "next/image"; 
import { Button } from "./ui/button";

type Props = {};

const BentoGrid = (props: Props) => {
  return (
    <div className="container mx-auto px-5 py-5">
      <div className="grid grid-cols-12 gap-4">
        {/* Column 1 */}
        <div className="col-span-4 bg-gray-200 rounded-lg relative">
          <Image
            src="/Images/hero/img-left.png"
            alt="Hero Left"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
        </div>

        {/* Column 2 */}
        <div className="col-span-4 grid grid-rows-8 gap-4">
          <div className="row-span-2 bg-gray-200 rounded-lg relative">
            <Image
              src="/Images/hero/img-top.png"
              alt="Hero Top"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg"
            />
          </div>

          <div className="row-span-4 flex flex-col items-center justify-center gap-2">
            <p className="text-6xl font-bold text-zinc-800">Ultimate</p>
            <p className="text-9xl text-outline">SALE</p>
            <p className="text-1xl">New Collection</p>
            <Button className="w-36 rounded-full">SHOP NOW</Button>
          </div>

          <div className="row-span-2 bg-gray-200 rounded-lg relative">
            <Image
              src="/Images/hero/img-bottom.png"
              alt="Hero Bottom"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-span-4 bg-gray-200 rounded-lg relative">
          <Image
            src="/Images/hero/img-right.png"
            alt="Hero Right"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
