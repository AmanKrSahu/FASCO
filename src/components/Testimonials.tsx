"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import testimonials from "@/data/testimonials.json";

type Props = {};

const Testimonials = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-5 pt-5 pb-5 max-w-full bg-[#FAFAFA]">
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-5xl font-volkhov font-bold">Customer Review</span>
        <span className="text-zinc-400 text-sm w-100 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
      </div>
      <div className="flex items-center justify-center my-5">
        <div className="relative w-full mb-5">
          <div className="relative flex items-center justify-center min-h-[350px] overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;

              const isLeftEnd = currentIndex === 0;
              const isRightEnd = currentIndex === testimonials.length - 1;

              const isLeft = !isLeftEnd && isPrev;
              const isRight = !isRightEnd && isNext;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-2/6 p-6 rounded-lg bg-white text-center transition-transform duration-400 
                                  shadow-lg mx-4 transform ${
                                    isActive
                                      ? "z-10 scale-105 rotate-0 shadow-xl"
                                      : isLeft
                                      ? "z-5 scale-100 -translate-x-1/2"
                                      : isRight
                                      ? "z-5 scale-100 translate-x-1/2"
                                      : "scale-90"
                                  }`}
                  style={{
                    transition: "transform 0.4s, opacity 0.4s",
                    opacity: isActive || isLeft || isRight ? 1 : 0,
                  }}
                >
                  <div className="flex items-center">
                    <Image
                      src={testimonial.img}
                      alt="testimonial"
                      height={100}
                      width={100}
                      className="object-cover rounded-full border-8 border-black mr-4"
                    />
                    <div className="text-left">
                      <p className="text-zinc-800 text-justify text-base">
                        {testimonial.text}
                      </p>
                      <div className="flex my-4 items-center">
                        {[...Array(5)].map((star, index) => {
                          return (
                            <FaStar
                              key={index}
                              className={
                                index < testimonial.rating
                                  ? "text-orange-600"
                                  : "text-gray-300"
                              }
                            />
                          );
                        })}
                      </div>
                      <hr className="border-black w-1/2" />
                      <h2 className="text-zinc-800 text-xl font-bold font-volkhov">
                        {testimonial.name}
                      </h2>
                      <h2 className="text-zinc-400 text-sm">
                        {testimonial.designation}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center space-x-4 items-center">
            <button
              onClick={handlePrev}
              className={`bg-zinc-200 text-black rounded-full p-2 focus:outline-none ${
                currentIndex === 0 ? "cursor-not-allowed hidden" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <IoIosArrowBack />
            </button>
            <div className="flex space-x-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-transform duration-200 ${
                    index === currentIndex
                      ? "bg-black transform scale-150"
                      : "bg-zinc-200"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={`bg-zinc-200 text-black rounded-full p-2 focus:outline-none ${
                currentIndex === testimonials.length - 1
                  ? "cursor-not-allowed hidden"
                  : ""
              }`}
              disabled={currentIndex === testimonials.length - 1}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
