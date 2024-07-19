import React from "react";
import Image from "next/image";
import { Input } from "./ui/input";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="container mx-auto px-5 py-5">
        <div className="flex justify-center gap-4">
          {/* Column 1 */}
          <div className="rounded-lg h-96 w-96 relative">
            <Image
              src="/Images/footer/img-left.png"
              alt="Footer Left"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="text-4xl font-volkhov font-bold">
              Subscribe To Our Newsletter
            </span>
            <span className="text-zinc-400 text-sm w-100 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis <br />
              ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
              sollicitudin
            </span>
            <Input
              className="border-0 shadow-lg my-10 h-12 w-3/4"
              type="email"
              placeholder="michael@ymail.com"
            />
          </div>

          {/* Column 3 */}
          <div className="rounded-lg h-96 w-96 relative">
            <Image
              src="/Images/footer/img-right.png"
              alt="Footer Right"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
        </div>
      </div>
      <div className="py-5">
        <hr className="bg-zinc-400" />
        <div className="container mx-auto px-5 py-8 flex justify-center gap-x-72 items-center">
          <div className="font-volkhov font-semibold text-4xl">
            <a href="#">FASCO</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Support Center
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Invoicing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contract
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Careers
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              FAQs
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-xs text-zinc-500">
            Copyright © 2022 Xpro . All Rights Reseved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
