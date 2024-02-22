"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@utils/cn";
import * as React from "react";

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-title1 font-bold px-[1.5rem] py-[1rem]", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
