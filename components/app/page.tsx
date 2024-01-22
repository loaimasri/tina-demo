"use client";
import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

export function PageComponent(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <>
      <h1>{data?.page.title}</h1>
    </>
  );
}
