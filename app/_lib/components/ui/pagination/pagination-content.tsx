import { cn } from "@utils/cn";
import * as React from "react";

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-sm", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";
