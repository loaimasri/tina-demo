import * as React from "react";

import { cn } from "@utils/cn";

export type TextareaProps = {
  error?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-3xs border border-border-input-stroke bg-white px-2xl py-sm file:border-0 file:bg-transparent file:text-body1 file:font-medium placeholder:text-text-primary/50 focus:border focus:border-border-selected focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-surface-disable disabled:text-text-primary/45",
          error &&
            "border-border-error text-surface-error focus:border-border-error",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
