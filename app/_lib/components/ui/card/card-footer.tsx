import { cn } from "@utils/cn";
import * as React from "react";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-[1.5rem] pt-[0]", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";
