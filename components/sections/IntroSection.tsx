"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const IntroSection = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-screen py-20">
      <h2 className="max-w-7xl pl-4 ml-[10vw] text-xl md:text-5xl font-bold text-white font-sans">
        Our Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
  // copytrade, signal room, private course
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Copytrading",
    title: "CopyTrade together with us.",
    src: "/services/trading.jpg",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
  {
    category: "Signal Rooms",
    title: "Get access to our private signal rooms.",
    src: "/services/signal.jpg",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
  {
    category: "Private Course",
    title: "Learn through our exclusive course.",
    src: "/services/course.jpg",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
  {
    category: "Expert Advisors",
    title: "Limited offers for our own EAs.",
    src: "/services/bot.jpeg",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
];

export default IntroSection;