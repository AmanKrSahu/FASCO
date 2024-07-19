/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = {};

const buttonLabels = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const Arrival = (props: Props) => {
  const [activeButton, setActiveButton] = useState("Women's Fashion");

  const handleButtonClick = (label: React.SetStateAction<string>) => {
    setActiveButton(label);
  };

  return (
    <div className="container mx-auto px-5 py-5">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-5xl font-volkhov font-bold">New Arrival</span>
        <span className="text-zinc-400 text-sm w-100 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
      </div>
      <div className="flex gap-12 items-center justify-center py-8">
        {buttonLabels.map((label) => (
          <Button
            key={label}
            onClick={() => handleButtonClick(label)}
            className={`px-6 py-2 rounded-full transition-colors duration-100 ${
              activeButton === label
                ? "bg-black text-white"
                : "bg-zinc-100 text-black hover:bg-black hover:text-white"
            }`}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Arrival;
