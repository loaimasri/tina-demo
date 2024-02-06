import { BasePage } from "@/app/_lib/components/core/page";
import { client } from "@/tina/__generated__/databaseClient";
import Image from "next/image";
import { Button, CarouselDots, CarouselPrevious } from "@components/ui";
import Link from "next/link";
import ServiceCard from "./_lib/components/service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@components/ui";
import TestimonialCard from "./_lib/components/testimonial-card";

export default async function HomePage() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <>
      <div className="h-[var(--hero-height)] absolute inset-0 -z-10">
        <Image
          src="/home-header.png"
          alt="home header"
          layout="fill"
          objectFit="cover"
          about="home header image"
        />
      </div>

      <section className="flex justify-center flex-col items-center text-center h-[calc(var(--section-height))]">
        <h1 className="text-3xl font-bold leading-[67px] md:text-5xl">
          Empowering Operators Worldwide
        </h1>
        <p className="text-lg font-light leading-10 mt-10 md:text-2xl md:leading-10 ">
          Operating alongside our clients businesses, addressing their most
          complex, mission-critical issues through innovative solutions that
          improve their performance and create lasting value across enterprises.
        </p>
        <Button size="xxl" className="mt-7" asChild>
          <Link href="#services">Our Services</Link>
        </Button>

        <div className="flex justify-center items-center gap-7 mt-[1.875rem]">
          <Link
            target="_blank"
            href="https://www.facebook.com/FoothillTechnologySolutions"
          >
            <Image src="/facebook.svg" alt="facebook" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/foothill-technology-solutions-llc./"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCzPMvg55AtrugaIamuTslUA"
          >
            <Image src="/youtube.svg" alt="youtube" width={30} height={30} />
          </Link>
        </div>

        <Link className="relative animate-bounce mt-7" href="#services">
          <Image
            src="/arrow-down.svg"
            alt="arrow down"
            width={24}
            height={24}
          />
        </Link>
      </section>

      <section
        id="services"
        className="flex justify-center flex-col items-center text-center min-h-screen bg-gray-600 py-20"
      >
        <h2 className="text-4xl font-bold leading-[54px]">Our Services</h2>
        <p className="my-12 text-2xl leading-10 font-light">
          Our dedicated engineers serve clients worldwide with our comprehensive
          software solutions.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <ServiceCard
            title="Software R&D"
            description="By translating your ideas into a concrete plan for creating an end product, we help you keep up with market trends and gain a competitive edge in your field."
            icon={{
              color: "#70ce88",
              name: "/software-rd.svg",
            }}
          />
          <ServiceCard
            title="Web Development"
            description="We have the skills and experience to build a website that will show off your business to its best advantage. Our comprehensive service covers engineering, graphic design, servers, network security, content development and more. Front end, back end and full stack – we’ve got it all covered."
            icon={{
              color: "#717cff",
              name: "/web-development.svg",
            }}
          />
          <ServiceCard
            title="Customer Support"
            description="We deliver a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product."
            icon={{
              color: "#ffbc4f",
              name: "/customer-support.svg",
            }}
          />

          <ServiceCard
            title="Mobile Development"
            description="Our goal is to deliver a high-quality product that works exactly as you intended. Developing mobile apps for B2B and B2C, iOS and Android, hybrid and cross-platform – we’ve got everything covered."
            icon={{
              color: "#ed93ff",
              name: "/mobile-development.svg",
            }}
          />

          <ServiceCard
            title="Quality Assurance"
            description="As part of the development process, we carry out stringent quality assurance (QA), both automated and manual, to verify that the end product meets your requirements and expectations. Any outstanding issues that are identified are then resolved, so that you can launch your new product with absolute confidence."
            icon={{
              color: "#fa706c",
              name: "/quality-assurance.svg",
            }}
          />

          <ServiceCard
            title="Microsoft Cloud Services"
            description="We use the Microsoft cloud services to build, deploy and manage services and applications through the network worldwide and are managed by the Data-centers of Microsoft."
            icon={{
              color: "#4a90e2",
              name: "/microsoft-cloud-services.svg",
            }}
          />
        </div>
      </section>

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

      <section className="text-center pt-28">
        <h2 className="text-4xl font-bold leading-[54px] text-center mb-6">
          Testimonials
        </h2>

        <p className="text-lg font-light leading-10 mt-10 md:text-2xl md:leading-10 ">
          Here’s what our clients say about our work.
        </p>

        <Carousel className="w-[100%] pt-28">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 flex justify-center items-center">
              <TestimonialCard
                avatar={{
                  description: "CEO, Restaurant 365",
                  name: "Morgan Harris",
                  src: "/customer-support.svg",
                }}
                description="
      Foothill Technology Solutions has been an invaluable partner in helping us develop and maintain our software. They are a team of dedicated professionals who are always available to help us with any issues that may arise. We highly recommend them to anyone looking for a reliable and trustworthy software development company."
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 flex justify-center items-center">
              <TestimonialCard
                avatar={{
                  description: "CEO, Restaurant 365",
                  name: "Morgan Harris",
                  src: "/customer-support.svg",
                }}
                description="
      Foothill Technology Solutions has been an invaluable partner in helping us develop and maintain our software. They are a team of dedicated professionals who are always available to help us with any issues that may arise. We highly recommend them to anyone looking for a reliable and trustworthy software development company."
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 flex justify-center items-center">
              <TestimonialCard
                avatar={{
                  description: "CEO, Restaurant 365",
                  name: "Morgan Harris",
                  src: "/customer-support.svg",
                }}
                description="
      Foothill Technology Solutions has been an invaluable partner in helping us develop and maintain our software. They are a team of dedicated professionals who are always available to help us with any issues that may arise. We highly recommend them to anyone looking for a reliable and trustworthy software development company."
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 flex justify-center items-center">
              <TestimonialCard
                avatar={{
                  description: "CEO, Restaurant 365",
                  name: "Morgan Harris",
                  src: "/customer-support.svg",
                }}
                description="
      Foothill Technology Solutions has been an invaluable partner in helping us develop and maintain our software. They are a team of dedicated professionals who are always available to help us with any issues that may arise. We highly recommend them to anyone looking for a reliable and trustworthy software development company."
              />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselNext />
            <CarouselPrevious />
          </div>
          <CarouselDots className="mt-8" />
        </Carousel>
      </section>
    </>
  );
}
