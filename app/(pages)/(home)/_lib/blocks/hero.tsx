import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui";

export function Hero() {
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
    </>
  );
}
