"use client";
import { PageQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

export function PageComponent(props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  const { data } = useTina(props);

  const page = data?.page;

  return (
    <>
      <h1 data-tina-field={tinaField(page, "title")}>{page.title}</h1>
    </>
  );
}
