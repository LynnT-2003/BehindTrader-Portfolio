"use client";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import SignalRoomSection from "@/components/sections/SignalRoomSection";
import { useRef } from "react";

export default function Home() {
  // Create a reference for IntroSection
  const introSectionRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the IntroSection
  const scrollToIntro = () => {
    introSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection scrollToIntro={scrollToIntro} />
      <IntroSection ref={introSectionRef} />
      <SignalRoomSection />
    </div>
  );
}
