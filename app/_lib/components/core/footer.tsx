"use client";
import Link from "next/link";
import { GlobalConnectionQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

type FooterProps = {
  data: GlobalConnectionQuery;
  variables: {};
  query: string;
} & React.HTMLAttributes<HTMLElement>;

export function Footer({ data, variables, query, ...props }: FooterProps) {
  const {
    data: { globalConnection },
  } = useTina({
    data,
    variables,
    query,
  });

  const footer = globalConnection?.edges?.[0]?.node?.footer;

  if (!footer) return null;

  type Social = {
    name: string;
    url: string;
  };

  //TODO: remove this when we have a better way to ignore fields
  const ignoredKeys = ["__typename", "_tina_metadata", "_content_source"];

  const socials: Social[] = Object.entries(footer.social as object)
    .filter(([key]) => !ignoredKeys.includes(key))
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
              data-tina-field={tinaField(footer, "social")}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
