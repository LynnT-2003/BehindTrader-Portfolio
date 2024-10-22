import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    profit: string;
    avg_profit: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full block rounded-3xl",
                  hoveredIndex === 0 ? "bg-yellow-500" : "bg-slate-800/[0.8]"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isFeatured={idx === 0}>
            <CardTitle isFeatured={idx === 0} isHovered={hoveredIndex === idx}>
              {item.title}
            </CardTitle>
            <CardDescription
              isFeatured={idx === 0}
              isHovered={hoveredIndex === idx}
            >
              {item.profit}
            </CardDescription>
            <CardAverage
              isFeatured={idx === 0}
              isHovered={hoveredIndex === idx}
            >
              {item.avg_profit}
            </CardAverage>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isFeatured = false,
}: {
  className?: string;
  children: React.ReactNode;
  isFeatured?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-4 py-8 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        isFeatured
          ? "border-4 border-yellow-500 shadow-lg" // Additional styling for the featured card
          : "border border-transparent",
        className
      )}
    >
      <div className="relative z-50 w-[25vw]">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isFeatured = false,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isFeatured?: boolean;
  isHovered?: boolean;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 text-lg font-bold tracking-wide",
        isFeatured && isHovered
          ? "text-yellow-300"
          : isFeatured
          ? "text-yellow-500"
          : "text-zinc-100",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isFeatured = false,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isFeatured?: boolean;
  isHovered?: boolean;
}) => {
  return (
    <div>
      <p
        className={cn(
          "mt-8 text-md tracking-wide leading-relaxed",
          isFeatured && isHovered ? "text-yellow-500" : "text-white", // Change to yellow on hover for featured
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};

export const CardAverage = ({
  className,
  children,
  isFeatured = false,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isFeatured?: boolean;
  isHovered?: boolean;
}) => {
  return (
    <div>
      <p
        className={cn(
          "mt-4 text-md tracking-wide leading-relaxed",
          isFeatured && isHovered ? "text-yellow-500" : "text-white", // Change to yellow on hover for featured
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};
