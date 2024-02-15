import { cn } from "@utils/cn";
import * as React from "react";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-[1.5rem] pt-[0]", className)} {...props} />
));

CardContent.displayName = "CardContent";
