import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselDots,
} from "@components/ui";

import Link from "next/link";
import Image from "next/image";
import { PageBlocksOurClients } from "@/tina/__generated__/types";

type OurClientsProps = PageBlocksOurClients;

export function OurClients({ title, subtitle, clients }: OurClientsProps) {
  return (
    <section
      id="our-clients"
      className="flex justify-center items-center flex-col py-14"
    >
      <h2 className="text-4xl font-bold leading-[54px] ">{title}</h2>
      <p className="text-lg font-light leading-10 md:text-2xl md:leading-10 my-12">
        {subtitle}
      </p>
      <Carousel className="w-[100%]">
        <CarouselContent>
          {clients &&
            clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center"
              >
                <Link href={client?.link || ""}>
                  <Image
                    src={client?.logo || ""}
                    alt={client?.label || ""}
                    width={200}
                    height={200}
                  />
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
