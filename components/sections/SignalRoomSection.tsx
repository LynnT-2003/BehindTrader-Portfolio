import React from "react";
import { Button } from "../ui/button";

const SignalRoomSection = () => {
  return (
    <div className="flex items-center justify-center py-12 h-screen bg-brandColor">
      <div className="w-[1250px] flex justify-between">
        {" "}
        <div className=" w-1/2 text-white items-end ">
          <div className="flex flex-col hover:cursor-pointer transition-transform duration-300 transform hover:scale-105">
            <img src="/signal/week2.jpg" className="h-[512px] w-[512px]" />
          </div>
        </div>
        <div className="w-1/2 text-white flex items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl mb-8">
              Signal Rooms Performance
            </h1>
            <span className="text-md text-justify font-sans leading-loose tracking-wider ">
              Maximize Your Trading Success with Our Expert Signal Rooms! Join
              our exclusive trading signal rooms and elevate your trading game!
              With a proven track record of consistent profits and advanced
              strategies, our signals offer: Up to 40% ROI monthly – backed by
              real-time analysis and years of expertise. Our signals are
              designed for precision, whether you’re a beginner or an
              experienced trader. Start making informed trades today! Join now
              and experience trading with confidence.
            </span>
            <Button className="text-white mt-8">More Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalRoomSection;
