"use client";
import { type GlobalConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";

type FooterProps = {
  data: GlobalConnectionQuery;
  variables: object;
  query: string;
} & React.HTMLAttributes<HTMLElement>;

export function Footer({
  data,
  variables,
  query,
  ...props
}: FooterProps): JSX.Element | null {
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
    .map(([key, value]: [string, string]) => ({
      name: key,
      url: value,
    }));

  return (
    <footer {...props}>
      <div className="py-8 container flex justify-between">
        <div>
          {socials.map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              className="mr-[4px] capitalize hover:underline"
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
