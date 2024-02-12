import { Carousel } from "@components/ui/carousel";

import { cn } from "@/app/_lib/utils/cn";
import type { PageBlocksOurClients } from "@/tina/__generated__/types";
import Image from "next/image";
import Link from "next/link";

type OurClientsProps = PageBlocksOurClients;

export function OurClients({
  title,
  subtitle,
  clients,
  background: BackgroundColor,
}: OurClientsProps): JSX.Element {
  return (
    <section
      id="our-clients"
      className={cn(
        "flex justify-center items-center flex-col py-14",
        BackgroundColor?.[0],
      )}
    >
      <h2 className="text-4xl font-bold leading-[54px] ">{title}</h2>
      <p className="my-12 text-lg font-light leading-10 md:text-2xl md:leading-10">
        {subtitle}
      </p>
      <Carousel className="w-[100%]">
        <Carousel.Content>
          {clients?.map((client) => (
            <Carousel.Item
              key={client?.__typename}
              className="flex items-center justify-center md:basis-1/2 lg:basis-1/4"
            >
              <Link href={client?.link ?? ""}>
                <Image
                  src={client?.logo ?? ""}
                  alt={client?.label ?? ""}
                  width={200}
                  height={200}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Dots />
      </Carousel>
    </section>
  );
}
