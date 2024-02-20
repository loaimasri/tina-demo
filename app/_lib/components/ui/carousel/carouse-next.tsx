"use client";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";
import { IconButton, type Button } from "../button";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "icon", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <IconButton
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute flex justify-center items-center z-10",
        orientation === "horizontal"
          ? "-right-[-3rem] top-1/2 -translate-y-1/2"
          : "-bottom-[-3rem] left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      iconName="arrowDownward"
      iconClassName="rotate-180"
      {...props}
    >
      <span className="sr-only">Next slide</span>
    </IconButton>
  );
});

CarouselNext.displayName = "CarouselNext";
