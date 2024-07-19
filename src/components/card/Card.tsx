import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  imageSrc: string;
  productName: string;
  rating: number;
  productDetails: string;
  review: string;
  amount: string;
  sold: string;
};

const Card = ({
  imageSrc,
  productName,
  rating,
  productDetails,
  review,
  amount,
  sold,
}: Props) => {
  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={productName}
        width={400}
        height={250}
        className="px-5 py-5"
      />

      <div className="px-5 flex justify-between items-center">
        <div className="text-xl">{productName}</div>
        <div className="flex items-center">
          {[...Array(5)].map((star, index) => {
            return (
              <FaStar
                key={index}
                className={index < rating ? "text-orange-600" : "text-gray-300"}
              />
            );
          })}
        </div>
      </div>

      <div className="px-5 py-0 flex justify-between items-start">
        <div className="text-zinc-400 text-xs">{productDetails}</div>
      </div>

      <div className="px-5 py-5 flex justify-between items-start">
        <div className="text-zinc-400 text-sm">{review}</div>
      </div>

      <div className="px-5 pb-5 flex justify-between items-center">
        <div className="text-xl font-semibold">{amount}</div>
        <div className="flex text-red-600 items-center">{sold}</div>
      </div>
    </div>
  );
};

export default Card;
