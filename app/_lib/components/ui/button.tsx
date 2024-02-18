import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/cn";
import { Icon, type IconName } from "../icon";
const buttonVariants = cva(
  " bg-surface-brand px-2xl py-sm text-title2 font-bold text-text-secondary hover:bg-surface-brand-hover disabled:cursor-not-allowed disabled:bg-surface-disable disabled:text-text-disable-darker",
  {
    variants: {
      variant: {
        default: "rounded-xs",
        rounded: "rounded-circle",
        stroke:
          "rounded-xs border-2 border-border-brand bg-transparent text-surface-brand hover:text-text-secondary disabled:border-none",
        strokeRounded:
          "rounded-circle border-2 border-border-brand bg-transparent text-surface-brand hover:text-text-secondary disabled:border-none",
        icon: "aspect-square rounded-circle border border-border-input-stroke bg-transparent text-surface-icon hover:bg-blue-100 hover:text-dark-dark-hover disabled:border-2 disabled:border-border-secondary-dark disabled:bg-dark-light disabled:text-surface-disable",
      },
      size: {
        default: "px-2xl py-sm",
        sm: "rounded-md px-sm py-xs",
        lg: "rounded-md px-lg py-md",
        icon: "size-[2.75rem]",
        xl: "rounded-lg p-2xl",
        xxl: "h-2xl rounded-lg p-2xl",
        xxxl: "rounded-lg px-5xl py-2xl",
      },
      color: {
        default: "bg-surface-brand text-title2",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        color: "default",
      },
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

type IconButtonProps = {
  iconName: IconName;
  iconClassName?: string;
} & ButtonProps;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, size, asChild = false, iconName, iconClassName, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "group",
          buttonVariants({ variant: "icon", size }),
          className,
        )}
        ref={ref}
        {...props}
      >
        <Icon
          name={iconName}
          className={cn("group-disabled:text-surface-disable", iconClassName)}
        />
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";

export { Button, buttonVariants, IconButton };
