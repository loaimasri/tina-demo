"use client";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";

export const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api, selectedIndex } = useCarousel();
  const slides = api?.scrollSnapList().length ?? 0;

  const renderDots = (): React.JSX.Element[] => {
    return Array.from({ length: slides }, (_, index) => (
      <button
        key={index}
        type="button"
        className={cn(
          "w-2.5 h-2.5 rounded-full cursor-pointer bg-gray-300",
          selectedIndex === index ? "bg-[#439dd5]" : "",
        )}
        onClick={() => api && api.scrollTo(index)}
      >
        <span className="sr-only">{index + 1}</span>
      </button>
    ));
  };

  return (
    slides > 1 && (
      <div
        ref={ref}
        className={cn("flex justify-center gap-2 mt-5", className)}
        {...props}
      >
        {renderDots()}
      </div>
    )
  );
});

CarouselDots.displayName = "CarouselDots";
