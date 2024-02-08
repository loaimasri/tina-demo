import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui";
import React from "react";
import TestimonialCard from "../components/testimonial-card";

export function Testimonials() {
  return (
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
  );
}
