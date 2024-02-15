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
      <div className="absolute inset-[0] -z-10 h-[calc(var(--hero-height))] before:absolute before:inset-[0] before:z-10 before:block before:bg-gradient-to-t before:from-black before:to-transparent">
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
        <h1 className="text-[1.875rem] font-bold leading-[67px] md:text-[3rem]">
          {title}
        </h1>
        <p className="mt-[2.5rem] text-[1.125rem] font-light leading-[2.5rem] md:text-[1.5rem] md:leading-[2.5rem]">
          {subtitle}
        </p>
        <Button
          size="xxxl"
          className="mt-[1.75rem] bg-white text-[#439dd5] hover:bg-white hover:text-[#439dd5]  hover:opacity-90"
          asChild
        >
          {cta && (
            <Link href={cta.link ?? "/"}>{cta.label ?? "Learn More"}</Link>
          )}
        </Button>

        <div className="mt-[1.875rem] flex items-center justify-center gap-[1.75rem]">
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
        <Link className="relative mt-[1.75rem] animate-bounce" href="#services">
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
