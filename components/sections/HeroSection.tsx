import React from "react";
import { Vortex } from "../ui/vortex";

const HeroSection = () => {
  return (
    <div className="w-screen h-[95vh] md:h-screen mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        rangeY={800}
        particleCount={550}
        baseHue={150}
        className="flex items-center flex-col justify-center px-8 md:px-60 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl md:max-w-4xl font-bold text-center">
          Elevate Your Trading Success with BehindTrader
        </h2>
        <p className="text-white text-sm md:text-2xl md:max-w-2xl mt-6 text-center">
          Take your trading to the next level. Copy our strategies. Trusted by
          experts. Proven with results.
        </p>
        <div className="flex flex-row items-center gap-2 md:gap-4 mt-8">
          <button className="px-4 py-2 text-sm md:text-lg bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Join Signal Room
          </button>
          <button className="px-4 py-2 text-sm md:text-lg text-white ">
            Contact Us
          </button>
        </div>
      </Vortex>
    </div>
  );
};

export default HeroSection;
