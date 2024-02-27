import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { cn } from "@utils/cn";
import * as React from "react";

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">): JSX.Element => (
  <span
    aria-hidden
    className={cn("flex size-2xl items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="size-sm" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
