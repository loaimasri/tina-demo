"use client";

import { cn } from "@utils/cn";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";

import type { GlobalConnectionQuery } from "@/tina/__generated__/types";
import { useState } from "react";
import { Button } from "../ui";

type HeaderProps = {
  data: GlobalConnectionQuery;
  variables: object;
  query: string;
} & React.HTMLAttributes<HTMLElement>;

export function Header({
  data,
  variables,
  query,
  ...props
}: HeaderProps): JSX.Element | null {
  const { data: user } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href: string): boolean => pathname === href;
  const {
    data: {
      globalConnection: { edges },
    },
  } = useTina({
    data,
    variables,
    query,
  });

  const header = edges?.[0]?.node?.header;

  if (!header) return null;

  

  const isMain = pathname === "/";

  return (
    <header
      className={cn(
        "py-[var(--header-padding)] ",
        props.className,
        isMain ? "text-white" : "text-black shadow-sm",
        isMenuOpen ? "text-black" : "",
      )}
      {...props}
    >
      <div className="flex items-center">
        <Link href="/" data-tina-field={tinaField(header, "logo")}>
          <Image
            src={(isMain ? header.logo?.main : header.logo?.dark) ?? ""}
            alt="logo"
            width="200"
            height="30"
            className="h-7"
          />
        </Link>

        <nav
          className="ml-auto sm:hidden md:block"
          data-tina-field={tinaField(header)}
        >
          <ul
            className={cn(
              "flex gap-16 text-lg transition-all ease-in-out duration-200",
              isMenuOpen
                ? "flex flex-col bg-secondary absolute inset-0 z-10 mt-[var(--header-height)] p-4 rounded-lg"
                : "hidden md:flex",
            )}
          >
            {header.nav?.map((link) => (
              <li key={link?.__typename} data-tina-field={tinaField(header)}>
                <Link
                  href={link?.href ?? "/"}
                  className={cn(
                    "relative font-light ",
                    isActive(link?.href ?? "/") &&
                      "font-semibold after:block after:absolute after:w-[40%] after:h-1 after:bottom-[-13px] after:rounded-full after:hover:w-[100%] after:hover:transition-all after:ease-in-out after:duration-200",
                    isMain ? "after:bg-white" : "after:bg-[#348dcd]",
                    isMenuOpen ? "after:bg-black" : "",
                  )}
                  color="text-primary"
                >
                  {link?.label}
                </Link>
              </li>
            ))}
            <li>
              <div className="flex gap-2">
                {user ? (
                  <Button
                    variant="ghost"
                    className="hidden md:block"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button className="hidden md:block" onClick={() => signIn()}>
                    Sign In
                  </Button>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <Button
          variant="ghost"
          className="z-20 ml-auto block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <div>Close</div> : <div>Open</div>}
        </Button>
      </div>
    </header>
  );
}
