import { cn } from "@/app/_lib/utils/cn";
import React from "react";

export const AlertDialogSeparator = React.forwardRef<
  React.ElementRef<"hr">,
  React.ComponentPropsWithoutRef<"hr">
>(({ className, ...props }, ref) => (
  <hr
    className={cn("h-[1px] w-full border-surface-secondary", className)}
    ref={ref}
    {...props}
  />
));
AlertDialogSeparator.displayName = "AlertDialogSeparator";
