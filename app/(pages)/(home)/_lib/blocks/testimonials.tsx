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
    <section className={cn("text-center pt-[7rem]", backgroundColor?.[0])}>
      <h2 className="mb-[1.5rem] text-center text-[2.25rem] font-bold leading-[54px]">
        {title}
      </h2>

      <p className="mt-[2.5rem] text-[1.125rem] font-light leading-[2.5rem] md:text-[1.5rem] md:leading-[2.5rem] ">
        {subtitle}
      </p>

      <Carousel
        className="w-[100%] pb-[2rem] pt-[7rem]"
        opts={{
          loop: true,
        }}
      >
        <Carousel.Content>
          {testimonials?.map((testimonial, i) => (
            <Carousel.Item
              key={`${testimonial?.__typename + String(i)}`}
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
        <Carousel.Dots className="mt-[2rem]" />
      </Carousel>
    </section>
  );
}
