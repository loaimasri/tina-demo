import { Icon, type IconProps } from "@components/icon";
import { cn } from "@utils/cn";
import * as React from "react";
import { useButtonContext } from ".";

type IconButtonProps = IconProps;
export const ButtonIcon = ({
  name,
  className,
  ...props
}: IconButtonProps): JSX.Element => {
  const context = useButtonContext();

  React.useEffect(() => {
    if (context?.setHasIcon) {
      context.setHasIcon(true);
    }

    return () => {
      if (context?.setHasIcon) {
        context.setHasIcon(false);
      }
    };
  }, [context]);

  if (!context) {
    throw new Error("IconButton must be used within a Button component");
  }
  const { disabled } = context;

  return (
    <Icon
      name={name}
      {...props}
      className={cn(disabled && "text-surface-disable", className)}
    />
  );
};
ButtonIcon.displayName = "ButtonIcon";
