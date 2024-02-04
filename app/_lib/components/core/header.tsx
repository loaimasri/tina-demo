"use client";
import { GlobalConnectionQuery } from "@/tina/__generated__/types";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Icon } from "./icon";

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
            {user?.user?.image && (
              <li>
                <Image
                  src={user?.user?.image}
                  alt="user avatar"
                  width="40"
                  height="40"
                  className="rounded-full"
                />
              </li>
            )}

            <li>
              <Link
                href="/auth"
                className={`${
                  isActive("/auth") ? "text-primary" : "text-gray-500"
                }  hover:underline`}
              >
                {user ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
