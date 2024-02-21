"use client";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "icon", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Button.Icon name="arrowDownward" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});

CarouselPrevious.displayName = "CarouselPrevious";
