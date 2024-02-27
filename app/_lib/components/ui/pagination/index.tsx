import * as React from "react";

import { cn } from "@utils/cn";
import { PaginationContent } from "./pagination-content";
import { PaginationEllipsis } from "./pagination-ellipsis";
import { PaginationItem } from "./pagination-item";
import { PaginationLink } from "./pagination-link";
import { PaginationNext } from "./pagination-next";
import { PaginationPrevious } from "./pagination-previous";

const Root = ({
  className,
  ...props
}: React.ComponentProps<"nav">): JSX.Element => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Root.displayName = "Pagination";

export const Pagination = Object.assign(Root, {
  Content: PaginationContent,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  Link: PaginationLink,
  Next: PaginationNext,
  Previous: PaginationPrevious,
});
