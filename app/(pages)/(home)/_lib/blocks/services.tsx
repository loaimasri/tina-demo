import { PageBlocksServices } from "@/tina/__generated__/types";
import ServiceCard from "../components/service-card";
import { cn } from "@/app/_lib/utils/cn";

type ServicesProps = PageBlocksServices;

export function Services({
  title,
  subtitle,
  services,
  background: backgroundColor,
}: ServicesProps) {
  return (
    <section
      id="services"
      className={cn(
        "flex justify-center flex-col items-center text-center min-h-screen py-20",
        backgroundColor?.[0]
      )}
    >
      <h2 className="text-4xl font-bold leading-[54px]">{title}</h2>
      <p className="my-12 text-2xl leading-10 font-light">{subtitle}</p>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {services &&
          services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service?.label || ""}
              description={service?.description || ""}
              icon={{
                color: service?.icon?.color || "#348dcd",
                name: service?.icon?.src || "",
              }}
            />
          ))}
      </div>
    </section>
  );
}
