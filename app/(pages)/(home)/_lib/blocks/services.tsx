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
        "flex justify-center flex-col items-center text-center min-h-screen py-20",
        backgroundColor?.[0],
      )}
    >
      <h2 className="text-4xl font-bold leading-[54px]">{title}</h2>
      <p className="my-12 text-2xl font-light leading-10">{subtitle}</p>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {services?.map((service) => (
          <ServiceCard
            key={service?.__typename}
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
