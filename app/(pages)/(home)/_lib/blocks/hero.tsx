import type { PageBlocksHero } from "@/tina/__generated__/types";
import { Button } from "@components/ui";
import Image from "next/image";
import Link from "next/link";

type HeroProps = PageBlocksHero;

export function Hero({
  image,
  socials,
  subtitle,
  title,
  cta,
}: HeroProps): JSX.Element {
  return (
    <div className="text-white">
      <div className="absolute inset-0 -z-10 h-[calc(var(--hero-height))] before:absolute before:inset-0 before:z-10 before:block before:bg-gradient-to-t before:from-black before:to-transparent">
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

      <section className="flex h-[calc(var(--section-height))] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold leading-[67px] md:text-5xl">
          {title}
        </h1>
        <p className="mt-10 text-lg font-light leading-10 md:text-2xl md:leading-10 ">
          {subtitle}
        </p>
        <Button
          size="xxl"
          className="mt-7 bg-white text-[#439dd5] hover:bg-white hover:text-[#439dd5]  hover:opacity-90"
          asChild
        >
          {cta && (
            <Link href={cta.link ?? "/"}>{cta.label ?? "Learn More"}</Link>
          )}
        </Button>

        <div className="mt-[1.875rem] flex items-center justify-center gap-7">
          {socials?.map((social) => (
            <Link
              key={social?.__typename}
              href={social?.link ?? ""}
              target="_blank"
            >
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
        <Link className="relative mt-7 animate-bounce" href="#services">
          <Image
            src="/arrow-down.svg"
            alt="arrow down"
            width={24}
            height={24}
          />
        </Link>
      </section>
    </div>
  );
}
