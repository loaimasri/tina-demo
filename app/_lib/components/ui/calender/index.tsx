"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@utils/cn";

import "./style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps): JSX.Element {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-[30px]", className)}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
