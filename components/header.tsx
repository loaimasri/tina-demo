"use client";
import React from "react";
import {
  GlobalConnection,
  GlobalConnectionQuery,
  GlobalQuery,
} from "@/tina/__generated__/types";
import { Icon } from "@/components/util/icon";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";
type HeaderProps = {
  data: GlobalConnectionQuery;
  variables: {};
  query: string;
} & React.HTMLAttributes<HTMLElement>;

function Header({ data, variables, query, ...props }: HeaderProps) {
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
  const theme = edges?.[0]?.node?.theme;

  if (!header || !theme) return null;

  return (
    <header {...props}>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Icon
            data={header?.logo}
            className="w-8 h-8"
            tinaField={tinaField(header, "logo")}
          />
        </Link>
        <h1
          className="text-lg font-bold"
          data-tina-field={tinaField(header, "name")}
        >
          {header.name}
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            {header.nav &&
              header.nav.map((link, index) => (
                <li key={index} data-tina-field={tinaField(header)}>
                  <Link
                    href={link?.href || "/"}
                    className={`${
                      isActive(link?.href || "/")
                        ? "text-primary"
                        : "text-gray-500"
                    }  hover:underline`}
                    color="text-primary"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}

            <li>
              <ModeToggle data={theme} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
