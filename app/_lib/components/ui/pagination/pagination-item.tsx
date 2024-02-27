import { cn } from "@utils/cn";
import * as React from "react";

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("size-[2.4375rem]", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";
