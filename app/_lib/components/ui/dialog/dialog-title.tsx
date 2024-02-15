"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils/cn";
import * as React from "react";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-[1.125rem] font-[600] leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;
