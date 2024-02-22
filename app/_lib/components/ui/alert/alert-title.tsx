import { cn } from "@utils/cn";
import * as React from "react";

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-bold leading-[1.5rem]", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";
