"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@utils/cn";
import * as React from "react";

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-title1 text-text-primary font-regular px-[1.5rem] py-[1rem]",
      className,
    )}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
