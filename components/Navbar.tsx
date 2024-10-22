"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const navLists = ["CopyTrade", "Signal Room", "Private Course", "EA"];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-screen flex justify-center items-center bg-gray-900 text-white">
      <header className="md:px-0 px-5 w-[1320px] py-5 flex justify-between">
        <nav className="flex w-full items-center justify-center screen-max-width">
          <div className="flex flex-1 items-center ">
            <div
              className="md:pr-15 py-1 pr-5 cursor-pointer"
              onClick={() => router.push("/")}
            >
              {/* <img
                src="/logo.png"
                width={128}
                onClick={() => router.push("/")}
              /> */}
              <h1 className="text-blue-400 text-xl font-bold">BehindTrader</h1>
            </div>

            {navLists.map((nav) => (
              <div
                key={nav}
                className="md:px-5 pl-4 text-sm cursor-pointer text-gray hover:font-light hover:text-base hover:text-slate-500 transition-all"
                onClick={() => router.push(`/${nav}`)}
              >
                {nav}
              </div>
            ))}
          </div>
        </nav>
        <div className="flex gap-0 justify-center items-center">
          <Button
            className="bg-slate-700 text-white text-sm"
            onClick={() => {}}
          >
            Log in
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
