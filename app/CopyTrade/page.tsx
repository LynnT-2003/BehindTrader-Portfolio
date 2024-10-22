"use client";
import { projects } from "@/components/constants";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const CopyTrade = () => {
  return (
    <div className="flex justify-center py-12 h-screen bg-brandColor mt-[140px]">
      <div className="w-[1250px] flex flex-col">
        {/* <div className="flex w-[1200px] justify-center items-center">
        <div className="w-[500px] rounded-full font-bold text-center py-4 text-4xl bg-yellow-600">
          Dollar Cafe
        </div>
      </div> */}
        <div className="mx-auto">
          <h1 className="text-5xl font-thin text-white">
            CopyTrade Performance
          </h1>
          <div className="max-w-5xl mt-4">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyTrade;
