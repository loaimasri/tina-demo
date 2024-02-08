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
import { PageBlocksTestimonials } from "@/tina/__generated__/types";

type TestimonialsProps = PageBlocksTestimonials;

export function Testimonials({
  title,
  subtitle,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="text-center pt-28">
      <h2 className="text-4xl font-bold leading-[54px] text-center mb-6">
        {title}
      </h2>

      <p className="text-lg font-light leading-10 mt-10 md:text-2xl md:leading-10 ">
        {subtitle}
      </p>

      <Carousel className="w-[100%] pt-28">
        <CarouselContent>
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 flex justify-center items-center"
              >
                <TestimonialCard
                  avatar={{
                    title: testimonial?.author?.title || "",
                    name: testimonial?.author?.name || "",
                    src: testimonial?.author?.avatar || "",
                  }}
                  description={testimonial?.quote || ""}
                />
              </CarouselItem>
            ))}
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
