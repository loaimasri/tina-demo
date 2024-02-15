"use client";
import { cn } from "@utils/cn";
import * as React from "react";
import { useCarousel } from ".";
import { Icon } from "../../icon";
import { Button } from "../button";

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
        "absolute",
        orientation === "horizontal"
          ? "-right-[-3rem] top-1/2 -translate-y-1/2"
          : "-bottom-[-3rem] left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon name="arrowDownward" className="rotate-180" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});

CarouselNext.displayName = "CarouselNext";
