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
            "flex w-full rounded-full border py-sm px-2xl border-input bg-background ring-offset-primary ring-offset-2 file:border-0 file:bg-transparent file:text-body1 file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            iconPosition === "left" ? "pl-[80px]" : "pr-[75px]",
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={cn(
              "absolute inset-y-[0] flex items-center",
              iconPosition === "left" ? "left-3 pl-[30px]" : "pr-[30px]",
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
