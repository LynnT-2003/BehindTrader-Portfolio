import React from "react";
import { Vortex } from "../ui/vortex";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[95vh] md:h-screen mx-auto rounded-md overflow-hidden flex flex-col items-center justify-center">
      <Vortex
        rangeY={800}
        particleCount={550}
        baseHue={150}
        className="flex items-center flex-col justify-center px-8 md:px-60 pb-4 w-full h-full"
      >
        <img src="/logo.png" width={256} className="mb-10" />

        <h2 className="text-white text-2xl md:text-5xl md:max-w-4xl font-bold text-center">
          Elevate Your Trading
        </h2>
        <p className="text-white text-sm md:text-2xl md:max-w-2xl mt-6 text-center">
          ร่วมสร้างสังคมเทรดที่มีคุณภาพไปด้วยกันกับ BehindTrader
        </p>
        <div className="flex flex-row items-center gap-2 md:gap-4 mt-8">
          <button className="px-4 py-2 text-sm md:text-lg bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Get Started
          </button>
        </div>
      </Vortex>
      {/* <img
        src="/logo.png" // Replace with your image path
        alt="Overlay Image"
        className="absolute top-0 left-0 z-10 w-32 h-32 object-cover" // Adjust width and height as needed
      /> */}
    </div>
  );
};

export default HeroSection;
