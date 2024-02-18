"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils/cn";
import * as React from "react";

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-[0.875rem] leading-[1.25rem] text-text-primary",
      className,
    )}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;
