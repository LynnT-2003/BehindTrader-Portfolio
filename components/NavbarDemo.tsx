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
    <div className="md:block relative w-full flex items-center justify-center">
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
        <h1
          className="text-white hover:text-yellow-500 hover:cursor-pointer hover:border-b-4 hover:pb-2 border-spacing-4 border-yellow-500 ease-in-out duration-100"
          onClick={() => {
            router.push("/");
          }}
        >
          BehindTrader
        </h1>
        <h1
          className="text-white hover:text-yellow-500 hover:cursor-pointer hover:border-b-4 hover:pb-2 border-spacing-4 border-yellow-500 ease-in-out duration-100"
          onClick={() => {
            router.push("/CopyTrade");
          }}
        >
          CopyTrade
        </h1>
        <h1 className="text-white hover:text-yellow-500 hover:cursor-pointer hover:border-b-4 hover:pb-2 border-spacing-4 border-yellow-500 ease-in-out duration-100">
          Signal
        </h1>
        <h1 className="text-white hover:text-yellow-500 hover:cursor-pointer hover:border-b-4 hover:pb-2 border-spacing-4 border-yellow-500 ease-in-out duration-100">
          Education
        </h1>
        <h1 className="text-white hover:text-yellow-500 hover:cursor-pointer hover:border-b-4 hover:pb-2 border-spacing-4 border-yellow-500 ease-in-out duration-100">
          About
        </h1>
      </Menu>
    </div>
  );
}
