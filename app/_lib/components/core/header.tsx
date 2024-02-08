"use client";
import { GlobalConnectionQuery } from "@/tina/__generated__/types";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { cn } from "@utils/cn";

type HeaderProps = {
  data: GlobalConnectionQuery;
  variables: {};
  query: string;
} & React.HTMLAttributes<HTMLElement>;

export function Header({ data, variables, query, ...props }: HeaderProps) {
  const { data: user } = useSession();

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
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
        isMain ? "text-white" : "text-black shadow-sm"
      )}
      {...props}
    >
      <div className="flex items-center">
        <Link href="/" data-tina-field={tinaField(header, "logo")}>
          <Image
            src={(isMain ? header.logo?.main : header.logo?.dark) || ""}
            alt="logo"
            width="200"
            height="30"
            className="h-7"
          />
        </Link>

        <nav className="ml-auto">
          <ul className="flex gap-16 text-lg">
            {header.nav &&
              header.nav.map((link, index) => (
                <li key={index} data-tina-field={tinaField(header)}>
                  <Link
                    href={link?.href || "/"}
                    className={cn(
                      "relative font-light ",
                      isActive(link?.href || "/") &&
                        "font-semibold after:block after:absolute after:w-[40%] after:h-1 after:bottom-[-13px] after:rounded-full after:hover:w-[100%] after:hover:transition-all after:ease-in-out after:duration-200",
                      isMain ? "after:bg-white" : "after:bg-[#348dcd]"
                    )}
                    color="text-primary"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
