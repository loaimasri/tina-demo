"use client";
import { cn } from "@utils/cn";
import * as React from "react";

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

DialogHeader.displayName = "DialogHeader";
