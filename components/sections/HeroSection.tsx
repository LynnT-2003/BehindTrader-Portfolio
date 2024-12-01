import React from "react";
import { Vortex } from "../ui/vortex";

interface HeroSectionProps {
  scrollToIntro: () => void; // Type for the scrollToIntro function
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToIntro }) => {
  return (
    <div className="relative w-screen h-[95vh] md:h-screen mx-auto rounded-md overflow-hidden flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center px-8 md:px-60 pb-4 w-full h-full">
        <img src="/logo.png" width={256} className="mb-10" />

        <h2 className="text-white text-2xl md:text-5xl md:max-w-4xl font-bold text-center">
          The Goal to be Successful Person
        </h2>
        <p className="text-white text-sm md:text-2xl md:max-w-2xl mt-6 text-center font-sans font-light">
          Join us in building a quality <br />
          trading community with BehindTrader.
        </p>
        <div className="flex flex-row items-center gap-2 md:gap-4 mt-8">
          <button
            onClick={scrollToIntro}
            className="px-4 py-2 text-sm md:text-lg bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
