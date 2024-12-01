import Image from "next/image";
import React, { forwardRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Use forwardRef to allow the parent component to pass a ref
const IntroSection = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((_, ref) => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      ref={ref}
      className="h-screen md:h-full flex items-center justify-center py-12 bg-brandColor"
    >
      <div className="pl-12 md:pl-0 w-screen md:w-[1325px] flex flex-col justify-between">
        <h2 className="flex md:pl-12 text-3xl md:text-5xl font-bold text-white font-sans">
          Our Services
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
});

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
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
    category: "",
    title: "",
    src: "/services/3.png",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/services/1.png",
    width: 500,
    height: 300,
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/services/2.png",
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

IntroSection.displayName = "IntroSection";
export default IntroSection;
