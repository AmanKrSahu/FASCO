import Arrival from "@/components/Arrival";
import BentoGrid from "@/components/BentoGrid";
import Card from "@/components/card/Card";
import LogoCarousel from "@/components/carousel/LogoCarousel";
import DealsPage from "@/components/DealsPage";
import Footer from "@/components/Footer";
import GalleryPage from "@/components/GalleryPage";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";

import NewArrivals from "@/data/newarrivals.json";
import IconGrid from "@/data/icongrid.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <BentoGrid />
      <LogoCarousel />
      <DealsPage/>
      <Arrival />
      <div className="container mx-auto px-5 py-5 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NewArrivals.map((product, index) => (
            <Card
              key={index}
              imageSrc={product.imageSrc}
              productName={product.productName}
              rating={product.rating}
              productDetails={product.productDetails}
              review={product.review}
              amount={product.amount}
              sold={product.sold}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Button className="rounded-full w-36">
          View More
        </Button>
      </div>
      <div className="relative h-full">
        <div className="absolute inset-0 clip-diagonal bg-[#DADADA]" />
        
        <div className="grid grid-cols-2 h-full">
          <div className="relative w-full h-full">
            <Image
              src="/Images/seperator.png" 
              alt="Left Side Image"
              layout="fill"
              objectFit="cover"
              className="rounded-0"
            />
          </div>

          <div className="relative flex flex-col p-6 bg-[#DADADA]">
            <div className="flex flex-col gap-2 pl-4 items-start">
              <span className="text-base text-zinc-400">Women Collection</span>
              <span className="text-4xl font-volkhov text-zinc-700 font-bold mt-4 mb-4">Peaky Blinders</span>
              <span className="text-base underline">DESCRIPTION</span>
              <span className="text-zinc-400 text-xs w-1/2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
                sollicitudin.
              </span>
              <div className="flex flex-row gap-2 items-center mt-2 mb-2">
                <span className="text-zinc-400">Size:</span>
                <span className="bg-black rounded text-white p-1 w-8 text-center">M</span>
              </div>
              <span className="text-2xl font-volkhov text-zinc-800 font-bold">$100.00</span>
              <Button className="rounded-full w-36 mt-2 mb-2">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 mb-4 gap-6 overflow-x-auto shadow-lg">
        <div className="flex gap-6">
          {IconGrid.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white"
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.imgSrc}
                  alt={`Icon ${index + 1}`}
                  width={40} 
                  height={40} 
                />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GalleryPage />
      <Testimonials />
      <Footer />
    </>
  );
}


// "/Images/arrivals/colorful-dress.png"