"use client";
import React from "react";
import { GlobalQuery } from "@/tina/__generated__/types";
import { Icon } from "../../my-tina-app/components/util/icon";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { tinaField } from "tinacms/dist/react";
type HeaderProps = {
  data: GlobalQuery["global"]["header"];
  theme: GlobalQuery["global"]["theme"];
} & React.HTMLAttributes<HTMLElement>;

function Header({ data, theme, ...props }: HeaderProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  if (!data) return null;

  return (
    <header {...props}>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Icon
            data={data.logo}
            className="w-8 h-8"
            tinaField={tinaField(data, "logo")}
          />
        </Link>
        <h1
          className="text-lg font-bold"
          data-tina-field={tinaField(data, "name")}
        >
          {data.name}
        </h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            {data.nav &&
              data.nav.map((link, index) => (
                <li key={index}>
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
