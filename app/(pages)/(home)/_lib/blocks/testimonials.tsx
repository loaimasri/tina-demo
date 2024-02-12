import { cn } from "@/app/_lib/utils/cn";
import type { PageBlocksTestimonials } from "@/tina/__generated__/types";
import { Carousel } from "@components/ui/carousel";
import TestimonialCard from "../components/testimonial-card";

type TestimonialsProps = PageBlocksTestimonials;

export function Testimonials({
  title,
  subtitle,
  testimonials,
  background: backgroundColor,
}: TestimonialsProps): JSX.Element {
  return (
    <section className={cn("text-center pt-28", backgroundColor?.[0])}>
      <h2 className="mb-6 text-center text-4xl font-bold leading-[54px]">
        {title}
      </h2>

      <p className="mt-10 text-lg font-light leading-10 md:text-2xl md:leading-10 ">
        {subtitle}
      </p>

      <Carousel
        className="w-[100%] pb-8 pt-28"
        opts={{
          loop: true,
        }}
      >
        <Carousel.Content>
          {testimonials?.map((testimonial) => (
            <Carousel.Item
              key={testimonial?.__typename}
              className="flex items-center justify-center md:basis-1/2"
            >
              <TestimonialCard
                avatar={{
                  title: testimonial?.author?.title ?? "",
                  name: testimonial?.author?.name ?? "",
                  src: testimonial?.author?.avatar ?? "",
                }}
                description={testimonial?.quote ?? ""}
              />
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <div className="hidden md:block">
          <Carousel.Next />
        </div>
        <Carousel.Dots className="mt-8" />
      </Carousel>
    </section>
  );
}
