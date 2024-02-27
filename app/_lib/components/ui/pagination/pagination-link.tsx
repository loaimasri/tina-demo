import { cn } from "@utils/cn";
import Link from "next/link";
import * as React from "react";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<typeof Link>;
export const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps): JSX.Element => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "p-xs gap-sm text-title2 flex items-center justify-center font-bold rounded-circle shadow-md",
      className,
      isActive
        ? "bg-surface-brand text-text-secondary hover:bg-surface-brand-hover"
        : "text-text-primary bg-surface-primary",
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";
