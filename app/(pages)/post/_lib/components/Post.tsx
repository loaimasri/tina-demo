"use client";
import { PostQuery } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function Post(props: {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) {
  //const { data } = useTina(props);
 
  //const post = data?.post;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1>hello world</h1>
    </div>
  );
}
