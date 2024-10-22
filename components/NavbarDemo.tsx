"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    console.log("Current Scroll Position:", currentScrollY);
    console.log("Last Scroll Position:", lastScrollY);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down, hide the navbar
      setIsVisible(false);
      console.log("Hiding Navbar");
    } else {
      // Scrolling up, show the navbar
      setIsVisible(true);
      console.log("Showing Navbar");
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    console.log("Adding scroll event listener");
    window.addEventListener("scroll", controlNavbar);

    return () => {
      console.log("Removing scroll event listener");
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  console.log("Navbar Visibility:", isVisible);

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar isVisible={isVisible} />
    </div>
  );
}

function Navbar({
  className,
  isVisible,
}: {
  className?: string;
  isVisible: boolean;
}) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 mx-auto z-50 transform transition-transform",
        isVisible
          ? "translate-y-2 ease-in-out duration-700"
          : "-translate-y-full ease-in-out duration-500"
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="BehindTrader">
          <div className="flex flex-col space-y-4 text-sm">
            <h1
              className="text-black hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              BehindTrader
            </h1>
            <h1
              className="text-black hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              BehindTrader News
            </h1>
            <h1
              className="text-black hover:cursor-pointer"
              onClick={() => {
                router.push("/Podcast");
              }}
            >
              BehindTrader Podcast
            </h1>
          </div>
        </MenuItem>
        <h1
          className="text-white hover:cursor-pointer"
          onClick={() => {
            router.push("/CopyTrade");
          }}
        >
          CopyTrade
        </h1>
        <h1 className="text-white hover:cursor-pointer">Signal Rooms</h1>
        <h1 className="text-white hover:cursor-pointer">Education</h1>
        <h1 className="text-white hover:cursor-pointer">About Us</h1>
      </Menu>
    </div>
  );
}
