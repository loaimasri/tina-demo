import * as React from "react";

import { cn } from "@utils/cn";

export type InputProps = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, iconPosition = "left", type, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            iconPosition === "left" ? "pl-10" : "pr-10",
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={cn(
              "absolute inset-y-0 flex items-center",
              iconPosition === "left" ? "left-3" : "right-3",
            )}
          >
            {icon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
