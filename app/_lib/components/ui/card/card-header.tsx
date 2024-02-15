import { cn } from "@utils/cn";
import * as React from "react";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col p-[1.5rem]", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";
