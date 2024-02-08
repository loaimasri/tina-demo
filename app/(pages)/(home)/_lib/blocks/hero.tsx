import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui";
import { PageBlocksHero } from "@/tina/__generated__/types";

type HeroProps = PageBlocksHero;

export function Hero({ image, socials, subtitle, title, cta }: HeroProps) {
  return (
    <>
      <div className="h-[var(--hero-height)] absolute inset-0 -z-10 before:block before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-transparent">
        {image && (
          <Image
            src={image}
            alt="home header"
            layout="fill"
            objectFit="cover"
            about="home header image"
            objectPosition="top center"
          />
        )}
      </div>

      <section className="flex justify-center flex-col items-center text-center h-[calc(var(--section-height))]">
        <h1 className="text-3xl font-bold leading-[67px] md:text-5xl">
          {title}
        </h1>
        <p className="text-lg font-light leading-10 mt-10 md:text-2xl md:leading-10 ">
          {subtitle}
        </p>
        <Button size="xxl" className="mt-7" asChild>
          {cta && (
            <Link href={cta.link || "/"}>{cta.label || "Learn More"}</Link>
          )}
        </Button>

        <div className="flex justify-center items-center gap-7 mt-[1.875rem]">
          {socials?.map((social, index) => (
            <Link key={index} href={social?.link || ""} target="_blank">
              {social?.icon && social.label && (
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={30}
                  height={30}
                />
              )}
            </Link>
          ))}
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
    </>
  );
}
