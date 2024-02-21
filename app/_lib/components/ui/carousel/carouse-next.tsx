"use client";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "icon", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
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
      {...props}
    >
      <Button.Icon name="arrowDownward" className="rotate-180" />

      <span className="sr-only">Next slide</span>
    </Button>
  );
});

CarouselNext.displayName = "CarouselNext";
