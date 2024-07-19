"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import ImageCarousel from "./carousel/ImageScroller";

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

const DealsPage: React.FC = () => {
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const timeDiff = deadline.getTime() - now.getTime();

      const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(formatTime(remainingDays));
      setHours(formatTime(remainingHours));
      setMinutes(formatTime(remainingMinutes));
      setSeconds(formatTime(remainingSeconds));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="container mx-auto max-w-full px-5 py-5 bg-[#FAFAFA]">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <div className="flex flex-col gap-2 ml-36">
            <span className="text-5xl font-volkhov font-bold">
              Deals Of The Month
            </span>
            <div className="max-w-md text-justify">
              <span className="text-zinc-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                duis ultrices sollicitudin
              </span>
            </div>
            <Button className="rounded-full w-36 p-4 mt-4 mb-4">Buy Now</Button>
            <span className="text-zinc-800 text-base font-bold">
              Hurry, Before It’s Too Late!
            </span>
            <div className="grid grid-cols-4 gap-4 p-4 pl-0 max-w-md">
              <div className="text-center">
                <div className="text-2xl bg-black text-white p-2 rounded shadow-xl">
                  {days}
                </div>
                <span className="text-zinc-500">Days</span>
              </div>
              <div className="text-center">
                <div className="text-2xl bg-black text-white p-2 rounded shadow-xl">
                  {hours}
                </div>
                <span className="text-zinc-500">Hrs</span>
              </div>
              <div className="text-center">
                <div className="text-2xl bg-black text-white p-2 rounded shadow-xl">
                  {minutes}
                </div>
                <span className="text-zinc-500">Minutes</span>
              </div>
              <div className="text-center">
                <div className="text-2xl bg-black text-white p-2 rounded shadow-xl">
                  {seconds}
                </div>
                <span className="text-zinc-500">Seconds</span>
              </div>
            </div>
          </div>
        </div>
        <ImageCarousel/>
      </div>
    </div>
  );
};

export default DealsPage;
