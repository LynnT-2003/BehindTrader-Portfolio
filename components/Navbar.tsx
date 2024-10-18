"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const navLists = ["CopyTrade", "Signal Room", "Private Course", "EA"];

const Navbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If the scroll position is greater than the last position, hide the navbar
        setIsVisible(false);
      } else {
        // If the scroll position is less or equal, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`w-screen flex justify-center items-center bg-gray-900 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="md:px-0 px-5 w-[1320px] py-5 flex justify-between">
        <nav className="flex w-full items-center justify-center screen-max-width">
          <div className="flex flex-1 items-center ">
            <div
              className="md:pr-15 py-1 pr-5 cursor-pointer"
              onClick={() => router.push("/")}
            >
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
