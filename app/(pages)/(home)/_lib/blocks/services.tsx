import { cn } from "@/app/_lib/utils/cn";
import type { PageBlocksServices } from "@/tina/__generated__/types";
import ServiceCard from "../components/service-card";

type ServicesProps = PageBlocksServices;

export function Services({
  title,
  subtitle,
  services,
  background: backgroundColor,
}: ServicesProps): JSX.Element {
  return (
    <section
      id="services"
      className={cn(
        "flex justify-center flex-col items-center text-center min-h-screen py-[5rem]",
        backgroundColor?.[0],
      )}
    >
      <h2 className="text-[2.25rem] font-bold leading-[54px]">{title}</h2>
      <p className="my-[3rem] text-[1.5rem] font-light leading-[2.5rem]">
        {subtitle}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-[1.25rem]">
        {services?.map((service) => (
          <ServiceCard
            key={service?.label}
            title={service?.label ?? ""}
            description={service?.description ?? ""}
            icon={{
              color: service?.icon?.color ?? "#348dcd",
              name: service?.icon?.src ?? "",
            }}
          />
        ))}
      </div>
    </section>
  );
}
