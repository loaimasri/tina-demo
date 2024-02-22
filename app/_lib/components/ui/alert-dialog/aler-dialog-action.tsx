"use client";
import { buttonVariants } from "@components/ui/button";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@utils/cn";
import * as React from "react";

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants({ variant: "default" }), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
