import * as React from "react";

import { type IconName } from "@/types/name";
import { cn } from "@utils/cn";
import { Icon } from "../icon";

export type InputProps = {
  iconName?: IconName;
  iconClassName?: string;
  error?: boolean;
  iconPosition?: "left" | "right";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      iconPosition = "left",
      iconName,
      iconClassName,
      error,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={props.type}
          className={cn(
            "flex w-full rounded-full border border-border-input-stroke bg-white px-2xl py-sm file:border-0 file:bg-transparent file:text-body1 file:font-medium placeholder:text-text-primary/50 focus:border focus:border-border-selected focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-surface-disable disabled:text-text-primary/45",
            iconPosition === "left" ? "pl-[80px]" : "pr-[75px]",
            error &&
              "border-border-error text-surface-error focus:border-border-error",
            className,
          )}
        />
        {iconName && (
          <div
            className={cn(
              "absolute inset-y-[0] flex items-center",
              iconPosition === "left"
                ? "left-3 pl-[30px]"
                : "right-3 pr-[30px]",
            )}
          >
            <Icon
              name={iconName}
              className={cn(
                "text-black",
                error && "text-surface-error",
                props.disabled && "text-surface-invert/45 cursor-not-allowed",
                iconClassName,
              )}
            />
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
