"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@utils/cn";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatart-image";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  size: AvatarSize;
  selected: boolean;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const avatarStyles = {
  sm: {
    size: "size-[2.379rem]",
    selected: "ring-[3px] ring-offset-2 ring-black",
  },
  md: {
    size: "size-[3.625rem]",
    selected: "ring-[4px] ring-offset-2 ring-black",
  },
  lg: {
    size: "size-[4.625rem]",
    selected: "ring-[5px] ring-offset-4 ring-black",
  },
};

const Root = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, selected, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-circle",
      avatarStyles[size].size,
      selected && avatarStyles[size].selected,
      className,
    )}
    {...props}
  />
));
Root.displayName = AvatarPrimitive.Root.displayName;

export const Avatar = Object.assign(Root, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
