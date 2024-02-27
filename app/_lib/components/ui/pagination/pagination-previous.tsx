import * as React from "react";
import { PaginationLink } from "./pagination-link";

export const PaginationPrevious = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>): JSX.Element => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";
