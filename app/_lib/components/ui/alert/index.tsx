import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Icon, type IconName } from "@components/icon";
import { cn } from "@utils/cn";
import { AlertDescription } from "./alert-description";
import { AlertTitle } from "./alert-title";

const alertVariants = cva(
  "fixed bottom-md right-1/2 z-50 flex w-[52.1875rem] max-w-[90%] translate-x-1/2 animate-from-bottom items-center justify-start gap-[1rem] rounded-xs px-[1rem] py-[0.75rem] text-title2",
  {
    variants: {
      variant: {
        default:
          "bg-dark-light-hover text-dark-normal [&>svg]:text-dark-normal",
        error:
          " bg-error-light-active text-error-dark-active [&>svg]:text-error-dark-active",
        success:
          "bg-correct-light-active text-correct-dark-active [&>svg]:text-correct-dark-active",
        info: "bg-blue-light-active text-blue-dark-active [&>svg]:text-blue-dark-active",
        warning:
          "bg-warning-light-active text-warning-dark-active [&>svg]:text-warning-dark-active",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
type AlertVariant = Exclude<
  VariantProps<typeof alertVariants>["variant"],
  null | undefined
>;

type AlertProps = {
  autoDismissTime?: number;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

const Root = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, autoDismissTime = 3000, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const iconMapping: Record<AlertVariant, IconName> = {
      default: "default",
      error: "wrong",
      info: "info",
      success: "success",
      warning: "warning",
    };

    const handleDismiss = (): void => {
      setIsVisible(false);
    };

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoDismissTime);

      return () => clearTimeout(timer);
    }, [autoDismissTime]);

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon
          name={iconMapping[variant ?? "default"]}
          className="hidden min-w-[1.5rem] md:block"
        />

        <div>{children}</div>
        <Icon
          name="wrong"
          className="min-w-[1.5rem] cursor-pointer"
          onClick={handleDismiss}
        />
      </div>
    );
  },
);
Root.displayName = "Alert";

export const Alert = Object.assign(Root, {
  Title: AlertTitle,
  Description: AlertDescription,
});
