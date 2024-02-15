import { cn } from "@utils/cn";
import * as React from "react";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-[0.875rem] leading-[1.25rem] text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";
