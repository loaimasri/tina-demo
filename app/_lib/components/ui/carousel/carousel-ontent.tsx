"use client";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-[1rem]" : "-mt-[1rem] flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = "CarouselContent";
