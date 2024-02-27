import * as React from "react";
import { PaginationLink } from "./pagination-link";

export const PaginationNext = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>): JSX.Element => (
  <PaginationLink aria-label="Go to next page" {...props}>
    <span>Next</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";
