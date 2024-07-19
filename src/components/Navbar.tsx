import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="container mx-auto px-5 py-8 flex justify-between items-center">
      <div className="font-volkhov font-semibold text-4xl">
        <a href="#">FASCO</a>
      </div>
      <div className="hidden md:flex space-x-12">
        <a href="#" className="nav-link text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="nav-link text-gray-600 hover:text-gray-900">
          Deals
        </a>
        <a href="#" className="nav-link text-gray-600 hover:text-gray-900">
          New Arrivals
        </a>
        <a href="#" className="nav-link text-gray-600 hover:text-gray-900">
          Packages
        </a>
      </div>
      <div className="hidden md:flex space-x-4">
        <Button className="rounded-full" variant="outline">
          Sign In
        </Button>
        <Button className="rounded-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
