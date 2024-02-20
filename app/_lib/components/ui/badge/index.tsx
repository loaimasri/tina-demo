import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@utils/cn";

const badgeVariants = cva(
  "inline-flex cursor-pointer items-center rounded-circle text-body1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-surface-brand text-text-secondary hover:bg-surface-brand-hover",
        secondary: "bg-gray-light-hover text-text-primary hover:bg-gray-light",
        error:
          "bg-surface-error text-text-secondary hover:bg-error-normal-hover",
        warning:
          "bg-surface-warning text-text-secondary hover:bg-warning-normal-hover",
        correct:
          "bg-surface-correct text-text-secondary hover:bg-correct-normal-hover",
      },
      size: {
        sm: "px-2xs py-[2px]",
        md: "px-xs py-2xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({
  className,
  variant,
  size = "md",
  ...props
}: BadgeProps): JSX.Element {
  return (
    <div
      className={String(cn(badgeVariants({ variant, size }), className))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
