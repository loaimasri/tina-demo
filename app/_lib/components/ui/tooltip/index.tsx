"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@utils/cn";

const { Root, TooltipTrigger, TooltipProvider } = TooltipPrimitive;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 10, side, children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      side={side}
      className={cn(
        "z-50 overflow-hidden rounded-3xs bg-surface-invert py-3xs px-xs text-body2 font-medium text-text-secondary animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-[3px] data-[side=left]:slide-in-from-right-[3px] data-[side=right]:slide-in-from-left-[3px] data-[side=top]:slide-in-from-bottom-[3px]",
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow
        className="fill-current text-surface-invert"
        width={10}
        height={6}
      />
    </TooltipPrimitive.Content>
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider };

export const Tooltip = Object.assign(Root, {
  Content: TooltipContent,
  Trigger: TooltipTrigger,
});
