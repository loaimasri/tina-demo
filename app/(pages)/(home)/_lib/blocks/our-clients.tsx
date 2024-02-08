import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselDots,
} from "@components/ui";

import Link from "next/link";

import Image from "next/image";
export function OurClients() {
  return (
    <section
      id="our-clients"
      className="flex justify-center items-center flex-col py-14"
    >
      <h2 className="text-4xl font-bold leading-[54px] mb-24">Our Clients</h2>
      <Carousel className="w-[100%]">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Link href="https://www.restaurant365.com/">
              <Image
                src="/resturant-365.png"
                alt="resturant365"
                width={200}
                height={200}
              />
            </Link>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Link href="https://www.navco.com/">
              <Image src="/navco.png" alt="navco" width={200} height={200} />
            </Link>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Link href="https://www.dynamicconsulting.com/">
              <Image
                src="/dynamic-consulting.jpg"
                alt="dynamic consulting"
                width={200}
                height={200}
              />
            </Link>
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Link href="https://nationallinkatm.com/">
              <Image
                src="/nation-link.png"
                alt="nation link"
                width={200}
                height={200}
              />
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
