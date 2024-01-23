import React from "react";
import Link from "next/link";
import { GlobalQuery } from "@/tina/__generated__/types";

type FooterProps = {
  data: GlobalQuery["global"]["footer"];
} & React.HTMLAttributes<HTMLElement>;

function Footer({ data, ...props }: FooterProps) {
  if (!data) return null;

  type Social = {
    name: string;
    url: string;
  };

  const socials: Social[] = Object.entries(data.social as object)
    .filter(([key, _]) => key !== "__typename")
    .map(([key, value]) => ({
      name: key,
      url: value,
    }));

  return (
    <footer {...props}>
      <div
        className="flex justify-between 
        container py-8
      "
      >
        <div>
          {socials.map(({ name, url }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="mr-4 hover:underline capitalize"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
