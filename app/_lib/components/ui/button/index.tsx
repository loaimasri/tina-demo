import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../../utils/cn";
import { ButtonIcon } from "./button-icon";

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
        icon: "flex aspect-square items-center justify-center rounded-circle border border-border-input-stroke bg-transparent text-surface-icon hover:bg-blue-100 hover:text-surface-brand-light disabled:border-2 disabled:border-border-secondary-dark disabled:bg-dark-light disabled:text-surface-disable",
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
        default: "",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
        color: "default",
      },
    },
  },
);

type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

type ButtonContextProps = {
  disabled?: boolean;
  hasIcon?: boolean;
  setHasIcon?: (hasIcon: boolean) => void;
};

const ButtonContext = React.createContext<ButtonContextProps | null>(null);

export const useButtonContext = (): ButtonContextProps | null =>
  React.useContext(ButtonContext);

const Root = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      color = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const [hasIcon, setHasIcon] = React.useState(false);

    const Comp = asChild ? Slot : "button";

    const adjustedClassName = cn(
      buttonVariants(
        hasIcon
          ? { variant: "icon", size: "icon", color }
          : { variant, size, color },
      ),
      hasIcon && "px-[0] py-[0] size-[2.75rem]",
      className,
    );

    return (
      <ButtonContext.Provider
        value={{ disabled: props.disabled, hasIcon, setHasIcon }}
      >
        <Comp className={adjustedClassName} ref={ref} {...props} />
      </ButtonContext.Provider>
    );
  },
);

Root.displayName = "Button";

export const Button = Object.assign(Root, { Icon: ButtonIcon });
