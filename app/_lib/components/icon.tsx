import { type SVGProps } from "react";

import { type IconName } from "@/types/name";
import { cn } from "../utils/cn";

export type { IconName };

export function Icon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}): JSX.Element {
  if (children) {
    return (
      <span
        className={cn(
          `inline-flex items-center font gap-[6px]`,
          childClassName,
        )}
      >
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg
      {...props}
      className={cn(
        "inline self-center size-[1.5rem] text-[#596780]",
        className,
      )}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
