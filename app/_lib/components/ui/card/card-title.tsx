import { cn } from "@utils/cn";
import * as React from "react";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[1.5rem] font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";
