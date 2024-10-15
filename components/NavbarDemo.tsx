"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="BehindTrader">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">BehindTrader</HoveredLink>
            <HoveredLink href="/web-dev">BehindTrader News</HoveredLink>
            <HoveredLink href="/web-dev">BehindTrader Podcast</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="CopyTrade" /> */}
        <h1 className="text-white hover:cursor-pointer">CopyTrade</h1>
        <h1 className="text-white hover:cursor-pointer">Signal Rooms</h1>
        <h1 className="text-white hover:cursor-pointer">Education</h1>
        <h1 className="text-white hover:cursor-pointer">About Us</h1>
        {/* <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
